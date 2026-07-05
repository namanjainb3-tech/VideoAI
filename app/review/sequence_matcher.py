from difflib import SequenceMatcher

from app.models import (
    Word,
    AlignedWord,
    AlignmentResult,
)

from app.review import AlignmentStrategy


class SequenceMatcherAligner(AlignmentStrategy):

    def align(

        self,

        original_words: list[Word],

        corrected_words: list[str]

    ) -> AlignmentResult:

        matcher = SequenceMatcher(

            None,

            [w.text for w in original_words],

            corrected_words

        )

        aligned = []

        for tag, i1, i2, j1, j2 in matcher.get_opcodes():

            if tag == "equal":

                aligned.extend(

                    self._handle_equal(

                        original_words[i1:i2],

                        corrected_words[j1:j2]

                    )

                )

            elif tag == "replace":

                aligned.extend(

                    self._handle_replace(

                        original_words[i1:i2],

                        corrected_words[j1:j2]

                    )

                )

            elif tag == "insert":

                aligned.extend(

                    self._handle_insert(

                        original_words,

                        corrected_words[j1:j2],

                        i1

                    )

                )

            elif tag == "delete":

                aligned.extend(

                    self._handle_delete(

                        original_words[i1:i2]

                    )

                )

        return AlignmentResult(

            words=aligned

        )

    def _handle_equal(

        self,

        original,

        corrected

    ):

        words = []

        for old, new in zip(original, corrected):

            words.append(

                AlignedWord(

                    text=new,

                    start=old.start,

                    end=old.end

                )

            )

        return words

    def _handle_replace(

        self,

        original,

        corrected

    ):

        words = []

        start = original[0].start

        end = original[-1].end

        duration = (end - start) / len(corrected)

        current = start

        for text in corrected:

            words.append(

                AlignedWord(

                    text=text,

                    start=current,

                    end=current + duration

                )

            )

            current += duration

        return words

    def _handle_insert(

        self,

        original_words,

        inserted_words,

        insert_index

    ):

        words = []

        if insert_index == 0:

            start = original_words[0].start

            end = original_words[0].start

        elif insert_index >= len(original_words):

            start = original_words[-1].end

            end = original_words[-1].end

        else:

            start = original_words[insert_index - 1].end

            end = original_words[insert_index].start

        duration = (

            (end - start)

            / max(

                len(inserted_words),

                1

            )

        )

        current = start

        for text in inserted_words:

            words.append(

                AlignedWord(

                    text=text,

                    start=current,

                    end=current + duration

                )

            )

            current += duration

        return words

    def _handle_delete(

        self,

        deleted_words

    ):

        return []