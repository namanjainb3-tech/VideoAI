from dataclasses import dataclass
from typing import List


# ============================================
# ALIGNED WORD
# ============================================

@dataclass
class AlignedWord:

    text: str

    start: float

    end: float


# ============================================
# ALIGNMENT RESULT
# ============================================

@dataclass
class AlignmentResult:

    words: List[AlignedWord]