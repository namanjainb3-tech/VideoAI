from .batch import CaptionBatch

class BatchGenerator:

    def __init__(self, batch_size=50):

        self.batch_size = batch_size

    def generate(self, captions):

        batches = []

        for i in range(

            0,

            len(captions),

            self.batch_size

        ):

            batches.append(

                CaptionBatch(

                    captions[i:i+self.batch_size]

                )

            )

        return batches