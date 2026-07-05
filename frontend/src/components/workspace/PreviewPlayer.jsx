import { motion } from "framer-motion";
import ProcessingOverlay from "./ProcessingOverlay";
import {
    Film,
    Loader2,
} from "lucide-react";
import PreviewFooter from "./PreviewFooter";

function PreviewPlayer({
    file,
    previewUrl,
    loading,
    currentStage,
    processingStages,
    isProcessing,
}) {

    const current =
    currentStage >= processingStages.length
        ? {
              label: "Completed",
              progress: 100,
          }
        : processingStages[currentStage];

        if (!file) {

            if (isProcessing) {

                return (
            
                    <ProcessingOverlay
                        current={current}
                    />
            
                );
            
            }
        
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
                        border-dashed
                        border-white/10
                        bg-[#0F172A]/50
                    "
                >
        
                    <Film
                        size={60}
                        className="text-slate-600"
                    />
        
                    <h3 className="mt-6 text-2xl font-semibold text-white">
        
                        No Video Selected
        
                    </h3>
        
                    <p className="mt-3 max-w-md text-center leading-7 text-slate-500">
        
                        Upload a video from the Upload panel to instantly
                        preview it here before AI processing begins.
        
                    </p>
        
                </div>
        
            );
        
        }

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 10,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 0.35,
            }}

            className="
                rounded-3xl
                border
                border-white/10
                bg-[#0B1220]
                overflow-hidden
            "

        >

            <div className="relative">

                <video

                    src={previewUrl}

                    controls

                    muted

                    playsInline

                    className="
                        w-full
                        max-h-[620px]
                        bg-black
                        object-contain

                        sm:max-h-[520px]
                        md:max-h-[500px]
                        lg:max-h-[520px]
                        xl:max-h-[440px]
                    "

                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-24
                        bg-gradient-to-t
                        from-black/40
                        to-transparent
                    "
                />

                {loading && (

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            flex-col
                            items-center
                            justify-center
                            bg-black/70
                            backdrop-blur-sm
                        "
                    >

                        <Loader2
                            size={42}
                            className="animate-spin text-violet-400"
                        />

                        <h4 className="mt-5 text-xl font-semibold text-white">

                            AI Processing

                        </h4>

                        <p className="
                            mt-2
                            max-w-[220px]
                            text-center
                            text-sm
                            leading-6
                            text-slate-300
                            sm:max-w-xs
                        ">

                            Running your video through the AI pipeline...

                        </p>

                    </div>

                )}

            </div>

            <PreviewFooter
                file={file}
                current={current}
                loading={loading}
            />
            
        </motion.div>

    );

}

export default PreviewPlayer;