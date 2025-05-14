import Link from "next/link"
import { Wifi, Coffee, BatteryChargingIcon as ChargingPile, Tv, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AccessibleImage from "@/components/accessible-image"

const busTypes = [
  {
    name: "Super Deluxe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
    description: "Premium air-conditioned buses with reclining seats, entertainment systems, and refreshments.",
    features: ["Air Conditioned", "Reclining Seats", "Entertainment", "Charging Points", "Refreshments", "WiFi"],
    icons: [
      <Snowflake key="ac" className="h-4 w-4" />,
      <Tv key="tv" className="h-4 w-4" />,
      <ChargingPile key="charging" className="h-4 w-4" />,
      <Coffee key="coffee" className="h-4 w-4" />,
      <Wifi key="wifi" className="h-4 w-4" />,
    ],
    price: "From ₹450",
  },
  {
    name: "Super Fast",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/KSRTC_Minnal_AC_Volvo_Service.jpg/1280px-KSRTC_Minnal_AC_Volvo_Service.jpg",
    description: "Comfortable buses with limited stops for faster travel between major destinations.",
    features: ["Air Conditioned", "Comfortable Seats", "Charging Points", "Water Bottle"],
    icons: [<Snowflake key="ac" className="h-4 w-4" />, <ChargingPile key="charging" className="h-4 w-4" />],
    price: "From ₹320",
  },
  {
    name: "Fast Passenger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/KSRTC_Super_Fast_Bus_Service.jpg/1280px-KSRTC_Super_Fast_Bus_Service.jpg",
    description: "Regular service buses connecting multiple stops along major routes.",
    features: ["Comfortable Seats", "Frequent Stops", "Affordable"],
    icons: [],
    price: "From ₹280",
  },
  {
    name: "Ordinary",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/KSRTC_Bus_Station_Ernakulam.jpg/1280px-KSRTC_Bus_Station_Ernakulam.jpg",
    description: "Economic option for short to medium distance travel with frequent stops.",
    features: ["Economic", "Regular Service", "Multiple Stops"],
    icons: [],
    price: "From ₹220",
  },
]

export default function BusTypeShowcase() {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Choose Your Travel Experience</h2>
          <p className="text-muted-foreground">
            KSRTC offers various types of buses to suit your comfort and budget preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {busTypes.map((bus, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <AccessibleImage
                  src={bus.image}
                  alt={`KSRTC ${bus.name} Bus`}
                  fill
                  fallbackSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 hover:bg-primary text-white">{bus.price}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{bus.name}</CardTitle>
                <CardDescription>{bus.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {bus.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">
                      {bus.icons[i] && <span className="mr-1">{bus.icons[i]}</span>}
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/routes" className="w-full">
                  <Button className="w-full">Find Routes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

