from flask import (
    Blueprint,
    jsonify,
    request,
    send_file,
)

from app.factory import (
    video_processing_engine,
    correction_engine,
    job_store,
)

video_bp = Blueprint(
    "video",
    __name__,
)


@video_bp.route("/")
def home():

    return {
        "message": "Video Automation Backend Running"
    }


@video_bp.route("/process", methods=["POST"])
def process_video():

    print("PROCESS ENDPOINT HIT")

    if "video" not in request.files:

        return jsonify(

            {   
                "success": False,
                "error": "No video uploaded."
            }

        ), 400

    video = request.files["video"]

    intro_video = request.files.get(

    "intro_video"

    )

    try:

        job = video_processing_engine.start(

            video,
            intro_video,

        )

    except Exception as e:

        import traceback

        traceback.print_exc()

        return jsonify(
            {
                "success": False,
                "error": str(e)
            }
        ), 500

    return jsonify(

    {

        "success": True,

        "job_id": job.job_id,

        "status": job.status,

    }

)

@video_bp.route("/status/<job_id>", methods=["GET"])
def job_status(job_id):

    job = job_store.get(job_id)

    if job is None:

        return jsonify(
            {
                "success": False,
                "error": "Job not found."
            }
        ), 404
    
    return jsonify(

        {

            "success": True,

            "job_id": job.job_id,

            "status": job.status,

            "stage": job.stage,

            "progress": job.progress,

            "review_required": bool(job.review_groups),

            "review_groups": [

                {

                    "id": group.id,

                    "text": group.text,

                    "issues": group.issues,

                }

                for group in job.review_groups

            ],

            "download_url": job.download_url,

            "error": job.error,

        }

    )

@video_bp.route("/review", methods=["POST"])
def review():

    data = request.get_json()

    if data is None:

        return jsonify(

            {

                "success": False,

                "error": "Missing JSON body."

            }

        ), 400

    job_id = data.get("job_id")

    group_id = data.get("group_id")

    corrected_text = data.get("corrected_text")

    job = job_store.get(job_id)

    if job is None:

        return jsonify(
            {
                "success": False,
                "error": "Job not found."
            }
        ), 404

    processing_result = job.processing_result

    if processing_result is None:

        return jsonify(

            {

                "success": False,

                "error": "Job not found."

            }

        ), 404
    

    try:

        correction_engine.generate(

            processing_result,

            group_id,

            corrected_text,

            str(processing_result.paths.intro)

        )

        job_store.update(

            job_id,

            processing_result=processing_result,

            review_groups=processing_result.pipeline.review_groups,

            status="COMPLETED",

            stage="FINISHED",

            progress=100,

            download_url=f"/download/{job_id}",

        )

    except Exception as e:

        import traceback

        traceback.print_exc()

        return jsonify(

            {

                "success": False,

                "error": str(e)

            }

        ), 400
    
    return jsonify(

        {

            "success": True,

            "message": "Review applied successfully.",

            "remaining_reviews": len(

                processing_result.pipeline.review_groups

            ),

            "download_url": f"/download/{job_id}"

        }

    )

@video_bp.route("/download/<job_id>", methods=["GET"])
def download(job_id):

    job = job_store.get(job_id)

    if job is None:

        return jsonify(
            {
                "success": False,
                "error": "Job not found."
            }
        ), 404

    processing_result = job.processing_result

    if processing_result is None:

        return jsonify(

            {

                "success": False,

                "error": "Job not found."

            }

        ), 404

    final_video = processing_result.paths.final

    if not final_video.exists():

        return jsonify(

            {

                "success": False,

                "error": "Final video not found."

            }

        ), 404

    return send_file(

        final_video,

        as_attachment=True,

        download_name="final_video.mp4",

        mimetype="video/mp4"

    )