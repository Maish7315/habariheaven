import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollReveal } from "./ScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";

export const CTASection = () => {
  return (
    <section className="relative min-h-[80vh] py-20 overflow-hidden flex items-center">
      <motion.img
        src={ctaBg}
        alt="Kenya landscape"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />

      <div className="relative z-10 w-full section-padding text-center">
        <ScrollReveal>
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Begin Your Journey</span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl mt-4 max-w-3xl mx-auto">
            Travel with <span className="text-gradient-gold">Confidence</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-lg text-muted-foreground font-body font-light max-w-xl mx-auto">
            Choose HabariHeaven — your trusted partner in exploring Kenya's beauty and investing in its future.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              to="/plan-journey"
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-medium uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all duration-500 gold-glow whitespace-nowrap"
            >
              Choose HabariHeaven Today
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
