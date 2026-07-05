import { motion } from "framer-motion";

function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040816]">

            <div
                className="
                    absolute
                    left-1/2
                    top-[18%]
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[180px]
                "
            />

            <motion.div
                animate={{
                    x: [0, 35, 0],
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -left-56
                    top-20
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-violet-600/12
                    blur-[140px]
                "
            />

            <motion.div
                animate={{
                    x: [0, -35, 0],
                    y: [0, 25, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-56
                    bottom-20
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[150px]
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.05]
                    bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                    bg-[size:72px_72px]
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.025]
                    [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
                    [background-size:26px_26px]
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_45%,rgba(4,8,22,.92))]
                "
            />

        </div>
    );
}

export default Background;