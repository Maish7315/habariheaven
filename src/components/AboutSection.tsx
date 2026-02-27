import { ScrollReveal } from "./ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/20" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">About Us</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              Your Gateway to <span className="text-gradient-gold">Kenya</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="gold-line w-12 mb-6" />
              <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                To deliver exceptional hospitality services and investment solutions through innovation, integrity, and personal touch. We are dedicated to exceeding our clients' expectations — travelers by providing memorable journeys, and investors by offering expert guidance and profitable opportunities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <div className="gold-line w-12 mb-6" />
              <h3 className="font-display text-2xl text-foreground">Our Vision</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                To be a leading, globally competitive hospitality and real estate enterprise that elevates Kenya's profile as both a world-class tourist destination and a prime investment hub. We envision creating enriching experiences and enduring value for our clients, community, and country.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 glass-panel rounded-lg p-8 md:p-12">
            <p className="text-center text-lg md:text-xl font-serif italic text-muted-foreground leading-relaxed">
              "HabariHeaven is more than a service provider — it's your personalized gateway to experience Kenya like never before. From booking your safari and accommodation to managing land purchases or property investments — we handle it all seamlessly."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
