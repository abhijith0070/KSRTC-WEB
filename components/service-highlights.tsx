import { Clock, MapPin, Shield, Truck, Zap, Headphones, CreditCard, Smartphone } from "lucide-react"

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Live Tracking",
    description: "Track your bus in real-time and get accurate ETAs for your journey.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Service",
    description: "Round-the-clock service with night buses on major routes.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Safe Travel",
    description: "Trained drivers and regular vehicle maintenance for your safety.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Modern Fleet",
    description: "Comfortable buses with amenities for a pleasant journey experience.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fast Booking",
    description: "Book your tickets in seconds with our streamlined process.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    description: "Our customer service team is always ready to assist you.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Secure Payments",
    description: "Multiple payment options with secure transaction processing.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Tickets",
    description: "Paperless travel with digital tickets on your smartphone.",
  },
]

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Why Choose KSRTC</h2>
          <p className="text-muted-foreground">
            Experience the best of public transportation with our modern fleet, convenient booking system, and
            commitment to passenger safety and comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/40"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

