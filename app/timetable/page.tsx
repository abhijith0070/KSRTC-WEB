import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"

// Sample timetable data
const timetableData = [
  {
    id: "KL-15-A-1234",
    type: "Super Fast",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "07:30 AM",
    arrivalTime: "12:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: "KL-15-B-5678",
    type: "Super Deluxe",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "08:45 AM",
    arrivalTime: "01:15 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: "KL-15-C-9012",
    type: "Ordinary",
    from: "Thiruvananthapuram",
    to: "Kochi",
    departureTime: "09:30 AM",
    arrivalTime: "02:30 PM",
    days: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "KL-15-D-3456",
    type: "Fast Passenger",
    from: "Kochi",
    to: "Kozhikode",
    departureTime: "11:00 AM",
    arrivalTime: "04:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    id: "KL-15-E-7890",
    type: "Super Fast",
    from: "Kozhikode",
    to: "Kannur",
    departureTime: "02:30 PM",
    arrivalTime: "05:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
]

export default function TimetablePage() {
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
          <h1 className="text-2xl font-bold">Bus Timetable</h1>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Search Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium mb-1">
                    From
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select origin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thiruvananthapuram">Thiruvananthapuram</SelectItem>
                      <SelectItem value="kochi">Kochi</SelectItem>
                      <SelectItem value="kozhikode">Kozhikode</SelectItem>
                      <SelectItem value="thrissur">Thrissur</SelectItem>
                      <SelectItem value="kollam">Kollam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="to" className="block text-sm font-medium mb-1">
                    To
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thiruvananthapuram">Thiruvananthapuram</SelectItem>
                      <SelectItem value="kochi">Kochi</SelectItem>
                      <SelectItem value="kozhikode">Kozhikode</SelectItem>
                      <SelectItem value="thrissur">Thrissur</SelectItem>
                      <SelectItem value="kollam">Kollam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="day" className="block text-sm font-medium mb-1">
                    Day
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Days</SelectItem>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                      <SelectItem value="sunday">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Routes</TabsTrigger>
            <TabsTrigger value="popular">Popular Routes</TabsTrigger>
            <TabsTrigger value="special">Special Services</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Bus ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">From</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">To</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Departure</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Arrival</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Days</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {timetableData.map((bus, index) => (
                      <tr key={index} className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">{bus.id}</td>
                        <td className="px-4 py-3 text-sm">{bus.type}</td>
                        <td className="px-4 py-3 text-sm">{bus.from}</td>
                        <td className="px-4 py-3 text-sm">{bus.to}</td>
                        <td className="px-4 py-3 text-sm">{bus.departureTime}</td>
                        <td className="px-4 py-3 text-sm">{bus.arrivalTime}</td>
                        <td className="px-4 py-3 text-sm">{bus.days.length === 7 ? "Daily" : bus.days.join(", ")}</td>
                        <td className="px-4 py-3 text-sm">
                          <Link href={`/book?from=${bus.from}&to=${bus.to}`}>
                            <Button size="sm" variant="outline">
                              Book
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Bus ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">From</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">To</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Departure</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Arrival</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Days</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {timetableData.slice(0, 3).map((bus, index) => (
                      <tr key={index} className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">{bus.id}</td>
                        <td className="px-4 py-3 text-sm">{bus.type}</td>
                        <td className="px-4 py-3 text-sm">{bus.from}</td>
                        <td className="px-4 py-3 text-sm">{bus.to}</td>
                        <td className="px-4 py-3 text-sm">{bus.departureTime}</td>
                        <td className="px-4 py-3 text-sm">{bus.arrivalTime}</td>
                        <td className="px-4 py-3 text-sm">{bus.days.length === 7 ? "Daily" : bus.days.join(", ")}</td>
                        <td className="px-4 py-3 text-sm">
                          <Link href={`/book?from=${bus.from}&to=${bus.to}`}>
                            <Button size="sm" variant="outline">
                              Book
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="special" className="space-y-4">
            <div className="bg-card p-8 rounded-lg text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-medium mb-2">Special Services</h3>
              <p className="text-muted-foreground mb-4">No special services available at the moment.</p>
              <p className="text-sm text-muted-foreground">
                Check back later for festival specials and holiday services.
              </p>
            </div>
          </TabsContent>
        </Tabs>
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

