"use client"

import { useEffect, useRef } from "react"

interface BusMapProps {
  selectedBus: {
    id: string
    route: string
    currentLocation: string
    nextStop: string
    eta: string
    lat: number
    lng: number
    status: string
    image?: string
  }
}

export default function BusMap({ selectedBus }: BusMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      const mapContainer = mapRef.current

      // Clear previous content
      mapContainer.innerHTML = ""

      // Create a simple placeholder map
      const mapPlaceholder = document.createElement("div")
      mapPlaceholder.className =
        "w-full h-full bg-muted/30 flex items-center justify-center relative rounded-lg overflow-hidden"

      // Add a Kerala map background
      const mapBackground = document.createElement("div")
      mapBackground.className = "absolute inset-0 w-full h-full"
      mapBackground.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kerala_district_map.svg/800px-Kerala_district_map.svg.png" 
             alt="Kerala Map" class="w-full h-full object-cover opacity-30" />
      `

      // Add a pin to represent the bus
      const busPin = document.createElement("div")
      busPin.className = "absolute text-primary animate-pulse z-10"
      busPin.style.left = `${Math.random() * 60 + 20}%`
      busPin.style.top = `${Math.random() * 60 + 20}%`
      busPin.innerHTML = `
        <div class="flex flex-col items-center">
          <div class="bg-primary text-primary-foreground p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-6 w-6">
              <path d="M9 4h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></path>
              <path d="M5 7h14"></path>
              <path d="M5 14h14"></path>
              <path d="M9 4v16"></path>
              <path d="M15 4v16"></path>
              <path d="M5 11h14"></path>
              <path d="M8 19h1"></path>
              <path d="M15 19h1"></path>
            </svg>
          </div>
          <span class="bg-background text-xs px-2 py-1 rounded-full shadow-sm mt-1">${selectedBus.id}</span>
        </div>
      `

      // Add a message
      const mapMessage = document.createElement("div")
      mapMessage.className = "text-center p-4 bg-background/80 rounded-lg shadow-sm max-w-md z-10"
      mapMessage.innerHTML = `
        <h3 class="font-medium mb-2">Bus Location</h3>
        <p class="text-muted-foreground mb-3">Currently tracking ${selectedBus.id} on route ${selectedBus.route}</p>
        <div class="text-sm">
          <p class="flex items-center justify-center gap-1 mb-1">
            <span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg></span>
            Current Location: ${selectedBus.currentLocation}
          </p>
          <p class="flex items-center justify-center gap-1 mb-1">
            <span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg></span>
            Next Stop: ${selectedBus.nextStop}
          </p>
          <p class="flex items-center justify-center gap-1">
            <span class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            ETA: ${selectedBus.eta}
          </p>
        </div>
      `

      // Add elements to the map
      mapPlaceholder.appendChild(mapBackground)
      mapPlaceholder.appendChild(busPin)
      mapPlaceholder.appendChild(mapMessage)
      mapContainer.appendChild(mapPlaceholder)
    }
  }, [selectedBus])

  return <div ref={mapRef} className="w-full h-full"></div>
}

