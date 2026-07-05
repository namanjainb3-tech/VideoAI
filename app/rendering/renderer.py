import cv2
import numpy as np

from PIL import (
    Image,
    ImageDraw,
    ImageFont,
)

from app.rendering import (
    CaptionTheme,
)

from app.rendering.layout import (
    CaptionLayout,
)

class CaptionRenderer:

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

    def draw(

        self,

        frame,

        layout: CaptionLayout,

        current_time: float

    ):

        img = Image.fromarray(

            cv2.cvtColor(

                frame,

                cv2.COLOR_BGR2RGB

            )

        ).convert("RGBA")

        overlay = Image.new(

            "RGBA",

            img.size,

            (0, 0, 0, 0)

        )

        draw = ImageDraw.Draw(

            overlay

        )

        self._draw_background(

            draw,

            layout

        )

        self._draw_words(

            draw,

            layout,

            current_time

        )

        img = Image.alpha_composite(

            img,

            overlay

        )

        return cv2.cvtColor(

            np.array(

                img.convert("RGB")

            ),

            cv2.COLOR_RGB2BGR

        )
    
    def _draw_background(

        self,

        draw,

        layout

    ):

        draw.rounded_rectangle(

            (

                layout.box_x,

                layout.box_y,

                layout.box_x + layout.box_width,

                layout.box_y + layout.box_height

            ),

            radius=self.theme.radius,

            fill=self.theme.background_color

        )

    def _draw_words(

        self,

        draw,

        layout,

        current_time

    ):

        for word in layout.words:

            if (

                word.start

                <= current_time

                <= word.end

            ):

                color = self.theme.highlight_color

            else:

                color = self.theme.text_color

            draw.text(

                (

                    word.x,

                    word.y

                ),

                word.text,

                font=self.font,

                fill=color,

                stroke_width=self.theme.stroke_width,

                stroke_fill=self.theme.stroke_color

            )