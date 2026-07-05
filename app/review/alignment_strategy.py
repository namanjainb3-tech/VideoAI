from abc import ABC, abstractmethod

from app.models import (
    Word,
    AlignmentResult,
)


class AlignmentStrategy(ABC):

    @abstractmethod
    def align(

        self,

        original_words: list[Word],

        corrected_words: list[str]

    ) -> AlignmentResult:

        pass