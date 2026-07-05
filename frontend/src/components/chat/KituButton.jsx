import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function KituButton() {

    const navigate = useNavigate();

    return (
        <motion.button
            onClick={() => navigate("/kitu")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
                fixed
                bottom-6
                right-6
                z-[60]

                flex
                flex-col
                items-center
                gap-2
            "
        >
            <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-violet-500/20

                    bg-gradient-to-br
                    from-violet-500
                    to-cyan-500

                    shadow-lg
                    shadow-violet-500/30
                "
            >
                <Bot
                    size={28}
                    className="text-white"
                />
            </div>

            <span
                className="
                    rounded-full
                    bg-slate-900/80
                    px-3
                    py-1

                    text-xs
                    font-medium

                    text-slate-300
                    backdrop-blur
                "
            >
                Kitu
            </span>
        </motion.button>
    );
}

export default KituButton;