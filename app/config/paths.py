from pathlib import Path

# ============================================
# PROJECT ROOT
# ============================================

PROJECT_ROOT = Path(__file__).resolve().parents[2]

# ============================================
# FOLDERS
# ============================================

INPUT_DIR = PROJECT_ROOT / "input"

OUTPUT_DIR = PROJECT_ROOT / "output"

ASSETS_DIR = PROJECT_ROOT / "assets"

FONT_DIR = PROJECT_ROOT / "fonts"

MODEL_DIR = PROJECT_ROOT / "app" / "models"

RVM_DIR = MODEL_DIR / "rvm"

RVM_CHECKPOINT = RVM_DIR / "rvm_mobilenetv3.pth"

JOBS_DIR = PROJECT_ROOT / "jobs"

# ============================================
# FILES
# ============================================

INTRO_VIDEO = ASSETS_DIR / "intro.mp4"

FONT_PATH = FONT_DIR / "Poppins-Bold.ttf"

WHISPER_JSON = OUTPUT_DIR / "whisper.json"

BLURRED_VIDEO = OUTPUT_DIR / "blurred.mp4"

CAPTIONED_VIDEO = OUTPUT_DIR / "captioned.mp4"

FINAL_VIDEO = OUTPUT_DIR / "final_output.mp4"