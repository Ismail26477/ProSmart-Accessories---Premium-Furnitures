import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productBed from "@/assets/product-bed.jpg";
import productWardrobe from "@/assets/product-wardrobe.jpg";
import productCoffeetable from "@/assets/product-coffeetable.jpg";

const images = [
  { src: hero1, alt: "Luxury Living Room" },
  { src: productSofa, alt: "Premium Sofa" },
  { src: hero3, alt: "Elegant Dining" },
  { src: productDining, alt: "Dining Set" },
  { src: hero2, alt: "Premium Bedroom" },
  { src: productBed, alt: "King Size Bed" },
  { src: hero4, alt: "Executive Office" },
  { src: productWardrobe, alt: "Modern Wardrobe" },
  { src: productCoffeetable, alt: "Coffee Table" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Showcase</p>
            <h2>Our Gallery</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
                  <span className="font-body text-sm font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">
                    View
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-gold/80 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-gold/80 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
