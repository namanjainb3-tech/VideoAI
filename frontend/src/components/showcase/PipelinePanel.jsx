import { motion } from "framer-motion";
import {
    Upload,
    Wand2,
    Captions,
    BrainCircuit,
    UserCheck,
    Video,
    CheckCircle2,
} from "lucide-react";

const pipeline = [
    {
        title: "Upload",
        subtitle: "Video uploaded",
        icon: Upload,
        progress: 100,
        color: "from-cyan-500 to-sky-400",
    },
    {
        title: "Background Blur",
        subtitle: "AI segmentation complete",
        icon: Wand2,
        progress: 100,
        color: "from-violet-500 to-fuchsia-500",
    },
    {
        title: "Whisper Captions",
        subtitle: "128 captions generated",
        icon: Captions,
        progress: 100,
        color: "from-emerald-500 to-green-400",
    },
    {
        title: "Groq Review",
        subtitle: "Caption QA complete",
        icon: BrainCircuit,
        progress: 100,
        color: "from-orange-500 to-yellow-400",
    },
    {
        title: "Human Review",
        subtitle: "Optional corrections",
        icon: UserCheck,
        progress: 92,
        color: "from-pink-500 to-rose-400",
    },
    {
        title: "Rendering",
        subtitle: "Exporting final video",
        icon: Video,
        progress: 76,
        color: "from-violet-500 to-cyan-400",
    },
];

function PipelinePanel() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 30,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: .6,
            }}
        >
            <div className="mb-8">

                <p className="text-sm font-medium text-violet-400">
                    LIVE PIPELINE
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                    AI Processing
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                    Every stage runs automatically before your
                    production-ready export is generated.
                </p>

            </div>

            <div className="space-y-5">

                {pipeline.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <motion.div
                            key={item.title}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * .08,
                            }}
                            whileHover={{
                                y: -2,
                            }}
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-4
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-white/5
                                        "
                                    >

                                        <Icon
                                            size={18}
                                            className="text-violet-300"
                                        />

                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-white">

                                            {item.title}

                                        </h4>

                                        <p className="text-xs text-slate-500">

                                            {item.subtitle}

                                        </p>

                                    </div>

                                </div>

                                <CheckCircle2
                                    size={18}
                                    className="text-emerald-400"
                                />

                            </div>

                            <div className="mt-4">

                                <div className="mb-2 flex items-center justify-between">

                                    <span className="text-xs text-slate-500">

                                        Progress

                                    </span>

                                    <span className="text-xs text-slate-400">

                                        {item.progress}%

                                    </span>

                                </div>

                                <div className="h-2 rounded-full bg-white/5">

                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: `${item.progress}%`,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1.4,
                                            delay: index * .12,
                                        }}
                                        className={`
                                            h-full
                                            rounded-full
                                            bg-gradient-to-r
                                            ${item.color}
                                        `}
                                    />

                                </div>

                            </div>

                        </motion.div>

                    );

                })}

            </div>

            <div
                className="
                    mt-8
                    rounded-2xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    p-5
                "
            >

                <div className="flex items-center gap-3">

                    <CheckCircle2
                        className="text-emerald-400"
                        size={22}
                    />

                    <div>

                        <h4 className="font-semibold text-white">
                            Export Ready
                        </h4>

                        <p className="text-sm text-slate-400">
                            MP4 • 4K • Optimized for social platforms
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default PipelinePanel;