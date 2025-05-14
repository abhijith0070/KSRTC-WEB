"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AccessibleImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

// List of reliable fallback images for different categories
const fallbackImages = {
  bus: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
  destination: "https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop",
  city: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop",
  route: "https://images.unsplash.com/photo-1590517862150-9b5cf25e525b?q=80&w=1974&auto=format&fit=crop",
  person: "https://randomuser.me/api/portraits/lego/1.jpg",
  default: "https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop",
}

export default function AccessibleImage({
  src,
  alt,
  fallbackSrc = fallbackImages.default,
  fill = false,
  width,
  height,
  className,
  priority = false,
}: AccessibleImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return (
    <div className={cn("relative", className, isLoading && "animate-pulse bg-muted")}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn("object-cover transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        sizes={fill ? "(max-width: 768px) 100vw, 50vw" : undefined}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <svg
            className="w-8 h-8 text-primary animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

