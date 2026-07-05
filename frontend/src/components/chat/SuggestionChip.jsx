import { motion } from "framer-motion";

function SuggestionChip({
    icon: Icon,
    title,
    description,
    onClick,
}) {

    return (

        <motion.button

            whileHover={{
                y: -4,
                scale: 1.02,
            }}

            whileTap={{
                scale: .98,
            }}

            onClick={onClick}

            className="
                group

                flex
                items-start
                gap-4

                rounded-3xl

                border
                border-white/10

                bg-white/5

                p-5
                md:p-6

                text-left

                transition-all
                duration-300

                hover:border-violet-500/30
                hover:bg-violet-500/10
                hover:shadow-[0_0_35px_rgba(139,92,246,.12)]
            "
        >

            <div
                className="
                    flex

                    h-11
                    w-11

                    md:h-12
                    md:w-12

                    shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    bg-violet-500/10

                    transition

                    group-hover:scale-110
                "
            >

                <Icon

                    size={22}

                    className="text-violet-400"

                />

            </div>

            <div className="min-w-0">

                <h3
                    className="
                        text-base
                        font-semibold
                        text-white

                        md:text-lg
                    "
                >

                    {title}

                </h3>

                <p
                    className="
                        mt-2

                        text-sm
                        leading-6

                        text-slate-400
                    "
                >

                    {description}

                </p>

            </div>

        </motion.button>

    );

}

export default SuggestionChip;