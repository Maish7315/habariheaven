import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Plane, Home, Building, Car, Compass, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Footer } from "@/components/Footer";

const services = [
  {
    icon: Plane,
    title: "Safari Tours",
    description: "Experience the wonders of Maasai Mara, Amboseli, Tsavo, and more. We curate unforgettable wildlife adventures tailored to your preferences.",
    highlights: ["Maasai Mara Wildlife Reserve", "Amboseli National Park", "Tsavo East & West", "Custom Itineraries"]
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "From luxury resorts to cozy apartments, we find the perfect stay for your Kenya experience.",
    highlights: ["Luxury Hotels", "Boutique Lodges", "Serviced Apartments", "Beach Resorts"]
  },
  {
    icon: Car,
    title: "VIP Transport",
    description: "Travel in comfort with our premium fleet of vehicles and professional chauffeurs.",
    highlights: ["Airport Transfers", "City Tours", "Inter-City Travel", "Charter Flights"]
  },
  {
    icon: Building,
    title: "Property Management",
    description: "Invest in Kenya's growing property market with our expert guidance.",
    highlights: ["Land Acquisition", "Property Management", "Investment Advisory", "Legal Assistance"]
  }
];

const process = [
  { step: 1, title: "Share Your Vision", description: "Tell us about your travel goals, budget, and preferences." },
  { step: 2, title: "We Plan It", description: "Our team creates a personalized itinerary tailored just for you." },
  { step: 3, title: "Confirm & Book", description: "Review your plan and let us handle all the bookings." },
  { step: 4, title: "Experience Kenya", description: "Enjoy a seamless, unforgettable journey in Kenya." }
];

export const PlanJourney = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep to-background" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-[20%] left-0 right-0 h-px bg-primary/30 origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-[20%] left-0 right-0 h-px bg-primary/30 origin-right"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-heading text-4xl md:text-6xl lg:text-7xl"
          >
            Plan Your <span className="text-gradient-gold">Journey</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl"
          >
            Let us help you create the perfect Kenya experience. From safari adventures to property investments, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Our Services</span>
              <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
                How Can We <span className="text-gradient-gold">Help You?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-lg glass-panel"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground font-body font-light mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-padding bg-navy-deep">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">How It Works</span>
              <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
                Your Journey in <span className="text-gradient-gold">4 Steps</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-primary">{p.step}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-body font-light">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">Get In Touch</span>
              <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
                Ready to <span className="text-gradient-gold">Start?</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-body font-light max-w-xl mx-auto">
                Contact us today to begin planning your perfect Kenya experience. We're here to help you every step of the way.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <a
                href="tel:+2540712345678"
                className="flex flex-col items-center p-6 rounded-lg glass-panel hover:border-primary/50 transition-colors text-center"
              >
                <Phone className="w-8 h-8 text-primary mb-4" />
                <span className="font-display text-lg text-foreground">Call Us</span>
                <span className="text-sm text-muted-foreground mt-2">+254 (0) 712 345 678</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:info@habariheaven.com"
                className="flex flex-col items-center p-6 rounded-lg glass-panel hover:border-primary/50 transition-colors text-center"
              >
                <Mail className="w-8 h-8 text-primary mb-4" />
                <span className="font-display text-lg text-foreground">Email Us</span>
                <span className="text-sm text-muted-foreground mt-2">info@habariheaven.com</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center p-6 rounded-lg glass-panel text-center">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <span className="font-display text-lg text-foreground">Visit Us</span>
                <span className="text-sm text-muted-foreground mt-2">Nairobi, Kenya</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.4}>
            <form className="glass-panel rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-xl text-foreground mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send Us a Message
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-md bg-background/50 border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 rounded-md bg-background/50 border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-md bg-background/50 border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
                />
                <select className="px-4 py-3 rounded-md bg-background/50 border border-border/30 text-foreground focus:outline-none focus:border-primary/50">
                  <option value="">Select Service</option>
                  <option value="safari">Safari Tours</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="transport">VIP Transport</option>
                  <option value="property">Property Management</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Tell us about your travel plans or requirements..."
                className="w-full px-4 py-3 rounded-md bg-background/50 border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 mb-6"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-body font-medium uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer with Payment Methods */}
      <Footer />
    </div>
  );
};

export default PlanJourney;
