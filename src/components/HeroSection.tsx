import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.webp";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background pt-16">
      {/* Animated geometric lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-[15%] left-0 right-0 h-px bg-primary/30 origin-left"
        />
        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-[15%] left-0 right-0 h-px bg-primary/30 origin-right"
        />
        {/* Left vertical */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute left-[8%] top-0 bottom-0 w-px bg-primary/20 origin-top"
        />
        {/* Right vertical */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute right-[8%] top-0 bottom-0 w-px bg-primary/20 origin-bottom"
        />
      </div>

      {/* Panels that slide open to reveal the image */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 w-1/2 bg-background z-20"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 right-0 w-1/2 bg-background z-20"
      />

      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Kenya luxury safari landscape"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full section-padding text-center">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="HabariHeaven Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain mb-8 shadow-2xl ring-2 ring-primary/30 bg-white/10"
        />

        {/* Heading stagger */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="luxury-heading text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          >
            All-in-One Travel & Property Solutions{" "}
            <span className="text-gradient-gold">Under One Roof</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl tracking-wide"
        >
          Premium hospitality, luxury transport, and real estate services in Kenya — curated for the discerning traveler and investor.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/plan-journey"
            className="px-10 py-4 bg-primary text-primary-foreground font-body font-medium uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all duration-500 gold-glow"
          >
            Explore Services
          </Link>
          <Link
            to="/plan-journey"
            className="px-10 py-4 border border-primary/40 text-foreground font-body font-light uppercase tracking-[0.2em] text-sm hover:bg-primary/10 hover:border-primary transition-all duration-500"
          >
            Plan Your Journey
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/60 tracking-[0.3em] uppercase font-body">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-primary/40"
          />
        </motion.div>
      </div>
    </section>
  );
};
