import { motion } from "framer-motion";
import AiFactory from "./factory/AiFactory";
import Container from "../ui/Container";
import VideoPlayer from "./VideoPlayer";
import PipelinePanel from "./PipelinePanel";
import FloatingCards from "./FloatingCards";

function ProductShowcase() {
    return (
        <section
            className="
                relative
                z-20
                -mt-40
                pb-24

                lg:-mt-56
                lg:pb-32
            "
        >
            <Container>

                <div className="relative">

                    <FloatingCards />

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: .7,
                        }}
                        className="
                            overflow-hidden
                            rounded-[34px]
                            border
                            border-white/10
                            bg-[#0B1220]/80
                            backdrop-blur-2xl
                            shadow-[0_40px_120px_rgba(0,0,0,.45)]
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-white/10
                                px-6
                                py-4
                            "
                        >

                            <div className="flex gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-500" />

                                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                                <div className="h-3 w-3 rounded-full bg-emerald-500" />

                            </div>

                            <div
                                className="
                                    rounded-full
                                    border
                                    border-violet-500/20
                                    bg-violet-500/10
                                    px-4
                                    py-1
                                    text-xs
                                    font-medium
                                    text-violet-300
                                "
                            >
                                VideoAI Workspace
                            </div>

                        </div>

                        <div
                            className="
                                grid
                                gap-8
                                p-6
                                lg:grid-cols-[1.6fr_.9fr]
                                lg:items-start
                            "
                        >

                            <div className="space-y-8">

                                <VideoPlayer />

                                <AiFactory />

                            </div>

                            <PipelinePanel />

                        </div>

                    </motion.div>

                </div>

            </Container>

        </section>
    );
}

export default ProductShowcase;