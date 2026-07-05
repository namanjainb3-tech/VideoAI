import json

from app.models import Word


class WhisperParser:

    def __init__(self, json_path):

        self.json_path = json_path

    def load(self):

        with open(self.json_path, "r", encoding="utf-8") as f:

            data = json.load(f)

        words = []

        for segment in data["segments"]:

            for w in segment.get("words", []):

                words.append(

                    Word(

                        text=w["word"].strip(),

                        start=float(w["start"]),

                        end=float(w["end"])

                    )

                )

        return words