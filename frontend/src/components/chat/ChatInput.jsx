import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

function ChatInput({ onSend }) {

    const [message, setMessage] = useState("");

    const textareaRef = useRef(null);

    const handleChange = (e) => {

        setMessage(e.target.value);

        textareaRef.current.style.height = "0px";

        textareaRef.current.style.height =
            textareaRef.current.scrollHeight + "px";

    };

    const handleSend = () => {

        if (!message.trim()) return;

        onSend?.(message);

        setMessage("");

        textareaRef.current.style.height = "0px";

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSend();

        }

    };

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            className="
                sticky
                bottom-0

                mt-4

                border
                border-white/10

                bg-white/5

                backdrop-blur-2xl

                rounded-3xl

                p-2
                sm:p-3

                shadow-[0_0_40px_rgba(0,0,0,.25)]
            "
        >

            <div className="flex items-end gap-3">

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={message}

                    onChange={handleChange}

                    onKeyDown={handleKeyDown}

                    placeholder="Ask Kitu anything..."

                    className="
                        max-h-40
                        min-h-[48px]

                        flex-1

                        resize-none

                        bg-transparent

                        px-3
                        py-3

                        text-white

                        outline-none

                        placeholder:text-slate-500

                        text-sm
                        md:text-base
                    "
                />

                <motion.button

                    whileHover={{
                        scale: 1.05,
                    }}

                    whileTap={{
                        scale: .95,
                    }}

                    disabled={!message.trim()}

                    onClick={handleSend}

                    className="
                        flex

                        h-12
                        w-12

                        shrink-0

                        items-center
                        justify-center

                        rounded-2xl

                        bg-gradient-to-r
                        from-violet-500
                        to-cyan-500

                        text-white

                        shadow-lg
                        shadow-violet-500/30

                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >

                    <SendHorizonal size={20} />

                </motion.button>

            </div>

            <div className="hidden sm:flex items-center justify-between mt-3 px-2">

                <p className="text-xs text-slate-500">
                    Press <span className="text-slate-300">Enter</span> to send •
                    <span className="ml-1 text-slate-300">
                        Shift + Enter
                    </span>{" "}
                    for a new line
                </p>

                <p className="text-xs text-slate-500">
                    Powered by Groq
                </p>

            </div>

        </motion.div>

    );

}

export default ChatInput;