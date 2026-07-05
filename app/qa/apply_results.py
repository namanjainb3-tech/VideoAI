from app.models import Caption
from app.qa.qa_result import QAResult


def apply_results(

    captions: list[Caption],

    qa_results: list[QAResult]

):

    # ----------------------------------------
    # lookup table
    # ----------------------------------------

    result_lookup = {

        result.id: result

        for result in qa_results

    }

    updated = 0

    # ----------------------------------------
    # Updated captions
    # ----------------------------------------

    for caption in captions:

        result = result_lookup.get(

            caption.id

        )

        if result is None:
            continue

        caption.qa_status = result.status

        caption.qa_text = result.qa_caption

        caption.issues = result.issues

        updated += 1

    print(

        f"✅ Updated {updated} captions."

    )