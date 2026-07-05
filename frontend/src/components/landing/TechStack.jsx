import { motion } from "framer-motion";

const technologies = [
    "Whisper",
    "Groq",
    "OpenCV",
    "RVM",
    "Flask",
    "React",
];

function TechStack() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-28"
        >
            <div className="mx-auto max-w-6xl">

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="py-12">

                    <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">

                        POWERING EVERY VIDEO WITH

                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">

                        {technologies.map((tech, index) => (

                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -2,
                                }}
                                className="text-lg font-semibold tracking-tight text-slate-300 transition hover:text-white"
                            >

                                {tech}

                            </motion.div>

                        ))}

                    </div>

                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            </div>
        </motion.section>
    );
}

export default TechStack;