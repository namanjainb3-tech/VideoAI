import { ArrowLeft, Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ChatHeader({ onClearChat }) {

    const navigate = useNavigate();

    return (

        <motion.header

            initial={{
                opacity: 0,
                y: -20,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                py-4
            "
        >

            <button

                onClick={() => navigate("/")}

                className="
                    flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-white/10

                    bg-white/5

                    px-3
                    py-2

                    text-sm
                    text-slate-300

                    transition-all

                    hover:border-violet-500/30
                    hover:bg-white/10
                "
            >

                <ArrowLeft size={18} />

                <span className="hidden sm:block">

                    Back

                </span>

            </button>

            {/* Center */}

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-2xl

                        bg-gradient-to-br
                        from-violet-500
                        via-fuchsia-500
                        to-cyan-500

                        shadow-lg
                        shadow-violet-500/25
                    "
                >

                    <Bot
                        size={24}
                        className="text-white"
                    />

                </div>

                <div>

                    <h2 className="font-semibold text-white">

                        Kitu

                    </h2>

                    <div className="flex items-center gap-2">

                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>

                        <p className="text-xs text-slate-400">

                            AI Assistant • Online

                        </p>

                    </div>

                </div>

            </div>

            {/* New Conversation */}

            <button

                onClick={onClearChat}

                className="
                    flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-violet-500/20

                    bg-violet-500/10

                    px-3
                    py-2

                    text-sm
                    font-medium
                    text-violet-300

                    transition-all

                    hover:bg-violet-500/20
                    hover:border-violet-400/40
                "
            >

                <Sparkles size={16}/>

                <span className="hidden md:block">

                    New Chat

                </span>

            </button>

        </motion.header>

    );

}

export default ChatHeader;