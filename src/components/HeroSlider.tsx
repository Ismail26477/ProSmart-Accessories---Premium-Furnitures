import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    title: "Luxury Living Room",
    subtitle: "Crafted for Comfort & Elegance",
  },
  {
    image: hero2,
    title: "Premium Bedrooms",
    subtitle: "Rest in Style & Sophistication",
  },
  {
    image: hero3,
    title: "Elegant Dining",
    subtitle: "Where Families Come Together",
  },
  {
    image: hero4,
    title: "Executive Office",
    subtitle: "Work in Premium Comfort",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-[75vh] md:h-screen overflow-hidden">
      {/* Stacked images with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-gold-light"
            key={`sub-${current}`}
            style={{ animation: "fade-in-up 0.8s ease-out forwards" }}
          >
            {slides[current].subtitle}
          </p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground"
            key={`title-${current}`}
            style={{ animation: "fade-in-up 0.8s ease-out 0.2s forwards", opacity: 0 }}
          >
            {slides[current].title}
          </h1>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            key={`btns-${current}`}
            style={{ animation: "fade-in-up 0.8s ease-out 0.4s forwards", opacity: 0 }}
          >
            <a href="#products" className="gold-btn">
              View Collection
            </a>
            <a href="#contact" className="gold-btn-outline border-gold-light text-primary-foreground hover:text-primary-foreground">
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-gold/80 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-gold/80 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === current
                ? "bg-gold w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
