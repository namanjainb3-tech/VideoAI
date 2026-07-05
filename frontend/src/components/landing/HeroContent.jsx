import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DemoModal from "./DemoModal";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

function HeroContent() {
    const navigate = useNavigate();

    const [openDemo, setOpenDemo] = useState(false);

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
            >
                <Badge>
                    ✨ Powered by Whisper • Groq • OpenCV
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="
                    mt-8
                    max-w-5xl
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-white

                    sm:text-6xl

                    md:text-7xl

                    lg:text-[96px]
                "
            >
                Create

                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    Studio-Quality
                </span>

                <br />

                AI Videos.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="
                    mt-8
                    max-w-3xl
                    text-base
                    leading-8
                    text-slate-400

                    sm:text-lg

                    lg:text-xl
                "
            >
                Upload your footage once.

                VideoAI automatically performs AI background blur,
                speech transcription, caption quality review,
                intro merging and final rendering—

                giving you export-ready videos in minutes.
            </motion.p>

            {/* CTA */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                    mt-12
                    flex
                    w-full
                    max-w-xl
                    flex-col
                    gap-4

                    sm:flex-row
                    sm:justify-center
                "
            >

                <Button
                    onClick={() => navigate("/workspace")}
                    className="w-full sm:w-auto"
                >
                    Start Creating

                    <ArrowRight size={18} />
                </Button>

                <Button
                    variant="secondary"
                    onClick={() => setOpenDemo(true)}
                >
                    <PlayCircle />
                    Watch Demo
                </Button>

            </motion.div>

            <DemoModal
                open={openDemo}
                onClose={() => setOpenDemo(false)}
            />


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-10"
            >

                <p className="text-sm text-slate-500">

                    Trusted AI Pipeline • Whisper • Groq • Flask • OpenCV

                </p>

            </motion.div>

        </div>
    );
}

export default HeroContent;