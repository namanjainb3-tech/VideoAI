from dataclasses import dataclass
from typing import List

from .caption import Caption


# ============================================
# REVIEW GROUP
# ============================================

@dataclass
class ReviewGroup:

    id: int

    captions: List[Caption]

    @property
    def text(self):

        return "\n".join(

            caption.text

            for caption in self.captions

        )

    @property
    def issues(self):

        unique = []

        seen = set()

        for caption in self.captions:

            for issue in caption.issues:

                if issue not in seen:

                    seen.add(issue)

                    unique.append(issue)

        return unique


# ============================================
# REVIEW DECISION
# ============================================

@dataclass
class ReviewDecision:

    group_id: int

    action: str

    corrected_text: str = ""


# ============================================
# CORRECTION REQUEST
# ============================================

@dataclass
class CorrectionRequest:

    group_id: int

    corrected_text: str


# ============================================
# VALIDATION RESULT
# ============================================

@dataclass
class ValidationResult:

    valid: bool

    message: str