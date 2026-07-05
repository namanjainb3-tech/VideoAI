import {
    MonitorSmartphone,
    Server,
    Cpu,
    Upload,
    ScanFace,
    Captions,
    BadgeCheck,
    Film,
    Download,
} from "lucide-react";
import { motion } from "framer-motion";

import AppLayout from "../components/layout/AppLayout";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

const stacks = [
    {
        icon: MonitorSmartphone,
        title: "Frontend",
        color: "text-cyan-400",
        tech: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Axios",
        ],
    },
    {
        icon: Server,
        title: "Backend",
        color: "text-emerald-400",
        tech: [
            "Flask",
            "Python",
            "REST APIs",
        ],
    },
    {
        icon: Cpu,
        title: "AI Pipeline",
        color: "text-violet-400",
        tech: [
            "Whisper",
            "Groq",
            "FFmpeg",
            "OpenCV",
        ],
    },
];

const pipeline = [
    {
        icon: Upload,
        title: "Upload",
    },
    {
        icon: ScanFace,
        title: "Background Blur",
    },
    {
        icon: Captions,
        title: "Caption Generation",
    },
    {
        icon: BadgeCheck,
        title: "AI Review",
    },
    {
        icon: Film,
        title: "Rendering",
    },
    {
        icon: Download,
        title: "Download",
    },
];

function Technology() {
    return (
        <>
            <AppLayout>
    
                <PageHeader
                    title="Technology Stack"
                    subtitle="Built with a modern frontend, a lightweight Flask backend, and a powerful AI processing pipeline to deliver professional video enhancement."
                />
    
                <section className="pb-24">
    
                    <Container>
        
                        <div className="grid gap-6 lg:grid-cols-3">
    
                            {stacks.map((stack, index) => {
    
                                const Icon = stack.icon;
    
                                return (
    
                                    <motion.div
                                        key={stack.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: .45,
                                            delay: index * .1,
                                        }}
                                    >
    
                                        <Card className="group h-full border border-white/10 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,.15)]">
    
                                            <div className="flex items-center gap-4">
    
                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
    
                                                    <Icon
                                                        size={30}
                                                        className={stack.color}
                                                    />
    
                                                </div>
    
                                                <div>
    
                                                    <h2 className="text-2xl font-semibold text-white">
                                                        {stack.title}
                                                    </h2>
    
                                                    <p className="text-sm text-slate-400">
                                                        Core Technologies
                                                    </p>
    
                                                </div>
    
                                            </div>
    
                                            <div className="mt-8 flex flex-wrap gap-3">
    
                                                {stack.tech.map((item) => (
    
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                                                    >
                                                        {item}
                                                    </span>
    
                                                ))}
    
                                            </div>
    
                                        </Card>
    
                                    </motion.div>
    
                                );
    
                            })}
    
                        </div>
        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .4 }}
                            className="mt-20"
                        >
    
                            <h2 className="text-center text-4xl font-bold text-white">
    
                                AI Processing Pipeline
    
                            </h2>
    
                            <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
    
                                Every uploaded video passes through a carefully
                                designed AI workflow before the final export.
    
                            </p>
    
                            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    
                                {pipeline.map((step, index) => {
    
                                    const Icon = step.icon;
    
                                    return (
    
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: .5 + index * .08,
                                            }}
                                        >
    
                                            <Card className="group flex items-center gap-5 border border-white/10 bg-slate-900/40 p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/70">
    
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 transition duration-300 group-hover:scale-110">
    
                                                    <Icon
                                                        size={26}
                                                        className="text-violet-400"
                                                    />
    
                                                </div>
    
                                                <div>
    
                                                    <p className="text-xs uppercase tracking-wider text-slate-500">
    
                                                        Step {index + 1}
    
                                                    </p>
    
                                                    <h3 className="mt-1 text-lg font-semibold text-white">
    
                                                        {step.title}
    
                                                    </h3>
    
                                                </div>
    
                                            </Card>
    
                                        </motion.div>
    
                                    );
    
                                })}
    
                            </div>
    
                        </motion.div>
        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .9 }}
                            className="mt-20"
                        >
    
                            <Card className="border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-slate-900/70 to-slate-950 p-10">
    
                                <h2 className="text-3xl font-bold">
    
                                    Built for Modern AI Workflows
    
                                </h2>
    
                                <p className="mt-4 max-w-3xl leading-8 text-slate-400">
    
                                    VideoAI combines a responsive React frontend,
                                    Flask backend, and multiple AI models into one
                                    seamless workflow. Every stage—from upload to
                                    rendering—is designed for speed, accuracy, and
                                    a smooth user experience.
    
                                </p>
    
                            </Card>
    
                        </motion.div>
    
                    </Container>
    
                </section>
    
            </AppLayout>
    
            <Footer />
    
        </>
    );
}
    
export default Technology;


