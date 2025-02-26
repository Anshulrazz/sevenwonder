import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="https://feweek.co.uk/wp-content/uploads/2023/05/Sally-Anne-Barnes-career-guidance-advice-feat.jpg"
        alt="Office culture"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team and Build the Future of Real Estate!</h1>
        <p className="text-xl md:text-2xl mb-8">Be part of a dynamic team shaping the real estate industry</p>
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

