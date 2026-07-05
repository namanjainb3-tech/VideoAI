import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PlaySquare, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";

const navigation = [
    {
        title: "Features",
        path: "/features",
    },
    {
        title: "Technology",
        path: "/technology",
    },
].filter(item => item.path !== location.pathname);

function Navbar() {

    const navigate = useNavigate();

    const location = useLocation();

    const showGoHome = [
        "/workspace",
        "/features",
        "/technology",
    ].includes(location.pathname);

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#040816]/70 backdrop-blur-2xl">

                <Container>

                    <div className="flex h-[72px] items-center justify-between">

                        <button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3"
                        >

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">

                                <PlaySquare
                                    size={20}
                                    className="text-violet-300"
                                />

                            </div>

                            <div className="text-left">

                                <h1 className="text-xl font-bold tracking-tight text-white">

                                    Video

                                    <span className="text-violet-400">

                                        AI

                                    </span>

                                </h1>

                                <p className="hidden text-xs text-slate-500 sm:block">

                                    AI Video Studio

                                </p>

                            </div>

                        </button>

                        <nav className="hidden items-center gap-10 lg:flex">

                            {navigation.map((item) => (

                                <button
                                key={item.title}
                                onClick={() => navigate(item.path)}
                                className="text-sm font-medium text-slate-400 transition hover:text-white"
                                >
                                {item.title}
                                </button>

                            ))}

                        </nav>

                        <div className="hidden items-center gap-3 md:flex">


                            <Button
                                onClick={() =>
                                    navigate(showGoHome ? "/" : "/workspace")
                                }
                            >

                                {showGoHome ? "Go Home" : "Start Creating"}

                                <ArrowRight
                                    size={16}
                                    className={`transition-transform ${
                                        showGoHome ? "rotate-180" : ""
                                    }`}
                                />

                            </Button>

                        </div>

                        <button
                            onClick={() => setOpen(!open)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
                        >

                            {open ? <X size={20} /> : <Menu size={20} />}

                        </button>

                    </div>

                </Container>

            </header>

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: .2,
                        }}
                        className="fixed left-4 right-4 top-20 z-50 rounded-3xl border border-white/10 bg-[#09101f]/95 p-6 backdrop-blur-2xl md:hidden"
                    >

                        <div className="space-y-5">

                            {navigation.map((item) => (

                                <button
                                key={item.title}
                                onClick={() => {
                                    navigate(item.path);
                                    setOpen(false);
                                }}
                                className="block w-full text-left text-base text-slate-300 transition hover:text-white"
                                >
                                {item.title}
                                </button>

                            ))}

                            <div className="border-t border-white/10 pt-5">

                            <Button
                                className="w-full"
                                onClick={() => {
                                    navigate(showGoHome ? "/" : "/workspace");
                                    setOpen(false);
                                }}
                            >

                                {showGoHome ? "Go Home" : "Start Creating"}

                            </Button>

                            </div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    );
}

export default Navbar;
