"use client"

import { useState } from "react"
import { Check, MapPin, Calendar, Users, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BookingWizardProps {
  onComplete?: (bookingData: any) => void
}

export default function BookingWizard({ onComplete }: BookingWizardProps) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    busType: "",
    seats: [] as string[],
    paymentMethod: "card",
    contactNumber: "",
  })

  const updateBookingData = (field: string, value: any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      onComplete && onComplete(bookingData)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // Simplified version to avoid context provider issues
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Book Your Ticket</CardTitle>
        <CardDescription>Complete the steps below to book your bus ticket</CardDescription>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > i
                      ? "bg-primary text-primary-foreground"
                      : step === i
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > i ? (
                    <Check className="h-5 w-5" />
                  ) : i === 1 ? (
                    <MapPin className="h-5 w-5" />
                  ) : i === 2 ? (
                    <Calendar className="h-5 w-5" />
                  ) : i === 3 ? (
                    <Users className="h-5 w-5" />
                  ) : (
                    <CreditCard className="h-5 w-5" />
                  )}
                </div>
                <span className={`text-xs mt-1 ${step === i ? "font-medium text-primary" : "text-muted-foreground"}`}>
                  {i === 1 ? "Route" : i === 2 ? "Schedule" : i === 3 ? "Seats" : "Payment"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted rounded-full"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Step content here - simplified to avoid context issues */}
        <div className="py-4 text-center">
          {step === 1 && <p>Step 1: Select your route and bus type</p>}
          {step === 2 && <p>Step 2: Choose your travel date and time</p>}
          {step === 3 && <p>Step 3: Select your seats</p>}
          {step === 4 && <p>Step 4: Complete payment</p>}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={nextStep}>{step < 4 ? "Continue" : "Complete Booking"}</Button>
      </CardFooter>
    </Card>
  )
}

