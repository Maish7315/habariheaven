import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Booking", href: "/booking", isRoute: true },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-panel ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="section-padding flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="HabariHeaven" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-semibold text-foreground tracking-wide">
              Habari<span className="text-primary">Heaven</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-body font-light text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-body font-light text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </a>
              )
            ))}
            <ThemeToggle />
            <Link
              to="/plan-journey"
              className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wider uppercase"
            >
              Plan Your Journey
            </Link>
            <Link
              to="/booking"
              className="px-6 py-2.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wider uppercase border border-primary/30"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-primary"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2"
              aria-label="Close menu"
            >
              <motion.span
                animate={{ rotate: 45, y: 6 }}
                className="block w-6 h-px bg-foreground"
              />
              <motion.span
                animate={{ opacity: 0 }}
                className="block w-6 h-px bg-foreground"
              />
              <motion.span
                animate={{ rotate: -45, y: -6 }}
                className="block w-6 h-px bg-foreground"
              />
            </button>
            <ThemeToggle />
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.3 }}
            >
              <Link
                to="/booking"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-secondary text-secondary-foreground font-body uppercase tracking-widest text-sm border border-primary/30"
              >
                Book Now
              </Link>
            </motion.div>
            <motion.a
              href="/plan-journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm"
            >
              Plan Your Journey
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
