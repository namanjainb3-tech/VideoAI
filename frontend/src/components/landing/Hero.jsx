import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroIllustration from "./HeroIllustration";
import Container from "../ui/Container";

function Hero() {
    return (
        <section className="relative overflow-hidden">

            <HeroVisual />

            <HeroIllustration />

            <Container>

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[82vh]
                        items-center
                        justify-center
                        pt-20
                        pb-52
                        lg:pb-72
                    "
                >

                    <HeroContent />

                </div>

            </Container>

        </section>
    );
}

export default Hero;