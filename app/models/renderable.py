from dataclasses import dataclass
from typing import List


@dataclass
class RenderWord:

    text: str

    start: float

    end: float


@dataclass
class RenderableCaption:

    id: int

    words: List[RenderWord]

    start: float

    end: float