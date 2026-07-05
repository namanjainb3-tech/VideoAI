from app.models import (
    ReviewGroup,
    AlignmentResult,
)

from app.review import AlignmentEngine


class CorrectionApplier:

    def __init__(

        self,

        alignment_engine: AlignmentEngine

    ):

        self.alignment_engine = alignment_engine

    def apply(

        self,

        review_group: ReviewGroup,

        corrected_text: str

    ) -> AlignmentResult:

        # ----------------------------------
        # Collecting original words
        # ----------------------------------

        original_words = []

        for caption in review_group.captions:

            original_words.extend(

                caption.words

            )

        # ----------------------------------
        # Aligning corrected words
        # ----------------------------------

        alignment = self.alignment_engine.align(

            original_words,

            corrected_text

        )

        return alignment