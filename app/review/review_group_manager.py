class ReviewGroupManager:

    def get(

        self,

        review_groups,

        group_id

    ):

        return next(

            (

                group

                for group in review_groups

                if group.id == group_id

            ),

            None

        )

    def resolve(

        self,

        review_groups,

        group_id

    ):

        return [

            group

            for group in review_groups

            if group.id != group_id

        ]