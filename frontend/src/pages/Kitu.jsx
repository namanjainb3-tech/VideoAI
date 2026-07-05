import { useEffect, useState } from "react";
import api from "../services/api";
import AppLayout from "../components/layout/AppLayout";
import ChatArea from "../components/chat/ChatArea";
import ChatHeader from "../components/chat/ChatHeader";
import WelcomeSection from "../components/chat/WelcomeSection";
import SuggestionGrid from "../components/chat/SuggestionGrid";
import ChatInput from "../components/chat/ChatInput";
import { streamText } from "../utils/streamText";

const DEFAULT_MESSAGES = [
    {
        id: 1,
        role: "assistant",
        content: `Hello 👋

I'm Kitu, your AI assistant for VideoAI.

I can help you understand uploads, captions, AI processing, exports and troubleshoot your workflow.

How can I help you today?`,
    },
];

function Kitu() {

    const STORAGE_KEY = "videoai-kitu-chat-v1";

    const [messages, setMessages] = useState(() => {

        try {

            const saved = localStorage.getItem(STORAGE_KEY);

            return saved ? JSON.parse(saved) : DEFAULT_MESSAGES;

        }

        catch {

            return DEFAULT_MESSAGES;

        }

    });

    const [isTyping, setIsTyping] = useState(false);


    useEffect(() => {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(messages)
        );

    }, [messages]);


    useEffect(() => {

        localStorage.setItem(
    
            "kitu-chat",
    
            JSON.stringify(messages)
    
        );
    
    }, [messages]);

    const handleSend = async (text) => {

        if (!text.trim()) return;
    
        const userMessage = {
    
            id: Date.now(),
    
            role: "user",
    
            content: text,
    
        };
    
        setMessages((prev) => [
    
            ...prev,
    
            userMessage,
    
        ]);
    
        setIsTyping(true);
    
        try {
    
            const response = await api.post(
    
                "/chat",
    
                {
    
                    message: text,
    
                    history: messages.map((msg) => ({
    
                        role: msg.role,
    
                        content: msg.content,
    
                    })),
    
                    context: {},
    
                }
    
            );
    
            setIsTyping(false);
    
            const assistantId = Date.now() + 1;
    
            setMessages((prev) => [
    
                ...prev,
    
                {
    
                    id: assistantId,
    
                    role: "assistant",
    
                    content: "",
    
                }
    
            ]);
    
            await streamText(
    
                response.data.reply,
    
                (partial) => {
    
                    setMessages((prev) =>
    
                        prev.map((msg) =>
    
                            msg.id === assistantId
    
                                ? {
    
                                      ...msg,
    
                                      content: partial,
    
                                  }
    
                                : msg
    
                        )
    
                    );
    
                },
    
                45
    
            );
    
        }
    
        catch (error) {
    
            console.error("Kitu Error:", error);
    
            setIsTyping(false);
    
            setMessages((prev) => [
    
                ...prev,
    
                {
    
                    id: Date.now() + 1,
    
                    role: "assistant",
    
                    content:
                        "⚠️ Sorry, I couldn't connect to the VideoAI server. Please try again.",
    
                }
    
            ]);
    
        }
    
    };

    const clearChat = () => {

        localStorage.removeItem(STORAGE_KEY);

        setMessages(DEFAULT_MESSAGES);

    };

    return (

        <AppLayout>

            <div
                className="
                    mx-auto

                    flex

                    min-h-[calc(100vh-72px)]

                    w-full
                    max-w-5xl

                    flex-col

                    px-2
                    py-4

                    sm:px-5
                    md:px-8
                "
            >

                <ChatHeader
                    onClearChat={clearChat}
                />

                <div
                    className="
                        flex-1

                        py-8

                        overflow-y-auto
                    "
                >

                    {messages.length === 1 ? (

                    <>
                        <WelcomeSection />

                        <SuggestionGrid onSuggestionClick={handleSend}/>

                        <ChatArea
                            messages={messages}
                        />

                    </>

                    ) : (

                    <ChatArea
                        messages={messages}
                        isTyping={isTyping}
                    />

                    )}

                </div>

                <ChatInput onSend={handleSend}/>

            </div>

        </AppLayout>

    );
}


export default Kitu;