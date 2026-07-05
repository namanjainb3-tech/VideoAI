import { useEffect, useState } from "react";

import PreviewHeader from "./PreviewHeader";
import PreviewPlayer from "./PreviewPlayer";
import PreviewFooter from "./PreviewFooter";

function VideoPreview({
    file,
    loading,
    currentStage,
    processingStages,
    isProcessing,
}) {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (!file) {
            setPreviewUrl(null);
            return;
        }

        const url = URL.createObjectURL(file);

        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);

    }, [file]);

    return (
        <div className="p-6 lg:p-8">

            <PreviewHeader
                file={file}
            />

            <div className="mt-8">

                <PreviewPlayer
                    file={file}
                    previewUrl={previewUrl}
                    loading={loading}
                    currentStage={currentStage}
                    processingStages={processingStages}
                    isProcessing={isProcessing}
                />

            </div>

        </div>
    );
}

export default VideoPreview;