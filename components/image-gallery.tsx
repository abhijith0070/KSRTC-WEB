"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import AccessibleImage from "@/components/accessible-image"

const busImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg/1280px-KSRTC_Volvo_Multi_Axle_Semi_Sleeper.jpg",
    alt: "KSRTC Volvo Multi Axle Bus",
    caption: "KSRTC Volvo Multi Axle Semi Sleeper Bus",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KSRTC_Scania_Metrolink_HD_14.5m.jpg/1280px-KSRTC_Scania_Metrolink_HD_14.5m.jpg",
    alt: "KSRTC Scania Metrolink Bus",
    caption: "KSRTC Scania Metrolink HD 14.5m luxury bus",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/KSRTC_Minnal_AC_Volvo_Service.jpg/1280px-KSRTC_Minnal_AC_Volvo_Service.jpg",
    alt: "KSRTC Minnal AC Volvo Service",
    caption: "KSRTC Minnal AC Volvo Service for premium routes",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/KSRTC_Garuda_Maharaja_Scania_Metrolink_HD.jpg/1280px-KSRTC_Garuda_Maharaja_Scania_Metrolink_HD.jpg",
    alt: "KSRTC Garuda Maharaja Scania",
    caption: "KSRTC Garuda Maharaja Scania Metrolink HD luxury service",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/KSRTC_Super_Fast_Bus_Service.jpg/1280px-KSRTC_Super_Fast_Bus_Service.jpg",
    alt: "KSRTC Super Fast Bus",
    caption: "KSRTC Super Fast Bus Service connecting major cities",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/KSRTC_Bus_Station_Ernakulam.jpg/1280px-KSRTC_Bus_Station_Ernakulam.jpg",
    alt: "KSRTC Bus Station Ernakulam",
    caption: "KSRTC Bus Station in Ernakulam serving thousands daily",
  },
]

export default function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % busImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + busImages.length) % busImages.length)
  }

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Explore Our Services</h2>
          <p className="text-muted-foreground">
            Take a visual tour of our modern fleet, facilities, and services that make KSRTC the preferred choice for
            travelers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {busImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                setCurrentImageIndex(index)
                setShowLightbox(true)
              }}
            >
              <div className="aspect-[4/3] relative">
                <AccessibleImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  fallbackSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-white px-4 py-2 rounded-full">View Image</div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium truncate">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {showLightbox && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
              onClick={() => setShowLightbox(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="relative max-w-4xl w-full max-h-[80vh]">
              <div className="relative aspect-[4/3] w-full">
                <AccessibleImage
                  src={busImages[currentImageIndex].src}
                  alt={busImages[currentImageIndex].alt}
                  fill
                  fallbackSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
                <p className="text-lg">{busImages[currentImageIndex].caption}</p>
                <p className="text-sm text-white/70">
                  Image {currentImageIndex + 1} of {busImages.length}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

