import Link from "next/link"
import { ArrowLeft, Search, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import AccessibleImage from "@/components/accessible-image"

// Popular routes data
const popularRoutes = [
  {
    from: "Thiruvananthapuram",
    to: "Kochi",
    duration: "4h 30m",
    frequency: "Every 30 mins",
    fare: "₹320",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    from: "Kochi",
    to: "Kozhikode",
    duration: "5h 15m",
    frequency: "Every 45 mins",
    fare: "₹280",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
  },
  {
    from: "Kozhikode",
    to: "Kannur",
    duration: "2h 45m",
    frequency: "Every 1 hour",
    fare: "₹150",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Thiruvananthapuram",
    to: "Kollam",
    duration: "2h 15m",
    frequency: "Every 20 mins",
    fare: "₹120",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Kochi",
    to: "Thrissur",
    duration: "1h 45m",
    frequency: "Every 30 mins",
    fare: "₹140",
    image: "https://images.unsplash.com/photo-1627894466296-8bea9d7f8c24?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Alappuzha",
    to: "Kochi",
    duration: "1h 30m",
    frequency: "Every 30 mins",
    fare: "₹110",
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Thrissur",
    to: "Palakkad",
    duration: "1h 45m",
    frequency: "Every 45 mins",
    fare: "₹130",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Kozhikode",
    to: "Wayanad",
    duration: "2h 30m",
    frequency: "Every 1 hour",
    fare: "₹180",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
  },
]

export default function RoutesPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">All Routes</h1>
        </div>

        <div className="mb-8">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search routes..." className="pl-10 rounded-full" />
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-4">Popular Routes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularRoutes.map((route, index) => (
                <Link href={`/book?from=${route.from}&to=${route.to}`} key={index} className="block group">
                  <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-36 overflow-hidden">
                      <AccessibleImage
                        src={route.image}
                        alt={`${route.from} to ${route.to} - Kerala landscape view`}
                        fill
                        fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold">
                          {route.from} to {route.to}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{route.duration}</span>
                        </div>
                        <Badge variant="outline" className="font-normal text-xs">
                          {route.frequency}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{route.fare}</span>
                        <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">All Destinations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Thiruvananthapuram",
                "Kochi",
                "Kozhikode",
                "Thrissur",
                "Kollam",
                "Alappuzha",
                "Kannur",
                "Palakkad",
                "Kottayam",
                "Malappuram",
                "Wayanad",
                "Idukki",
                "Pathanamthitta",
                "Kasaragod",
              ].map((city, index) => (
                <Link href={`/destinations/${city.toLowerCase()}`} key={index}>
                  <div className="bg-muted/50 hover:bg-muted p-4 rounded-lg text-center transition-colors">
                    <MapPin className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <span className="text-sm font-medium">{city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Kerala State Road Transport Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

