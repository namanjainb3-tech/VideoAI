from flask import (
    Blueprint,
    jsonify,
    request,
)

from app.factory import chat_engine


chat_bp = Blueprint(
    "chat",
    __name__,
)


@chat_bp.route(
    "/chat",
    methods=["POST"],
)
def chat():

    data = request.get_json()

    if data is None:

        return jsonify(
            {
                "success": False,
                "error": "Missing JSON body.",
            }
        ), 400

    message = data.get("message")

    history = data.get("history", [])

    context = data.get("context", {})

    if not message:

        return jsonify(
            {
                "success": False,
                "error": "Message is required.",
            }
        ), 400

    try:

        reply = chat_engine.chat(

            message=message,

            history=history,

            context=context,

        )

        return jsonify(

            {
                "success": True,
                "reply": reply,
            }

        )

    except Exception as e:

        import traceback

        traceback.print_exc()

        return jsonify(

            {
                "success": False,
                "error": str(e),
            }

        ), 500