'use client'
import HeroSection from "@/components/HeroSection"
import WhyWorkWithUs from "@/components/WhyWorkWithUs"
import LifeAtCompany from "@/components/LifeAtCompany"
import OpenPositions from "@/components/OpenPositions"
import HowToApply from "@/components/HowToApply"
import FAQs from "@/components/FAQs"
import CTA from "@/components/CTA"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CareerPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyWorkWithUs />
      <LifeAtCompany />
      <OpenPositions />
      <HowToApply />
      <FAQs />
      <CTA />
    </main>
    <Footer/>
    </>
  )
}

