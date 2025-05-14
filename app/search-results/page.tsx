"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Filter, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

// Mock data for bus search results
const busResults = [
  {
    id: "KL-15-A-1234",
    type: "Super Fast",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "07:30 AM",
    arrivalTime: "12:00 PM",
    duration: "4h 30m",
    fare: 320,
    availableSeats: 23,
    amenities: ["Air Conditioned", "Charging Point", "Water Bottle"],
    rating: 4.5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
  },
  {
    id: "KL-15-B-5678",
    type: "Super Deluxe",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "08:45 AM",
    arrivalTime: "01:15 PM",
    duration: "4h 30m",
    fare: 450,
    availableSeats: 15,
    amenities: ["Air Conditioned", "Charging Point", "Water Bottle", "WiFi", "Entertainment"],
    rating: 4.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KSRTC_Scania_Metrolink_HD_14.5m.jpg/1280px-KSRTC_Scania_Metrolink_HD_14.5m.jpg",
  },
  {
    id: "KL-15-C-9012",
    type: "Ordinary",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "09:30 AM",
    arrivalTime: "02:30 PM",
    duration: "5h 00m",
    fare: 220,
    availableSeats: 32,
    amenities: ["Fan"],
    rating: 3.9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/KSRTC_Super_Fast_Bus_Service.jpg/1280px-KSRTC_Super_Fast_Bus_Service.jpg",
  },
  {
    id: "KL-15-D-3456",
    type: "Fast Passenger",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "11:00 AM",
    arrivalTime: "04:00 PM",
    duration: "5h 00m",
    fare: 280,
    availableSeats: 18,
    amenities: ["Charging Point"],
    rating: 4.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/KSRTC_Minnal_AC_Volvo_Service.jpg/1280px-KSRTC_Minnal_AC_Volvo_Service.jpg",
  },
  {
    id: "KL-15-E-7890",
    type: "Super Fast",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "02:30 PM",
    arrivalTime: "07:00 PM",
    duration: "4h 30m",
    fare: 320,
    availableSeats: 25,
    amenities: ["Air Conditioned", "Charging Point"],
    rating: 4.4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
  },
]

export default function SearchResultsPage() {
  const [filteredResults, setFilteredResults] = useState(busResults)
  const [priceRange, setPriceRange] = useState([200, 500])
  const [departureTime, setDepartureTime] = useState("any")
  const [busType, setBusType] = useState("any")
  const [acOnly, setAcOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const applyFilters = () => {
    let results = [...busResults]

    // Filter by price range
    results = results.filter((bus) => bus.fare >= priceRange[0] && bus.fare <= priceRange[1])

    // Filter by departure time
    if (departureTime !== "any") {
      if (departureTime === "morning") {
        results = results.filter((bus) => {
          const hour = Number.parseInt(bus.departureTime.split(":")[0])
          return hour >= 6 && hour < 12
        })
      } else if (departureTime === "afternoon") {
        results = results.filter((bus) => {
          const hour = Number.parseInt(bus.departureTime.split(":")[0])
          return hour >= 12 && hour < 17
        })
      } else if (departureTime === "evening") {
        results = results.filter((bus) => {
          const hour = Number.parseInt(bus.departureTime.split(":")[0])
          return hour >= 17 && hour < 21
        })
      } else if (departureTime === "night") {
        results = results.filter((bus) => {
          const hour = Number.parseInt(bus.departureTime.split(":")[0])
          return hour >= 21 || hour < 6
        })
      }
    }

    // Filter by bus type
    if (busType !== "any") {
      results = results.filter((bus) => bus.type.toLowerCase().includes(busType.toLowerCase()))
    }

    // Filter by AC
    if (acOnly) {
      results = results.filter((bus) => bus.amenities.includes("Air Conditioned"))
    }

    setFilteredResults(results)

    // On mobile, hide filters after applying
    if (window.innerWidth < 1024) {
      setShowFilters(false)
    }
  }

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
            <Link href="/tracking" className="text-sm font-medium hover:underline">
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
          <h1 className="text-2xl font-bold">Search Results</h1>
        </div>

        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Filters
                </CardTitle>
                <CardDescription>Refine your search results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Price Range</Label>
                  <div className="pt-2">
                    <Slider
                      defaultValue={[200, 500]}
                      min={100}
                      max={600}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Departure Time</Label>
                  <RadioGroup defaultValue="any" onValueChange={setDepartureTime}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any">Any Time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="morning" />
                      <Label htmlFor="morning">Morning (6AM - 12PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon (12PM - 5PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="evening" />
                      <Label htmlFor="evening">Evening (5PM - 9PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="night" id="night" />
                      <Label htmlFor="night">Night (9PM - 6AM)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Bus Type</Label>
                  <Select defaultValue="any" onValueChange={setBusType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bus type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Type</SelectItem>
                      <SelectItem value="super">Super Fast</SelectItem>
                      <SelectItem value="deluxe">Super Deluxe</SelectItem>
                      <SelectItem value="ordinary">Ordinary</SelectItem>
                      <SelectItem value="fast">Fast Passenger</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ac-only">AC Buses Only</Label>
                    <Switch id="ac-only" checked={acOnly} onCheckedChange={setAcOnly} />
                  </div>
                </div>

                <Button className="w-full" onClick={applyFilters}>
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between bg-card p-4 rounded-lg">
              <div>
                <h2 className="font-medium">
                  {filteredResults.length} buses found from {busResults[0].from} to {busResults[0].to}
                </h2>
                <p className="text-sm text-muted-foreground">Showing results for {new Date().toDateString()}</p>
              </div>
              <Select defaultValue="departure">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="departure">Departure Time</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredResults.length > 0 ? (
              filteredResults.map((bus) => (
                <Card key={bus.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="p-6 md:col-span-2 lg:col-span-3">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:block relative h-16 w-16 rounded-md overflow-hidden">
                          <img
                            src={bus.image || "/placeholder.svg"}
                            alt={`KSRTC ${bus.type} Bus`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{bus.type}</h3>
                            <div className="bg-muted px-2 py-0.5 rounded text-xs">{bus.id}</div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm text-muted-foreground">From</div>
                                  <div className="font-medium">{bus.from}</div>
                                  <div className="text-sm">{bus.departureTime}</div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm text-muted-foreground">To</div>
                                  <div className="font-medium">{bus.to}</div>
                                  <div className="text-sm">{bus.arrivalTime}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>{bus.duration}</span>
                            </div>
                            <div className="text-sm bg-muted px-2 py-0.5 rounded">
                              {bus.availableSeats} seats available
                            </div>
                            {bus.amenities.slice(0, 3).map((amenity, index) => (
                              <div key={index} className="text-sm bg-muted px-2 py-0.5 rounded">
                                {amenity}
                              </div>
                            ))}
                            {bus.amenities.length > 3 && (
                              <div className="text-sm bg-muted px-2 py-0.5 rounded">
                                +{bus.amenities.length - 3} more
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l">
                      <div>
                        <div className="text-2xl font-bold">₹{bus.fare}</div>
                        <div className="text-sm text-muted-foreground">per passenger</div>
                      </div>
                      <Link href={`/book/${bus.id}`}>
                        <Button className="w-full mt-4">
                          Select Seats <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="bg-card p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">No buses found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilteredResults(busResults)
                    setPriceRange([200, 500])
                    setDepartureTime("any")
                    setBusType("any")
                    setAcOnly(false)
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

