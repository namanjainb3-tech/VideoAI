import {
    Sparkles,
    Subtitles,
    ScanSearch,
    Wand2,
    Download,
    Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

import AppLayout from "../components/layout/AppLayout";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

const heroFeatures = [
    {
        icon: Sparkles,
        badge: "AI Powered",
        title: "AI Background Blur",
        description:
            "Automatically detect subjects and create beautiful cinematic background blur while preserving facial details and overall video quality.",
    },
    {
        icon: Subtitles,
        badge: "Core Feature",
        title: "Smart Captions",
        description:
            "Generate synchronized captions using Whisper AI with accurate timings and seamless subtitle rendering.",
    },
];

const features = [
    {
        icon: ScanSearch,
        title: "Caption Review",
        description:
            "Review AI-generated captions before exporting to ensure perfect quality.",
    },
    {
        icon: Wand2,
        title: "AI Enhancement",
        description:
            "Run multiple AI models together through a seamless automated processing pipeline.",
    },
    {
        icon: Download,
        title: "One-Click Export",
        description:
            "Download your enhanced video immediately after processing finishes.",
    },
    {
        icon: Smartphone,
        title: "Responsive Workspace",
        description:
            "Optimized experience across desktop, tablet and mobile devices.",
    },
];

function Features() {
    return (
        <>
            <AppLayout>
    
                <PageHeader
                    title="Powerful AI Features"
                    subtitle="Everything you need to transform ordinary videos into polished, professional content with an intelligent AI-powered workflow."
                />
    
                <section className="pb-24">
    
                    <Container>
        
                        <div className="grid gap-6 lg:grid-cols-2">
    
                            {heroFeatures.map((feature, index) => {
    
                                const Icon = feature.icon;
    
                                return (
    
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: .45,
                                            delay: index * .12,
                                        }}
                                    >
    
                                        <Card className="group h-full border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900/70 to-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_0_45px_rgba(139,92,246,.18)]">
    
                                            <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-violet-300">
    
                                                {feature.badge}
    
                                            </span>
    
                                            <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 ring-1 ring-violet-500/30 transition duration-300 group-hover:scale-110">
    
                                                <Icon
                                                    size={38}
                                                    className="text-violet-400"
                                                />
    
                                            </div>
    
                                            <h2 className="mt-8 text-3xl font-bold text-white">
    
                                                {feature.title}
    
                                            </h2>
    
                                            <p className="mt-5 text-base leading-8 text-slate-400">
    
                                                {feature.description}
    
                                            </p>
    
                                        </Card>
    
                                    </motion.div>
    
                                );
    
                            })}
    
                        </div>
        
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
    
                            {features.map((feature, index) => {
    
                                const Icon = feature.icon;
    
                                return (
    
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: .4,
                                            delay: .2 + index * .08,
                                        }}
                                    >
    
                                        <Card className="group flex h-full flex-col border border-white/10 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-slate-900/70 hover:shadow-[0_0_35px_rgba(139,92,246,.12)]">
    
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 ring-1 ring-violet-500/20 transition duration-300 group-hover:scale-110">
    
                                                <Icon
                                                    size={30}
                                                    className="text-violet-400"
                                                />
    
                                            </div>
    
                                            <h3 className="mt-6 text-2xl font-semibold text-white">
    
                                                {feature.title}
    
                                            </h3>
    
                                            <p className="mt-4 flex-1 leading-7 text-slate-400">
    
                                                {feature.description}
    
                                            </p>
    
                                        </Card>
    
                                    </motion.div>
    
                                );
    
                            })}
    
                        </div>
    
                    </Container>
    
                </section>
    
            </AppLayout>
    
            <Footer />
    
        </>
    );
}

export default Features;