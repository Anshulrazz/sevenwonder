"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, Search, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FeaturedWorkspaces } from "@/components/Featured-workspace";
import Upgrade from "@/components/upgrade";
import { useAppDispatch } from "@/hooks/hooks";
import { getContacts, loadUser } from "@/lib/actions/user";
import TeamComponent from "@/components/team";
import Investwihus from "@/components/investwihus";
import { BrandCollaboration } from "@/components/patreners";
import { CustomerReviews } from "@/components/reviews";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const propertyTypes = ["Apartment", "House", "Villa", "Plot", "Commercial", "Office Space"];
const cities = [
  "New Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Other city",
];
const budgetRanges = [
  "₹5 - 10 K",
  "₹10 - 20 K",
  "₹20 - 30 K",
  "₹30 - 40 K",
  "₹40 - 50 K",
  "₹50K - 100K ",
  "₹100k - 200k",
  "₹200k - 1 Cr+",
];
const backgroundImages = [
  "https://southgaterealtyllc.com/wp-content/uploads/2017/12/shutterstock_735875389.jpg",
];

export default function Home() {
  const [propertyStatus, setPropertyStatus] = useState("buy");
  const [propertyCategory, setPropertyCategory] = useState("commercial");
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(loadUser());
      dispatch(getContacts());
    } catch (error) {
      console.error("Error loading user or contacts:", error);
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="relative min-h-screen pt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImages[0]})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Centered Search Section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-10 w-full p-6 mx-auto bg-white rounded-lg shadow-md max-w-7xl">
            {/* Tabs for Buy/Rent */}
            <div className="flex flex-wrap gap-4">
              <Tabs value={propertyStatus} onValueChange={setPropertyStatus} className="mb-4">
                <TabsList className="w-full bg-primary">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                </TabsList>
              </Tabs>

              <Tabs value={propertyCategory} onValueChange={setPropertyCategory} className="mb-4">
                <TabsList className="w-full bg-primary">
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex-1 min-w-[200px]">
                <Select>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-[200px]">
                <Select>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="city" className="block mb-2">
                  City
                </Label>
                <Select>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-[200px]">
                <Label htmlFor="location" className="block mb-2">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Enter city, locality, or project"
                  className="w-full"
                />
              </div>
                <Button className="flex-1 px-4 py-2 mt-6 text-sm text-white bg-red-600 hover:bg-red-700">
                <Search className="w-4 h-4 mr-2" /> Search
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              The Ultimate Office Space Solutions for You
            </h2>
            <p className="text-gray-600">
              Maximize your team's productivity with inspiring and premium workspace options.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["Coworking Space", "Serviced Office", "Virtual Office", "Meeting Room", "Training Room", "Event Space"].map(
              (type, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="https://design-middleeast.com/wp-content/uploads/2019/12/21_Directoroffice_1.jpg"
                      alt={type}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">{type}</h3>
                    <p className="text-sm text-gray-600">
                      Flexible {type.toLowerCase()} solutions for businesses of all sizes.
                    </p>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <FeaturedWorkspaces />
      <Upgrade />
      <TeamComponent />
      <Investwihus />
      <BrandCollaboration />
      <CustomerReviews />

      <section className="py-16 bg-gray-50">
        <div className="container grid gap-12 px-4 mx-auto md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Looking for the perfect workspace?</h2>
            <p className="text-lg text-gray-600">
              Get in touch with our workspace experts who will help you find the perfect solution for your team.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <Link href="tel:+919015651565" className="text-primary hover:underline">
                  +91-90-1565-1565
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <Link href="mailto:sales@sevenwonder.in" className="text-primary hover:underline">
                  sales@sevenwonder.in
                </Link>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
