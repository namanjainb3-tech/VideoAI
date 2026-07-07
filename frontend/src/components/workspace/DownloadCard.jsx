import {
    Download,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

function DownloadCard({ downloadUrl }) {
    const hasVideo = Boolean(downloadUrl);

    return (
        <div className="p-8">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-violet-400">
                        EXPORT
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                        Final Video
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Download your AI-enhanced production video after
                        processing completes.
                    </p>

                </div>

                {hasVideo && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                        <CheckCircle2
                            className="text-emerald-400"
                            size={22}
                        />
                    </div>
                )}

            </div>

            {!hasVideo ? (

                <div
                    className="
                        mt-10
                        flex
                        min-h-[220px]
                        flex-col
                        items-center
                        justify-center
                        rounded-3xl
                        border
                        border-dashed
                        border-white/10
                        bg-white/[0.03]
                        text-center
                    "
                >

                    <Sparkles
                        size={46}
                        className="text-violet-400"
                    />

                    <h3 className="mt-6 text-xl font-semibold text-white">
                        Waiting for AI Processing
                    </h3>

                    <p className="mt-3 max-w-md text-slate-400 leading-7">
                        Once rendering finishes, your final video
                        will appear here ready for download.
                    </p>

                </div>

            ) : (

                <div
                    className="
                        mt-10
                        rounded-3xl
                        border
                        border-emerald-500/20
                        bg-emerald-500/5
                        p-8
                    "
                >

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

                                <CheckCircle2
                                    size={16}
                                    className="text-emerald-400"
                                />

                                <span className="text-sm font-medium text-emerald-300">
                                    Render Complete
                                </span>

                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-white">
                                Your AI Video is Ready
                            </h3>

                            <p className="mt-3 max-w-lg text-slate-400">
                                The pipeline completed successfully.
                                Download your enhanced video below.
                            </p>

                        </div>

                        <a
                            href={`https://v5p3oy0ywlgkbb-5000.proxy.runpod.net/${downloadUrl}`}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                bg-gradient-to-r
                                from-violet-600
                                to-cyan-500
                                px-8
                                py-4
                                font-semibold
                                text-white
                                transition
                                duration-300
                                hover:scale-[1.02]
                            "
                        >

                            <Download size={20} />

                            Download Video

                        </a>

                    </div>

                </div>

            )}

        </div>
    );
}

export default DownloadCard;
