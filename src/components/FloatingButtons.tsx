import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp - positioned below the chatbot */}
      <a
        href="https://wa.me/917741913386?text=Hi, I'm interested in your furniture collection"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-gold-dark ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </button>
    </>
  );
};

export default FloatingButtons;
