from app.models import (
    Caption,
    RenderWord,
    RenderableCaption,
)


class CaptionSynchronizer:

    def synchronize(

        self,

        captions: list[Caption]

    ) -> list[RenderableCaption]:

        renderable = []

        skipped = 0

        for caption in captions:

            # ----------------------------------
            # REVIEW captions rendereding
            # ----------------------------------

            if caption.qa_status == "REVIEW":

                text = caption.text

            else:

                text = caption.qa_text

            words = text.split()

            # ----------------------------------
            # Preserving Word Count
            # ----------------------------------

            if len(words) != len(caption.words):

                print(

                    f"Skipping Caption {caption.id}: "

                    "Word count mismatch."

                )

                skipped += 1

                continue

            render_words = []

            for original, new_text in zip(

                caption.words,

                words

            ):

                render_words.append(

                    RenderWord(

                        text=new_text,

                        start=original.start,

                        end=original.end

                    )

                )

            renderable.append(

                RenderableCaption(

                    id=caption.id,

                    words=render_words,

                    start=caption.start,

                    end=caption.end

                )

            )

        print()

        print(

            f"✅ Renderable captions : {len(renderable)}"

        )

        print(

            f"⚠️ Skipped            : {skipped}"

        )

        return renderable