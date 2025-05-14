import Link from "next/link"
import { ArrowLeft, MapPin, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import AccessibleImage from "@/components/accessible-image"

// Sample destinations data
const destinations = [
  {
    name: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop",
    description: "The capital city of Kerala, known for its historic landmarks, beaches, and cultural heritage.",
    routes: 45,
    buses: 120,
  },
  {
    name: "Kochi",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
    description:
      "A major port city with a rich history, known for its backwaters, colonial architecture, and vibrant culture.",
    routes: 38,
    buses: 95,
  },
  {
    name: "Kozhikode",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
    description: "A coastal city known for its beaches, historic sites, and delicious cuisine.",
    routes: 32,
    buses: 80,
  },
  {
    name: "Thrissur",
    image: "https://images.unsplash.com/photo-1627894466296-8bea9d7f8c24?q=80&w=2070&auto=format&fit=crop",
    description: "The cultural capital of Kerala, famous for the Thrissur Pooram festival and traditional art forms.",
    routes: 28,
    buses: 70,
  },
  {
    name: "Kollam",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
    description: "A historic port city known for its backwaters, beaches, and cashew processing industry.",
    routes: 25,
    buses: 65,
  },
  {
    name: "Alappuzha",
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2070&auto=format&fit=crop",
    description: "Known as the 'Venice of the East', famous for its backwaters, houseboats, and coir industry.",
    routes: 22,
    buses: 55,
  },
  {
    name: "Kannur",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
    description: "A coastal city known for its beaches, forts, and traditional Theyyam performances.",
    routes: 20,
    buses: 50,
  },
  {
    name: "Palakkad",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
    description: "Known as the 'Gateway of Kerala', famous for its Palakkad Fort and natural beauty.",
    routes: 18,
    buses: 45,
  },
]

export default function DestinationsPage() {
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
          <h1 className="text-2xl font-bold">Popular Destinations</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((destination, index) => (
            <Link href={`/destinations/${destination.name.toLowerCase()}`} key={index} className="block group">
              <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <AccessibleImage
                    src={destination.image}
                    alt={`${destination.name}, Kerala - scenic view`}
                    fill
                    fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm">
                      <Bus className="h-4 w-4 text-primary" />
                      <span>{destination.routes} routes</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Explore</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
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

