import { CheckCircle2 } from "lucide-react";

function PreviewHeader({ file }) {
    return (
        <div className="flex items-start justify-between gap-4">

            <div>

                <p className="text-sm font-semibold tracking-wide text-violet-400">
                    PREVIEW
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                    Video Preview
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    Preview your uploaded video before running the AI pipeline.
                </p>

            </div>

            {file && (

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

                    <CheckCircle2
                        size={16}
                        className="text-emerald-400"
                    />

                    <span className="text-sm font-medium text-emerald-300">
                        Uploaded
                    </span>

                </div>

            )}

        </div>
    );
}

export default PreviewHeader;