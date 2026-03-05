import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="relative py-32 section-padding flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-90" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-white/70 font-body mb-8 max-w-xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm hover:bg-gold-light transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-body uppercase tracking-widest text-sm border border-primary/30 hover:bg-gold-light transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
