from app.models import (
    ReviewGroup,
    ValidationResult,
)


class CorrectionValidator:

    def validate(

        self,

        review_group: ReviewGroup,

        corrected_text: str

    ) -> ValidationResult:

        corrected_text = corrected_text.strip()

        if corrected_text == "":

            return ValidationResult(

                False,

                "Correction cannot be empty."

            )

        return ValidationResult(

            True,

            "Validation successful."

        )