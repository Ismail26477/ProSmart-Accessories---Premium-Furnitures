import { useState, useEffect } from "react";
import { Percent, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SaleBanner = () => {
  // Set sale end date to 7 days from now
  const [saleEnd] = useState(() => {
    const end = new Date();
    end.setDate(end.getDate() + 7);
    end.setHours(23, 59, 59, 0);
    return end;
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = saleEnd.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [saleEnd]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-foreground via-wood to-foreground py-14 md:py-20">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold-light text-xs font-body font-semibold uppercase tracking-wider mb-6">
                <Percent className="w-3.5 h-3.5" />
                Limited Time Offer
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
                Grand Furniture{" "}
                <span className="gold-gradient-text">Sale</span>
              </h2>
              <p className="font-body text-primary-foreground/70 text-sm md:text-base mb-8 max-w-xl mx-auto">
                Up to <span className="text-gold font-bold text-lg">40% OFF</span> on all premium furniture.
                Free delivery + extra 5% cashback on online payments!
              </p>

              {/* Countdown timer */}
              <div className="flex justify-center gap-3 md:gap-5 mb-8">
                {timeUnits.map((unit) => (
                  <div key={unit.label} className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center mb-2">
                      <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="font-body text-[10px] md:text-xs uppercase tracking-wider text-primary-foreground/60">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="#products"
                  className="gold-btn inline-flex items-center gap-2"
                >
                  Shop the Sale
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2 text-primary-foreground/50">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">
                    Offer ends soon • T&C Apply
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
