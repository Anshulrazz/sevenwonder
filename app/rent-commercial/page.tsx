"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
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
    const [priceRange, setPriceRange] = useState<{ min?: number; max?: number }>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const ITEMS_PER_PAGE = 21;
    const API_ENDPOINT = "https://api.sevenwonder.in/api/business_center";

    const fetchBusinessCenters = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<BusinessCenter[]>(API_ENDPOINT);
            setBusinessCenters(data);
        } catch (error) {
            console.error("Error fetching business centers:", error);
            // Consider adding user-friendly error handling
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBusinessCenters();
    }, [fetchBusinessCenters]);

    // Memoized categories to prevent unnecessary re-renders
    const categories = useMemo(() => {
        const uniqueCategories = new Set(["All"]);
        businessCenters.forEach((center) => uniqueCategories.add(center.BC));
        return Array.from(uniqueCategories);
    }, [businessCenters]);

    // Enhanced filtering logic with better performance
    const filteredProjects = useMemo(() => {
        return businessCenters.filter((center) => {
            const normalizedSearch = searchQuery.toLowerCase();
            const normalizedLocation = locationFilter.toLowerCase();

            const matchesSearch = !searchQuery || 
                center.title.toLowerCase().includes(normalizedSearch) ||
                center.address.toLowerCase().includes(normalizedSearch);

            const matchesCategory = activeTab === "All" || center.BC === activeTab;
            
            const matchesLocation = !locationFilter || 
                center.address.toLowerCase().includes(normalizedLocation);

            const matchesPrice = 
                (!priceRange.min || center.rent >= priceRange.min) &&
                (!priceRange.max || center.rent <= priceRange.max);

            return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
        });
    }, [searchQuery, activeTab, locationFilter, priceRange, businessCenters]);

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    
    const displayedProjects = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredProjects, currentPage, ITEMS_PER_PAGE]);

    const handlePageChange = useCallback((newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [totalPages]);

    const resetFilters = useCallback(() => {
        setSearchQuery("");
        setActiveTab("All");
        setLocationFilter("");
        setPriceRange({});
        setCurrentPage(1);
    }, []);

    return (
        <>
            <Header />
            <section className="relative px-4 py-24">
                <div className="flex flex-col justify-between items-center mb-6 md:flex-row">
                    <h1 className="mb-4 text-2xl font-bold md:mb-0">Commercial Properties for Rent</h1>
                    <button 
                        onClick={resetFilters}
                        className="p-2 bg-gray-200 rounded transition-colors hover:bg-gray-300"
                    >
                        Reset Filters
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`p-2 rounded transition-colors ${
                                activeTab === category 
                                    ? "bg-primary text-white" 
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            onClick={() => {
                                setActiveTab(category);
                                setCurrentPage(1);
                            }}
                        >
                            {category}
                        </button> 
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <input
                        type="text"
                        placeholder="Search by name or location"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="p-2 rounded border focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="text"
                        placeholder="Filter by location"
                        value={locationFilter}
                        onChange={(e) => {
                            setLocationFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="p-2 rounded border focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={priceRange.min ?? ""}
                        onChange={(e) => {
                            setPriceRange(prev => ({
                                ...prev, 
                                min: e.target.value ? Number(e.target.value) : undefined
                            }));
                            setCurrentPage(1);
                        }}
                        className="p-2 rounded border focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={priceRange.max ?? ""}
                        onChange={(e) => {
                            setPriceRange(prev => ({
                                ...prev, 
                                max: e.target.value ? Number(e.target.value) : undefined
                            }));
                            setCurrentPage(1);
                        }}
                        className="p-2 rounded border focus:ring-2 focus:ring-primary"
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
                                <Card 
                                    key={center._id} 
                                    className="p-4 transition-shadow duration-300 hover:shadow-lg"
                                >
                                    <div className="relative mb-4 w-full h-56">
                                        <Image
                                            src={`https://api.sevenwonder.in${center.images[0]}`}
                                            alt={center.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover rounded-lg"
                                            priority={false}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold">{center.title}</h3>
                                    <p className="mb-2 text-sm text-gray-600">
                                        Price: ₹{center.rent.toLocaleString()}
                                    </p>
                                    <Link
                                        href={`/projects-commercial/${center._id}`}
                                        className="inline-block mt-2 text-primary hover:underline"
                                    >
                                        View Details
                                    </Link>
                                </Card>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">
                                No projects found. Try adjusting your filters.
                            </p>
                        )}
                    </section>

                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            className="flex justify-center py-6"
                        />
                    )}
                </>
            )}

            <Footer />
        </>
    );
}