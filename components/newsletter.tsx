import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with KSRTC</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive updates on new routes, special offers, and travel tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your email" className="rounded-full px-4 flex-1" />
                <Button className="rounded-full bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from KSRTC.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="relative h-48 w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">10%</div>
                    <div className="text-sm font-medium">Off your first booking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

