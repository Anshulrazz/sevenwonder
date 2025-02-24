'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { Search } from "lucide-react"; 

const backgroundImages = [
  "https://source.unsplash.com/1600x900/?office,workspace",
  "https://source.unsplash.com/1600x900/?coworking,modern-office",
  "https://source.unsplash.com/1600x900/?meeting-room",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 mx-auto md:py-24">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Metros And Non-Metros,
            <br />
            We Got It All Covered
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white/90">
            Whatever your requirements, find your perfect match
          </p>

          <Card className="p-4 shadow-lg bg-white/90 backdrop-blur-lg">
            <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b">
              {["Coworking Spaces", "Serviced Offices", "Virtual Offices", "Meeting Rooms", "Training Rooms"].map(
                (type, index) => (
                  <Button
                    key={type}
                    variant={index === 0 ? "default" : "ghost"}
                    className={index === 0 ? "bg-primary text-white" : ""}
                  >
                    {type}
                  </Button>
                )
              )}
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <select className="w-full h-10 px-3 text-sm border rounded-md">
                  <option>Select City</option>
                  <option>Delhi</option>
                  <option>NCR</option>
                </select>
              </div>
              <div className="flex-[2]">
                <div className="relative">
                  <Input type="text" placeholder="Search location or workspace" className="pl-10" />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button size="lg" className="md:w-auto">
                Show Workspaces
              </Button>
            </div>
          </Card>

          <div className="mt-8">
            <p className="mb-4 text-white/80">Popular cities</p>
            <div className="flex flex-wrap gap-3">
              {["Gurgaon", "Delhi", "Noida", "Krishna Nagar", "Preet Vihar", "Laxmi Nagar", "East Delhi"].map((city) => (
                <Button key={city} variant="outline" className="text-white bg-white/10 hover:bg-white/20 border-white/20">
                  {city}
                </Button>
              ))}
              <Button variant="outline" className="text-white bg-white/10 hover:bg-white/20 border-white/20">
                View more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
