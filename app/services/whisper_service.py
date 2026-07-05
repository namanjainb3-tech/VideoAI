import json
import whisper

class WhisperService:

    def __init__(

        self,

        model_name: str = "base"

    ):

        self.model_name = model_name

        self.model = None

    def transcribe(

        self,

        input_video: str,

        output_json: str

    ):

        if self.model is None:

            self._load_model()

        result = self.model.transcribe(

            input_video,

            word_timestamps=True,

            verbose=True

        )

        self._save_json(

            result,

            output_json

        )

        total_words = sum(

            len(

                segment.get(

                    "words",

                    []

                )

            )

            for segment in result["segments"]

        )

        print()

        print("✅ Whisper Finished")

        print(

            f"Language : {result['language']}"

        )

        print(

            f"Segments : {len(result['segments'])}"

        )

        print(

            f"Words    : {total_words}"

        )

        print(

            f"Saved    : {output_json}"

        )

        return result
    
    def _load_model(

        self

    ):

        print("=" * 60)

        print(

            "Loading Whisper Model..."

        )

        print("=" * 60)

        self.model = whisper.load_model(

            self.model_name

        )

    def _save_json(

        self,

        result,

        output_json

    ):

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