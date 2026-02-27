import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Award, Globe2, Users, ThumbsUp, MapPin, Briefcase } from "lucide-react";

const strengths = [
  { icon: Award, label: "Excellent Services", value: "100+", suffix: "Clients Served" },
  { icon: Globe2, label: "Global Reach", value: "15+", suffix: "Countries" },
  { icon: Users, label: "Industry Experts", value: "25+", suffix: "Professionals" },
  { icon: ThumbsUp, label: "Client Satisfaction", value: "98", suffix: "% Rating" },
  { icon: MapPin, label: "Kenya Destinations", value: "40+", suffix: "Locations" },
  { icon: Briefcase, label: "Properties Managed", value: "200+", suffix: "Units" },
];

const CounterNumber = ({ target, inView }: { target: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const numericPart = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(numericPart / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, numericPart]);

  const prefix = target.match(/^[^\d]*/)?.[0] || "";
  const suffix = target.match(/[^\d]*$/)?.[0] || "";

  return <span>{prefix}{count}{suffix}</span>;
};

export const StrengthsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">By The Numbers</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              Our <span className="text-gradient-gold">Strengths</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="text-center p-6">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  <CounterNumber target={s.value} inView={isInView} />
                </div>
                <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">{s.suffix}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
