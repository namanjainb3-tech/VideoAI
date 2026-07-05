from pathlib import Path
import cv2
import torch
import subprocess
import numpy as np

from tqdm import tqdm

from app.config import DEVICE
from app.models.rvm import MattingNetwork


class BackgroundBlurService:

    def __init__(

        self,

        checkpoint_path: str,

        blur_strength: int = 61,

        downsample_ratio: float = 0.25

    ):

        self.checkpoint_path = checkpoint_path
        self.blur_strength = blur_strength
        self.downsample_ratio = downsample_ratio
        self.model = None

    def blur(

        self,

        input_video: str,

        output_video: str

    ) -> None:

        if self.model is None:

            self._load_model()

        temp_video = f"{output_video}.temp.mp4"

        self._process_video(

            input_video,

            temp_video

        )

        self._attach_audio(

            temp_video,

            input_video,

            output_video

        )

        Path(temp_video).unlink(missing_ok=True)

        print("\n✅ Background blur completed.")

    # ==========================================================
    # Load RVM
    # ==========================================================

    def _load_model(

        self

    ) -> None:

        print("=" * 60)
        print("Loading RVM Model...")
        print("=" * 60)

        state_dict = torch.load(

            self.checkpoint_path,

            map_location=DEVICE

        )

        self.model = MattingNetwork(

            "mobilenetv3"

        )

        self.model.load_state_dict(

            state_dict

        )

        self.model.eval()

        self.model.to(DEVICE)

    # ==========================================================
    # Process Entire Video
    # ==========================================================

    def _process_video(

        self,

        input_video: str,

        temp_video: str

    ) -> None:

        cap = cv2.VideoCapture(input_video)

        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        fps = cap.get(cv2.CAP_PROP_FPS)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

        print(f"Resolution : {width} x {height}")
        print(f"FPS        : {fps:.2f}")
        print(f"Frames     : {total_frames}")

        writer = cv2.VideoWriter(

            temp_video,

            cv2.VideoWriter_fourcc(*"mp4v"),

            fps,

            (width, height)

        )

        rec = [None] * 4

        print("\nBlurring background...\n")

        with tqdm(

            total=total_frames,

            desc="Background Blur"

        ) as pbar:

            while True:

                ret, frame = cap.read()

                if not ret:

                    break

                output_frame, rec = self._process_frame(

                    frame,

                    rec

                )

                writer.write(output_frame)

                pbar.update(1)

        cap.release()

        writer.release()

    # ==========================================================
    # Process Single Frame
    # ==========================================================

    def _process_frame(

        self,

        frame,

        rec

    ):

        rgb = cv2.cvtColor(

            frame,

            cv2.COLOR_BGR2RGB

        )

        tensor = (

            torch.from_numpy(rgb)

            .permute(2, 0, 1)

            .unsqueeze(0)

            .float()

            / 255.0

        ).to(DEVICE)

        with torch.no_grad():

            _, alpha, *rec = self.model(

                tensor,

                *rec,

                self.downsample_ratio

            )

        output = self._composite_frame(

            rgb,

            alpha

        )

        return output, rec

    # ==========================================================
    # Composite Foreground + Blurred Background
    # ==========================================================

    def _composite_frame(

        self,

        rgb,

        alpha

    ):

        alpha = alpha[0, 0].cpu().numpy()

        alpha = cv2.GaussianBlur(

            alpha,

            (11, 11),

            0

        )

        alpha = np.repeat(

            alpha[:, :, np.newaxis],

            3,

            axis=2

        )

        original = rgb.astype(

            np.float32

        ) / 255.0

        blurred = cv2.GaussianBlur(

            original,

            (

                self.blur_strength,

                self.blur_strength

            ),

            0

        )

        composite = (

            original * alpha

            +

            blurred * (1.0 - alpha)

        )

        composite = np.clip(

            composite * 255,

            0,

            255

        ).astype(np.uint8)

        return cv2.cvtColor(

            composite,

            cv2.COLOR_RGB2BGR

        )

    # ==========================================================
    # Restore Original Audio
    # ==========================================================

    def _attach_audio(

        self,

        temp_video: str,

        input_video: str,

        output_video: str

    ) -> None:

        print("\nAdding original audio...")

        subprocess.run(

            [

                "ffmpeg",

                "-y",

                "-i",

                temp_video,

                "-i",

                input_video,

                "-map",

                "0:v",

                "-map",

                "1:a?",

                "-c:v",

                "copy",

                "-c:a",

                "aac",

                "-shortest",

                output_video

            ],

            check=True,

            stdout=subprocess.DEVNULL,

            stderr=subprocess.DEVNULL

        )