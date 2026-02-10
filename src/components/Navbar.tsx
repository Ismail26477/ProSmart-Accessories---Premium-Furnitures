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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm md:bg-white md:shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LEFT — Menu button (mobile only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary z-50"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>

            {/* CENTER — Logo */}
            <a
              href="#home"
              className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
            >
              <span className="font-display text-xl md:text-2xl font-bold gold-gradient-text">
                ProSmart
              </span>
              <span className="block text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground -mt-1 text-center">
                Accessories
              </span>
            </a>

            {/* RIGHT — Call button (mobile) */}
            <a
              href="tel:+917741913386"
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
            >
              <Phone className="w-5 h-5 text-gold" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm font-medium text-black hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="tel:+917741913386"
                className="flex items-center gap-2 gold-btn text-xs"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu from LEFT */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute inset-y-0 left-0 w-full max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 py-20">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-4 px-4 font-display text-2xl font-semibold text-foreground hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
