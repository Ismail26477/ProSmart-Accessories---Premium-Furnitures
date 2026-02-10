import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-background/80 backdrop-blur-sm md:bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 z-50 relative">
              <span className="font-display text-xl md:text-2xl font-bold gold-gradient-text">
                ProSmart
              </span>
              <span className="block text-[10px] md:text-xs font-body tracking-[0.25em] uppercase text-muted-foreground -mt-1">
                Accessories
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+917741913386"
                className="md:hidden p-2 rounded-lg transition-colors hover:bg-secondary"
              >
                <Phone className="w-5 h-5 text-gold" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg transition-colors hover:bg-secondary z-50 relative"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>

              <a
                href="tel:+917741913386"
                className="hidden md:flex items-center gap-2 gold-btn text-xs"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu LEFT side */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel from LEFT */}
        <div
          className={`absolute inset-y-0 left-0 w-full max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 py-20">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left py-4 px-4 font-display text-2xl font-semibold text-foreground hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 80 + 200}ms` : "0ms",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div
              className={`mt-8 pt-6 border-t border-border transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
            >
              <a
                href="tel:+917741913386"
                className="block w-full text-center py-4 gold-btn text-sm"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                +91 77419 13386
              </a>

              <a
                href="https://wa.me/917741913386?text=Hi, I'm interested in your furniture collection"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 mt-3 gold-btn-outline text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
