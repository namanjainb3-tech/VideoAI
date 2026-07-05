from app.models import ReviewGroup, Caption


class ReviewCollector:

    def collect(

        self,

        captions: list[Caption]

    ) -> list[ReviewGroup]:

        groups = []

        current = []

        for caption in captions:

            if caption.qa_status == "REVIEW":

                current.append(caption)

            else:

                if current:

                    groups.append(

                        ReviewGroup(

                            id=len(groups),

                            captions=current.copy()

                        )

                    )

                    current.clear()

        if current:

            groups.append(

                ReviewGroup(

                    id=len(groups),

                    captions=current.copy()

                )

            )

        return groups