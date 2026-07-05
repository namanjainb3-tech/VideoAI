from app.models import Caption

class CaptionChunker:

    def __init__(
        self,
        max_words=8,
        max_duration=2.0,
        pause_threshold=0.45
    ):

        self.max_words = max_words
        self.max_duration = max_duration
        self.pause_threshold = pause_threshold

    def chunk(self, words):

        captions = []

        current = []

        start_time = None

        for i, word in enumerate(words):

            if start_time is None:
                start_time = word.start

            current.append(word)

            duration = word.end - start_time

            punctuation = any(
                p in word.text
                for p in [".", ",", "!", "?", ":"]
            )

            pause = False

            if i < len(words) - 1:

                gap = words[i + 1].start - word.end

                if gap > self.pause_threshold:
                    pause = True

            should_split = (

                len(current) >= self.max_words

                or duration >= self.max_duration

                or punctuation

                or pause

            )

            if should_split:

                captions.append(

                    Caption(

                        id=len(captions),

                        words=current.copy(),

                        start=current[0].start,

                        end=current[-1].end

                    )

                )

                current = []

                start_time = None

        if current:

            captions.append(

                Caption(

                    id=len(captions),

                    words=current,

                    start=current[0].start,

                    end=current[-1].end

                )

            )

        return captions