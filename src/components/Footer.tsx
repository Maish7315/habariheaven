import { ScrollReveal } from "./ScrollReveal";
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 section-padding bg-navy-deep border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="HabariHeaven" className="w-10 h-10 rounded-full object-cover" />
                <span className="font-display text-lg font-semibold">
                  Habari<span className="text-primary">Heaven</span>
                </span>
              </div>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                Your personalized gateway to experience Kenya like never before. Premium hospitality, travel, and property services under one roof.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Navigation</h4>
              <div className="space-y-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground font-body font-light text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                  href="tel:+2540712345678"
                  className="flex items-center gap-3 text-sm text-muted-foreground font-body font-light hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  +254 (0) 712 345 678
                </a>
                <a
                  href="tel:+2540731234567"
                  className="flex items-center gap-3 text-sm text-muted-foreground font-body font-light hover:text-primary transition-colors duration-300 pl-7"
                >
                  +254 (0) 731 234 567
                </a>
                <a
                  href="mailto:info@habariheaven.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground font-body font-light hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  info@habariheaven.com
                </a>
                <a
                  href="https://www.habariheaven.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground font-body font-light hover:text-primary transition-colors duration-300"
                >
                  <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                  www.habariheaven.com
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-body font-light pt-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  HabariHeaven Ltd, Nairobi, Kenya
                </div>
                <p className="text-xs text-muted-foreground/60 font-body font-light pl-7">
                  Physical address details provided upon request or on booking.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://instagram.com/habariheaven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com/company/habariheaven-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://facebook.com/habariheaven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://twitter.com/habariheaven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-primary" />
            </a>
          </div>
        </ScrollReveal>

        <div className="gold-line w-full opacity-20 mt-12" />
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} HabariHeaven Hospitality. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
