from groq import Groq

from app.config import (
    RVM_CHECKPOINT,
    FONT_PATH,
    JOBS_DIR,
    VIDEO_GROQ_API_KEY,
    KITU_GROQ_API_KEY,
)

from app.storage import JobStore

from app.models import CaptionTheme

from app.preprocessing import (
    WhisperParser,
)

from app.pipeline import (
    CaptionChunker,
    BatchGenerator,
    PromptBuilder
)

from app.qa import (
    GroqLLMClient,
    BatchAuditor,
    CaptionSynchronizer,
)

from app.review import (
    ReviewCollector,
    CaptionMerger,
    ReviewGroupManager,
    CorrectionValidator,
    CorrectionApplier,
    CaptionRebuilder,
    AlignmentEngine,
    SequenceMatcherAligner,
)

from app.rendering import (
    VideoRenderer,
    VideoMerger,
)

from app.services import (
    BackgroundBlurService,
    WhisperService,
    SubtitleService,
)

from app.utils import (
    JobManager,
)

from app.engines import (
    VideoProcessingEngine,
    CorrectionEngine,
    ChatEngine,
)

# ==========================================================
# API Client
# ==========================================================

video_client = Groq(

    api_key=VIDEO_GROQ_API_KEY

)

kitu_client = Groq(

    api_key=KITU_GROQ_API_KEY

)

# ==========================================================
# Job Manager
# ==========================================================

job_manager = JobManager(

    JOBS_DIR

)

job_store = JobStore()

# ==========================================================
# Services
# ==========================================================

blur_service = BackgroundBlurService(

    checkpoint_path=str(RVM_CHECKPOINT)

)

whisper_service = WhisperService(

    model_name="base"

)

# ==========================================================
# Subtitle Pipeline
# ==========================================================

parser = WhisperParser("")

chunker = CaptionChunker()

generator = BatchGenerator()

prompt_builder = PromptBuilder()

groq_client = GroqLLMClient(

    client=video_client,

    model_name="llama-3.3-70b-versatile",

    prompt_builder=prompt_builder

)

auditor = BatchAuditor(

    groq_client

)

collector = ReviewCollector()

synchronizer = CaptionSynchronizer()

subtitle_service = SubtitleService(

    parser,

    chunker,

    generator,

    auditor,

    synchronizer,

    collector

)

# ==========================================================
# Rendering
# ==========================================================

theme = CaptionTheme()

renderer = VideoRenderer(

    font_path=str(FONT_PATH),

    theme=theme

)

video_merger = VideoMerger()

# ==========================================================
# Review
# ==========================================================

validator = CorrectionValidator()

sequence_matcher = SequenceMatcherAligner()

alignment_engine = AlignmentEngine(

    sequence_matcher

)

applier = CorrectionApplier(

    alignment_engine

)

rebuilder = CaptionRebuilder(

    chunker

)

caption_merger = CaptionMerger()

review_manager = ReviewGroupManager()

# ==========================================================
# Engines
# ==========================================================

video_processing_engine = VideoProcessingEngine(

    job_manager,

    job_store,

    blur_service,

    whisper_service,

    subtitle_service,

    renderer,

    video_merger

)

correction_engine = CorrectionEngine(

    validator,

    applier,

    rebuilder,

    caption_merger,

    review_manager,

    renderer,

    video_merger

)

# ==========================================================
# AI Chat
# ==========================================================

chat_engine = ChatEngine(

    client=kitu_client,

    model_name="llama-3.3-70b-versatile",

)