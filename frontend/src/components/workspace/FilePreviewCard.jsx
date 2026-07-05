import { CheckCircle2, FileVideo } from "lucide-react";

function FilePreviewCard({ file }) {
    if (!file) return null;

    return (
        <div
            className="
                mt-5
                rounded-2xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                p-4
            "
        >
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-emerald-500/15
                        "
                    >
                        <FileVideo
                            size={22}
                            className="text-emerald-400"
                        />
                    </div>

                    <div>

                        <h4 className="font-medium text-white break-all">
                            {file.name}
                        </h4>

                        <p className="text-sm text-slate-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                    </div>

                </div>

                <CheckCircle2
                    className="text-emerald-400"
                    size={22}
                />

            </div>
        </div>
    );
}

export default FilePreviewCard;