function Badge({ children }) {
    return (
        <div
            className="
                inline-flex
                items-center
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-4
                py-2
                backdrop-blur-xl
            "
        >
            <span className="text-sm font-medium text-violet-200">
                {children}
            </span>
        </div>
    );
}

export default Badge;