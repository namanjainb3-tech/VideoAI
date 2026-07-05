from app.models import (
    Word,
    AlignmentResult,
)

from app.review import AlignmentStrategy


class AlignmentEngine:

    def __init__(

        self,

        strategy: AlignmentStrategy

    ):

        self.strategy = strategy

    def align(

        self,

        original_words: list[Word],

        corrected_text: str

    ) -> AlignmentResult:

        corrected_words = corrected_text.split()

        return self.strategy.align(

            original_words,

            corrected_words

        )