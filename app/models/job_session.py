from dataclasses import dataclass, field

from app.models import ProcessingResult


@dataclass
class JobSession:

    job_id: str

    status: str = "QUEUED"

    stage: str = "WAITING"

    progress: int = 0

    review_groups: list = field(default_factory=list)

    download_url: str | None = None

    processing_result: ProcessingResult | None = None

    error: str | None = None