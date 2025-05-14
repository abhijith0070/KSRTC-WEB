import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PopularRoutes from "@/components/popular-routes"
import ServiceHighlights from "@/components/service-highlights"
import Testimonials from "@/components/testimonials"
import AppDownload from "@/components/app-download"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import StatsSection from "@/components/stats-section"
import ImageGallery from "@/components/image-gallery"
import RouteExplorer from "@/components/route-explorer"
import BusTypeShowcase from "@/components/bus-type-showcase"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="container mx-auto px-4 py-8 -mt-16 relative z-10">
          <div className="bg-card rounded-2xl shadow-xl p-6 border border-border/40">
            <Tabs defaultValue="book" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/50 p-1 rounded-lg">
                <TabsTrigger value="book" className="rounded-md data-[state=active]:bg-background">
                  Book Tickets
                </TabsTrigger>
                <TabsTrigger value="track" className="rounded-md data-[state=active]:bg-background">
                  Track Bus
                </TabsTrigger>
              </TabsList>
              <TabsContent value="book" className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="from" className="block text-sm font-medium mb-1">
                      From
                    </label>
                    <Input id="from" placeholder="Departure City" className="rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium mb-1">
                      To
                    </label>
                    <Input id="to" placeholder="Arrival City" className="rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Date
                    </label>
                    <Input id="date" type="date" className="rounded-lg" />
                  </div>
                  <div className="flex items-end">
                    <Link href="/search-results" className="w-full">
                      <Button className="w-full rounded-lg h-10 bg-ksrtc-red hover:bg-ksrtc-darkred text-white">
                        Search Buses
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="track" className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="bus-number" className="block text-sm font-medium mb-1">
                      Bus Number or Route
                    </label>
                    <Input id="bus-number" placeholder="Enter bus number or route" className="rounded-lg" />
                  </div>
                  <div className="flex items-end">
                    <Link href="/tracking" className="w-full">
                      <Button className="w-full flex items-center gap-2 rounded-lg h-10 bg-ksrtc-red hover:bg-ksrtc-darkred text-white">
                        <Search className="h-4 w-4" />
                        Track Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <StatsSection />
        <RouteExplorer />
        <BusTypeShowcase />
        <PopularRoutes />
        <ServiceHighlights />
        <ImageGallery />
        <AppDownload />
        <Testimonials />
        <FAQSection />
        <Newsletter />
      </main>
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-ksrtc-red flex items-center justify-center text-white font-bold">
                  K
                </div>
                <span className="font-bold text-xl">KSRTC</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Kerala State Road Transport Corporation provides safe, reliable, and affordable public transportation
                across Kerala.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-ksrtc-red transition-colors"
                  aria-label="Facebook"
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-ksrtc-red transition-colors"
                  aria-label="Twitter"
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-ksrtc-red transition-colors"
                  aria-label="Instagram"
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-ksrtc-red transition-colors"
                  aria-label="YouTube"
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
                    className="h-5 w-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/routes" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    Routes
                  </Link>
                </li>
                <li>
                  <Link href="/fares" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    Fare Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/timetable"
                    className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors"
                  >
                    Timetable
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm text-muted-foreground hover:text-ksrtc-red transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
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
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Transport Bhavan, East Fort, Thiruvananthapuram, Kerala, India - 695023
                </p>
                <p className="flex items-center gap-2">
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
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 471 2471011
                </p>
                <p className="flex items-center gap-2">
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
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@keralartc.com
                </p>
                <p className="flex items-center gap-2">
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
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  24/7 Customer Support
                </p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Kerala State Road Transport Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

