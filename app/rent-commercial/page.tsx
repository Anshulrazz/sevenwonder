"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import axios from "axios";
import Link from "next/link";

export default function CommercialRentals() {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [propertyType, setPropertyType] = useState("");

    // Fetch commercial rental properties data from the API
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("https://api.sevenwonder.in/api/properties");
                if (response.data.success) {
                    const filteredProperties = response.data.properties.filter(
                        (property: any) => property.propertyCategory === "commercial" && property.forRent
                    );
                    setProperties(filteredProperties);
                } else {
                    console.error("Failed to fetch properties: ", response.data.message || "Unknown error");
                }
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };

        fetchProperties();
    }, []);

    // Filter properties based on search query and filters
    const filteredProperties = useMemo(() => {
        return properties.filter((property: any) => {
            const matchesQuery = searchQuery ? property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) || property.address.toLowerCase().includes(searchQuery.toLowerCase()) : true;
            const matchesPrice = priceRange ? property.price <= parseInt(priceRange) : true;
            const matchesType = propertyType ? property.propertyType === propertyType : true;
            return matchesQuery && matchesPrice && matchesType;
        });
    }, [searchQuery, priceRange, propertyType, properties]);

    return (
        <>
            <Header />
            <section className="relative py-24">
                <div className="container px-4 mx-auto">
                    {/* Header & Search */}
                    <div className="relative z-10 py-12 mb-12 text-center">
                        <div className="absolute inset-0 rounded-lg -z-10">
                            <Image
                                src="https://i.etsystatic.com/43771025/r/il/e478bf/5018553333/il_fullxfull.5018553333_1rlm.jpg"
                                alt="Background"
                                fill
                                className="object-cover rounded-lg opacity-70 "
                            />
                        </div>
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                            Commercial Properties for Rent
                        </h1>
                        <p className="mb-8 text-lg">
                            Discover top commercial properties available for rent.
                        </p>
                        <div className="max-w-md mx-auto">
                            <Input
                                placeholder="Search by name or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <select 
                                className="p-2 border border-gray-300 rounded" 
                                value={priceRange} 
                                onChange={(e) => setPriceRange(e.target.value)}
                            >
                                <option value="">Any Price</option>
                                <option value="50000">Up to ₹50K/month</option>
                                <option value="100000">Up to ₹1 Lakh/month</option>
                                <option value="500000">Up to ₹5 Lakh/month</option>
                            </select>
                            <select 
                                className="p-2 border border-gray-300 rounded" 
                                value={propertyType} 
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
                                <option value="">Any Type</option>
                                <option value="office">Office Space</option>
                                <option value="retail">Retail Space</option>
                                <option value="warehouse">Warehouse</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="font-sans text-3xl text-left">Top Commercial Rentals 🏢</h2>
                    {/* Grid of Property Cards */}
                    <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProperties.map((property: any) => (
                            <Link key={property._id} href={`/commercial-rent/${property._id}`}>
                                <Card
                                    className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-2xl"
                                >
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={`https://api.sevenwonder.in${property.images[0] || "/placeholder.svg"}`}
                                            alt={property.propertyName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 bg-white">
                                        <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                                            {property.propertyName}
                                        </h3>
                                        <p className="mb-3 text-lg text-gray-600">{property.address}</p>
                                        <p className="text-lg font-bold text-primary">
                                            ₹{property?.price} / month
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Type: {property.propertyType} | Size: {property.size} sq.ft.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                        {filteredProperties.length === 0 && (
                            <div className="text-xl text-center text-gray-600 col-span-full">
                                No commercial rental properties found.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
