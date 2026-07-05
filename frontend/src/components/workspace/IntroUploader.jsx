import { Film, Plus, CheckCircle2 } from "lucide-react";

function IntroUploader({
    introInputRef,
    introVideo,
    handleIntro,
}) {
    return (
        <div className="mt-8">

            <div className="mb-4">

                <p className="text-sm font-medium text-violet-400">
                    OPTIONAL
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                    Intro Video
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    Merge a short intro clip before AI processing begins.
                </p>

            </div>

            <button
                type="button"
                onClick={() => introInputRef.current.click()}
                className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-white/[0.05]
                "
            >

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            bg-violet-500/10
                        "
                    >

                        <Film
                            size={20}
                            className="text-violet-400"
                        />

                    </div>

                    <div className="text-left">

                        <h4 className="font-medium text-white">

                            {introVideo
                                ? introVideo.name
                                : "Choose Intro Video"}

                        </h4>

                        <p className="text-sm text-slate-500">

                            {introVideo
                                ? `${(
                                      introVideo.size /
                                      1024 /
                                      1024
                                  ).toFixed(2)} MB`
                                : "Optional MP4 file"}

                        </p>

                    </div>

                </div>

                {introVideo ? (

                    <CheckCircle2
                        className="text-emerald-400"
                        size={22}
                    />

                ) : (

                    <Plus
                        className="
                            text-slate-500
                            transition
                            group-hover:text-violet-400
                        "
                        size={20}
                    />

                )}

            </button>

            <input
                ref={introInputRef}
                type="file"
                accept="video/mp4"
                onChange={handleIntro}
                className="hidden"
            />

        </div>
    );
}

export default IntroUploader;