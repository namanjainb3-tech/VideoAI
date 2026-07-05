from dataclasses import dataclass
from typing import List

from .qa_result import QAResult
from .review import ReviewGroup
from .renderable import RenderableCaption


@dataclass
class PipelineResult:

    qa_results: List[QAResult]

    review_groups: List[ReviewGroup]

    renderable_captions: List[RenderableCaption]