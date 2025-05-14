import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function AboutPage() {
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
          <h1 className="text-2xl font-bold">About KSRTC</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose max-w-none">
              <h2>Our History</h2>
              <p>
                Kerala State Road Transport Corporation (KSRTC) was established in 1938 as the Travancore State
                Transport Department (TSTD). It is one of the oldest state-run public transport utilities in India.
                After the formation of Kerala state in 1956, it was renamed as Kerala State Road Transport Corporation.
              </p>
              <p>
                Over the decades, KSRTC has grown to become the backbone of Kerala's public transportation system,
                connecting cities, towns, and villages across the state and beyond. Today, KSRTC operates a fleet of
                over 5,000 buses, serving millions of passengers daily.
              </p>

              <h2 className="mt-8">Our Mission</h2>
              <p>
                To provide safe, reliable, and affordable public transportation services to the people of Kerala and
                neighboring states, while maintaining the highest standards of operational efficiency, environmental
                responsibility, and customer satisfaction.
              </p>

              <h2 className="mt-8">Our Vision</h2>
              <p>
                To be the most preferred mode of public transportation in Kerala, recognized for excellence in service,
                innovation, and sustainability.
              </p>

              <h2 className="mt-8">Core Values</h2>
              <ul>
                <li>
                  <strong>Safety:</strong> Ensuring the safety of our passengers and staff is our top priority.
                </li>
                <li>
                  <strong>Reliability:</strong> Maintaining punctuality and dependability in our services.
                </li>
                <li>
                  <strong>Accessibility:</strong> Making public transportation available to all sections of society.
                </li>
                <li>
                  <strong>Sustainability:</strong> Adopting eco-friendly practices and technologies.
                </li>
                <li>
                  <strong>Innovation:</strong> Continuously improving our services through technological advancements.
                </li>
                <li>
                  <strong>Customer-Centric:</strong> Focusing on passenger comfort and satisfaction.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Established</span>
                    <span className="font-medium">1938</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fleet Size</span>
                    <span className="font-medium">5,000+ buses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Daily Passengers</span>
                    <span className="font-medium">3.5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Routes</span>
                    <span className="font-medium">6,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Depots</span>
                    <span className="font-medium">93</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Employees</span>
                    <span className="font-medium">35,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Daily Distance</span>
                    <span className="font-medium">1.8 million km</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg"
                alt="KSRTC Bus"
                fill
                className="object-cover"
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Leadership</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Biju Prabhakar IAS</div>
                    <div className="text-sm text-muted-foreground">Chairman & Managing Director</div>
                  </div>
                  <div>
                    <div className="font-medium">M.T. Sukumaran</div>
                    <div className="text-sm text-muted-foreground">Executive Director (Operations)</div>
                  </div>
                  <div>
                    <div className="font-medium">K.S. Sudarsanan</div>
                    <div className="text-sm text-muted-foreground">Executive Director (Technical)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "National Award for Excellence",
                year: "2023",
                description: "Recognized for excellence in public transportation services.",
              },
              {
                title: "Green Initiative Award",
                year: "2022",
                description: "For implementing eco-friendly practices and reducing carbon footprint.",
              },
              {
                title: "Safety Excellence Award",
                year: "2021",
                description: "For maintaining the highest safety standards in operations.",
              },
              {
                title: "Digital Transformation Award",
                year: "2020",
                description: "For implementing innovative digital solutions for passenger convenience.",
              },
            ].map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-primary font-bold mb-1">{achievement.year}</div>
                  <h3 className="text-lg font-medium mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
          <div className="prose max-w-none">
            <p>
              At KSRTC, we are committed to providing safe, reliable, and comfortable transportation services to the
              people of Kerala. We continuously strive to improve our services through technological advancements, staff
              training, and infrastructure development.
            </p>
            <p>
              We are also committed to environmental sustainability and are gradually transitioning to a greener fleet
              with the introduction of electric and CNG buses. Our goal is to reduce our carbon footprint while
              maintaining the highest standards of service.
            </p>
            <p>
              As a public service organization, we prioritize the needs of our passengers and are dedicated to enhancing
              their travel experience. We welcome feedback and suggestions from our passengers to help us serve them
              better.
            </p>
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

