import {
    FileVideo,
    PlayCircle,
} from "lucide-react";

function PreviewFooter({ 
    file,
    loading,
    current,
}) {
    if (!file) return null;

    return (
        <div
            className="
                mt-5
                rounded-3xl
                border
                border-white/10
                bg-[#0B1220]
                p-6
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-5

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-violet-500/10
                        "
                    >

                        <FileVideo
                            size={24}
                            className="text-violet-400"
                        />

                    </div>

                    <div>

                        <h3 className="break-all text-lg font-semibold text-white">

                            {file.name}

                        </h3>

                        <div
                            className="
                                mt-2
                                flex
                                flex-wrap
                                items-center
                                gap-2
                                text-sm
                                text-slate-400
                            "
                        >

                            <span>

                                {(file.size / 1024 / 1024).toFixed(2)} MB

                            </span>

                            <span className="text-slate-600">

                                •

                            </span>

                            <span>

                                MP4 Video

                            </span>

                            <span className="text-slate-600">

                                •

                            </span>

                            <span>

                                Local Upload

                            </span>

                        </div>

                    </div>

                </div>

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        self-start
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-4
                        py-2

                        lg:self-center
                    "
                >

                    <PlayCircle
                        size={18}
                        className="text-cyan-400"
                    />

                    <span
                        className="
                            text-sm
                            font-medium
                            text-cyan-300
                        "
                    >

                        Ready for AI Processing

                    </span>

                </div>

            </div>

            {loading && current && (

            <div className="mt-6">

                <div className="mb-3 flex items-center justify-between">

                    <span className="text-sm font-medium text-slate-300">

                        {current.label}

                    </span>

                    <span className="text-sm font-semibold text-white">

                        {current.progress}%

                    </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-violet-500
                            via-fuchsia-500
                            to-cyan-400
                            transition-all
                            duration-700
                        "
                        style={{
                            width: `${current.progress}%`,
                        }}
                    />

                </div>

            </div>

            )}

        </div>
    );
}

export default PreviewFooter;