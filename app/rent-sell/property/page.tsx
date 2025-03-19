"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Search, MapPin, Users, Home } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function CoworkingSpaces() {
    const [workspaces, setWorkspaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch workspaces data from the API
    useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("https://api.sevenwonder.in/api/workspace");
                if (response.data.success) {
                    const filteredWorkspaces = response.data.workspaces.filter(
                        (workspace: any) => workspace.workspaceType === "coworking-space"
                    );
                    setWorkspaces(filteredWorkspaces);
                } else {
                    setError(response.data.message || "Failed to fetch workspaces");
                    console.error("Failed to fetch workspaces: ", response.data.message || "Unknown error");
                }
            } catch (error) {
                setError("An error occurred while fetching workspaces");
                console.error("Error fetching workspaces:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorkspaces();
    }, []);

    // Filter workspaces based on search query
    const filteredWorkspaces = useMemo(() => {
        if (!searchQuery) return workspaces;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return workspaces.filter(
            (workspace) =>
                workspace.workspaceName.toLowerCase().includes(lowerCaseQuery) ||
                workspace.address.toLowerCase().includes(lowerCaseQuery)
        );
    }, [searchQuery, workspaces]);

    // Function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to render skeleton loaders during loading state
    const renderSkeletons = () => {
        return Array(6).fill(0).map((_, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-lg">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                    <Skeleton className="mb-3 w-3/4 h-6" />
                    <Skeleton className="mb-3 w-full h-4" />
                    <Skeleton className="mb-3 w-1/3 h-5" />
                    <Skeleton className="w-full h-3" />
                </div>
            </Card>
        ));
    };

    return (
        <>
            <Header />
            <section className="relative py-16 md:py-24">
                <div className="container px-4 mx-auto">
                    {/* Header & Search */}
                    <div className="relative z-10 py-8 mb-8 text-center md:py-12 md:mb-12">
                        <div className="absolute inset-0 rounded-lg -z-10">
                            <Image
                                src="https://i.etsystatic.com/43771025/r/il/e478bf/5018553333/il_fullxfull.5018553333_1rlm.jpg"
                                alt="Coworking Spaces Background"
                                fill
                                className="object-cover rounded-lg opacity-70"
                                priority
                            />
                        </div>
                        <h1 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl lg:text-5xl">
                            Find Your Perfect Coworking Space
                        </h1>
                        <p className="mb-6 text-base md:mb-8 md:text-lg">
                            Discover flexible workspaces tailored to your requirements
                        </p>
                        <div className="relative mx-auto max-w-md">
                            <Input
                                placeholder="Search by name or location..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 md:py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <Search className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold md:text-3xl">Best Coworking Spaces</h2>
                        <p className="text-sm text-gray-500 md:text-base">
                            {filteredWorkspaces.length} spaces available
                        </p>
                    </div>

                    {/* Error state */}
                    {error && !isLoading && (
                        <div className="p-4 mb-6 text-center bg-red-50 rounded-lg border border-red-200">
                            <p className="text-red-600">{error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="px-4 py-2 mt-2 text-sm text-white rounded-md bg-primary hover:bg-primary/90"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Grid of Office Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                        {isLoading ? (
                            renderSkeletons()
                        ) : (
                            filteredWorkspaces.map((workspace) => (
                                <Link key={workspace._id} href={`/rent-sell/property/${workspace._id}`}>
                                    <Card
                                        className="overflow-hidden h-full rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    >
                                        {/* Image container with aspect ratio */}
                                        <div className="relative w-full pt-[60%]">
                                            <Image
                                                src={`https://api.sevenwonder.in${workspace.images[0] || "/placeholder.svg"}`}
                                                alt={workspace.workspaceName}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute top-0 right-0 px-3 py-1 m-2 text-xs font-medium text-white rounded-full bg-primary">
                                                Available
                                            </div>
                                        </div>
                                        
                                        <div className="p-4 bg-white md:p-6">
                                            <h3 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-1 md:text-xl">
                                                {workspace.workspaceName}
                                            </h3>
                                            
                                            <div className="flex items-start mb-3 text-gray-600">
                                                <MapPin className="flex-shrink-0 mt-1 mr-1 w-4 h-4 text-gray-500" />
                                                <p className="text-sm line-clamp-2">{workspace.address}</p>
                                            </div>
                                            
                                            <p className="mb-3 text-lg font-bold text-primary">
                                                ₹{workspace?.pricePerHour} <span className="text-sm font-normal text-gray-500">/ day</span>
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <Users className="mr-1 w-4 h-4 text-gray-500" />
                                                    <span>Capacity: {workspace.capacity}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Home className="mr-1 w-4 h-4 text-gray-500" />
                                                    <span>500 sqft</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {workspace.amenities.slice(0, 3).map((amenity, index) => (
                                                    <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                                        {amenity}
                                                    </span>
                                                ))}
                                                {workspace.amenities.length > 3 && (
                                                    <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                                        +{workspace.amenities.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))
                        )}
                        
                        {!isLoading && filteredWorkspaces.length === 0 && (
                            <div className="flex flex-col col-span-full justify-center items-center p-8 text-center rounded-lg border border-gray-200">
                                <Search className="mb-4 w-12 h-12 text-gray-400" />
                                <p className="text-xl font-semibold text-gray-600">No coworking spaces found</p>
                                <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
                                {searchQuery && (
                                    <button 
                                        onClick={() => setSearchQuery("")} 
                                        className="px-4 py-2 mt-4 rounded-md text-primary hover:bg-primary/10"
                                    >
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}