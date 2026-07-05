import UploadZone from "./UploadZone";
import IntroUploader from "./IntroUploader";
import FilePreviewCard from "./FilePreviewCard";

import Button from "../ui/Button";

function UploadCard({
    inputRef,
    introInputRef,

    file,
    introVideo,

    handleFile,
    handleIntro,

    uploadVideo,

    loading,
}) {

    return (

        <div className="p-8">

            <div>

                <p className="text-sm text-violet-400 font-medium">

                    STEP 01

                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">

                    Upload Assets

                </h2>

                <p className="mt-3 text-slate-400">

                    Upload your main video and optionally add
                    an intro clip before rendering.

                </p>

            </div>

            <div className="mt-8">

                <UploadZone
                    inputRef={inputRef}
                    file={file}
                    handleFile={handleFile}
                />

                <FilePreviewCard file={file} />

            </div>

            <div className="mt-8">

                <IntroUploader
                    introInputRef={introInputRef}
                    introVideo={introVideo}
                    handleIntro={handleIntro}
                />

            </div>

            <Button

                className="mt-10 w-full"

                onClick={uploadVideo}

                disabled={!file || loading}

            >

                {loading ? "Running AI Pipeline..." : "Generate AI Video"}

            </Button>

        </div>

    );

}

export default UploadCard;