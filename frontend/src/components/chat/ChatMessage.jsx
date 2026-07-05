import { motion } from "framer-motion";
import { Bot, User, Copy, Check } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatMessage({ message }) {

    const [copied, setCopied] = useState(false);

    const isAssistant = message.role === "assistant";

    const copyMessage = async () => {

        await navigator.clipboard.writeText(message.content);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        }, 1800);

    };

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 16,
                scale: 0.98,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.25,
            }}
            className={`flex ${
                isAssistant ? "justify-start" : "justify-end"
            }`}
        >
    
            <div
                className={`
                    group
                    relative
    
                    w-fit
                    max-w-[80%]
    
                    sm:max-w-[85%]
                    lg:max-w-3xl
    
                    rounded-[26px]
    
                    border
                    border-white/10
    
                    px-5
                    py-5
    
                    shadow-lg
    
                    ${
                        isAssistant
                            ? "bg-slate-900/60 backdrop-blur-xl"
                            : "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 text-white"
                    }
                `}
            >
        
                <div className="mb-5 flex items-center gap-3">
    
                    {isAssistant ? (
    
                        <>
    
                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
    
                                    rounded-xl
    
                                    bg-gradient-to-br
                                    from-violet-500
                                    to-cyan-500
                                "
                            >
    
                                <Bot
                                    size={16}
                                    className="text-white"
                                />
    
                            </div>
    
                            <span
                                className="
                                    text-base
                                    font-semibold
                                    text-violet-300
                                "
                            >
    
                                Kitu
    
                            </span>
    
                        </>
    
                    ) : (
    
                        <>
    
                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
    
                                    rounded-xl
    
                                    bg-white/15
                                "
                            >
    
                                <User
                                    size={16}
                                    className="text-white"
                                />
    
                            </div>
    
                            <span
                                className="
                                    text-base
                                    font-semibold
                                    text-white/90
                                "
                            >
    
                                You
    
                            </span>
    
                        </>
    
                    )}
    
                </div>
        
                <div
                className={`
                    text-[15px]
                    sm:text-base
            
                    leading-8
            
                    break-words
            
                    [&_p]:break-words
                    [&_li]:break-words
            
                    [&_pre]:overflow-x-auto
                    [&_pre]:whitespace-pre-wrap
                    [&_pre]:break-words
            
                    [&_code]:whitespace-pre-wrap
                    [&_code]:break-all
            
                    [&_ul]:list-disc
                    [&_ul]:pl-6
                    [&_ul]:space-y-2
            
                    [&_ol]:list-decimal
                    [&_ol]:pl-6
                    [&_ol]:space-y-2

                    ${
                        isAssistant
                            ? "text-slate-200"
                            : "text-white"
                    }
                `}
                >

                <ReactMarkdown remarkPlugins={[remarkGfm]}>

                    {message.content}

                </ReactMarkdown>

                    </div>
    
                {isAssistant && (
    
                    <button
                        onClick={copyMessage}
                        className="
                            absolute
    
                            top-5
                            right-5
    
                            rounded-lg
    
                            p-2
    
                            text-slate-500
    
                            opacity-0
    
                            transition
    
                            hover:bg-white/10
                            hover:text-white
    
                            group-hover:opacity-100
                        "
                    >
    
                        {copied ? (
    
                            <Check size={16} />
    
                        ) : (
    
                            <Copy size={16} />
    
                        )}
    
                    </button>
    
                )}
    
            </div>
    
        </motion.div>
    
    );
}

export default ChatMessage;