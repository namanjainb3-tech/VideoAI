from pathlib import Path

from app.models import (
    ProcessingResult,
)

import shutil

from app.services import (
    BackgroundBlurService,
    WhisperService,
    SubtitleService,
)

from app.rendering import (
    VideoRenderer,
    VideoMerger,
)

from app.utils import JobManager

from threading import Thread

from app.models import JobSession

class VideoProcessingEngine:

    def __init__(

        self,

        job_manager: JobManager,

        job_store,

        blur_service: BackgroundBlurService,

        whisper_service: WhisperService,

        subtitle_service: SubtitleService,

        renderer: VideoRenderer,

        video_merger: VideoMerger

    ):

        self.job_manager = job_manager

        self.job_store = job_store

        self.blur_service = blur_service

        self.whisper_service = whisper_service

        self.subtitle_service = subtitle_service
    
        self.renderer = renderer
        self.video_merger = video_merger

    def start(
        self,
        uploaded_video,
        intro_video=None,
    ):

        paths = self.job_manager.create_job()

        self._save_uploaded_video(
            uploaded_video,
            paths.input,
        )

        if intro_video:

            self._save_uploaded_video(
                intro_video,
                paths.intro,
            )

        job = JobSession(

            job_id=paths.job_id,

            status="PROCESSING",

            stage="UPLOADING",

            progress=0,

        )

        self.job_store.create(job)

        Thread(

            target=self._run_pipeline,

            args=(job, paths),

            daemon=True,

        ).start()

        return job

    def _run_pipeline(
        self,
        job: JobSession,
        paths,
    ):
        
        try:

            print()

            print("=" * 60)
            print("JOB CREATED")
            print("=" * 60)

            print(paths.job_dir)

            print()

            self.job_store.update(
                job.job_id,
                stage="BLURRING",
                progress=20,
            )

            self.blur_service.blur(

                str(paths.input),

                str(paths.blurred)

            )

            self.job_store.update(
                job.job_id,
                stage="TRANSCRIBING",
                progress=40,
            )

            self.whisper_service.transcribe(

                str(paths.blurred),

                str(paths.whisper)

            )

            self.job_store.update(
                job.job_id,
                stage="PROCESSING_SUBTITLES",
                progress=60,
            )

            pipeline = self.subtitle_service.process(

                str(paths.whisper)

            )

            # ----------------------------------
            # Auto-render (no review)
            # ----------------------------------

            if not pipeline.review_groups:

                print()

                print("=" * 60)
                print("NO REVIEW REQUIRED")
                print("=" * 60)

                self.job_store.update(
                    job.job_id,
                    stage="RENDERING",
                    progress=80,
                )

                self.renderer.render(

                    str(paths.blurred),

                    str(paths.captioned),

                    pipeline.renderable_captions

                )

                if paths.intro.exists():

                    print("Merging intro with main video...")

                    self.video_merger.merge(

                        str(paths.intro),

                        str(paths.captioned),

                        str(paths.final)

                    )

                else:

                    print("No intro uploaded. Using captioned video as final output.")

                    shutil.copy2(

                        paths.captioned,

                        paths.final

                    )

            processing_result = ProcessingResult(
                paths=paths,
                pipeline=pipeline,
            )

            if pipeline.review_groups:

                self.job_store.update(
                    job.job_id,
                    processing_result=processing_result,
                    review_groups=pipeline.review_groups,
                    status="REVIEW_REQUIRED",
                    stage="WAITING_FOR_REVIEW",
                    progress=80,
                )

            else:

                self.job_store.update(
                    job.job_id,
                    processing_result=processing_result,
                    review_groups=[],
                    download_url=f"/download/{job.job_id}",
                    status="COMPLETED",
                    stage="FINISHED",
                    progress=100,
                )

        except Exception as e:

            import traceback

            traceback.print_exc()

            self.job_store.update(
                job.job_id,
                status="FAILED",
                stage="FAILED",
                error=str(e),
            )

    def process(
        self,
        uploaded_video,
        intro_video=None
    ) -> ProcessingResult:

        paths = self.job_manager.create_job()

        print()

        print("=" * 60)
        print("JOB CREATED")
        print("=" * 60)

        print(paths.job_dir)

        print()

        self._save_uploaded_video(

            uploaded_video,

            paths.input

        )

        if intro_video:

            self._save_uploaded_video(

                intro_video,

                paths.intro

            )

        self.blur_service.blur(

            str(paths.input),

            str(paths.blurred)

        )

        self.whisper_service.transcribe(

            str(paths.blurred),

            str(paths.whisper)

        )

        pipeline = self.subtitle_service.process(

            str(paths.whisper)

        )

        # ----------------------------------
        # Auto-render (no review)
        # ----------------------------------

        if not pipeline.review_groups:

            print()

            print("=" * 60)
            print("NO REVIEW REQUIRED")
            print("=" * 60)

            self.renderer.render(

                str(paths.blurred),

                str(paths.captioned),

                pipeline.renderable_captions

            )

            if paths.intro.exists():

                print("Merging intro with main video...")

                self.video_merger.merge(

                    str(paths.intro),

                    str(paths.captioned),

                    str(paths.final)

                )

            else:

                print("No intro uploaded. Using captioned video as final output.")

                shutil.copy2(

                    paths.captioned,

                    paths.final

                )

        return ProcessingResult(

            paths=paths,

            pipeline=pipeline

        )

    def _save_uploaded_video(

        self,

        source,

        destination: Path

    ) -> None:

        print(

            "Saving uploaded video..."

        )

        if hasattr(source, "save"):

            source.save(destination)

        else:

            shutil.copy2(
                source,
                destination
            )

