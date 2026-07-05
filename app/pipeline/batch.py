import json

class CaptionBatch:

    def __init__(self, captions):

        self.captions = captions

    def __len__(self):

        return len(self.captions)

    def to_prompt(self):

        data = []

        for i, caption in enumerate(self.captions):

            previous = ""

            next_text = ""

            if i > 0:
                previous = self.captions[i - 1].text

            if i < len(self.captions) - 1:
                next_text = self.captions[i + 1].text

            data.append({

                "id": caption.id,

                "current_caption": caption.text,

                "previous_caption": previous,

                "next_caption": next_text,

                "start": round(caption.start, 2),

                "end": round(caption.end, 2),

                "duration": round(
                    caption.end - caption.start,
                    2
                ),

                "word_count": len(caption.words)

            })

        return data