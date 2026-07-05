import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

function UploadZone({
    inputRef,
    file,
    handleFile,
}) {
    const [dragging, setDragging] = useState(false);

    function onDrop(e) {
        e.preventDefault();
        setDragging(false);

        const dropped = e.dataTransfer.files?.[0];

        if (!dropped) return;

        handleFile({
            target: {
                files: [dropped],
            },
        });
    }

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => inputRef.current.click()}
                onDrop={onDrop}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                className={`
                    group
                    cursor-pointer
                    rounded-3xl
                    border-2
                    border-dashed
                    p-10
                    transition-all
                    duration-300

                    ${
                        dragging
                            ? "border-violet-500 bg-violet-500/10"
                            : "border-white/10 bg-white/[0.03] hover:border-violet-500/30 hover:bg-white/[0.05]"
                    }
                `}
            >
                <div className="flex flex-col items-center text-center">

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-violet-500/10
                            transition
                            group-hover:scale-105
                        "
                    >
                        <UploadCloud
                            size={30}
                            className="text-violet-400"
                        />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                        {file
                            ? "Replace Video"
                            : "Upload Your Video"}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                        Drag & drop your MP4 video here,
                        or click to browse your files.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">

                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                            MP4
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                            AI Ready
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                            Max 500 MB
                        </span>

                    </div>

                </div>
            </motion.div>

            <input
                ref={inputRef}
                type="file"
                accept="video/mp4"
                onChange={handleFile}
                className="hidden"
            />
        </>
    );
}

export default UploadZone;