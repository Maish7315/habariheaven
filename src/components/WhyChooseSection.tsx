import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle, Users, Briefcase, Star, Globe2, Handshake } from "lucide-react";

const reasons = [
  { icon: CheckCircle, title: "One-Stop Convenience", desc: "Travel, accommodation, property — all coordinated by one team." },
  { icon: Users, title: "Local Expertise & Network", desc: "Kenya-based team with years of on-the-ground industry experience." },
  { icon: Star, title: "Personalized & VIP Service", desc: "Consultative, customized approach for every client." },
  { icon: Briefcase, title: "Trust & Transparency", desc: "Clear pricing, honest advice, documented processes." },
  { icon: Globe2, title: "Quality Assurance", desc: "Rigorous quality checks on every property and service." },
  { icon: Handshake, title: "Trusted Partner Network", desc: "Strategic relationships across travel and real estate ecosystems." },
];

export const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Trust & Excellence</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              Why Choose <span className="text-gradient-gold">HabariHeaven</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="group p-8 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-500 bg-card/50 hover:bg-card">
                <r.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
