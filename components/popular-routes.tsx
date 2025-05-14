"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AccessibleImage from "@/components/accessible-image"

const popularRoutes = [
  {
    from: "Thiruvananthapuram",
    to: "Kochi",
    price: "₹320",
    duration: "4h 30m",
    frequency: "Every 30 mins",
    type: "Super Fast",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    reviews: 320,
  },
  {
    from: "Kochi",
    to: "Kozhikode",
    price: "₹280",
    duration: "5h 15m",
    frequency: "Every 45 mins",
    type: "Super Deluxe",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
    rating: 4.7,
    reviews: 280,
  },
  {
    from: "Kozhikode",
    to: "Kannur",
    price: "₹150",
    duration: "2h 45m",
    frequency: "Every 1 hour",
    type: "Fast Passenger",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5,
    reviews: 210,
  },
  {
    from: "Thiruvananthapuram",
    to: "Kollam",
    price: "₹120",
    duration: "2h 15m",
    frequency: "Every 20 mins",
    type: "Ordinary",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 190,
  },
]

export default function PopularRoutes() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <Badge variant="outline" className="mb-2 text-primary border-primary">
            Popular Destinations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Trending Routes</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Discover the most popular routes across Kerala with frequent departures and comfortable buses.
          </p>
        </div>
        <Link
          href="/routes"
          className="text-primary flex items-center gap-1 text-sm font-medium hover:underline hidden md:flex"
        >
          View all routes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularRoutes.map((route, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 overflow-hidden group border-none shadow-md"
          >
            <div className="relative h-48 overflow-hidden">
              <AccessibleImage
                src={route.image}
                alt={`${route.from} to ${route.to} - Kerala landscape view`}
                fill
                fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold">
                  {route.from} to {route.to}
                </h3>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">{route.rating}</span>
                  </div>
                  <span className="mx-2 text-xs text-white/70">•</span>
                  <span className="text-xs text-white/70">{route.reviews} reviews</span>
                </div>
              </div>
              <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary text-white">{route.type}</Badge>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground text-sm">Price</span>
                <span className="font-semibold">{route.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground text-sm">Duration</span>
                <span>{route.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Frequency</span>
                <span className="text-sm">{route.frequency}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link href={`/book?from=${route.from}&to=${route.to}`} className="w-full">
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-md text-sm font-medium transition-colors">
                  Book Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8 md:hidden">
        <Link href="/routes" className="text-primary flex items-center gap-1 text-sm font-medium hover:underline">
          View all routes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

