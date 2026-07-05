import json

from app.pipeline import PromptBuilder
from app.qa.llm_client import LLMClient
from app.qa.qa_result import QAResult


class GroqLLMClient(LLMClient):

    def __init__(
        self,
        client,
        model_name,
        prompt_builder
    ):

        self.client = client
        self.model_name = model_name
        self.prompt_builder = prompt_builder


    def audit_batch(
        self,
        batch
    ) -> list[QAResult]:

        prompt = self.prompt_builder.build(batch)

        response = self.client.chat.completions.create(

            model=self.model_name,

            temperature=0,

            response_format={
                "type": "json_object"
            },

            messages=[

                {
                    "role": "system",
                    "content": "Return only valid JSON."
                },

                {
                    "role": "user",
                    "content": prompt
                }

            ]

        )

        content = response.choices[0].message.content

        try:

            data = json.loads(content)

        except json.JSONDecodeError as e:

            raise ValueError(
                "Groq returned invalid JSON."
            ) from e


        results = data.get("results")

        if results is None:

            results = data.get("result")

        if results is None:

            raise ValueError(
                "Groq response missing 'results' field."
            )


        qa_results = []

        for item in results:

            qa_results.append(

                QAResult(

                    id=item["id"],

                    status=item["status"],

                    qa_caption=item["qa_caption"],

                    issues=item.get("issues", [])

                )

            )

        return qa_results