"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import LoadingSpinner from "@/components/loading-spinner"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)

  // Initialize content after first render to avoid hydration mismatch
  useEffect(() => {
    setContent(children)
  }, [children])

  useEffect(() => {
    // When the path changes, show loading state
    if (pathname) {
      setIsLoading(true)

      // Simulate page loading (in a real app, this would be actual loading)
      const timer = setTimeout(() => {
        setContent(children)
        setIsLoading(false)
      }, 500) // Adjust timing as needed

      return () => clearTimeout(timer)
    }
  }, [pathname, children])

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
        role="alert"
        aria-live="assertive"
      >
        <div className="text-center">
          <LoadingSpinner size="large" text="Loading page..." />
        </div>
      </div>
    )
  }

  return <>{content}</>
}

