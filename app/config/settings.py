import os
import torch
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# ============================================
# DEVICE
# ============================================

DEVICE = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

# ============================================
# GROQ
# ============================================

VIDEO_GROQ_API_KEY = os.getenv("VIDEO_GROQ_API_KEY")

KITU_GROQ_API_KEY = os.getenv("KITU_GROQ_API_KEY")

MODEL_NAME = "llama-3.3-70b-versatile"