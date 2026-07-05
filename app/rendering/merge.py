import subprocess
import json
import os
import tempfile


class VideoMerger:

    def _has_audio(self, video_path: str) -> bool:

        result = subprocess.run(

            [
                "ffprobe",
                "-v", "error",
                "-select_streams", "a",
                "-show_entries", "stream=index",
                "-of", "json",
                video_path,
            ],

            capture_output=True,
            text=True,

        )

        data = json.loads(result.stdout)

        return len(data.get("streams", [])) > 0

    def merge(

        self,

        intro_video: str,

        main_video: str,

        output_video: str

    ):

        print("Merging intro with main video...")

        temp_intro = None

        if not self._has_audio(intro_video):

            print("Intro has no audio. Adding silent audio...")

            temp_intro = tempfile.NamedTemporaryFile(
                suffix=".mp4",
                delete=False,
            ).name

            subprocess.run(

                [

                    "ffmpeg",
                    "-y",

                    "-i", intro_video,

                    "-f", "lavfi",
                    "-i", "anullsrc=channel_layout=mono:sample_rate=8000",

                    "-shortest",

                    "-c:v", "copy",
                    "-c:a", "aac",

                    temp_intro,

                ],

                check=True,

            )

            intro_video = temp_intro

        cmd = [

            "ffmpeg",
            "-y",

            "-i", intro_video,
            "-i", main_video,

            "-filter_complex",

            (
                "[0:v]"
                "scale=720:1280:force_original_aspect_ratio=decrease,"
                "pad=720:1280:(ow-iw)/2:(oh-ih)/2:black,"
                "fps=30000/1001,"
                "setsar=1,"
                "format=yuv420p[v0];"

                "[0:a]"
                "aresample=8000,"
                "aformat=sample_fmts=fltp:channel_layouts=mono[a0];"

                "[1:v]"
                "scale=720:1280,"
                "fps=30000/1001,"
                "setsar=1,"
                "format=yuv420p[v1];"

                "[1:a]"
                "aresample=8000,"
                "aformat=sample_fmts=fltp:channel_layouts=mono[a1];"

                "[v0][a0][v1][a1]"
                "concat=n=2:v=1:a=1[outv][outa]"
            ),

            "-map", "[outv]",
            "-map", "[outa]",

            "-c:v", "libx264",
            "-preset", "fast",
            "-crf", "18",
            "-pix_fmt", "yuv420p",

            "-c:a", "aac",
            "-ar", "8000",
            "-ac", "1",

            "-movflags", "+faststart",

            output_video

        ]

        subprocess.run(

            cmd,

            check=True

        )

        if temp_intro:

            os.remove(temp_intro)

        print("\n✅ Final video created!")

        print(output_video)