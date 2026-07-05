from dataclasses import dataclass


@dataclass
class CaptionTheme:

    font_size: int = 54

    text_color: tuple = (255, 255, 255)

    highlight_color: tuple = (255, 220, 0)

    stroke_color: tuple = (0, 0, 0)

    stroke_width: int = 3

    background_color: tuple = (0, 0, 0, 170)

    padding_x: int = 50

    padding_y: int = 20

    line_spacing: int = 18

    word_spacing: int = 18

    radius: int = 28

    bottom_margin: int = 160