"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workspaces = [
  {
    id: 1,
    title: "Modern Coworking Space",
    image:
      "https://businessfirstfamily.com/wp-content/uploads/2015/09/corporate-office-interior-design.jpg",
    location: "Delhi",
    price: "₹8,000/month",
  },
  {
    id: 2,
    title: "Premium Office Suite",
    image:
      "https://officesnapshots.com/wp-content/uploads/2023/12/shamrock-capital-offices-los-angeles-12.jpg",
    location: "Mumbai",
    price: "₹15,000/month",
  },
  {
    id: 3,
    title: "Creative Workspace",
    image:
      "https://www.omaypartners.com/wp-content/uploads/2022/01/003-Genel-Energy-Head-Office.jpg",
    location: "Bangalore",
    price: "₹10,000/month",
  },
  {
    id: 4,
    title: "Enterprise Office",
    image:
      "https://www.commercialdesignindia.com/public/styles/full_img_sml/public/images/2019/03/08/Sherwin-Williams_KUL_Conference-01.jpg?itok=QSSr1H31",
    location: "Hyderabad",
    price: "₹20,000/month",
  },
  {
    id: 5,
    title: "Collaborative Space",
    image:
      "https://officesnapshots.com/wp-content/uploads/2016/07/SSDG_Cossette_0499.jpg",
    location: "Pune",
    price: "₹12,000/month",
  },
];

export function FeaturedWorkspaces() {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    arrows: false, // Disable default arrows to add custom buttons
  };

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-left">
          <h2 className="mb-4 text-3xl font-bold">Featured Workspaces 💕❤️</h2>
          <p className="text-gray-600">
            Maximize your team's productivity with an inspiring and premium
            workspace.
          </p>
        </div>

        <div className="relative">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {workspaces.map((workspace) => (
              <Card
                key={workspace.id}
                className="flex-none w-[300px] md:w-[350px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] group">
                  <Image
                    src={workspace.image || "/placeholder.svg"}
                    alt={workspace.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/20" />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">
                    {workspace.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">
                    {workspace.location}
                  </p>
                  <p className="font-medium text-primary">{workspace.price}</p>
                </div>
              </Card>
            ))}
          </Slider>

          {/* Left Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 hidden -translate-y-1/2 bg-white shadow-md top-1/2 md:flex hover:bg-gray-100"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Right Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 hidden -translate-y-1/2 bg-white shadow-md top-1/2 md:flex hover:bg-gray-100"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
