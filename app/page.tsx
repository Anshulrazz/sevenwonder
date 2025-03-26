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
import { motion } from "framer-motion";

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
const backgroundImages = [
  "https://southgaterealtyllc.com/wp-content/uploads/2017/12/shutterstock_735875389.jpg",
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubscribe = async (e:any) => {
    e.preventDefault();
    try {
      const recipientEmail = email;
      const response = await axios.post('https://api.sevenwonder.in/api/send-mail', { recipientEmail });
      if (response.status === 200) {
        setEmail('');
        setSubmitted(true);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.log(error)
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
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
  ];

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
      <section className="overflow-hidden relative pt-16 min-h-screen">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImages[0]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        {/* Centered Search Section */}
        <motion.div 
          className="flex absolute inset-0 flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="z-10 mb-9 text-4xl font-bold text-center text-white md:text-6xl">
            Welcome <span className="text-primary">to Seven</span> Wonders
            <br />
            <span className="text-3xl">India's Leading Real Estate Company</span>
          </h1>
          
          <div 
            className="z-10 p-6 mx-auto w-full max-w-6xl rounded-lg shadow-md"
            style={{
              background: "rgba(255, 252, 252, 0.632)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Tabs for Buy/Rent and Property Category */}
            <div className="flex flex-wrap gap-4 mb-4">
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
            </div>

            {/* Single Search Input */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search by property name, location, or project"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 w-full h-12 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                className="px-6 h-12 text-white bg-red-600 hover:bg-red-700"
              >
                <Search className="mr-2 w-5 h-5" /> Search
              </Button>
            </form>

            {/* Advanced Filters Dropdown */}
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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

                <Select>
                  <SelectTrigger id="min-budget">
                    <SelectValue placeholder="Min Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="max-budget">
                    <SelectValue placeholder="Max Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase()}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="City" />
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
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the existing components */}
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
              <div className="flex gap-3 items-center">
                <Phone className="w-6 h-6 text-primary" />
                <Link href="tel:+919015651565" className="text-primary hover:underline">
                  +91-90-1565-1565
                </Link>
              </div>
              <div className="flex gap-3 items-center">
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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Subscribe to Seven Wonders</h2>
          <p className="mb-8 text-lg md:text-xl">
            Stay updated with the latest travel deals, offers, and updates from Seven Wonders Promoters & Developers Pvt. Ltd. Enter your email below to subscribe to our newsletter.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <div className="relative w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 w-full text-black rounded-lg border border-gray-300 shadow-md focus:outline-none"
                required
              />
            </div>
              {/* <PlaceComponent/> */}
            <button type="submit" className="px-6 py-3 font-bold bg-yellow-500 rounded-lg shadow-lg transition hover:bg-yellow-600">
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-4 font-medium text-green-500">Thank you for subscribing! 🎉</p>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}