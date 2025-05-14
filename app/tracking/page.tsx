"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Bus, Clock, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusMap from "@/components/bus-map"

// Mock data for bus locations
const busLocations = [
  {
    id: "KL-15-A-1234",
    route: "Thiruvananthapuram - Kochi",
    currentLocation: "Alappuzha",
    nextStop: "Cherthala",
    eta: "10 mins",
    lat: 9.4981,
    lng: 76.3388,
    status: "On Time",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
  },
  {
    id: "KL-15-B-5678",
    route: "Kochi - Kozhikode",
    currentLocation: "Thrissur",
    nextStop: "Kunnamkulam",
    eta: "15 mins",
    lat: 10.5276,
    lng: 76.2144,
    status: "Delayed",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KSRTC_Scania_Metrolink_HD_14.5m.jpg/1280px-KSRTC_Scania_Metrolink_HD_14.5m.jpg",
  },
  {
    id: "KL-15-C-9012",
    route: "Kozhikode - Kannur",
    currentLocation: "Thalassery",
    nextStop: "Kannur",
    eta: "25 mins",
    lat: 11.7493,
    lng: 75.4913,
    status: "On Time",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/KSRTC_Minnal_AC_Volvo_Service.jpg/1280px-KSRTC_Minnal_AC_Volvo_Service.jpg",
  },
]

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBus, setSelectedBus] = useState(busLocations[0])
  const [filteredBuses, setFilteredBuses] = useState(busLocations)

  useEffect(() => {
    if (searchQuery) {
      setFilteredBuses(
        busLocations.filter(
          (bus) =>
            bus.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bus.route.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    } else {
      setFilteredBuses(busLocations)
    }
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">KSRTC</span>
            <span className="hidden md:inline text-sm">Kerala State Road Transport Corporation</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/routes" className="text-sm font-medium hover:underline">
              Routes
            </Link>
            <Link href="/timetable" className="text-sm font-medium hover:underline">
              Timetable
            </Link>
            <Link href="/tracking" className="text-sm font-medium hover:underline font-bold">
              Live Tracking
            </Link>
            <Link href="/fares" className="text-sm font-medium hover:underline">
              Fares
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="hidden sm:flex">
                Register
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Live Bus Tracking</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Find Your Bus</CardTitle>
                <CardDescription>Enter bus number or route to track</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Bus number or route"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Available Buses</CardTitle>
                <CardDescription>Select a bus to view its location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredBuses.length > 0 ? (
                    filteredBuses.map((bus) => (
                      <div
                        key={bus.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedBus.id === bus.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        onClick={() => setSelectedBus(bus)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{bus.id}</div>
                            <div className="text-sm">{bus.route}</div>
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full ${
                              bus.status === "On Time" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {bus.status}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-muted-foreground">No buses found matching your search</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle>Live Location</CardTitle>
                <CardDescription>
                  Tracking {selectedBus.id} on route {selectedBus.route}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="map">
                  <div className="px-6 pt-2">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="map">Map View</TabsTrigger>
                      <TabsTrigger value="details">Bus Details</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="map" className="m-0">
                    <div className="h-[500px] w-full relative">
                      <BusMap selectedBus={selectedBus} />
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="m-0 p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Bus className="h-10 w-10 text-primary" />
                        <div>
                          <h3 className="font-semibold text-lg">{selectedBus.id}</h3>
                          <p className="text-muted-foreground">{selectedBus.route}</p>
                        </div>
                      </div>

                      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                        <img
                          src={selectedBus.image || "/placeholder.svg"}
                          alt={`KSRTC ${selectedBus.id} Bus`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Current Location</div>
                            <div className="font-medium">{selectedBus.currentLocation}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Next Stop</div>
                            <div className="font-medium">{selectedBus.nextStop}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">ETA to Next Stop</div>
                            <div className="font-medium">{selectedBus.eta}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-3 w-3 rounded-full ${
                              selectedBus.status === "On Time" ? "bg-green-500" : "bg-amber-500"
                            }`}
                          ></div>
                          <div>
                            <div className="text-sm text-muted-foreground">Status</div>
                            <div className="font-medium">{selectedBus.status}</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-3">Upcoming Stops</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>{selectedBus.nextStop}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{selectedBus.eta}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-muted"></div>
                              <span>Final Destination</span>
                            </div>
                            <span className="text-sm text-muted-foreground">45 mins</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

