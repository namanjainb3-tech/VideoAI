from app.models import (
    ProcessingResult,
)

from pathlib import Path
import shutil

from app.review import (
    CorrectionValidator,
    CorrectionApplier,
    CaptionRebuilder,
    CaptionMerger,
    ReviewGroupManager,
)

from app.rendering import (
    VideoRenderer,
    VideoMerger,
)


class CorrectionEngine:

    def __init__(

        self,

        validator: CorrectionValidator,

        applier: CorrectionApplier,

        rebuilder: CaptionRebuilder,

        caption_merger: CaptionMerger,

        review_manager: ReviewGroupManager,

        renderer: VideoRenderer,

        video_merger: VideoMerger

    ):

        self.validator = validator
        self.applier = applier
        self.rebuilder = rebuilder
        self.caption_merger = caption_merger
        self.review_manager = review_manager
        self.renderer = renderer
        self.video_merger = video_merger

    def generate(

        self,

        processing_result: ProcessingResult,

        group_id: int,

        corrected_text: str,

        intro_video: str

    ) -> ProcessingResult:

        review_group = self.review_manager.get(

            processing_result.pipeline.review_groups,

            group_id

        )

        if review_group is None:

            raise ValueError(

                f"Review group {group_id} not found."

            )

        self._validate(

            review_group,

            corrected_text

        )

        corrected_captions = self._rebuild(

            review_group,

            corrected_text

        )

        updated_captions = self.caption_merger.merge(

            processing_result.pipeline.renderable_captions,

            review_group,

            corrected_captions

        )

        self._update_pipeline(

            processing_result,

            updated_captions,

            group_id

        )

        self._render_video(

            processing_result,

            intro_video,

            updated_captions

        )

        return processing_result

    # ==========================================================
    # Validation
    # ==========================================================

    def _validate(

        self,

        review_group,

        corrected_text

    ) -> None:

        validation = self.validator.validate(

            review_group,

            corrected_text

        )

        if not validation.valid:

            raise ValueError(

                validation.message

            )

    # ==========================================================
    # Rebuild corrected captions
    # ==========================================================

    def _rebuild(

        self,

        review_group,

        corrected_text

    ):

        alignment = self.applier.apply(

            review_group,

            corrected_text

        )

        return self.rebuilder.rebuild(

            alignment.words

        )

    # ==========================================================
    # Update ProcessingResult
    # ==========================================================

    def _update_pipeline(

        self,

        processing_result: ProcessingResult,

        updated_captions,

        group_id: int

    ) -> None:

        processing_result.pipeline.renderable_captions = (

            updated_captions

        )

        processing_result.pipeline.review_groups = (

            self.review_manager.resolve(

                processing_result.pipeline.review_groups,

                group_id

            )

        )

    # ==========================================================
    # Render final video
    # ==========================================================

    def _render_video(

        self,

        processing_result: ProcessingResult,

        intro_video: str,

        captions

    ) -> None:

        self.renderer.render(

            str(processing_result.paths.blurred),

            str(processing_result.paths.captioned),

            captions

        )

        if Path(intro_video).exists():

            print("Merging intro with main video...")

            self.video_merger.merge(

                intro_video,

                str(processing_result.paths.captioned),

                str(processing_result.paths.final)

            )

        else:

            print("Intro video not found. Using captioned video as final output.")

            shutil.copy2(

                processing_result.paths.captioned,

                processing_result.paths.final

            )