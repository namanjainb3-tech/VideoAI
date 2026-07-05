from dataclasses import dataclass
from pathlib import Path


@dataclass
class JobPaths:

    job_id: str

    job_dir: Path

    input: Path

    intro: Path

    blurred: Path

    whisper: Path

    captioned: Path

    final: Path