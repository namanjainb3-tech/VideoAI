import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

function ChatArea({ messages,
    isTyping,
}) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);

    return (

        <div
            className="
                mx-auto
                flex-1

                w-full
                max-w-4xl

                space-y-8

                overflow-y-auto

                px-1
                py-6

                sm:px-6
                sm:py-8
            "
        >

            {messages.map((message) => (

                <div
                    key={message.id}
                    className="w-full"
                >

                    

                    <ChatMessage
                        message={message}
                    />

                </div>

            ))}

            {isTyping && (

            <TypingIndicator />

            )}

            <div ref={bottomRef} />

        </div>

    );

}

export default ChatArea;