import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold gold-gradient-text">ProSmart</span>
            <span className="block text-xs font-body tracking-[0.25em] uppercase text-primary-foreground/60 -mt-1 mb-4">
              Accessories
            </span>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Premium furniture crafted with passion. Transforming homes across Maharashtra with elegant, durable designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "About", "Gallery", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">Chinwada, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+917741913386" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  +91 77419 13386
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">info@prosmartaccessories.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2025 ProSmart Accessories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
