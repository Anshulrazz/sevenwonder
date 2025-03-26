"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pagination } from "@/components/ui/pagination";
import Link from "next/link";
import axios from "axios";

interface BusinessCenter {
    _id: string;
    title: string;
    address: string;
    BC: string;
    rent: number;
    images: string[];
}

export default function ProjectsCommercial() {
    const [businessCenters, setBusinessCenters] = useState<BusinessCenter[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [locationFilter, setLocationFilter] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const itemsPerPage = 21;

    useEffect(() => {
        const fetchBusinessCenters = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("https://api.sevenwonder.in/api/business_center");
                setBusinessCenters(response.data);
            } catch (error) {
                console.error("Error fetching business centers:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBusinessCenters();
    }, []);

    // Categories based on BC field
    const categories = useMemo(() => {
        const uniqueCategories = new Set(["All"]);
        businessCenters.forEach((center) => uniqueCategories.add(center.BC));
        return Array.from(uniqueCategories);
    }, [businessCenters]);

    // Filtering logic
    const filteredProjects = useMemo(() => {
        return businessCenters.filter((center) => {
            const matchesSearch = searchQuery
                ? center.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  center.address.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            const matchesCategory = activeTab === "All" || center.BC === activeTab;
            const matchesLocation = locationFilter
                ? center.address.toLowerCase().includes(locationFilter.toLowerCase())
                : true;
            const matchesPrice =
                (!minPrice || center.rent >= Number(minPrice)) &&
                (!maxPrice || center.rent <= Number(maxPrice));

            return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
        });
    }, [searchQuery, activeTab, locationFilter, minPrice, maxPrice, businessCenters]);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const displayedProjects = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Scroll to top of the results
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header />
            <section className="relative py-24">
                <div className="flex flex-wrap gap-2 ml-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`p-2 rounded ${
                                activeTab === category ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                            onClick={() => {
                                setActiveTab(category);
                                setCurrentPage(1); // Reset to first page when changing category
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 p-4 mt-4">
                    <input
                        type="text"
                        placeholder="Search by name or location"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1); // Reset to first page when searching
                        }}
                        className="p-2 rounded border"
                    />
                    <input
                        type="text"
                        placeholder="Filter by location"
                        value={locationFilter}
                        onChange={(e) => {
                            setLocationFilter(e.target.value);
                            setCurrentPage(1); // Reset to first page when filtering
                        }}
                        className="p-2 rounded border"
                    />
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => {
                            setMinPrice(e.target.value);
                            setCurrentPage(1); // Reset to first page when changing price
                        }}
                        className="p-2 rounded border"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => {
                            setMaxPrice(e.target.value);
                            setCurrentPage(1); // Reset to first page when changing price
                        }}
                        className="p-2 rounded border"
                    />
                </div>
            </section>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="flex flex-col items-center animate-pulse">
                        <div className="w-16 h-16 rounded-full border-4 border-blue-500 animate-spin border-t-transparent"></div>
                        <p className="mt-4 text-gray-600">Loading business centers...</p>
                    </div>
                </div>
            ) : (
                <>
                    <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                        {displayedProjects.length > 0 ? (
                            displayedProjects.map((center) => (
                                <Card key={center._id} className="p-4">
                                    <div className="relative w-full h-56">
                                        <Image
                                            src={`https://api.sevenwonder.in${center.images[0]}`}
                                            alt={center.title}
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-2 font-semibold">{center.title}</h3>
                                    <p className="text-sm text-gray-600">Price: ₹{center.rent.toLocaleString()}</p>
                                    <Link
                                        href={`/projects-commercial/${center._id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Details
                                    </Link>
                                </Card>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">No projects found.</p>
                        )}
                    </section>

                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            className="py-6"
                        />
                    )}
                </>
            )}

            <Footer />
        </>
    );
}
