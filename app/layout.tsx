import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransitionWrapper from "@/components/page-transition-wrapper"
import ChatbotWrapper from "@/components/chatbot-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KSRTC - Kerala State Road Transport Corporation",
  description: "Book bus tickets, track buses in real-time, and explore routes across Kerala with KSRTC.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
        <ChatbotWrapper />
      </body>
    </html>
  )
}

