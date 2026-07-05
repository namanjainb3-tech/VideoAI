import { useEffect, useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

import {
    Play,
    Clock3,
    Download,
    Wand2,
    Captions,
    BrainCircuit,
    CheckCircle2,
    Video,
} from "lucide-react";

const stages = [
    {
        label: "AI Background Blur",
        bubble: "Separating subject from background...",
        progress: 20,
        icon: Wand2,
        color: "text-violet-400",
    },
    {
        label: "Whisper Captions",
        bubble: "Generating subtitles...",
        progress: 42,
        icon: Captions,
        color: "text-emerald-400",
    },
    {
        label: "Groq Review",
        bubble: "Checking grammar & punctuation...",
        progress: 65,
        icon: BrainCircuit,
        color: "text-orange-400",
    },
    {
        label: "QA Passed",
        bubble: "Captions optimized successfully.",
        progress: 86,
        icon: CheckCircle2,
        color: "text-cyan-400",
    },
    {
        label: "Rendering Export",
        bubble: "Preparing final video...",
        progress: 100,
        icon: Video,
        color: "text-pink-400",
    },
];

function VideoPlayer() {

    const [stage, setStage] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setStage((prev) => (prev + 1) % stages.length);

        }, 2200);

        return () => clearInterval(interval);

    }, []);

    const current = stages[stage];

    const StageIcon = current.icon;

    return (

        <motion.div
            initial={{
                opacity: 0,
                x: -30,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: .6,
            }}
        >

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h3 className="text-lg font-semibold text-white">

                        public_speech.mp4

                    </h3>

                    <p className="mt-1 text-sm text-slate-500">

                        124 MB • Uploaded successfully

                    </p>

                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">

                    Ready

                </div>

            </div>

            <motion.div
                whileHover={{
                    y: -3,
                }}
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#111827]
                "
            >

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                        aspect-video
                        w-full
                        object-cover
                    "
                >
                    <source
                        src="/preview.mp4"
                        type="video/mp4"
                    />
                </video>

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/20
                        to-transparent
                    "
                />

                <div
                    className="
                        hidden
                        md:block

                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-violet-500/20
                        bg-black/40
                        px-3
                        py-1
                        backdrop-blur-xl
                    "
                >

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={current.label}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            transition={{
                                duration: .25,
                            }}
                            className="flex items-center gap-2"
                        >

                            <StageIcon
                                size={12}
                                className={current.color}
                            />

                            <span className="
                                text-[11px]
                                sm:text-xs
                                text-white
                            ">

                                {current.label}

                            </span>

                        </motion.div>

                    </AnimatePresence>

                </div>

                <div
                    className="
                        hidden
                        md:block

                        absolute
                        left-1/2
                        -translate-x-1/2
                        bottom-24

                        rounded-xl
                        border
                        border-white/10
                        bg-black/45
                        px-4
                        py-2
                        backdrop-blur-xl
                    "
                >

                    <AnimatePresence mode="wait">

                        <motion.p
                            key={current.bubble}
                            initial={{
                                opacity: 0,
                                y: 8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                            }}
                            transition={{
                                duration: .25,
                            }}
                            className="
                                text-center
                                text-[11px]
                                leading-relaxed
                                text-white

                                sm:text-sm
                            "
                        >

                            {current.bubble}

                        </motion.p>

                    </AnimatePresence>

                </div>

                <div
                    className="
                    hidden md:block
                    absolute
                    bottom-0
                    left-0
                    right-0
                
                    border-t
                    border-white/10
                    bg-black/55
                    backdrop-blur-xl
                
                    px-4
                    py-2
                
                    sm:p-
                "
                >

                    <div className="mb-3 flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <Clock3
                                size={15}
                                className="text-slate-400"
                            />

                            <span className="text-xs text-slate-400">

                                01:42

                            </span>

                        </div>

                        <span className="text-xs text-slate-400">

                            4K MP4

                        </span>

                    </div>

                    <div className="h-1.5 rounded-full bg-white/10">

                        <motion.div
                            animate={{
                                width: `${current.progress}%`,
                            }}
                            transition={{
                                duration: .7,
                            }}
                            className="
                                h-full
                                rounded-full
                                bg-gradient-to-r
                                from-violet-500
                                via-fuchsia-500
                                to-cyan-400
                            "
                        />

                    </div>

                </div>

            </motion.div>

            <div
                className="
                    mt-5
                    flex
                    flex-col
                    gap-4

                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >

                <div>

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-slate-500
                        "
                    >

                        Estimated Processing

                    </p>

                    <motion.h4
                        key={current.progress}
                        initial={{
                            opacity: 0,
                            y: 6,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: .3,
                        }}
                        className="
                            mt-2
                            text-xl
                            font-semibold
                            text-white
                        "
                    >

                        {current.progress}% Complete

                    </motion.h4>

                </div>

                <motion.button
                    whileHover={{
                        scale: 1.04,
                    }}
                    whileTap={{
                        scale: .98,
                    }}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2

                        rounded-xl

                        bg-gradient-to-r
                        from-violet-600
                        to-cyan-500

                        px-6
                        py-3

                        font-semibold
                        text-white

                        shadow-lg
                        shadow-cyan-500/10
                    "
                >

                    <Download size={18} />

                    Download Preview

                </motion.button>

            </div>

            </motion.div>

);

}

export default VideoPlayer;