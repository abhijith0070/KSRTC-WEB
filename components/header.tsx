"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      } border-b border-border/40`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="KSRTC Home">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            K
          </div>
          <div>
            <span className="font-bold text-xl">KSRTC</span>
            <span className="hidden md:block text-xs text-muted-foreground">
              Kerala State Road Transport Corporation
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main menu">
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/" ? "text-primary" : "text-foreground/80 hover:text-primary hover:bg-muted/50"
            }`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${
                  pathname.startsWith("/routes") ||
                  pathname.startsWith("/destinations") ||
                  pathname.startsWith("/timetable")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                }`}
                aria-expanded="false"
                aria-haspopup="true"
              >
                Routes & Destinations <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <Link href="/routes">
                <DropdownMenuItem className="cursor-pointer">All Routes</DropdownMenuItem>
              </Link>
              <Link href="/destinations">
                <DropdownMenuItem className="cursor-pointer">Popular Destinations</DropdownMenuItem>
              </Link>
              <Link href="/timetable">
                <DropdownMenuItem className="cursor-pointer">Timetables</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/tracking"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/tracking" ? "text-primary" : "text-foreground/80 hover:text-primary hover:bg-muted/50"
            }`}
          >
            Live Tracking
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${
                  pathname.startsWith("/bus-types") ||
                  pathname.startsWith("/amenities") ||
                  pathname.startsWith("/special-services")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                }`}
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <Link href="/bus-types">
                <DropdownMenuItem className="cursor-pointer">Bus Types</DropdownMenuItem>
              </Link>
              <Link href="/amenities">
                <DropdownMenuItem className="cursor-pointer">Amenities</DropdownMenuItem>
              </Link>
              <Link href="/special-services">
                <DropdownMenuItem className="cursor-pointer">Special Services</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${
                  pathname.startsWith("/about") ||
                  pathname.startsWith("/fares") ||
                  pathname.startsWith("/faq") ||
                  pathname.startsWith("/contact")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                }`}
                aria-expanded="false"
                aria-haspopup="true"
              >
                Information <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <Link href="/about">
                <DropdownMenuItem className="cursor-pointer">About Us</DropdownMenuItem>
              </Link>
              <Link href="/fares">
                <DropdownMenuItem className="cursor-pointer">Fare Details</DropdownMenuItem>
              </Link>
              <Link href="/faq">
                <DropdownMenuItem className="cursor-pointer">FAQs</DropdownMenuItem>
              </Link>
              <Link href="/contact">
                <DropdownMenuItem className="cursor-pointer">Contact Us</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/news"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/news" ? "text-primary" : "text-foreground/80 hover:text-primary hover:bg-muted/50"
            }`}
          >
            News
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden sm:flex rounded-full">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="hidden sm:flex rounded-full">
              Register
            </Button>
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

