from app.prompts.kitu_prompt import SYSTEM_PROMPT


class ChatEngine:

    def __init__(
        self,
        client,
        model_name,
    ):

        self.client = client

        self.model_name = model_name


    def chat(
        self,
        message,
        history=None,
        context=None,
    ):

        messages = [

            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            }

        ]

        # ----------------------------
        # Workspace Context 
        # ----------------------------

        if context:

            context_message = {

                "role": "system",

                "content": (
                    "Current VideoAI Workspace Context:\n"
                    f"{context}"
                )

            }

            messages.append(context_message)

        # ----------------------------
        # Conversation History
        # ----------------------------

        if history:

            messages.extend(history)

        # ----------------------------
        # Current User Message
        # ----------------------------

        messages.append(

            {

                "role": "user",

                "content": message,

            }

        )

        # ----------------------------
        # Groq Request
        # ----------------------------

        response = self.client.chat.completions.create(

            model=self.model_name,

            messages=messages,

            temperature=0.4,

            max_tokens=1024,

        )

        return response.choices[0].message.content.strip()