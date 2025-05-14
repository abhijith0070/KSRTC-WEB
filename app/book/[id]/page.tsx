"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bus, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for bus details
const busDetails = {
  id: "KL-15-A-1234",
  type: "Super Fast",
  from: "Thiruvananthapuram",
  to: "Kochi",
  departureTime: "07:30 AM",
  arrivalTime: "12:00 PM",
  duration: "4h 30m",
  date: "2023-08-15",
  fare: 320,
  availableSeats: 23,
  amenities: ["Air Conditioned", "Charging Point", "Water Bottle"],
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [passengers, setPassengers] = useState(1)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [activeTab, setActiveTab] = useState("details")

  // Generate a 5x8 seat layout
  const generateSeats = () => {
    const rows = 8
    const cols = 5
    const seats = []
    const bookedSeats = ["A3", "B2", "C4", "D1", "E5", "F3", "G2", "H4"] // Mock booked seats

    for (let i = 1; i <= rows; i++) {
      const row = []
      for (let j = 1; j <= cols; j++) {
        // Skip the middle seat in each row to create an aisle
        if (j === 3) continue

        const seatId = `${String.fromCharCode(64 + i)}${j}`
        const isBooked = bookedSeats.includes(seatId)
        const isSelected = selectedSeats.includes(seatId)

        row.push({
          id: seatId,
          booked: isBooked,
          selected: isSelected,
        })
      }
      seats.push(row)
    }
    return seats
  }

  const seats = generateSeats()

  const toggleSeatSelection = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      if (selectedSeats.length < passengers) {
        setSelectedSeats([...selectedSeats, seatId])
      }
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
          <Link href="/search-results" className="mr-4">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Results
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Book Your Ticket</h1>
        </div>

        {/* Mobile tabs for navigation between sections */}
        <div className="block lg:hidden mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Bus Details</TabsTrigger>
              <TabsTrigger value="seats">Select Seats</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`lg:col-span-2 space-y-6 ${activeTab === "details" || activeTab === "seats" ? "block" : "hidden lg:block"}`}
          >
            <Card className={activeTab !== "details" && activeTab !== "all" ? "hidden lg:block" : "block"}>
              <CardHeader>
                <CardTitle>Bus Details</CardTitle>
                <CardDescription>Review your journey details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <Bus className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">{busDetails.id}</h3>
                      <p className="text-muted-foreground">{busDetails.type}</p>
                    </div>
                  </div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">
                    {busDetails.availableSeats} seats available
                  </div>
                </div>

                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                  <img
                    src={busDetails.image || "/placeholder.svg"}
                    alt={`KSRTC ${busDetails.type} Bus`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">From</div>
                        <div className="font-medium">{busDetails.from}</div>
                        <div className="text-sm">{busDetails.departureTime}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">To</div>
                        <div className="font-medium">{busDetails.to}</div>
                        <div className="text-sm">{busDetails.arrivalTime}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{busDetails.date}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium">{busDetails.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {busDetails.amenities.map((amenity, index) => (
                      <div key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={activeTab !== "seats" && activeTab !== "all" ? "hidden lg:block" : "block"}>
              <CardHeader>
                <CardTitle>Select Seats</CardTitle>
                <CardDescription>Choose {passengers} seat(s) from the layout below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (passengers > 1) {
                          setPassengers(passengers - 1)
                          if (selectedSeats.length > passengers - 1) {
                            setSelectedSeats(selectedSeats.slice(0, passengers - 1))
                          }
                        }
                      }}
                    >
                      -
                    </Button>
                    <Input
                      id="passengers"
                      type="number"
                      value={passengers}
                      onChange={(e) => {
                        const value = Number.parseInt(e.target.value)
                        if (value >= 1 && value <= 5) {
                          setPassengers(value)
                          if (selectedSeats.length > value) {
                            setSelectedSeats(selectedSeats.slice(0, value))
                          }
                        }
                      }}
                      className="w-16 text-center"
                      min="1"
                      max="5"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (passengers < 5) {
                          setPassengers(passengers + 1)
                        }
                      }}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="flex gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-muted rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-primary rounded"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                      <span>Booked</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-muted-foreground">
                      Front
                    </div>
                    <div className="grid gap-4">
                      {seats.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex gap-2">
                          {row.map((seat) => (
                            <button
                              key={seat.id}
                              disabled={seat.booked}
                              onClick={() => !seat.booked && toggleSeatSelection(seat.id)}
                              className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                                seat.booked
                                  ? "bg-muted-foreground text-muted-foreground/30 cursor-not-allowed"
                                  : seat.selected
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                              }`}
                            >
                              {seat.id}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 text-sm font-medium text-muted-foreground">
                      Rear
                    </div>
                  </div>
                </div>

                {selectedSeats.length > 0 && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Selected Seats:</span>
                      <span>{selectedSeats.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total Fare:</span>
                      <span>₹{busDetails.fare * selectedSeats.length}</span>
                    </div>
                  </div>
                )}

                {/* Mobile navigation buttons */}
                <div className="flex justify-between mt-6 lg:hidden">
                  <Button variant="outline" onClick={() => setActiveTab("details")}>
                    Back to Details
                  </Button>
                  <Button onClick={() => setActiveTab("payment")} disabled={selectedSeats.length === 0}>
                    Continue to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={`lg:col-span-1 ${activeTab === "payment" || activeTab === "all" ? "block" : "hidden lg:block"}`}
          >
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
                <CardDescription>Complete your booking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bus Type</span>
                    <span>{busDetails.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Journey Date</span>
                    <span>{busDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departure</span>
                    <span>{busDetails.departureTime}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passengers</span>
                    <span>{selectedSeats.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seats</span>
                    <span>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "-"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fare per seat</span>
                    <span>₹{busDetails.fare}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>₹{busDetails.fare * selectedSeats.length}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-2">
                    <div>
                      <RadioGroupItem value="card" id="card" className="peer sr-only" />
                      <Label
                        htmlFor="card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
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
                          className="mb-1 h-5 w-5"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        Card
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                      <Label
                        htmlFor="upi"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
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
                          className="mb-1 h-5 w-5"
                        >
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        UPI
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="netbanking" id="netbanking" className="peer sr-only" />
                      <Label
                        htmlFor="netbanking"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
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
                          className="mb-1 h-5 w-5"
                        >
                          <path d="m2 18 2-2h2l1.36-1.36a6.5 6.5 0 0 1 7.28 0L16 16h2l2 2" />
                          <path d="m5 16 4-4 5 5" />
                          <path d="m18 16-1-1 3-3" />
                        </svg>
                        Net
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input id="contact" type="tel" placeholder="Enter your mobile number" />
                  <p className="text-xs text-muted-foreground">Ticket details will be sent to this number via SMS</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={selectedSeats.length === 0}
                  onClick={() => alert("Booking successful! Your ticket has been confirmed.")}
                >
                  Pay ₹{busDetails.fare * selectedSeats.length} & Confirm
                </Button>
              </CardFooter>

              {/* Mobile back button */}
              <div className="p-4 pt-0 lg:hidden">
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("seats")}>
                  Back to Seat Selection
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

