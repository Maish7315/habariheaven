import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ali Maalim",
    text: "HabariHeaven made my trip planning so easy! From flight booking to hotel accommodation, everything was seamless. Their team was super responsive, and I got great deals. I highly recommend them!",
  },
  {
    name: "Hamdi Mohamed",
    text: "Exceptional service! I needed a visa on short notice, and HabariHeaven handled everything professionally. The process was smooth, and I got my visa in time for my business trip. Asante sana!",
  },
  {
    name: "Aisha Fatima",
    text: "Booked a safari to Maasai Mara through HabariHeaven, and it was the best experience ever! The entire trip was well organized, from transfers to accommodation. I will definitely book my next adventure with them.",
  },
  {
    name: "Yusuf Hamza",
    text: "Their service is top-notch! I needed accommodation in Nairobi urgently, and HabariHeaven found me a great hotel at an affordable price. No stress, everything was perfectly arranged!",
  },
  {
    name: "Muhammad Ali",
    text: "I needed travel insurance for my international trip, and HabariHeaven guided me through the process effortlessly. They truly care about their clients and ensure you have everything in place before your journey.",
  },
  {
    name: "Layla Amina",
    text: "I had an urgent business trip and needed a flight ticket at short notice. HabariHeaven got me a ticket at a great price and their service was fast and friendly!",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-24 md:py-32 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Client Stories</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center px-4"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl font-serif italic text-muted-foreground leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="gold-line w-12 mx-auto mb-4" />
              <p className="font-display text-lg text-foreground">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
