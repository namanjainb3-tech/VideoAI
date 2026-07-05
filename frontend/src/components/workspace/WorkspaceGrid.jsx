import { useEffect, useRef, useState } from "react";
import api from "../../services/api";

import Container from "../ui/Container";
import Card from "../ui/Card";

import UploadCard from "./UploadCard";
import VideoPreview from "./VideoPreview";
import PipelineCard from "./PipelineCard";
import ReviewPanel from "./ReviewPanel";
import DownloadCard from "./DownloadCard";

function WorkspaceGrid() {
    const inputRef = useRef(null);
    const introInputRef = useRef(null);

    const hasScrolledToReview = useRef(false);

    const [file, setFile] = useState(null);
    const [introVideo, setIntroVideo] = useState(null);

    const [loading, setLoading] = useState(false);

    const [job, setJob] = useState(null);

    const isProcessing = job?.status === "PROCESSING";

    const pollingRef = useRef(null);

    const [reviewGroups, setReviewGroups] = useState([]);

    const [correctedText, setCorrectedText] = useState("");

    const [downloadUrl, setDownloadUrl] = useState(null);

    const processingStages = [
        {
            label: "Uploading Video",
            progress: 10,
        },
        {
            label: "AI Background Blur",
            progress: 25,
        },
        {
            label: "Whisper Captions",
            progress: 45,
        },
        {
            label: "Groq Caption QA",
            progress: 65,
        },
        {
            label: "Rendering Export",
            progress: 90,
        },
    ];

    const stageMap = {
        UPLOADING: 0,
        BLURRING: 1,
        TRANSCRIBING: 2,
        PROCESSING_SUBTITLES: 3,
        WAITING_FOR_REVIEW: 3,
        RENDERING: 4,
        FINISHED: 5,
    };
    
    const [currentStage, setCurrentStage] = useState(0);

    const reviewRef = useRef(null);

    const downloadRef = useRef(null);

    function handleFile(event) {
        const selected = event.target.files?.[0];

        if (selected) {
            setFile(selected);
        }
    }

    function handleIntro(event) {
        const selected = event.target.files?.[0];

        if (selected) {
            setIntroVideo(selected);
        }
    }

    async function pollJob(jobId) {

        try {
    
            const response = await api.get(`/status/${jobId}`);
    
            const data = response.data;
    
            setJob(data);
            
            setCurrentStage(stageMap[data.stage] ?? 0);

            setReviewGroups(data.review_groups ?? []);

            if (data.download_url) {
                setDownloadUrl(data.download_url);
            }

            if (data.status === "FAILED") {

                alert(data.error);
            
            }

            if (
                data.status === "COMPLETED" ||
                data.status === "FAILED"
            ) {
                console.log("Stopping polling...");
                localStorage.removeItem("activeJob");
                clearInterval(pollingRef.current);
            
            }
    
        } catch (error) {
    
            console.error(error);
    
        }
    
    }

    async function uploadVideo() {
        if (!file) return;

        const formData = new FormData();

        formData.append("video", file);

        if (introVideo) {
            formData.append("intro_video", introVideo);
        }

        try {

            setLoading(true);

            const response = await api.post("/process", formData);

            setJob(response.data);

            localStorage.setItem(
                "activeJob",
                response.data.job_id
            );

            if (pollingRef.current) {

                clearInterval(pollingRef.current);
            
            }
            
            pollJob(response.data.job_id);
            
            pollingRef.current = setInterval(() => {
            
                pollJob(response.data.job_id);
            
            }, 2000);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    async function applyCorrection() {

        if (!job || reviewGroups.length === 0) return;

        try {

            setLoading(true);

            const response = await api.post("/review", {
                job_id: job.job_id,
                group_id: reviewGroups[0].id,
                corrected_text: correctedText,
            });

            console.log("Review response:", response.data);

            setCorrectedText("");
            
            setReviewGroups((prev) => prev.slice(1));
            
            if (response.data.remaining_reviews === 0) {
                setDownloadUrl(response.data.download_url);
            }
        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    }
    
    useEffect(() => {

        if (
            reviewGroups.length > 0 &&
            !hasScrolledToReview.current
        ) {
    
            reviewRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
    
            hasScrolledToReview.current = true;
        }
    
        if (reviewGroups.length === 0) {
            hasScrolledToReview.current = false;
        }
    
    }, [reviewGroups]);

    useEffect(() => {

        if (downloadUrl) {

            downloadRef.current?.scrollIntoView({

                behavior: "smooth",

                block: "center",

            });

        }

    }, [downloadUrl]);

    useEffect(() => {

        return () => {
    
            if (pollingRef.current) {
    
                clearInterval(pollingRef.current);
    
            }
    
        };
    
    }, []);

    useEffect(() => {

        const jobId = localStorage.getItem("activeJob");
    
        if (!jobId) return;
    
        pollJob(jobId);
    
        pollingRef.current = setInterval(() => {
    
            pollJob(jobId);
    
        }, 2000);
    
    }, []);

    return (
        <Container>

            <div className="grid gap-6 xl:grid-cols-12">

                <Card className="col-span-12 xl:col-span-4">

                    <UploadCard
                        inputRef={inputRef}
                        introInputRef={introInputRef}
                        file={file}
                        introVideo={introVideo}
                        handleFile={handleFile}
                        handleIntro={handleIntro}
                        uploadVideo={uploadVideo}
                        loading={loading || isProcessing}
                    />

                </Card>

                <Card className="col-span-12 xl:col-span-8">

                    <VideoPreview
                        file={file}
                        loading={loading || isProcessing}
                        currentStage={currentStage}
                        processingStages={processingStages}
                        isProcessing={isProcessing}
                    />

                </Card>

                <Card className="col-span-12 xl:col-span-4">

                    <PipelineCard
                        loading={loading || isProcessing}
                        reviewGroups={reviewGroups}
                        downloadUrl={downloadUrl}
                    />

                </Card>

                <div ref={reviewRef} className="col-span-12 xl:col-span-8">

                    <Card>

                        <ReviewPanel
                            reviewGroups={reviewGroups}
                            correctedText={correctedText}
                            setCorrectedText={setCorrectedText}
                            applyCorrection={applyCorrection}
                            loading={loading || isProcessing}
                        />

                    </Card>

                </div>

                <div ref={downloadRef} className="col-span-12">

                    <Card>

                        <DownloadCard
                            downloadUrl={downloadUrl}
                        />

                    </Card>

                </div>

            </div>

        </Container>
    );
}

export default WorkspaceGrid;