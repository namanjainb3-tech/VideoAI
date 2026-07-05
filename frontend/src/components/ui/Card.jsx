function Card({
    children,
    className = "",
}) {
    return (
        <div
            className={`
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;