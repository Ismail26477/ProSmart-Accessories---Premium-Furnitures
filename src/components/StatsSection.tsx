import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 1000, suffix: "+", label: "Products Delivered" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Custom Designs" },
];

const CounterNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold gold-gradient-text">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 150}>
              <div className="text-center">
                <CounterNumber target={stat.value} suffix={stat.suffix} />
                <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
