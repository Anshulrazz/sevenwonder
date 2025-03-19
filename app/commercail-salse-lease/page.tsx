"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Search, MapPin, Building, Tag, ArrowRight } from "lucide-react";
import axios from "axios";
import Link from "next/link";

export default function CommercialProperties() {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [workspaceType, setWorkspaceType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Fetch commercial properties data from the API
    useEffect(() => {
        const fetchProperties = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("https://api.sevenwonder.in/api/workspace");
                if (response.data && response.data.success) {
                    // No longer filtering by workspaceType - showing all workspaces
                    setProperties(response.data.workspaces);
                } else {
                    console.error("Failed to fetch properties: ", response.data?.message || "Unknown error");
                }
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();
    }, []);

    // Filter properties based on search query and filters
    const filteredProperties = useMemo(() => {
        return properties.filter((workspace) => {
            const matchesQuery = searchQuery
                ? ((workspace.workspaceName?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
                    (workspace.address?.toLowerCase() || "").includes(searchQuery.toLowerCase()))
                : true;
            const matchesType = workspace.workspaceType === "commercial-office"

            // Adapt to check pricePerHour instead of price
            const matchesPrice = priceRange
                ? (workspace.pricePerHour && workspace.pricePerHour <= parseInt(priceRange))
                : true;

            return matchesQuery && matchesType && matchesPrice;
        });
    }, [searchQuery, workspaceType, priceRange, properties]);

    // Format price with commas for Indian currency
    const formatPrice = (price) => {
        if (!price) return "0";
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <>
            <Header />
            <section className="relative py-16 md:py-24">
                <div className="container px-4 mx-auto">
                    {/* Hero Section with Search */}
                    <div className="overflow-hidden relative z-10 py-12 mb-12 text-center rounded-2xl shadow-xl">
                        <div className="absolute inset-0 -z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="https://i.etsystatic.com/43771025/r/il/e478bf/5018553333/il_fullxfull.5018553333_1rlm.jpg"
                                    alt="Commercial Buildings"
                                    fill
                                    className="object-cover object-center brightness-95"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>
                        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Find Your Perfect <span className="text-yellow-400">Workspace</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white md:text-xl">
                            Discover premium offices, co-working spaces, and flexible work environments for your growing business needs.
                        </p>
                        <div className="flex flex-row gap-4 items-center p-4 mx-auto max-w-xl bg-white rounded-lg shadow-lg">
                            <div className="relative flex-1">
                                <Search className="absolute top-3 left-3 text-gray-400" size={20} />
                                <Input
                                    placeholder="Search by workspace name or location..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="py-3 pr-4 pl-10 w-full text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <select
                                className="p-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shrink-0"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                aria-label="Price range filter"
                            >
                                <option value="">Any Budget</option>
                                <option value="5000">Under ₹5,000</option>
                                <option value="10000">Under ₹10,000</option>
                                <option value="20000">Under ₹20,000</option>
                                <option value="50000">Under ₹50,000</option>
                            </select>
                        </div>
                    </div>

                    {/* Properties Section */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center">
                            <h2 className="font-sans text-3xl font-bold text-gray-800">
                                Available Workspaces <span className="text-yellow-400">For You</span> 🏢
                            </h2>
                            <p className="text-gray-600">
                                {filteredProperties.length} properties found
                            </p>
                        </div>
                        <div className="mt-2 mb-6 w-20 h-1 bg-yellow-400 rounded-full"></div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="flex flex-col items-center animate-pulse">
                                <div className="w-16 h-16 rounded-full border-4 border-blue-500 animate-spin border-t-transparent"></div>
                                <p className="mt-4 text-gray-600">Loading available properties...</p>
                            </div>
                        </div>
                    )}

                    {/* Grid of workspace Cards */}
                    {!isLoading && (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProperties.map((workspace) => (
                                <Link key={workspace._id} href={`/commercial/${workspace._id}`} className="h-full">
                                    <Card
                                        className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-2xl hover:translate-y-[-5px] rounded-xl"
                                    >
                                        <div className="overflow-hidden relative w-full h-60">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={workspace.images && workspace.images.length > 0
                                                        ? `https://api.sevenwonder.in${workspace.images[0]}`
                                                        : "https://api.sevenwonder.in/placeholder.svg"}
                                                    alt={workspace.workspaceName || "Commercial workspace"}
                                                    fill
                                                    className="object-cover hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 left-0 px-3 py-1 m-3 text-sm font-medium text-white bg-yellow-400 rounded-full">
                                                {workspace.workspaceType === "coworking-space" ? "Co-working" : workspace.workspaceType === "private-office" ? "Private Office" : "Workspace"}
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-grow p-6 bg-white">
                                            <h3 className="mb-2 text-xl font-semibold text-gray-800 line-clamp-2">
                                                {workspace.workspaceName || "Unnamed workspace"}
                                            </h3>
                                            <div className="flex gap-2 items-start mb-3 text-gray-600">
                                                <MapPin size={18} className="mt-1 shrink-0" />
                                                <p className="line-clamp-2">{workspace.address || "Address not available"}</p>
                                            </div>
                                            {workspace.description && (
                                                <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                                                    {workspace.description}
                                                </p>
                                            )}
                                            <div className="pt-4 mt-auto border-t border-gray-100">
                                                <p className="mb-2 text-xl font-bold text-yellow-400">
                                                    ₹{formatPrice(workspace.pricePerHour)}
                                                    <span className="ml-1 text-sm font-normal text-gray-500">
                                                        / hour
                                                    </span>
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <div className="flex items-center px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded-full">
                                                        <Building size={14} className="mr-1" />
                                                        Capacity: {workspace.capacity || "N/A"}
                                                    </div>
                                                    {workspace.amenities && workspace.amenities.length > 0 && (
                                                        <div className="flex items-center px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded-full">
                                                            <Tag size={14} className="mr-1" />
                                                            {workspace.amenities.slice(0, 2).join(", ")}
                                                            {workspace.amenities.length > 2 ? "..." : ""}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center mt-4 text-sm font-medium text-yellow-400 hover:underline">
                                                    View details <ArrowRight size={16} className="ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* No Results Message */}
                    {!isLoading && filteredProperties.length === 0 && (
                        <div className="py-16 text-center bg-gray-50 rounded-xl">
                            <Building size={64} className="mx-auto mb-4 text-gray-400" />
                            <h3 className="mb-2 text-2xl font-semibold text-gray-700">No workspaces found</h3>
                            <p className="mb-6 text-gray-600">
                                We couldn't find any workspaces matching your search criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setWorkspaceType("");
                                    setPriceRange("");
                                }}
                                className="px-6 py-3 text-white bg-yellow-400 rounded-lg hover:bg-blue-700"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="p-8 mt-20 text-center bg-blue-50 rounded-xl">
                        <h3 className="mb-3 text-2xl font-bold text-gray-800">
                            Need a custom workspace solution?
                        </h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                            Our workspace experts can help you find the perfect environment
                            tailored to your specific business requirements.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 text-white bg-yellow-400 rounded-lg hover:bg-blue-700">
                            Contact Our Team <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}