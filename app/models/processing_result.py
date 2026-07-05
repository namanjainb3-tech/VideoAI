from dataclasses import dataclass

from app.models import (
    JobPaths,
    PipelineResult,
)


@dataclass
class ProcessingResult:

    paths: JobPaths

    pipeline: PipelineResult