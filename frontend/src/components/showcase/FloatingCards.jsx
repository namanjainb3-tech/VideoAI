import { motion } from "framer-motion";
import {
    Sparkles,
    Captions,
    BrainCircuit,
    Download,
} from "lucide-react";

const cards = [
    {
        icon: Sparkles,
        title: "AI Blur",
        subtitle: "Background Enhanced",
        color: "text-violet-300",
        className: `
            -left-8
            top-0
            hidden
            lg:flex
        `,
        duration: 5,
    },
    {
        icon: Captions,
        title: "128 Captions",
        subtitle: "Whisper Generated",
        color: "text-cyan-300",
        className: `
            -right-8
            top-15
            hidden
            lg:flex
        `,
        duration: 6,
    },
    {
        icon: BrainCircuit,
        title: "Groq Review",
        subtitle: "QA Passed",
        color: "text-emerald-300",
        className: `
            left-12
            -bottom-8
            hidden
            lg:flex
        `,
        duration: 5.5,
    },
    {
        icon: Download,
        title: "4K Export",
        subtitle: "Ready",
        color: "text-orange-300",
        className: `
            right-12
            -bottom-10
            hidden
            lg:flex
        `,
        duration: 6.5,
    },
];

function FloatingCards() {
    return (
        <>
            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <motion.div
                        key={card.title}
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: card.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`
                            absolute
                            z-30
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0B1220]/80
                            px-4
                            py-3
                            backdrop-blur-2xl
                            shadow-[0_10px_40px_rgba(0,0,0,.35)]
                            ${card.className}
                        `}
                    >

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
                                className={card.color}
                            />

                        </div>

                        <div>

                            <h4 className="text-sm font-semibold text-white">

                                {card.title}

                            </h4>

                            <p className="text-xs text-slate-500">

                                {card.subtitle}

                            </p>

                        </div>

                    </motion.div>

                );

            })}
        </>
    );
}

export default FloatingCards;