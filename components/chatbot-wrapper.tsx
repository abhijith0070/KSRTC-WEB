"use client"

import { useState, useEffect } from "react"
import Chatbot from "@/components/chatbot"

export default function ChatbotWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Chatbot />
}

