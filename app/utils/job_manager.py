import uuid

from pathlib import Path

from app.models import JobPaths

class JobManager:

    def __init__(

        self,

        jobs_root: Path

    ):

        self.jobs_root = jobs_root

        self.jobs_root.mkdir(

            parents=True,

            exist_ok=True

        )

    def create_job(

        self

    ) -> JobPaths:

        job_id = uuid.uuid4().hex[:8]

        job_dir = self.jobs_root / job_id

        job_dir.mkdir(

            parents=True,

            exist_ok=True

        )

        return JobPaths(

            job_id=job_id,

            job_dir=job_dir,

            input=job_dir / "input.mp4",

            intro=job_dir / "intro.mp4",

            blurred=job_dir / "blurred.mp4",

            whisper=job_dir / "whisper.json",

            captioned=job_dir / "captioned.mp4",

            final=job_dir / "final.mp4"

        )
    
