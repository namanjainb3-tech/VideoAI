from app.models import (
    RenderableCaption,
)

class CaptionMerger:

    def merge(

        self,

        renderable_captions,

        old_review_group,

        new_captions

    ):

        merged = []

        review_ids = {

            caption.id

            for caption in old_review_group.captions

        }

        inserted = False

        for caption in renderable_captions:

            if caption.id in review_ids:

                if not inserted:

                    merged.extend(

                        new_captions

                    )

                    inserted = True

                continue

            merged.append(

                caption

            )

        return merged