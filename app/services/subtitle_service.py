from app.preprocessing import (
    WhisperParser,
)

from app.pipeline import (
    CaptionChunker,
    BatchGenerator,
)

from app.qa import (
    BatchAuditor,
    apply_results,
    CaptionSynchronizer,
)

from app.review import (
    ReviewCollector,
)

from app.models import (
    PipelineResult,
)


class SubtitleService:

    def __init__(

        self,

        parser: WhisperParser,

        chunker: CaptionChunker,

        generator: BatchGenerator,

        auditor: BatchAuditor,

        synchronizer: CaptionSynchronizer,

        collector: ReviewCollector

    ):

        self.parser = parser
        self.chunker = chunker
        self.generator = generator
        self.auditor = auditor
        self.synchronizer = synchronizer
        self.collector = collector

    def process(

        self,

        whisper_json_path: str

    ) -> PipelineResult:

        # -------------------------
        # Parse Whisper
        # -------------------------

        self.parser.json_path = whisper_json_path

        words = self.parser.load()

        # -------------------------
        # Chunk captions
        # -------------------------

        captions = self.chunker.chunk(

            words

        )

        # -------------------------
        # Generate batches
        # -------------------------

        batches = self.generator.generate(

            captions

        )

        # -------------------------
        # Audit
        # -------------------------

        qa_results = self.auditor.audit(

            batches

        )

        # -------------------------
        # Apply QA
        # -------------------------

        apply_results(

            captions,

            qa_results

        )

        # -------------------------
        # Collect Reviews
        # -------------------------

        review_groups = self.collector.collect(

            captions

        )

        # -------------------------
        # Synchronize
        # -------------------------

        renderable = self.synchronizer.synchronize(

            captions

        )

        # -------------------------
        # Return PipelineResult
        # -------------------------

        return PipelineResult(

            qa_results=qa_results,

            review_groups=review_groups,

            renderable_captions=renderable

        )