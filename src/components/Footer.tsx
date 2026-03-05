import { ScrollReveal } from "./ScrollReveal";
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, Facebook, Twitter, CreditCard, Smartphone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
];

// Payment method links - users will be redirected to respective payment gateways
const paymentMethods = [
  {
    name: "PayPal",
    icon: "https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png",
    url: "https://www.paypal.com/signin",
    description: "Pay securely with your PayPal account"
  },
  {
    name: "Google Pay",
    icon: "https://pay.google.com/about/static/images/logo.svg",
    url: "https://pay.google.com/intl/en_us/pay",
    description: "Fast and secure payments with Google Pay"
  },
  {
    name: "M-Pesa",
    icon: "https://www.safaricom.co.ke/images/Logo/M-Pesa-Logo-lg.jpg",
    url: "https://www.safaricom.co.ke/m-pesa/",
    description: "Kenya's leading mobile money service"
  },
  {
    name: "Visa",
    icon: "https://www.visa.com/dam/VISA/logos/visa-logo-black-module.png",
    url: "https://www.visa.com/",
    description: "Pay with your Visa card"
  },
  {
    name: "Mastercard",
    icon: "https://www.mastercard.us/content/dam/mccom/global/logos/logo-mastercard-mobile.svg",
    url: "https://www.mastercard.us/",
    description: "Pay with your Mastercard"
  },
  {
    name: "American Express",
    icon: "https://www.americanexpress.com/content/dam/amex/us/merchant/default-tools/global-elements/Logos/AXP_Logo_D_Print_4c.png",
    url: "https://www.americanexpress.com/",
    description: "Pay with American Express"
  }
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

          {/* Payment Methods */}
          <div className="mt-12">
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6 text-center">Payment Methods</h4>
            <p className="text-center text-muted-foreground font-body font-light text-sm mb-6">
              Choose your preferred payment method to complete your booking
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {paymentMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                  title={method.description}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    {method.name === "PayPal" && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#003087] group-hover:text-[#0040a5]">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                      </svg>
                    )}
                    {method.name === "Google Pay" && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10">
                        <path fill="#4285F4" d="M12 11v2.4h6.458c-.27 1.434-1.612 4.203-6.458 4.203-3.887 0-7.062-3.217-7.062-7.183S8.113 3.237 12 3.237c2.213 0 3.682.943 4.52 1.762l3.107-2.997C17.252 1.142 14.924 0 12 0 6.477 0 1.831 2.823.408 7.023l4.19 3.263C6.18 7.477 8.833 5.883 12 5.883c4.054 0 6.698 2.78 6.698 6.717 0 .46-.043.9-.124 1.318L12 11z"/>
                      </svg>
                    )}
                    {method.name === "M-Pesa" && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10">
                        <circle cx="12" cy="12" r="10" fill="#00A651"/>
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">M-PESA</text>
                      </svg>
                    )}
                    {method.name === "Visa" && (
                      <svg viewBox="0 0 50 16" className="w-12 h-10">
                        <path fill="#1A1F71" d="M19.13 15.34h-3.6l2.25-13.92h3.6l-2.25 13.92zm9.53-13.92l-2.61 9.03-.18-1.3-.01-1.22q-.42-.78-1.03-1.14l-2.23 5.65h3.59l3.83-12.02h-3.36zm-12.68 0l-2.25 13.92h-3.6l2.25-13.92h3.6zm5.68 5.68l-.79-3.05h-.07q-.36.68-.9 1.05l-1.76-4.68h3.78l-.26 1.03h2.38l.62-1.03h-5.12l-.14.56h2.24l.22 2.12 1.98-2.12h2.16l-3.24 12.02h-3.57l.71-5.58z"/>
                      </svg>
                    )}
                    {method.name === "Mastercard" && (
                      <svg viewBox="0 0 40 25" className="w-10 h-10">
                        <circle cx="15" cy="12.5" r="9" fill="#EB001B"/>
                        <circle cx="25" cy="12.5" r="9" fill="#F79E1B"/>
                        <path fill="#FF5F00" d="M20 3.5c2.6 2.2 4.3 5.5 4.3 9s-1.7 6.8-4.3 9c-2.6-2.2-4.3-5.5-4.3-9s1.7-6.8 4.3-9z"/>
                      </svg>
                    )}
                    {method.name === "American Express" && (
                      <svg viewBox="0 0 30 20" className="w-10 h-10">
                        <path fill="#006FCF" d="M3 0h24v20H3V0zm3 3h18v14H6V3zm2 2v2h2V5H8zm0 4v6h2V9H8zm3-4v10h2V5h-2zm3 0v10h2V9h-2V5h-2zm3 0v10h2V5h-2z"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-body font-medium text-center">{method.name}</span>
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground/60 font-body mt-4">
              Secure payment processing. Click any method to proceed to the payment gateway.
            </p>
          </div>
        </ScrollReveal>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/254731234567"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5A] transition-all duration-300"
          aria-label="Chat on WhatsApp"
          style={{
            animation: 'lazy-bounce 2s ease-in-out infinite',
          }}
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <style>{`
          @keyframes lazy-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>

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
