import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/917741913386?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="section-heading">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-2">Get In Touch</p>
            <h2>Contact Us</h2>
            <div className="accent-line" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Visit Showroom</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">Chinwada, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+917741913386" className="font-body text-sm text-gold hover:text-gold-dark transition-colors">
                    +91 77419 13386
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">info@prosmartaccessories.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Working Hours</h3>
                  <p className="font-body text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="glass-card space-y-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-sm text-foreground"
                  placeholder="Prasad Kumbar"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-sm text-foreground"
                  placeholder="+91 77419 13386"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-sm text-foreground resize-none"
                  placeholder="I'm interested in..."
                />
              </div>
              <button type="submit" className="gold-btn w-full text-center">
                Send via WhatsApp
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
