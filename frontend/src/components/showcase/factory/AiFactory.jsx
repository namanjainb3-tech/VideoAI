import Conveyor from "./Conveyor";
import {
    Upload,
    Wand2,
    Captions,
    BrainCircuit,
    Video,
} from "lucide-react";

const steps = [
    {
        icon: Upload,
        label: "Upload",
        color: "text-cyan-400",
    },
    {
        icon: Wand2,
        label: "Blur",
        color: "text-violet-400",
    },
    {
        icon: Captions,
        label: "Whisper",
        color: "text-emerald-400",
    },
    {
        icon: BrainCircuit,
        label: "Groq",
        color: "text-orange-400",
    },
    {
        icon: Video,
        label: "Render",
        color: "text-pink-400",
    },
];

function AiFactory() {
    return (
        <div
            className="
                hidden
                lg:block

                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-b
                from-[#111827]
                to-[#0B1220]

                p-8
            "
        >
            <p className="text-xs font-semibold tracking-[0.35em] text-violet-400">
                AI FACTORY
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
                Automatic Video Processing
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
                Every uploaded video travels through our intelligent
                processing line before becoming a production-ready export.
            </p>


            <div className="mt-8 flex items-center justify-between">

                {steps.map((step) => {

                    const Icon = step.icon;

                    return (

                        <div
                            key={step.label}
                            className="flex flex-col items-center gap-3"
                        >

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white/5
                                    border
                                    border-white/10
                                "
                            >

                                <Icon
                                    className={step.color}
                                    size={24}
                                />

                            </div>

                            <span className="text-xs text-slate-400">

                                {step.label}

                            </span>

                        </div>

                    );

                })}

            </div>

            <Conveyor />

            <div className="mt-6 flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">
                        Factory Status
                    </p>

                    <p className="mt-1 font-semibold text-emerald-400">
                        Online • Ready
                    </p>

                </div>

                <div className="text-right">

                    <p className="text-sm text-slate-500">
                        Avg Processing
                    </p>

                    <p className="mt-1 font-semibold text-white">
                        2–5 min
                    </p>

                </div>

            </div>

        </div>
    );
}

export default AiFactory;