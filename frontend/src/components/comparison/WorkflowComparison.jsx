import { motion } from "framer-motion";
import {
    Zap,
    BrainCircuit,
    Video,
} from "lucide-react";

const cards = [
    {
        icon: Zap,
        title: "Lightning Fast",
        value: "Under 5 Min",
        description: "Automatic processing from upload to export.",
        gradient: "from-violet-500 to-fuchsia-500",
        glow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,.35)]",
    },
    {
        icon: BrainCircuit,
        title: "AI Powered",
        value: "5 AI Models",
        description: "Whisper, Groq, OpenCV and more working together.",
        gradient: "from-cyan-500 to-blue-500",
        glow: "group-hover:shadow-[0_0_60px_rgba(34,211,238,.35)]",
    },
    {
        icon: Video,
        title: "Export Ready",
        value: "One Click",
        description: "Studio-quality MP4 ready to publish anywhere.",
        gradient: "from-emerald-500 to-teal-500",
        glow: "group-hover:shadow-[0_0_60px_rgba(16,185,129,.35)]",
    },
];

export default function FeatureStats() {
    return (
        <section className="py-10 lg:py-1">

            <div className="mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <p className="text-sm font-semibold tracking-[0.35em] text-violet-400 uppercase">

                        WHY VIDEOAI

                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">

                        Why creators choose{" "}

                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

                            VideoAI

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

                        Everything happens automatically so you can focus on creating,
                        not editing.

                    </p>

                </motion.div>


                <div className="mt-16 grid gap-8 md:grid-cols-3">

                    {cards.map((card, index) => {

                        const Icon = card.icon;

                        return (

                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[30px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-8
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-500
                                    ${card.glow}
                                `}
                            >

                                <div
                                    className={`
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        ${card.gradient}
                                        opacity-0
                                        blur-3xl
                                        transition
                                        duration-500
                                        group-hover:opacity-10
                                    `}
                                />

                                <div
                                    className={`
                                        inline-flex
                                        rounded-2xl
                                        bg-gradient-to-br
                                        ${card.gradient}
                                        p-4
                                    `}
                                >

                                    <Icon
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-white">

                                    {card.title}

                                </h3>


                                <p className="mt-4 text-4xl font-black text-white">

                                    {card.value}

                                </p>


                                <p className="mt-4 leading-7 text-slate-400">

                                    {card.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}