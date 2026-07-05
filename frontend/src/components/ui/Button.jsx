import { motion } from "framer-motion";

const variants = {
    primary:
        "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 text-white shadow-[0_12px_40px_rgba(139,92,246,.35)] hover:shadow-[0_18px_55px_rgba(139,92,246,.45)]",

    secondary:
        "border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]",

    ghost:
        "text-slate-300 hover:text-white hover:bg-white/[0.04]",
};

function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </motion.button>
    );
}

export default Button;