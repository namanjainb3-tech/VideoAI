import { motion } from "framer-motion";

function HeroVisual() {
    return (
        <>

            <div
                className="
                    absolute
                    left-1/2
                    top-20
                    h-[750px]
                    w-[750px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/8
                    blur-[170px]
                "
            />

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -left-44
                    top-24
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-violet-500/15
                    blur-[150px]
                "
            />

            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-44
                    bottom-10
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-cyan-500/15
                    blur-[150px]
                "
            />

            <div
                className="
                    absolute
                    left-1/2
                    top-36
                    h-[520px]
                    w-[520px]
                    -translate-x-1/2
                    rounded-full
                    border
                    border-white/[0.03]
                "
            />

            <div
                className="
                    absolute
                    left-1/2
                    top-44
                    h-[650px]
                    w-[650px]
                    -translate-x-1/2
                    rounded-full
                    border
                    border-white/[0.02]
                "
            />

            <motion.div
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    left-12
                    top-1/3
                    h-40
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-violet-400
                    to-transparent
                "
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    right-12
                    top-1/2
                    h-52
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-cyan-400
                    to-transparent
                "
            />

            {[
                "left-[18%] top-[28%]",
                "left-[28%] top-[62%]",
                "left-[74%] top-[22%]",
                "left-[82%] top-[58%]",
                "left-[58%] top-[18%]",
                "left-[40%] top-[74%]",
            ].map((position, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [0, -12, 0],
                        opacity: [0.25, 0.8, 0.25],
                    }}
                    transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                    }}
                    className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/50`}
                />
            ))}
        </>
    );
}

export default HeroVisual;