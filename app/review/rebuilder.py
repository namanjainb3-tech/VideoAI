from app.models import (
    Word,
    AlignedWord,
    Caption,
)

from app.pipeline import CaptionChunker


class CaptionRebuilder:

    def __init__(

        self,

        chunker: CaptionChunker

    ):

        self.chunker = chunker

    def rebuild(

        self,

        aligned_words: list[AlignedWord]

    ) -> list[Caption]:

        words = []

        for word in aligned_words:

            words.append(

                Word(

                    text=word.text,

                    start=word.start,

                    end=word.end

                )

            )

        return self.chunker.chunk(

            words

        )