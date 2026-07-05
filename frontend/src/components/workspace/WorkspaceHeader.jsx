import { Sparkles } from "lucide-react";

import Container from "../ui/Container";

function WorkspaceHeader() {
    return (
        <Container>

            <div className="mb-12">

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/10
                        px-4
                        py-2
                    "
                >

                    <Sparkles
                        size={15}
                        className="text-violet-400"
                    />

                    <span className="text-sm text-violet-300">

                        Local AI Pipeline

                    </span>

                </div>

                <h1
                    className="
                        mt-6
                        text-4xl
                        font-black
                        tracking-tight
                        text-white

                        md:text-5xl
                    "
                >
                    VideoAI Studio
                </h1>

                <p
                    className="
                        mt-4
                        max-w-2xl
                        text-lg
                        leading-8
                        text-slate-400
                    "
                >
                    Upload your footage once.
                    Our local AI pipeline handles background blur,
                    caption generation, review, rendering and export.
                </p>

            </div>

        </Container>
    );
}

export default WorkspaceHeader;