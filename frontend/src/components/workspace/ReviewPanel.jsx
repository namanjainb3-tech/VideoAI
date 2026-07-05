import { AlertTriangle, CheckCircle2 } from "lucide-react";

function ReviewPanel({
    reviewGroups,
    correctedText,
    setCorrectedText,
    applyCorrection,
    loading,
}) {
    if (!reviewGroups.length) {
        return (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center p-10 text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10">
                    <CheckCircle2
                        size={34}
                        className="text-violet-400"
                    />
                </div>

                <h2 className="mt-8 text-2xl font-bold text-white">
                    No Review Required
                </h2>

                <p className="mt-3 max-w-md text-slate-400 leading-7">
                    If Groq detects low-confidence captions,
                    they will appear here for manual review.
                </p>

            </div>
        );
    }

    const group = reviewGroups[0];

    return (
        <div className="p-8">

            <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <AlertTriangle
                        className="text-yellow-400"
                        size={22}
                    />

                </div>

                <div>

                    <p className="text-sm font-medium text-yellow-400">
                        REVIEW REQUIRED
                    </p>

                    <h2 className="text-2xl font-bold text-white">
                        Caption Correction
                    </h2>

                </div>

            </div>

            <div className="mt-10">

                <p className="mb-3 text-sm font-medium text-slate-400">
                    Original Caption
                </p>

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                    "
                >
                    <p className="leading-7 text-white">
                        {group.text}
                    </p>
                </div>

            </div>

            <div className="mt-8">

                <p className="mb-3 text-sm font-medium text-slate-400">
                    AI Detected Issues
                </p>

                <div className="space-y-3">

                    {group.issues.map((issue, index) => (

                        <div
                            key={index}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-red-500/10
                                bg-red-500/5
                                px-4
                                py-3
                            "
                        >

                            <div className="h-2 w-2 rounded-full bg-red-400" />

                            <span className="text-sm text-red-200">
                                {issue}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            <div className="mt-10">

                <p className="mb-3 text-sm font-medium text-slate-400">
                    Correct Caption
                </p>

                <textarea
                    value={correctedText}
                    onChange={(e) =>
                        setCorrectedText(e.target.value)
                    }
                    placeholder="Write the corrected caption..."
                    className="
                        h-36
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                        text-white
                        placeholder:text-slate-500
                        outline-none
                        transition
                        focus:border-violet-500/40
                    "
                />

            </div>

            <button
                disabled={loading}
                onClick={applyCorrection}
                className="
                    mt-8
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:scale-[1.01]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >

                {loading
                    ? "Applying..."
                    : "Apply Correction"}

            </button>

        </div>
    );
}

export default ReviewPanel;