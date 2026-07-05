import json

import whisper


class WhisperGenerator:

    def __init__(self, model_name="base"):

        self.model = whisper.load_model(model_name)

    def generate(

        self,

        input_video,

        output_json

    ):

        result = self.model.transcribe(

            input_video,

            word_timestamps=True,

            verbose=True

        )

        with open(

            output_json,

            "w",

            encoding="utf-8"

        ) as f:

            json.dump(

                result,

                f,

                indent=4,

                ensure_ascii=False

            )

        return result