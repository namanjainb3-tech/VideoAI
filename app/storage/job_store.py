from app.models import JobSession


class JobStore:

    def __init__(self):

        self.jobs = {}

    def create(self, job: JobSession) -> None:

        self.jobs[job.job_id] = job

    def get(self, job_id: str) -> JobSession | None:

        return self.jobs.get(job_id)

    def update(
        self,
        job_id: str,
        **kwargs,
    ) -> JobSession | None:

        job = self.get(job_id)

        if job is None:
            return None

        for key, value in kwargs.items():

            setattr(job, key, value)

        return job

    def remove(self, job_id: str) -> None:

        self.jobs.pop(job_id, None)