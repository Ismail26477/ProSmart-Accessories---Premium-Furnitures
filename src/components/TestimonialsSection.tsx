import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Rajesh Patel", location: "Chinwada", text: "Absolutely stunning furniture! The sofa set we ordered exceeded all expectations. Premium quality at an affordable price.", rating: 5 },
  { name: "Priya Sharma", location: "Nagpur", text: "The dining table is a masterpiece. Our guests always compliment the elegant design. Highly recommended!", rating: 5 },
  { name: "Amit Kulkarni", location: "Chandrapur", text: "Best furniture shop in the area. Great variety and the delivery was smooth and hassle-free.", rating: 5 },
  { name: "Sneha Deshmukh", location: "Wardha", text: "Ordered a complete bedroom set. The quality of wood and craftsmanship is outstanding. Worth every penny!", rating: 5 },
  { name: "Vikram Joshi", location: "Chinwada", text: "ProSmart Accessories transformed our home. The custom wardrobe fits perfectly in our space.", rating: 4 },
  { name: "Meena Gupta", location: "Nagpur", text: "Love the modern TV unit! Sleek design with plenty of storage. Excellent customer service too.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Happy Customers</p>
            <h2>What People Say</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 100}>
              <div className="glass-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "text-gold fill-gold" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
