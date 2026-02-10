import ScrollReveal from "./ScrollReveal";
import parallaxBanner from "@/assets/parallax-banner.jpg";

const ParallaxBanner = () => {
  return (
    <section
      className="relative h-[40vh] md:h-[50vh] overflow-hidden"
      style={{
        backgroundImage: `url(${parallaxBanner})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <ScrollReveal>
          <div className="text-center px-4">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4">
              Handcrafted Excellence
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Every Piece Tells a Story
            </h2>
            <a href="#contact" className="gold-btn inline-block">
              Get Custom Quote
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ParallaxBanner;
