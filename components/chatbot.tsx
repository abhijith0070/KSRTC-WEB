"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm KSRTC's virtual assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

const predefinedResponses: Record<string, string> = {
  hi: "Hello! How can I assist you with KSRTC services today?",
  hello: "Hi there! How can I help you with your travel plans?",
  booking:
    "You can book tickets online through our website or mobile app. Simply select your departure and arrival locations, choose your travel date, select your preferred bus, and complete the payment process.",
  cancel:
    "To cancel a ticket, go to 'My Bookings' section, select the ticket you wish to cancel, and click on 'Cancel Ticket'. Refund will be processed as per our cancellation policy.",
  refund:
    "Refunds are processed within 5-7 working days to the original payment method. Cancellation charges apply based on how early you cancel before departure.",
  schedule:
    "You can check bus schedules by visiting the 'Timetable' section on our website or app. Enter your departure and arrival locations to see all available buses.",
  contact:
    "You can reach our customer support at +91 471 2471011 or email us at info@keralartc.com. Our support team is available 24/7.",
  fare: "Fares vary based on the route, bus type, and distance. You can check the exact fare by using our fare calculator in the 'Fares' section.",
  tracking:
    "You can track your bus in real-time through our 'Live Tracking' feature. Enter your bus number or route to see the current location.",
  luggage:
    "Each passenger is allowed to carry up to 15kg of luggage free of charge. Additional luggage will be charged at ₹10 per kg.",
  concession:
    "We offer concessions for senior citizens (25%), students (50% on ordinary services), differently-abled persons (50%), and children below 3 years (free).",
  "bus types":
    "KSRTC offers various bus types including Ordinary, Fast Passenger, Super Fast, and Super Deluxe. Each offers different levels of comfort and amenities.",
  payment: "We accept various payment methods including credit/debit cards, UPI, net banking, and mobile wallets.",
  thanks: "You're welcome! Is there anything else I can help you with?",
  "thank you": "You're welcome! Is there anything else I can help you with?",
  bye: "Thank you for chatting with KSRTC's virtual assistant. Have a great day!",
  goodbye: "Thank you for chatting with KSRTC's virtual assistant. Have a great day!",
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Generate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(input.toLowerCase()),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const generateResponse = (query: string): string => {
    // Check for keywords in the predefined responses
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (query.includes(keyword)) {
        return response
      }
    }

    // Default response if no keywords match
    return "I'm not sure I understand. Could you please rephrase your question? You can ask about booking, cancellation, refunds, schedules, fares, tracking, or contact information."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-6 right-6 z-50 w-80 md:w-96 shadow-xl transition-all duration-300 transform",
            isMinimized ? "h-16" : "h-[500px]",
          )}
        >
          <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="KSRTC Bot" />
                <AvatarFallback className="bg-primary text-primary-foreground">KB</AvatarFallback>
              </Avatar>
              <CardTitle className="text-base">KSRTC Assistant</CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-8 w-8">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-4 overflow-y-auto h-[380px]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-4 py-2",
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSend} disabled={input.trim() === ""}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

