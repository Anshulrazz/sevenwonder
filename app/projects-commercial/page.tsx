"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import axios from "axios";

export default function ProjectsResidential() {
    const [businessCenters, setBusinessCenters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [locationFilter, setLocationFilter] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 21;

    useEffect(() => {
        axios.get("http://46.202.167.117:4000/api/business_center")
            .then((response) => setBusinessCenters(response.data))
            .catch((error) => console.error("Error fetching business centers:", error));
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

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
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
                            onClick={() => setActiveTab(category)}
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
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Filter by location"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
            </section>

            <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.length > 0 ? (
                    displayedProjects.map((center) => (
                        <Card key={center._id} className="p-4">
                            <div className="relative w-full h-56">
                                <Image
                                src={`http://46.202.167.117:4000${center.images[0]}`}
                                    alt={center.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="mt-2 font-semibold">{center.title}</h3>
                            <p className="text-sm text-gray-600">Price: ₹{center.rent}</p>
                            <Link
                                href={`/projects-commercial/${center._id}`}
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </Link>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No projects found.</p>
                )}
            </section>

            {totalPages > 1 && (
                <div className="flex justify-center gap-4 py-6">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded"
                    >
                        Next
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
}
