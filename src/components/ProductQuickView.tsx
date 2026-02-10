import { X, ChevronLeft, ChevronRight, Star, Truck, Shield, Phone } from "lucide-react";
import { useState } from "react";

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
  description?: string;
  features?: string[];
  images?: string[];
}

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

const ProductQuickView = ({ product, onClose }: ProductQuickViewProps) => {
  const allImages = product.images || [product.image];
  const [currentImage, setCurrentImage] = useState(0);

  const features = product.features || [
    "Premium quality materials",
    "Handcrafted by skilled artisans",
    "10-year warranty included",
    "Termite & moisture resistant",
    "Easy assembly with free installation",
  ];

  const description =
    product.description ||
    `The ${product.name} is crafted with premium-grade materials and meticulous attention to detail. Designed to complement modern Indian homes, this piece combines elegance with functionality. Available in multiple finishes to match your interior.`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-gold/10 transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image gallery */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl">
              <img
                src={allImages[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {allImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage(
                      (prev) => (prev - 1 + allImages.length) % allImages.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-gold/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((prev) => (prev + 1) % allImages.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-gold/80 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </>
            )}

            {/* Image dots */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentImage
                        ? "bg-gold w-6"
                        : "bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Category badge */}
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold bg-gold/90 text-primary-foreground backdrop-blur-sm">
              {product.category}
            </span>
          </div>

          {/* Product details */}
          <div className="p-6 md:p-8 flex flex-col">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= 4 ? "text-gold fill-gold" : "text-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-body text-muted-foreground">
                (4.0 • 12 reviews)
              </span>
            </div>

            <p className="font-display text-3xl font-bold gold-gradient-text mb-4">
              {product.price}
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 mb-6 py-4 border-t border-b border-border">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" />
                <span className="font-body text-xs text-muted-foreground">
                  Free Delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span className="font-body text-xs text-muted-foreground">
                  10 Yr Warranty
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/917741913386?text=Hi, I'm interested in ${product.name} (${product.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 gold-btn text-center text-sm"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+917741913386"
                className="flex-1 gold-btn-outline text-center text-sm inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
