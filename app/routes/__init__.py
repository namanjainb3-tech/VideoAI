from .video_routes import video_bp
from .chat_routes import chat_bp


def register_routes(app):

    app.register_blueprint(video_bp)

    app.register_blueprint(chat_bp)