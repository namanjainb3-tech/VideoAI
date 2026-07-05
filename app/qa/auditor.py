from app.qa.llm_client import LLMClient


class BatchAuditor:

    def __init__(

        self,

        llm_client: LLMClient

    ):

        self.llm_client = llm_client

    def audit(

        self,

        batches

    ):

        all_results = []

        total_batches = len(batches)

        print(f"Auditing {total_batches} batch(es)...\n")

        for index, batch in enumerate(

            batches,

            start=1

        ):

            print(

                f"[{index}/{total_batches}] Auditing batch..."

            )

            batch_results = self.llm_client.audit_batch(

                batch

            )

            all_results.extend(

                batch_results

            )

        print("\n✅ QA completed.")

        return all_results