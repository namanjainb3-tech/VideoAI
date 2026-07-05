import {
    Video,
    Subtitles,
    Wand2,
    Download,
    ScanFace,
    TriangleAlert,
} from "lucide-react";

import SuggestionChip from "./SuggestionChip";

const suggestions = [
    {
        icon: Video,
        title: "Upload Video",
        description: "Learn supported formats.",
        prompt: "How do I upload a video?"
        
    },
    {
        icon: Subtitles,
        title: "Smart Captions",
        description: "Understand Whisper captions and QA.",
        prompt: "Tell me about whisper captions"
    },
    {
        icon: Wand2,
        title: "AI Processing",
        description: "See how VideoAI enhances your videos.",
        prompt:"How VideoAI enhances my video"
    },
    {
        icon: Download,
        title: "Export Video",
        description: "Download high-quality rendered videos.",
        prompt: "What is the amazing feature about download high quality rendered videos"
    },
    {
        icon: ScanFace,
        title: "Background Blur",
        description: "AI-powered subject detection and blur.",
        prompt: "How VideoAI carries out the blur feature"
    },
    {
        icon: TriangleAlert,
        title: "Troubleshooting",
        description: "Fix upload, rendering and export issues.",
        prompt: "Help me fix upload, rendering and export issues."
    },
];

function SuggestionGrid({ onSuggestionClick }) {

    return (

        <section className="mx-auto mt-10 w-full max-w-6xl">

            <div
                className="
                    grid
                    gap-4

                    grid-cols-1

                    sm:grid-cols-2

                    xl:grid-cols-3
                "
            >

                {suggestions.map((item) => (

                    <SuggestionChip
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        onClick={() =>
                            onSuggestionClick?.(item.prompt)
                        }
                    />

                ))}

            </div>

        </section>

    );

}

export default SuggestionGrid;