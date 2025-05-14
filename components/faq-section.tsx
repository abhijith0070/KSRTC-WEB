"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I book a ticket online?",
    answer:
      "You can book tickets online through our website or mobile app. Simply select your departure and arrival locations, choose your travel date, select your preferred bus, and complete the payment process. Your e-ticket will be sent to your email and mobile number.",
  },
  {
    question: "Can I track my bus in real-time?",
    answer:
      "Yes, KSRTC offers real-time bus tracking through our website and mobile app. Enter your bus number or route in the tracking section to see the current location of your bus and estimated arrival time.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation charges depend on how far in advance you cancel. Cancellations made more than 24 hours before departure incur a 10% fee, while those made within 24 hours incur a 25% fee. Cancellations within 2 hours of departure are not eligible for refunds.",
  },
  {
    question: "How early should I arrive at the bus station?",
    answer:
      "We recommend arriving at least 15-20 minutes before the scheduled departure time to ensure a smooth boarding process.",
  },
  {
    question: "Are there any discounts available for senior citizens?",
    answer:
      "Yes, KSRTC offers a 25% discount for senior citizens aged 60 and above. You'll need to present a valid ID proof at the time of boarding.",
  },
  {
    question: "How much luggage can I carry?",
    answer:
      "Each passenger is allowed to carry up to 15kg of luggage free of charge. Additional luggage may incur extra charges based on weight and available space.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services, booking process, and policies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Still have questions? Contact our support team</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

