export default function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
            <div className="text-primary-foreground/80">Buses</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">5M+</div>
            <div className="text-primary-foreground/80">Monthly Passengers</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
            <div className="text-primary-foreground/80">Routes</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
            <div className="text-primary-foreground/80">On-time Arrival</div>
          </div>
        </div>
      </div>
    </section>
  )
}

