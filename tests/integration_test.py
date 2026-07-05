from pathlib import Path

from app.factory import (
    video_processing_engine,
)


INPUT_VIDEO = Path("video.mp4")


def main():

    print("=" * 60)
    print("VIDEO AUTOMATION INTEGRATION TEST")
    print("=" * 60)

    if not INPUT_VIDEO.exists():

        raise FileNotFoundError(

            f"{INPUT_VIDEO} not found."

        )

    print()

    print("Input Video")

    print(INPUT_VIDEO)

    print()

    result = video_processing_engine.process(

        str(INPUT_VIDEO)

    )

    print()

    print("=" * 60)
    print("PROCESSING COMPLETE")
    print("=" * 60)

    print()

    print("Job Directory:")

    print(result.paths.job_dir)

    print()

    print("Blurred Video:")

    print(result.paths.blurred)

    print()

    print("Whisper JSON:")

    print(result.paths.whisper)

    print()

    print("Review Groups:")

    print(len(result.pipeline.review_groups))

    print()

    print("Renderable Captions:")

    print(len(result.pipeline.renderable_captions))

    print()

    print("Integration test passed ✅")


if __name__ == "__main__":

    main()