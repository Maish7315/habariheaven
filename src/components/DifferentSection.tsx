import { ScrollReveal } from "./ScrollReveal";
import { Layers, UserCheck, Globe, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Integrated Travel & Property Solutions",
    description: "We uniquely operate at the intersection of hospitality and real estate — end-to-end support under one roof.",
  },
  {
    icon: UserCheck,
    title: "Personalized VIP Service",
    description: "Tailored to your preferences whether you're a corporate executive, leisure traveler, or foreign investor.",
  },
  {
    icon: Globe,
    title: "Deep Local Roots, International Standards",
    description: "100% Kenya-based team offering rich local insight with service delivery that meets global expectations.",
  },
  {
    icon: Shield,
    title: "Unwavering Transparency & Trust",
    description: "Clear pricing, accurate information, and documented processes for every transaction.",
  },
];

export const DifferentSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-background relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Our Edge</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              What Makes Us <span className="text-gradient-gold">Different</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-secondary border border-primary/20 flex items-center justify-center gold-glow">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
