import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, Calendar as CalendarIcon, Users, Home, Briefcase, Plane } from "lucide-react";
import visaIcon from "@/assets/visa.webp";
import mpesaIcon from "@/assets/mpesa.webp";

// Payment method links - users will be redirected to respective payment gateways
const paymentMethods = [
  {
    name: "PayPal",
    url: "https://www.paypal.com/signin",
    description: "Pay securely with your PayPal account",
    color: "bg-[#003087] hover:bg-[#0040a5]"
  },
  {
    name: "Google Pay",
    url: "https://pay.google.com/intl/en_us/pay",
    description: "Fast and secure payments with Google Pay",
    color: "bg-[#4285F4] hover:bg-[#5a95ff]"
  },
  {
    name: "M-Pesa",
    url: "https://www.safaricom.co.ke/m-pesa/",
    description: "Kenya's leading mobile money service",
    color: "bg-[#00A651] hover:bg-[#00c964]"
  },
  {
    name: "Visa",
    url: "https://www.visa.com/",
    description: "Pay with your Visa card",
    color: "bg-[#1A1F71] hover:bg-[#2a2f91]"
  },
  {
    name: "Mastercard",
    url: "https://www.mastercard.us/",
    description: "Pay with your Mastercard",
    color: "bg-[#EB001B] hover:bg-[#ff1a30]"
  },
  {
    name: "American Express",
    url: "https://www.americanexpress.com/",
    description: "Pay with American Express",
    color: "bg-[#006FCF] hover:bg-[#0087f7]"
  },
  {
    name: "Binance",
    url: "https://www.binance.com/",
    description: "Pay with Cryptocurrency via Binance",
    color: "bg-[#F3BA2F] hover:bg-[#f5c33f]"
  }
];

const serviceTypes = [
  { id: "accommodation", label: "Accommodation", icon: Home, description: "Hotel bookings, luxury stays, and resorts" },
  { id: "transport", label: "Transport", icon: Plane, description: "Airport transfers, car rentals, and guided tours" },
  { id: "property", label: "Property Management", icon: Briefcase, description: "Comprehensive property management services for Landlords & collection of rents with efficiency" },
  { id: "safari", label: "Safari & Tours", icon: Users, description: "Wildlife safaris, national park tours, and adventures" },
];

const Booking = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend
    alert("Thank you for your booking request! We will contact you shortly to confirm.");
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Book Your <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-white/80 font-body max-w-2xl">
            Reserve your dream accommodation, safari adventure, or transport service with HabariHeaven. 
            Choose your preferred payment method below.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Selection */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Select Your Service</h2>
              <p className="text-muted-foreground font-body mb-8">
                Choose the type of service you'd like to book and we'll guide you through the process.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedService === service.id
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border/30 bg-secondary/30 hover:border-primary/50"
                    }`}
                  >
                    <service.icon className={`w-8 h-8 mb-2 ${selectedService === service.id ? "text-primary" : "text-muted-foreground"}`} />
                    <h3 className="font-display font-semibold mb-1">{service.label}</h3>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </button>
                ))}
              </div>

              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Booking Details</CardTitle>
                  <CardDescription>Fill in your details to complete your booking request</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254 700 000 000"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Check-in / Start Date</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">Check-out / End Date</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests">Number of Guests / Persons</Label>
                      <Select value={formData.guests} onValueChange={(value) => setFormData((prev) => ({ ...prev, guests: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Special Requests / Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your preferences, dietary requirements, or any special requests..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full mt-4">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Payment Methods</h2>
              <p className="text-muted-foreground font-body mb-8">
                Choose your preferred payment method to complete your booking. 
                Click on any method to be redirected to the secure payment gateway.
              </p>

              {/* Quick Payment Options */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Quick Payment
                  </CardTitle>
                  <CardDescription>Select your preferred payment gateway</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <a
                        key={method.name}
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-4 rounded-lg ${method.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                        title={method.description}
                      >
                        {method.name === "PayPal" && (
                          <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2 fill-current">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                          </svg>
                        )}
                        {method.name === "Google Pay" && (
                          <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
                            <path fill="white" d="M12 11v2.4h6.458c-.27 1.434-1.612 4.203-6.458 4.203-3.887 0-7.062-3.217-7.062-7.183S8.113 3.237 12 3.237c2.213 0 3.682.943 4.52 1.762l3.107-2.997C17.252 1.142 14.924 0 12 0 6.477 0 1.831 2.823.408 7.023l4.19 3.263C6.18 7.477 8.833 5.883 12 5.883c4.054 0 6.698 2.78 6.698 6.717 0 .46-.043.9-.124 1.318L12 11z"/>
                          </svg>
                        )}
                        {method.name === "M-Pesa" && (
                          <img src={mpesaIcon} alt="M-Pesa" className="w-10 h-10 object-contain" />
                        )}
                        {method.name === "Visa" && (
                          <img src={visaIcon} alt="Visa" className="w-12 h-8 object-contain" />
                        )}
                        {method.name === "Mastercard" && (
                          <svg viewBox="0 0 40 25" className="w-8 h-5 mb-2">
                            <circle cx="15" cy="12.5" r="9" fill="white"/>
                            <circle cx="25" cy="12.5" r="9" fill="white" fillOpacity="0.7"/>
                          </svg>
                        )}
                        {method.name === "American Express" && (
                          <svg viewBox="0 0 30 20" className="w-8 h-5 mb-2">
                            <path fill="white" d="M3 0h24v20H3V0zm3 3h18v14H6V3zm2 2v2h2V5H8zm0 4v6h2V9H8zm3-4v10h2V5h-2zm3 0v10h2V9h-2V5h-2zm3 0v10h2V5h-2z"/>
                          </svg>
                        )}
                        {method.name === "Binance" && (
                          <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
                            <path fill="white" d="M12 0L1.716 6.855l.858 2.058L12 4.778l9.426 4.135.858-2.058L12 0zm0 9.923L4.488 14.4l-.515 1.23L12 11.135l8.027 3.495-.515-1.23L12 9.923zM4.856 17.35l-.858 2.058L12 24l7.002-4.592-.858-2.058L12 20.146l-7.144-2.796z"/>
                          </svg>
                        )}
                        <span className="text-xs font-medium">{method.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Payment Information</CardTitle>
                  <CardDescription>Important details about payments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Secure Payments</h4>
                      <p className="text-xs text-muted-foreground">
                        All transactions are encrypted and processed through secure payment gateways.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Multiple Currencies</h4>
                      <p className="text-xs text-muted-foreground">
                        We accept payments in USD, EUR, GBP, KES, and other major currencies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Instant Confirmation</h4>
                      <p className="text-xs text-muted-foreground">
                        Receive immediate booking confirmation via email after payment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">24/7 Support</h4>
                      <p className="text-xs text-muted-foreground">
                        Our team is available round-the-clock to assist with any payment queries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Payment */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-display">Need Assistance?</CardTitle>
                  <CardDescription>Contact us for payment support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you prefer manual payment or need help with the booking process, 
                    please contact us directly:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> +254 797 290 637</p>
                    <p><strong>Email:</strong> ahmed@habariheaven.com / nasra@habariheaven.com</p>
                    <p><strong>WhatsApp:</strong> +254 797 290 637</p>
                    <p><strong>Location:</strong> 6th floor kimathi street-Nairobi</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Booking;
