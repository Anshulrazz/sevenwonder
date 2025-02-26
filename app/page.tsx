"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { BrandDeals } from "@/components/clients";
import axios from 'axios';
import PlaceComponent from "@/components/inputcom";

const propertyTypes = ["Commercial Office/Spaces", "Commercial Shop", "Commercial Showroom", "Commercial Coworking Spaces", "Commercial Time Share", "Commercial Space in Retail Mall", "Commercial Office in Business Park", "Commercial Offices in IT Park", "Commercial Business Center", "Commercial Hotel/Resort", "Commercial Financial Institution", "Commercial Medical/Hospital Premise", "Corporate House", "Commercial Institutes", "Commercial Labor Camp", "Commercial Chemical Zone", "Commercial Restaurant", "Commercial Flat", "Commercial Terrace Restaurant", "Commercial Education Institutes", "Commercial Built to Suit", "Home Stay", "Commercial Multiplex", "Commercial Basement", "Commercial Bungalow", "Commercial Shop Cum Office Spaces(CSO)", "Commercial Shop Cum Flat(SCF)", "Commercial Booth", "Commercial Bay Shop", "Commercial building", "PG", "Spacial Economic Zone(SEZ)", "Cloud Kitchen"];
const residebtial = [
  "Property Type",
  "Residential Apartment",
  "Residential Independent House / Villa",
  "Residential Plot",
  "Residential Independent / Builder Floor",
  "Residential Studio Apartment",
  "Residential Farm House",
  "Guest house/ banquet hall",
  "Residential Row House",
  "Residential Twin Bungalow",
  "Residential Twin Apartment",
  "Residential Duplex",
  "Residential Terrace",
  "Residential Penthouse",
  "Residential Tenement",
  "Residential Bungalow",
  "Residential Triplex",
  "Residential basement",
  "Residential Row Villa",
  "Weekend Villa",
  "Residential Building"
];
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
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e:any) => {
    e.preventDefault();
    try {
      const recipientEmail = email;
      const response = await axios.post('http://localhost:5000/send-email', { recipientEmail });
      if (response.status === 200) {
        setEmail('');
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.log(error)
    }
  };

  const [propertyStatus, setPropertyStatus] = useState("buy");
  const [propertyCategory, setPropertyCategory] = useState("commercial");
  const dispatch = useAppDispatch();
  const budgetRanges = [
    "5k",
    "10k",
    "20k",
    "50k",
    "1lac",
    "2lac",
    "5lac",
    "10lac",
    "20lac",
    "50lac",
    "1cr",
    "5cr",
    "10cr",
    "20cr",
  ]; // Example budget ranges
  const [area, setArea] = useState(500);

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
        </div>

        {/* Centered Search Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="z-10 font-bold text-white tex9t-4xl mb-9 md:text-6xl">
            Welcome <span className="text-primary">to Seven</span> Wonders
            <br />
            <span className="text-3xl">India's Leading Real Esatate Company</span>
          </h1>
          <div className="z-10 w-full max-w-6xl p-6 mx-auto rounded-lg shadow-md"
            style={{
              background: "rgba(255, 252, 252, 0.632)",
              backdropFilter: "blur(4px)",
            }}>
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
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyCategory === 'commercial' ? propertyTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    )) : residebtial.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <Select>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyCategory === 'residential' ? [
                      "1BHK",
                      "2BHK",
                      "3BHK",
                      "4BHK",
                      "5BHK",
                      "6BHK",
                      "7BHK",
                      "8BHK",
                    ].map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    )) : null}
                  </SelectContent>
                </Select>
              </div>

            </div>
            <div className="flex flex-row gap-4 mb-2">
              {/* Budget Selector */}
              <div className="flex-1 min-w-[150px]">
                <label htmlFor="budget" className="block mb-2 text-sm font-semibold">
                  Min. Price
                </label>
                <Select>
                  <SelectTrigger id="budget" className="px-2 py-1 bg-white border border-gray-300 rounded-md">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()} className="text-xs">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 min-w-[150px]">
                <label htmlFor="budget" className="block mb-2 text-sm font-semibold">
                  Max. Price
                </label>
                <Select>
                  <SelectTrigger id="budget" className="px-2 py-1 bg-white border border-gray-300 rounded-md">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()} className="text-xs">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-[0.5]">
                <Label htmlFor="city" className="block mb-2">
                  Min. Area (Sq.Ft.)
                </Label>
                <input type="text" className="w-full h-10 px-3 text-sm border rounded-md" placeholder="Enter Area.." />
              </div><div className="flex-[0.5]">
                <Label htmlFor="city" className="block mb-2">
                  Max. Area (Sq.Ft.)
                </Label>
                <input type="text" className="w-full h-10 px-3 text-sm border rounded-md" placeholder="Enter Area.." />
              </div>
              {/* Area Selector */}
            </div>

            <div className="flex flex-row items-center gap-2">
              <div className="flex-[0.5]">
                <Label htmlFor="city" className="block mb-2">
                  City
                </Label>
                <select className="w-full h-10 px-3 text-sm border rounded-md">
                  <option>Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-[2] min-w-[300px]">
                <Label htmlFor="location" className="block mb-2">
                  Location
                </Label>
                <input
                  id="location"
                  placeholder="Enter city, locality, or project"
                  className="w-full h-10 px-3 text-sm border rounded-md"
                />
              </div>

              <Button className="flex-[0.5] px-4 py-2 mt-6 text-sm text-white bg-red-600 hover:bg-red-700">
                <Search className="w-4 h-4 mr-2" /> Search
              </Button>
            </div>
          </div>
        </div>
      </section >

      {/* Other Sections */}
      < section className="py-16 bg-gray-50" >
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
      </section >
      <FeaturedWorkspaces />
      <Upgrade />
      <Investwihus />
      <BrandCollaboration />
      <CustomerReviews />
      <BrandDeals/>
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
      <div className="py-24 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Subscribe to Seven Wonders</h2>
        <p className="mb-8 text-lg md:text-xl">
          Stay updated with the latest travel deals, offers, and updates from Seven Wonders Promoters & Developers Pvt. Ltd. Enter your email below to subscribe to our newsletter.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="relative w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none text-black border border-gray-300"
              required
            />
          </div>
          <PlaceComponent/>
          <button type="submit" className="px-6 py-3 font-bold transition bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600">
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-4 font-medium text-green-500">Thank you for subscribing! 🎉</p>
        )}
      </div>
    </div>
      <Footer />
    </div >
  );
}
