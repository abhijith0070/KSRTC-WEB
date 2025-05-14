import Link from "next/link"
import { ArrowLeft, Calculator, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"

export default function FaresPage() {
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
          <h1 className="text-2xl font-bold">Fare Details</h1>
        </div>

        <Tabs defaultValue="calculator" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="calculator">Fare Calculator</TabsTrigger>
            <TabsTrigger value="chart">Fare Chart</TabsTrigger>
            <TabsTrigger value="policy">Fare Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" /> Fare Calculator
                </CardTitle>
                <CardDescription>Calculate fare for your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
                    <label htmlFor="bus-type" className="block text-sm font-medium mb-1">
                      Bus Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bus type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordinary">Ordinary</SelectItem>
                        <SelectItem value="fast-passenger">Fast Passenger</SelectItem>
                        <SelectItem value="super-fast">Super Fast</SelectItem>
                        <SelectItem value="super-deluxe">Super Deluxe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button>Calculate Fare</Button>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
                  <p className="text-muted-foreground mb-2">
                    Select origin, destination and bus type to calculate fare
                  </p>
                  <div className="text-3xl font-bold text-primary">₹0.00</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chart" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fare Chart</CardTitle>
                <CardDescription>Standard fares for popular routes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">Route</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Distance</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Ordinary</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Fast Passenger</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Super Fast</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Super Deluxe</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">Thiruvananthapuram - Kochi</td>
                        <td className="px-4 py-3 text-sm">220 km</td>
                        <td className="px-4 py-3 text-sm">₹220</td>
                        <td className="px-4 py-3 text-sm">₹280</td>
                        <td className="px-4 py-3 text-sm">₹320</td>
                        <td className="px-4 py-3 text-sm">₹450</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">Kochi - Kozhikode</td>
                        <td className="px-4 py-3 text-sm">190 km</td>
                        <td className="px-4 py-3 text-sm">₹190</td>
                        <td className="px-4 py-3 text-sm">₹240</td>
                        <td className="px-4 py-3 text-sm">₹280</td>
                        <td className="px-4 py-3 text-sm">₹380</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">Kozhikode - Kannur</td>
                        <td className="px-4 py-3 text-sm">90 km</td>
                        <td className="px-4 py-3 text-sm">₹90</td>
                        <td className="px-4 py-3 text-sm">₹120</td>
                        <td className="px-4 py-3 text-sm">₹150</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">Thiruvananthapuram - Kollam</td>
                        <td className="px-4 py-3 text-sm">70 km</td>
                        <td className="px-4 py-3 text-sm">₹70</td>
                        <td className="px-4 py-3 text-sm">₹90</td>
                        <td className="px-4 py-3 text-sm">₹120</td>
                        <td className="px-4 py-3 text-sm">₹180</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 text-sm">Kochi - Thrissur</td>
                        <td className="px-4 py-3 text-sm">80 km</td>
                        <td className="px-4 py-3 text-sm">₹80</td>
                        <td className="px-4 py-3 text-sm">₹100</td>
                        <td className="px-4 py-3 text-sm">₹140</td>
                        <td className="px-4 py-3 text-sm">₹200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" /> Fare Policy
                </CardTitle>
                <CardDescription>Information about KSRTC fare structure and policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Fare Structure</h3>
                  <p className="text-muted-foreground">
                    KSRTC fares are calculated based on the distance traveled and the type of service. The base fare is
                    determined by the Kerala State Road Transport Corporation and is subject to change based on fuel
                    prices and other factors.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Concessions</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Senior citizens (above 60 years) - 25% discount</li>
                    <li>Students with valid ID - 50% discount on ordinary services</li>
                    <li>Differently-abled persons - 50% discount</li>
                    <li>Freedom fighters - Free travel</li>
                    <li>Children below 3 years - Free travel</li>
                    <li>Children between 3-12 years - Half fare</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Luggage Policy</h3>
                  <p className="text-muted-foreground">
                    Each passenger is allowed to carry up to 15kg of luggage free of charge. Additional luggage will be
                    charged at the rate of ₹10 per kg. Oversized luggage may not be permitted on certain services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Refund Policy</h3>
                  <p className="text-muted-foreground">
                    Cancellations made more than 24 hours before departure will incur a 10% fee. Cancellations made
                    within 24 hours will incur a 25% fee. No refunds for cancellations made within 2 hours of departure.
                  </p>
                </div>
              </CardContent>
            </Card>
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

