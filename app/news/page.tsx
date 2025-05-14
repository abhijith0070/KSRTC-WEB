import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "KSRTC Introduces 50 New Electric Buses to Fleet",
    excerpt:
      "In a major step towards sustainable transportation, KSRTC has added 50 new electric buses to its fleet, reducing carbon emissions and operating costs.",
    date: "June 15, 2023",
    author: "KSRTC Press Office",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "New Online Booking System Launched",
    excerpt:
      "KSRTC has launched a new online booking system with enhanced features including real-time seat selection, mobile tickets, and instant refunds.",
    date: "May 22, 2023",
    author: "Tech Department",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Special Services for Onam Festival",
    excerpt:
      "KSRTC announces special services during the Onam festival season to accommodate increased passenger traffic across Kerala.",
    date: "August 10, 2023",
    author: "Operations Team",
    category: "Services",
    image: "https://images.unsplash.com/photo-1623075199223-b8a0e9351a5f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "KSRTC Wins National Award for Public Transportation Excellence",
    excerpt:
      "Kerala State Road Transport Corporation has been recognized with the National Award for Excellence in Public Transportation for the year 2023.",
    date: "July 5, 2023",
    author: "KSRTC Press Office",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1609175332837-e9a186dd3803?q=80&w=1971&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "New Driver Training Program Launched",
    excerpt:
      "KSRTC has initiated a comprehensive training program for drivers focusing on safety, fuel efficiency, and passenger comfort.",
    date: "April 18, 2023",
    author: "HR Department",
    category: "Training",
    image: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Fare Revision Effective from September 1",
    excerpt:
      "KSRTC announces a minor fare revision for all services effective from September 1, 2023, due to increased operational costs.",
    date: "August 25, 2023",
    author: "Finance Department",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1609766856923-7e0a0c09a80f?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function NewsPage() {
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
          <h1 className="text-2xl font-bold">News & Updates</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((news) => (
            <Card
              key={news.id}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs font-normal">
                    {news.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {news.date}
                  </span>
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-muted-foreground text-sm">{news.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <User className="h-3 w-3" /> {news.author}
                </span>
                <Link href={`/news/${news.id}`}>
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Button variant="outline">Load More News</Button>
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

