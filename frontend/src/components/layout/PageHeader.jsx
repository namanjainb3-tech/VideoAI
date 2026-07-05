import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

function PageHeader({ title, subtitle }) {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden border-b border-white/10 py-24">

            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >

                    <Button
                        variant="ghost"
                        onClick={() => navigate("/")}
                        className="mb-8"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Button>

                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-5 text-lg leading-relaxed text-slate-400">
                        {subtitle}
                    </p>

                </motion.div>

            </Container>

        </section>
    );
}

export default PageHeader;