import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Home, Car, Building, MapPin, Compass, Ticket } from "lucide-react";
import accommodationImg from "@/assets/accommodation.jpg";
import transportImg from "@/assets/transport.jpg";
import realestateImg from "@/assets/realestate.jpg";
import safariImg from "@/assets/safari.jpg";

const services = [
  {
    icon: Home,
    title: "Short-Term Accommodation",
    description: "Curated furnished homes and apartments combining home comfort with hotel-quality standards.",
    image: accommodationImg,
  },
  {
    icon: Car,
    title: "VIP Transport",
    description: "Executive sedans, chartered flights, and professional chauffeurs for red-carpet treatment.",
    image: transportImg,
  },
  {
    icon: Building,
    title: "Property Management Services",
    description: "Comprehensive property services for buyers, sellers, and investors with deep local expertise.",
    image: realestateImg,
  },
  {
    icon: MapPin,
    title: "Land Sales",
    description: "Prime land acquisition from urban development plots to expansive rural estates.",
    image: realestateImg,
  },
  {
    icon: Compass,
    title: "Safari Tours",
    description: "Bespoke itineraries to Maasai Mara, Amboseli, Tsavo — unforgettable wildlife experiences.",
    image: safariImg,
  },
  {
    icon: Ticket,
    title: "Ticketing Services",
    description: "Domestic and international flights, bus travel, and event bookings — all in one place.",
    image: transportImg,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">What We Offer</span>
            <h2 className="luxury-heading text-3xl md:text-5xl mt-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body font-light max-w-xl mx-auto">
              End-to-end hospitality and property solutions, professionally coordinated under one roof.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-lg glass-panel h-80 cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105 transform transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <div className="mb-4 p-3 w-fit rounded-sm bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {/* Gold accent line */}
                  <motion.div
                    className="mt-4 h-px bg-primary/40 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-lg" style={{ boxShadow: "inset 0 0 60px hsla(40, 65%, 50%, 0.05)" }} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
