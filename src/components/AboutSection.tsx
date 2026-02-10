import { Award, Truck, Shield, Paintbrush } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handcrafted from the finest materials with meticulous attention to detail.",
  },
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Tailored furniture solutions designed to match your unique taste and space.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery and professional installation at your doorstep.",
  },
  {
    icon: Shield,
    title: "10 Year Warranty",
    description: "Peace of mind with our comprehensive warranty on all products.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Why Choose Us</p>
            <h2>Crafted with Passion</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 150}>
              <div className="glass-card text-center group cursor-default">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
