import {
    BrainCircuit,
    Captions,
    CheckCircle2,
    Clock3,
    Loader2,
    Upload,
    Video,
    Wand2,
    AlertTriangle,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Upload",
        subtitle: "Video received",
        icon: Upload,
    },
    {
        id: 2,
        title: "Background Blur",
        subtitle: "AI segmentation",
        icon: Wand2,
    },
    {
        id: 3,
        title: "Whisper",
        subtitle: "Speech transcription",
        icon: Captions,
    },
    {
        id: 4,
        title: "Groq Review",
        subtitle: "Caption validation",
        icon: BrainCircuit,
    },
    {
        id: 5,
        title: "Rendering",
        subtitle: "Generating final export",
        icon: Video,
    },
];

function PipelineCard({
    loading,
    reviewGroups,
    downloadUrl,
}) {

    function getStatus(index) {

        if (downloadUrl)
            return "completed";

        if (reviewGroups.length > 0) {

            if (index < 4)
                return "completed";

            if (index === 4)
                return "review";
        }

        if (loading) {

            return "active";
        }

        return "idle";
    }

    return (

        <div className="h-full p-8">

            <div>

                <p className="text-sm font-medium text-violet-400">

                    PIPELINE

                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">

                    AI Processing

                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                    Monitor every stage of your AI workflow in real time.

                </p>

            </div>

            <div className="relative mt-10">

                <div className="absolute left-[21px] top-4 bottom-4 w-px bg-white/10" />

                <div className="space-y-6">

                    {steps.map((step, index) => {

                        const status = getStatus(index);

                        const Icon = step.icon;

                        return (

                            <div
                                key={step.id}
                                className="relative flex gap-5"
                            >

                                <div
                                    className={`
                                        relative z-10
                                        flex h-11 w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border

                                        ${
                                            status === "completed"
                                                ? "border-emerald-500/30 bg-emerald-500/10"
                                                : status === "active"
                                                ? "border-violet-500/30 bg-violet-500/10"
                                                : status === "review"
                                                ? "border-yellow-500/30 bg-yellow-500/10"
                                                : "border-white/10 bg-white/5"
                                        }
                                    `}
                                >

                                    {status === "completed" ? (

                                        <CheckCircle2
                                            size={18}
                                            className="text-emerald-400"
                                        />

                                    ) : status === "active" ? (

                                        <Loader2
                                            size={18}
                                            className="animate-spin text-violet-400"
                                        />

                                    ) : status === "review" ? (

                                        <AlertTriangle
                                            size={18}
                                            className="text-yellow-400"
                                        />

                                    ) : (

                                        <Icon
                                            size={18}
                                            className="text-slate-500"
                                        />

                                    )}

                                </div>

                                <div className="flex-1">

                                    <div className="flex items-center justify-between">

                                        <h3 className="font-semibold text-white">

                                            {step.title}

                                        </h3>

                                        {status === "completed" && (

                                            <span className="text-xs font-medium text-emerald-400">

                                                Complete

                                            </span>

                                        )}

                                        {status === "active" && (

                                            <span className="text-xs font-medium text-violet-400">

                                                Running

                                            </span>

                                        )}

                                        {status === "review" && (

                                            <span className="text-xs font-medium text-yellow-400">

                                                Review Needed

                                            </span>

                                        )}

                                    </div>

                                    <p className="mt-1 text-sm text-slate-500">

                                        {step.subtitle}

                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

                {downloadUrl ? (

                    <div className="flex items-center gap-3">

                        <CheckCircle2 className="text-emerald-400" />

                        <div>

                            <p className="font-medium text-white">

                                Processing Complete

                            </p>

                            <p className="text-sm text-slate-400">

                                Your video is ready to download.

                            </p>

                        </div>

                    </div>

                ) : loading ? (

                    <div className="flex items-center gap-3">

                        <Loader2
                            className="animate-spin text-violet-400"
                        />

                        <div>

                            <p className="font-medium text-white">

                                AI Processing...

                            </p>

                            <p className="text-sm text-slate-400">

                                Please wait while the models finish.

                            </p>

                        </div>

                    </div>

                ) : reviewGroups.length > 0 ? (

                    <div className="flex items-center gap-3">

                        <AlertTriangle
                            className="text-yellow-400"
                        />

                        <div>

                            <p className="font-medium text-white">

                                Human Review Required

                            </p>

                            <p className="text-sm text-slate-400">

                                Correct the flagged captions to continue.

                            </p>

                        </div>

                    </div>

                ) : (

                    <div className="flex items-center gap-3">

                        <Clock3
                            className="text-slate-500"
                        />

                        <div>

                            <p className="font-medium text-white">

                                Waiting for Upload

                            </p>

                            <p className="text-sm text-slate-400">

                                Start by uploading a video.

                            </p>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

}

export default PipelineCard;