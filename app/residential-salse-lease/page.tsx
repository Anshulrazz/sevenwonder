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

export default function ResidentialProperties() {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");

    // Fetch residential properties data from the API
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/properties");
                if (response.data.success) {
                    const filteredProperties = response.data.properties.filter(
                        (property: any) => property.propertyType === "residential"
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
            const matchesType = propertyType ? property.propertyCategory === propertyType : true;
            const matchesPrice = priceRange ? property.price <= parseInt(priceRange) : true;
            return matchesQuery && matchesType && matchesPrice;
        });
    }, [searchQuery, propertyType, priceRange, properties]);

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
                            Residential Properties for Sale & Rent
                        </h1>
                        <p className="mb-8 text-lg">
                            Find your dream home from the best available listings.
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
                                value={propertyType} 
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
                                <option value="">All Types</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="house">House</option>
                            </select>
                            <select 
                                className="p-2 border border-gray-300 rounded" 
                                value={priceRange} 
                                onChange={(e) => setPriceRange(e.target.value)}
                            >
                                <option value="">Any Price</option>
                                <option value="5000000">Up to ₹50,00,000</option>
                                <option value="10000000">Up to ₹1,00,00,000</option>
                                <option value="50000000">Up to ₹5,00,00,000</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="font-sans text-3xl text-left">Top Residential Properties for You 🏡</h2>
                    {/* Grid of Property Cards */}
                    <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProperties.map((property: any) => (
                            <Link key={property._id} href={`/residential/${property._id}`}>
                                <Card
                                    className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-2xl"
                                >
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={`http://localhost:4000${property.images[0] || "/placeholder.svg"}`}
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
                                            ₹{property.price} {property.saleType === "sale" ? "/ Sale" : "/ Rent"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Size: {property.area} sqft | Type: {property.propertyCategory}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                        {filteredProperties.length === 0 && (
                            <div className="text-xl text-center text-gray-600 col-span-full">
                                No residential properties found.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
