import { motion } from "framer-motion";

function MovingPacket() {
    return (
        <motion.div
            animate={{
                x: [
                    0,
                    175,
                    350,
                    525,
                    700,
                ],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
            }}
            className="
                absolute
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                shadow-[0_0_25px_rgba(56,189,248,.9)]
            "
        />
    );
}

export default MovingPacket;