import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProductQuickView from "./ProductQuickView";
import productSofa from "@/assets/product-sofa.jpg";
import productDining from "@/assets/product-dining.jpg";
import productBed from "@/assets/product-bed.jpg";
import productWardrobe from "@/assets/product-wardrobe.jpg";
import productTvunit from "@/assets/product-tvunit.jpg";
import productBookshelf from "@/assets/product-bookshelf.jpg";
import productCoffeetable from "@/assets/product-coffeetable.jpg";
import productShoerack from "@/assets/product-shoerack.jpg";
import productDressing from "@/assets/product-dressing.jpg";

const categories = ["All", "Living Room", "Bedroom", "Dining", "Storage"];

const products = [
  {
    name: "Premium Sofa Set",
    category: "Living Room",
    price: "₹45,000",
    image: productSofa,
    description: "Luxurious 3+1+1 sofa set upholstered in premium leatherette with high-density foam cushions. Features sturdy hardwood frame and elegant tufted design for your living room.",
    features: ["Premium leatherette upholstery", "High-density foam cushions", "Hardwood frame construction", "Stain-resistant fabric", "Available in 5 colors"],
    images: [productSofa, productCoffeetable, productTvunit],
  },
  {
    name: "Dining Table Set",
    category: "Dining",
    price: "₹35,000",
    image: productDining,
    description: "Elegant 6-seater dining table set crafted from solid sheesham wood with a honey finish. Includes 6 cushioned chairs with ergonomic design.",
    features: ["Solid sheesham wood", "6 cushioned chairs included", "Honey natural finish", "Seats 6 comfortably", "Easy to maintain"],
    images: [productDining, productCoffeetable],
  },
  {
    name: "King Size Bed",
    category: "Bedroom",
    price: "₹55,000",
    image: productBed,
    description: "Majestic king-size bed with hydraulic storage and upholstered headboard. Built with engineered wood and premium laminate finish for modern bedrooms.",
    features: ["Hydraulic storage system", "Upholstered headboard", "King size (78\"x72\")", "Premium laminate finish", "Weight capacity: 400kg"],
    images: [productBed, productWardrobe, productDressing],
  },
  {
    name: "Modern Wardrobe",
    category: "Bedroom",
    price: "₹40,000",
    image: productWardrobe,
    description: "Spacious 3-door wardrobe with mirror, multiple shelves, hanging space, and drawer compartments. Termite-treated engineered wood with soft-close hinges.",
    features: ["3-door with mirror", "Soft-close hinges", "Multiple compartments", "Termite-treated wood", "Modular design"],
    images: [productWardrobe, productBed],
  },
  {
    name: "TV Entertainment Unit",
    category: "Living Room",
    price: "₹25,000",
    image: productTvunit,
    description: "Wall-mounted entertainment unit with LED backlight panel and cable management system. Supports TVs up to 65 inches with ample storage.",
    features: ["LED backlight panel", "Cable management system", "Supports up to 65\" TV", "Wall-mounted design", "Multiple storage units"],
    images: [productTvunit, productSofa],
  },
  {
    name: "Designer Bookshelf",
    category: "Storage",
    price: "₹18,000",
    image: productBookshelf,
    description: "Contemporary open bookshelf with geometric design. Perfect for displaying books, decor items, and collectibles. Made from premium engineered wood.",
    features: ["Geometric modern design", "5-tier shelving", "Premium engineered wood", "Wall-anchoring kit included", "Easy assembly"],
    images: [productBookshelf],
  },
  {
    name: "Glass Coffee Table",
    category: "Living Room",
    price: "₹15,000",
    image: productCoffeetable,
    description: "Elegant tempered glass coffee table with wooden base and lower shelf. Adds sophistication to any living room setup.",
    features: ["10mm tempered glass top", "Solid wood base", "Lower storage shelf", "Scratch-resistant surface", "Modern minimalist design"],
    images: [productCoffeetable, productSofa],
  },
  {
    name: "Wooden Shoe Rack",
    category: "Storage",
    price: "₹8,000",
    image: productShoerack,
    description: "Compact 4-tier shoe rack with folding doors. Stores up to 20 pairs neatly. Made from moisture-resistant engineered wood.",
    features: ["4-tier design", "Stores 20+ pairs", "Folding doors", "Moisture-resistant", "Compact footprint"],
    images: [productShoerack],
  },
  {
    name: "Dressing Table",
    category: "Bedroom",
    price: "₹22,000",
    image: productDressing,
    description: "Elegant dressing table with large mirror, hidden jewelry compartment, and soft-close drawers. Premium finish with integrated LED vanity lights.",
    features: ["Large frameless mirror", "Hidden jewelry compartment", "Soft-close drawers", "Integrated LED lights", "Cushioned stool included"],
    images: [productDressing, productWardrobe],
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Our Collection</p>
            <h2>Premium Furniture</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "gold-btn"
                    : "bg-secondary text-muted-foreground hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="font-display text-xl font-bold text-primary-foreground">{product.name}</p>
                      <p className="font-body text-gold-light text-lg font-semibold">{product.price}</p>
                      <p className="font-body text-xs text-primary-foreground/70 mt-1">Click for details →</p>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold bg-gold/90 text-primary-foreground backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-body text-gold-dark font-bold text-lg">{product.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-body font-semibold bg-gold/10 text-gold-dark hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductsSection;
