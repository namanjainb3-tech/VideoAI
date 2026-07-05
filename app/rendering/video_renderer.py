import os
import cv2
import subprocess

from tqdm import tqdm

from app.rendering import (
    CaptionTheme,
    CaptionRenderer,
)

from app.rendering.layout import (
    LayoutEngine,
)

from app.models import (
    RenderableCaption,
)

class VideoRenderer:

    def __init__(

        self,

        font_path: str,

        theme: CaptionTheme

    ):

        self.font_path = font_path

        self.theme = theme

    def render(

        self,

        input_video: str,

        output_video: str,

        captions: list[RenderableCaption]

    ):

        context = self._initialize(

            input_video,

            captions

        )

        self._render_frames(

            context

        )

        self._attach_audio(

            input_video,

            context["temp_video"],

            output_video

        )

        os.remove(

            context["temp_video"]

        )

        print(

            "\n✅ Rendering completed."

        )

    def _initialize(

        self,

        input_video,

        captions

    ):

        cap = cv2.VideoCapture(

            input_video

        )

        width = int(

            cap.get(

                cv2.CAP_PROP_FRAME_WIDTH

            )

        )

        height = int(

            cap.get(

                cv2.CAP_PROP_FRAME_HEIGHT

            )

        )

        fps = cap.get(

            cv2.CAP_PROP_FPS

        )

        total_frames = int(

            cap.get(

                cv2.CAP_PROP_FRAME_COUNT

            )

        )

        temp_video = "temp_render.mp4"

        writer = cv2.VideoWriter(

            temp_video,

            cv2.VideoWriter_fourcc(*"mp4v"),

            fps,

            (width, height)

        )

        renderer = CaptionRenderer(

            width,

            height,

            self.font_path,

            self.theme

        )

        layout_engine = LayoutEngine(

            width,

            height,

            self.font_path,

            self.theme

        )

        layouts = [

            layout_engine.build(

                caption

            )

            for caption in captions

        ]

        return {

            "cap": cap,

            "writer": writer,

            "renderer": renderer,

            "layouts": layouts,

            "captions": captions,

            "fps": fps,

            "total_frames": total_frames,

            "temp_video": temp_video

        }
    
    def _render_frames(

        self,

        context

    ):

        print(

            f"Rendering {context['total_frames']} frames..."

        )

        with tqdm(

            total=context["total_frames"]

        ) as pbar:

            frame_number = 0

            current_caption = 0

            while True:

                ret, frame = context["cap"].read()

                if not ret:

                    break

                current_time = (

                    frame_number

                    / context["fps"]

                )

                current_caption = self._update_current_caption(

                    current_caption,

                    current_time,

                    context["captions"]

                )

                frame = self._draw_current_caption(

                    frame,

                    current_caption,

                    current_time,

                    context

                )

                context["writer"].write(

                    frame

                )

                frame_number += 1

                pbar.update(1)

        context["cap"].release()

        context["writer"].release()

    def _update_current_caption(

        self,

        current_caption,

        current_time,

        captions

    ):

        while (

            current_caption < len(captions) - 1

            and

            current_time > captions[current_caption].end

        ):

            current_caption += 1

        return current_caption
    
    def _draw_current_caption(

        self,

        frame,

        current_caption,

        current_time,

        context

    ):

        captions = context["captions"]

        layouts = context["layouts"]

        if (

            captions[current_caption].start

            <= current_time

            <= captions[current_caption].end

        ):

            frame = context["renderer"].draw(

                frame,

                layouts[current_caption],

                current_time

            )

        return frame
    
    def _attach_audio(

        self,

        input_video,

        temp_video,

        output_video

    ):

        print(

            "Adding original audio..."

        )

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

            ]

        )