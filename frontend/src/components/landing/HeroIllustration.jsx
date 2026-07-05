import { motion } from "framer-motion";

function HeroIllustration() {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

            <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.28 }}
                transition={{ duration: 1.2 }}
                viewBox="0 0 1200 800"
                className="w-[1700px] max-w-none"
            >

                <defs>

                    <linearGradient
                        id="hero-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >

                        <stop
                            offset="0%"
                            stopColor="#8B5CF6"
                        />

                        <stop
                            offset="50%"
                            stopColor="#A855F7"
                        />

                        <stop
                            offset="100%"
                            stopColor="#22D3EE"
                        />

                    </linearGradient>

                </defs>

                <motion.path
                    animate={{
                        d: [
                            "M-100 580 C180 450 280 300 610 300",
                            "M-100 600 C180 470 300 320 610 300",
                            "M-100 580 C180 450 280 300 610 300",
                        ],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    d="M-100 580 C180 450 280 300 610 300"
                    stroke="url(#hero-gradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity=".35"
                />

                <motion.path
                    animate={{
                        d: [
                            "M-80 640 C220 500 320 360 620 330",
                            "M-80 660 C220 520 340 380 620 330",
                            "M-80 640 C220 500 320 360 620 330",
                        ],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    d="M-80 640 C220 500 320 360 620 330"
                    stroke="url(#hero-gradient)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity=".22"
                />

                <motion.path
                    animate={{
                        d: [
                            "M1300 220 C980 330 920 470 610 470",
                            "M1300 200 C980 320 890 460 610 470",
                            "M1300 220 C980 330 920 470 610 470",
                        ],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    d="M1300 220 C980 330 920 470 610 470"
                    stroke="url(#hero-gradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity=".32"
                />

                <motion.path
                    animate={{
                        d: [
                            "M1260 170 C940 300 860 420 610 440",
                            "M1260 150 C930 280 840 410 610 440",
                            "M1260 170 C940 300 860 420 610 440",
                        ],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    d="M1260 170 C940 300 860 420 610 440"
                    stroke="url(#hero-gradient)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity=".20"
                />

            </motion.svg>

        </div>
    );
}

export default HeroIllustration;