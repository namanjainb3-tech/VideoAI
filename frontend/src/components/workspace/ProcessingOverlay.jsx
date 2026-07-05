import { Loader2 } from "lucide-react";

function ProcessingOverlay({
    current,
}) {

    return (

        <div
            className="
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/10
                bg-[#0B1220]
            "
        >

            <Loader2
                size={46}
                className="animate-spin text-violet-400"
            />

            <h3 className="mt-6 text-3xl font-semibold text-white">

                Video is processing

            </h3>

            <p className="mt-3 max-w-md text-center text-slate-400">

                Your AI job is still running in the background.

            </p>

            <div className="mt-10 w-80">

                <div className="flex justify-between text-sm text-slate-400">

                    <span>
                        {current.label}
                    </span>

                    <span>
                        {current.progress}%
                    </span>

                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">

                    <div
                        className="h-full rounded-full bg-violet-500 transition-all duration-700"
                        style={{
                            width: `${current.progress}%`,
                        }}
                    />

                </div>

            </div>

        </div>

    );

}

export default ProcessingOverlay;