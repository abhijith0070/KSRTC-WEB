"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function MobileMenu() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden rounded-full">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-2">
              K
            </div>
            <span className="font-bold text-xl">KSRTC</span>
          </SheetTitle>
        </SheetHeader>
        <div className="py-6 px-6">
          <nav className="space-y-1">
            <Link href="/" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              <SheetClose className="w-full text-left font-medium">Home</SheetClose>
            </Link>

            <Collapsible open={openItems["routes"]} onOpenChange={() => toggleItem("routes")}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
                Routes & Destinations
                <ChevronDown className={`h-4 w-4 transition-transform ${openItems["routes"] ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                <Link href="/routes" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">All Routes</SheetClose>
                </Link>
                <Link href="/destinations" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Popular Destinations</SheetClose>
                </Link>
                <Link href="/timetable" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Timetables</SheetClose>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/tracking" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              <SheetClose className="w-full text-left font-medium">Live Tracking</SheetClose>
            </Link>

            <Collapsible open={openItems["services"]} onOpenChange={() => toggleItem("services")}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${openItems["services"] ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                <Link href="/bus-types" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Bus Types</SheetClose>
                </Link>
                <Link href="/amenities" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Amenities</SheetClose>
                </Link>
                <Link href="/special-services" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Special Services</SheetClose>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openItems["info"]} onOpenChange={() => toggleItem("info")}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
                Information
                <ChevronDown className={`h-4 w-4 transition-transform ${openItems["info"] ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-1 mt-1">
                <Link href="/about" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">About Us</SheetClose>
                </Link>
                <Link href="/fares" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Fare Details</SheetClose>
                </Link>
                <Link href="/faq" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">FAQs</SheetClose>
                </Link>
                <Link href="/contact" className="block py-2 px-4 rounded-lg hover:bg-muted transition-colors">
                  <SheetClose className="w-full text-left">Contact Us</SheetClose>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/news" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              <SheetClose className="w-full text-left font-medium">News & Updates</SheetClose>
            </Link>
          </nav>

          <div className="mt-8 pt-8 border-t space-y-4">
            <Link href="/login" className="block w-full">
              <SheetClose className="w-full">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </SheetClose>
            </Link>
            <Link href="/register" className="block w-full">
              <SheetClose className="w-full">
                <Button className="w-full">Register</Button>
              </SheetClose>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="text-sm text-muted-foreground">
              <h4 className="font-medium mb-2">Contact</h4>
              <p className="mb-1">Phone: +91 471 2471011</p>
              <p>Email: info@keralartc.com</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
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
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

