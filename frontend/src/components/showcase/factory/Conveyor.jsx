import { motion } from "framer-motion";

function Conveyor() {
    return (
        <div className="relative mt-10">

            <div
                className="
                    relative
                    h-16
                    overflow-hidden
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-[#111827]
                    shadow-[inset_0_0_30px_rgba(0,0,0,.55)]
                "
            >

                <motion.div
                    animate={{
                        x: [-80, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        gap-8
                        pl-6
                    "
                >

                    {Array.from({ length: 35 }).map((_, i) => (

                        <div
                            key={i}
                            className="
                                h-3
                                w-3
                                rotate-45
                                border-r-2
                                border-t-2
                                border-cyan-400/70
                            "
                        />

                    ))}

                </motion.div>

                <motion.div
                    animate={{
                        x: [
                            0,
                            760,
                            0,
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        left-2
                        top-1/2
                        flex
                        h-12
                        w-24
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        via-fuchsia-500
                        to-cyan-400
                        shadow-[0_0_35px_rgba(34,211,238,.8)]
                    "
                >

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                        }}
                        className="
                            h-5
                            w-5
                            rounded-full
                            bg-white
                        "
                    />

                </motion.div>

            </div>

        </div>
    );
}

export default Conveyor;