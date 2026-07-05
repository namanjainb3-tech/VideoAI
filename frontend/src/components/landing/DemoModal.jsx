import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function DemoModal({ open, onClose }) {
    return (
        <AnimatePresence>

            {open && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
                >

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#08101f] shadow-2xl"
                    >


                        <button
                            onClick={onClose}
                            className="absolute right-5 top-5 z-10 rounded-xl border border-white/10 bg-black/40 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >

                            <X size={20} />

                        </button>


                        <div className="border-b border-white/10 p-8">

                            <h2 className="text-3xl font-bold text-white">

                            See VideoAI in Action

                            </h2>

                            <p className="mt-2 text-slate-400">

                            Experience the complete AI workflow—from upload and background blur to smart captions, quality review, and final export.

                            </p>

                        </div>


                        <div className="p-8">

                            <video
                                controls
                                autoPlay
                                playsInline
                                className="aspect-video w-full rounded-2xl border border-white/10 bg-black"
                            >

                                <source
                                    src="/demo.mp4"
                                    type="video/mp4"
                                />

                                Your browser does not support the video tag.

                            </video>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}

export default DemoModal;