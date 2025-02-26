import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
        <p className="text-xl mb-8">Explore our open positions and take the next step in your career!</p>
        <Button
          size="lg"
          onClick={() => {
            const element = document.getElementById("open-positions")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          View Open Positions
        </Button>
      </div>
    </section>
  )
}

