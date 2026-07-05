from dataclasses import dataclass
from typing import List

from .word import Word


@dataclass
class Caption:

    id: int

    words: List[Word]

    start: float

    end: float

    qa_status: str = "PENDING"

    qa_text: str = ""

    issues: List[str] = None

    @property
    def text(self):

        return " ".join(
            word.text
            for word in self.words
        )

    def __post_init__(self):

        if self.qa_text == "":
            self.qa_text = self.text

        if self.issues is None:
            self.issues = []