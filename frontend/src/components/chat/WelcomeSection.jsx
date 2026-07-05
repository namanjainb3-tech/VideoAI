import { motion } from "framer-motion";
import { Bot } from "lucide-react";

function WelcomeSection() {
    return (
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-5 text-center sm:px-6 sm:py-8">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >

                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />

                <motion.div
                    animate={{
                        y: [0, -8, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="
                        relative
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-violet-500
                        via-fuchsia-500
                        to-cyan-500

                        shadow-[0_0_40px_rgba(139,92,246,.35)]

                        sm:h-24
                        sm:w-24
                        lg:h-28
                        lg:w-28
                    "
                >

                    <Bot
                        className="text-white"
                        size={40}
                    />

                </motion.div>

            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .1 }}
                className="
                    mt-8
                    text-3xl
                    font-black
                    tracking-tight
                    text-white

                    sm:text-5xl
                "
            >

                Hello 👋

            </motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className="
                    mt-3
                    text-xl
                    font-semibold
                    text-violet-300

                    sm:text-2xl
                "
            >

                I'm Kitu.

            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .3 }}
                className="
                    mt-6
                    max-w-2xl

                    text-sm
                    leading-7
                    text-slate-400

                    sm:text-base
                    sm:leading-8

                    lg:text-lg
                "
            >

                Your intelligent AI assistant for <span className="font-semibold text-white">VideoAI</span>.

                <br />

                I can help you understand the complete AI workflow,
                improve captions,
                troubleshoot problems,
                explain every feature,
                and guide you through your video processing journey.

            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .45 }}
                className="
                    mt-8

                    rounded-full

                    border
                    border-violet-500/20

                    bg-violet-500/10

                    px-5
                    py-2

                    text-sm

                    text-violet-300
                "
            >

                Ask a question below or choose one of the quick actions.

            </motion.div>

        </section>
    );
}

export default WelcomeSection;