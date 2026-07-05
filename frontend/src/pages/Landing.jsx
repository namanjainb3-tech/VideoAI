import AppLayout from "../components/layout/AppLayout";
import Hero from "../components/landing/Hero";
import ProductShowcase from "../components/showcase/ProductShowcase";
import WorkflowComparison from "../components/comparison/WorkflowComparison";
import TechStack from "../components/landing/TechStack";
import Footer from "../components/layout/Footer"

function Landing() {
    return (
        <>
        <AppLayout>

            <Hero />

            <ProductShowcase />
        
        </AppLayout>

            <WorkflowComparison />

            <TechStack />

            <Footer />

        </>
    );
}

export default Landing;