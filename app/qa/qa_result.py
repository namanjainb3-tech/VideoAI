from dataclasses import dataclass

@dataclass
class QAResult:

    id: int

    status: str

    qa_caption: str

    issues: list