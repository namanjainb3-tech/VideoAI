import { motion } from "framer-motion";

function TypingIndicator() {

    return (

        <div className="flex justify-start">

            <div
                className="
                    rounded-[26px]
                    border
                    border-white/10
                    bg-slate-900/60
                    backdrop-blur-xl

                    px-5
                    py-4
                "
            >

                <div className="mb-3 flex items-center gap-2">

                    <div
                        className="
                            h-7
                            w-7

                            rounded-lg

                            bg-gradient-to-br
                            from-violet-500
                            to-cyan-500
                        "
                    />

                    <span
                        className="
                            text-sm
                            font-semibold
                            text-violet-300
                        "
                    >

                        Kitu

                    </span>

                </div>

                <div className="flex gap-2">

                    {[0,1,2].map((dot) => (

                        <motion.div
                            key={dot}
                            animate={{
                                y:[0,-5,0],
                                opacity:[.35,1,.35]
                            }}
                            transition={{
                                repeat:Infinity,
                                duration:.8,
                                delay:dot*.15
                            }}
                            className="
                                h-2.5
                                w-2.5

                                rounded-full

                                bg-violet-400
                            "
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

export default TypingIndicator;