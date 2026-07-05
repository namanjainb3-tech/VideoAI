from dataclasses import dataclass

from PIL import (
    Image,
    ImageDraw,
    ImageFont,
)

from app.models import RenderableCaption

from app.rendering import CaptionTheme


# ============================================
# POSITION OF ONE WORD
# ============================================

@dataclass
class LayoutWord:

    text: str

    start: float

    end: float

    x: int

    y: int

    width: int

    height: int


# ============================================
# LAYOUT OF ONE CAPTION
# ============================================

@dataclass
class CaptionLayout:

    words: list[LayoutWord]

    box_x: int

    box_y: int

    box_width: int

    box_height: int

class LayoutEngine:

    def __init__(

        self,

        width: int,

        height: int,

        font_path: str,

        theme: CaptionTheme

    ):

        self.width = width

        self.height = height

        self.theme = theme

        self.font = ImageFont.truetype(

            font_path,

            theme.font_size

        )

    def build(

        self,

        caption: RenderableCaption

    ) -> CaptionLayout:

        img = Image.new(

            "RGB",

            (

                self.width,

                self.height

            )

        )

        draw = ImageDraw.Draw(img)

        lines = self._wrap_lines(

            caption,

            draw

        )

        box = self._measure_box(

            lines

        )

        layout_words = self._position_words(

            lines,

            box

        )

        return CaptionLayout(

            words=layout_words,

            box_x=box["x"],

            box_y=box["y"],

            box_width=box["width"],

            box_height=box["height"]

        )
    
    def _wrap_lines(

        self,

        caption: RenderableCaption,

        draw: ImageDraw.ImageDraw

    ):

        lines = []

        current = []

        max_width = int(

            self.width * 0.9

        )

        for word in caption.words:

            word_bbox = draw.textbbox(
                (0, 0),
                word.text,
                font=self.font,
                stroke_width=self.theme.stroke_width
            )

            word_width = word_bbox[2] - word_bbox[0]

            candidate = current + [(word, word_width)]

            line_text = " ".join(
                w.text
                for w, _ in candidate
            )

            bbox = draw.textbbox(
                (0, 0),
                line_text,
                font=self.font,
                stroke_width=self.theme.stroke_width
            )

            candidate_width = bbox[2] - bbox[0]

            if current and candidate_width > max_width:

                lines.append(current)
                current = [(word, word_width)]

            else:

                current = candidate

        if current:

            lines.append(current)

        if len(lines) > 2:

            lines = [

                lines[0],

                sum(lines[1:], [])

            ]

        return lines
    
    def _measure_box(

        self,

        lines

    ):

        line_height = (

            self.theme.font_size

            + 12

        )

        text_height = (

            len(lines)

            * line_height

        )

        max_line_width = 0

        for line in lines:

            line_text = " ".join(
                word.text
                for word, _ in line
            )

            dummy = Image.new("RGB", (1, 1))
            draw = ImageDraw.Draw(dummy)

            bbox = draw.textbbox(
                (0, 0),
                line_text,
                font=self.font,
                stroke_width=self.theme.stroke_width
            )

            line_width = bbox[2] - bbox[0]

            max_line_width = max(

                max_line_width,

                line_width

            )

        box_width = (

            max_line_width

            + self.theme.padding_x * 2

        )

        box_height = (

            text_height

            + self.theme.padding_y * 2

        )

        box_x = (

            self.width

            - box_width

        ) // 2

        box_y = (

            self.height

            - self.theme.bottom_margin

            - box_height

        )

        return {

            "x": box_x,

            "y": box_y,

            "width": box_width,

            "height": box_height,

            "line_height": line_height

        }
    
    def _position_words(

        self,

        lines,

        box

    ):

        layout_words = []

        y = (

            box["y"]

            + self.theme.padding_y

        )

        for line in lines:

            dummy = Image.new("RGB", (1, 1))
            draw = ImageDraw.Draw(dummy)

            line_text = " ".join(
                word.text
                for word, _ in line
            )

            bbox = draw.textbbox(
                (0, 0),
                line_text,
                font=self.font,
                stroke_width=self.theme.stroke_width
            )

            line_width = bbox[2] - bbox[0]

            x = (

                box["x"]

                + (box["width"] - line_width) // 2

            )

            for word, width in line:

                layout_words.append(

                    LayoutWord(

                        text=word.text,

                        start=word.start,

                        end=word.end,

                        x=x,

                        y=y,

                        width=width,

                        height=box["line_height"]

                    )

                )

                x += (

                    width

                    + self.theme.word_spacing

                )

            y += box["line_height"]

        return layout_words