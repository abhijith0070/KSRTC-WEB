import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AccessibleImage from "@/components/accessible-image"

const testimonials = [
  {
    name: "Arun Kumar",
    location: "Kochi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "I've been using KSRTC for my daily commute for years. The new online booking system has made it so much easier to plan my trips. The live tracking feature is a game-changer!",
  },
  {
    name: "Priya Menon",
    location: "Thiruvananthapuram",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "As a frequent traveler between Trivandrum and Kochi, I appreciate the punctuality and cleanliness of KSRTC buses. The mobile app makes booking tickets a breeze.",
  },
  {
    name: "Mohammed Salim",
    location: "Kozhikode",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    text: "The Super Deluxe service is excellent for long journeys. Comfortable seats, air conditioning, and professional drivers. Highly recommended for family travel.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">What Our Passengers Say</h2>
          <p className="text-muted-foreground">
            Hear from our satisfied passengers about their experience with KSRTC's services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <AccessibleImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      fallbackSrc="https://randomuser.me/api/portraits/lego/1.jpg"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

