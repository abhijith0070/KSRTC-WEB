import { Button } from "@/components/ui/button"
import { AppleIcon, PlayIcon } from "lucide-react"
import AccessibleImage from "@/components/accessible-image"

export default function AppDownload() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
              Mobile App
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the KSRTC Mobile App</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Get the best experience with our mobile app. Book tickets, track buses in real-time, and manage your
              journeys on the go.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Easy ticket booking in seconds",
                "Real-time bus tracking",
                "Digital tickets - no printing required",
                "Journey reminders and notifications",
                "Manage bookings and cancellations",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black hover:bg-black/80 text-white rounded-xl h-14 px-6">
                <AppleIcon className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black hover:bg-black/80 text-white rounded-xl h-14 px-6">
                <PlayIcon className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] md:h-[600px] hidden md:block">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[560px] bg-black rounded-[40px] p-3 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden rounded-[32px]">
                <AccessibleImage
                  src="https://i.ibb.co/Jt5zbBL/ksrtc-app-mockup.png"
                  alt="KSRTC Mobile App interface showing bus booking screen"
                  fill
                  fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[24px] left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-full"></div>
            </div>
            <div className="absolute top-[60px] left-[20%] w-[240px] h-[480px] bg-black rounded-[36px] p-3 shadow-2xl transform -rotate-6">
              <div className="relative w-full h-full overflow-hidden rounded-[28px]">
                <AccessibleImage
                  src="https://i.ibb.co/Jt5zbBL/ksrtc-app-mockup.png"
                  alt="KSRTC Mobile App interface showing route map"
                  fill
                  fallbackSrc="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

