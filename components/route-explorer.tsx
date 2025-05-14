"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccessibleImage from "@/components/accessible-image"

const popularDestinations = [
  {
    name: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop",
    routes: 45,
    buses: 120,
  },
  {
    name: "Kochi",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
    routes: 38,
    buses: 95,
  },
  {
    name: "Kozhikode",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
    routes: 32,
    buses: 80,
  },
  {
    name: "Thrissur",
    image: "https://images.unsplash.com/photo-1627894466296-8bea9d7f8c24?q=80&w=2070&auto=format&fit=crop",
    routes: 28,
    buses: 70,
  },
  {
    name: "Kollam",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
    routes: 25,
    buses: 65,
  },
  {
    name: "Alappuzha",
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2070&auto=format&fit=crop",
    routes: 22,
    buses: 55,
  },
]

const popularRoutes = [
  {
    from: "Thiruvananthapuram",
    to: "Kochi",
    duration: "4h 30m",
    frequency: "Every 30 mins",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    from: "Kochi",
    to: "Kozhikode",
    duration: "5h 15m",
    frequency: "Every 45 mins",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
  },
  {
    from: "Kozhikode",
    to: "Kannur",
    duration: "2h 45m",
    frequency: "Every 1 hour",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    from: "Thiruvananthapuram",
    to: "Kollam",
    duration: "2h 15m",
    frequency: "Every 20 mins",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function RouteExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredDestinations, setFilteredDestinations] = useState(popularDestinations)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredDestinations(popularDestinations)
    } else {
      const filtered = popularDestinations.filter((destination) =>
        destination.name.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredDestinations(filtered)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Destinations</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Explore Popular Routes</h2>
          <p className="text-muted-foreground">
            Discover the most traveled routes and destinations across Kerala with our comprehensive network.
          </p>
        </div>

        <Tabs defaultValue="destinations" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="destinations" className="rounded-md data-[state=active]:bg-background">
                Popular Destinations
              </TabsTrigger>
              <TabsTrigger value="routes" className="rounded-md data-[state=active]:bg-background">
                Popular Routes
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="destinations" className="space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-10 rounded-full border-primary/20 focus:border-primary"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination, index) => (
                  <Link href={`/destinations/${destination.name.toLowerCase()}`} key={index} className="block group">
                    <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                      <div className="relative h-48">
                        <AccessibleImage
                          src={destination.image}
                          alt={`${destination.name}, Kerala - scenic view`}
                          fill
                          fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold">{destination.name}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Routes</p>
                            <p className="font-semibold">{destination.routes}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Daily Buses</p>
                            <p className="font-semibold">{destination.buses}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary">
                            Explore <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground mb-4">No destinations found matching "{searchQuery}"</p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setFilteredDestinations(popularDestinations)
                    }}
                  >
                    Show All Destinations
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="routes" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularRoutes.map((route, index) => (
                <Link href={`/book?from=${route.from}&to=${route.to}`} key={index} className="block group">
                  <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                        <AccessibleImage
                          src={route.image}
                          alt={`${route.from} to ${route.to} - Kerala travel route`}
                          fill
                          fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                              <div className="h-14 w-0.5 bg-primary/30 my-1"></div>
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                            </div>
                            <div className="ml-4">
                              <div className="mb-4">
                                <p className="text-sm text-muted-foreground">From</p>
                                <p className="font-semibold text-lg">{route.from}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">To</p>
                                <p className="font-semibold text-lg">{route.to}</p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:block border-l pl-4">
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                              <span>{route.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Badge variant="outline" className="font-normal">
                                {route.frequency}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="md:hidden flex items-center justify-between mt-2 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{route.duration}</span>
                          </div>
                          <Badge variant="outline" className="font-normal">
                            {route.frequency}
                          </Badge>
                        </div>
                        <Button className="w-full mt-2 group-hover:bg-primary">Book This Route</Button>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/routes">
                <Button variant="outline" className="rounded-full">
                  View All Routes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

