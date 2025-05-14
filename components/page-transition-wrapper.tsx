"use client"

import type React from "react"

import { useState, useEffect } from "react"
import PageTransition from "@/components/page-transition"
import BackToTop from "@/components/back-to-top"

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // Use state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      <PageTransition>{children}</PageTransition>
      <BackToTop />
    </>
  )
}

