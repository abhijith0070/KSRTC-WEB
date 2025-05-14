import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import AccessibleImage from "@/components/accessible-image"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AccessibleImage
          src="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?q=80&w=2070&auto=format&fit=crop"
          alt="Kerala backwaters with lush greenery and traditional houseboats"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground mb-6 animate-fade-in-up">
            <span className="text-sm font-medium">Kerala's Premier Transport Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Travel Across Kerala with <span className="text-primary">Comfort</span> and{" "}
            <span className="text-primary">Safety</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in-up animation-delay-200">
            Book your tickets online, track buses in real-time, and enjoy a seamless journey with Kerala's trusted
            transport service.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Play className="mr-2 h-4 w-4" /> Watch How It Works
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-8 animate-fade-in-up animation-delay-400">
            <div className="flex -space-x-3">
              <div className="rounded-full border-2 border-background overflow-hidden h-10 w-10">
                <AccessibleImage
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="User testimonial"
                  width={40}
                  height={40}
                  fallbackSrc="https://randomuser.me/api/portraits/lego/1.jpg"
                />
              </div>
              <div className="rounded-full border-2 border-background overflow-hidden h-10 w-10">
                <AccessibleImage
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User testimonial"
                  width={40}
                  height={40}
                  fallbackSrc="https://randomuser.me/api/portraits/lego/2.jpg"
                />
              </div>
              <div className="rounded-full border-2 border-background overflow-hidden h-10 w-10">
                <AccessibleImage
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User testimonial"
                  width={40}
                  height={40}
                  fallbackSrc="https://randomuser.me/api/portraits/lego/3.jpg"
                />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground text-xs font-medium">
                +2K
              </div>
            </div>
            <div className="text-sm">
              <span className="text-white/80">Trusted by</span> <span className="font-bold">2,000+ travelers</span>{" "}
              <span className="text-white/80">daily</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}

