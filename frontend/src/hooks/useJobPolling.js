import { useEffect, useRef, useState } from "react";
import api from "../services/api";

export default function useJobPolling() {

    const [job, setJob] = useState(null);

    const [reviewGroups, setReviewGroups] = useState([]);

    const [downloadUrl, setDownloadUrl] = useState(null);

    const [currentStage, setCurrentStage] = useState(0);

    const pollingRef = useRef(null);

    const stageMap = {
        UPLOADING: 0,
        BLURRING: 1,
        TRANSCRIBING: 2,
        PROCESSING_SUBTITLES: 3,
        RENDERING: 4,
        FINISHED: 5,
    };

    return {

        job,

        reviewGroups,

        downloadUrl,

        currentStage,

        pollingRef,

        stageMap,

        setJob,

        setReviewGroups,

        setDownloadUrl,

        setCurrentStage,

    };

}