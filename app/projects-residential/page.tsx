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
import { Search, MapPin, Home, ArrowRight } from "lucide-react";

export default function ProjectsResidential() {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch residential projects data from the API
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("https://api.sevenwonder.in/api/workspace");
                if (response.data.success) {
                    const filteredProjects = response.data.workspaces.filter(
                        (workspace: any) => workspace.workspaceType === "residential"
                    );
                    setProjects(filteredProjects);
                } else {
                    setError(response.data.message || "Failed to load projects");
                }
            } catch (error) {
                setError("Error connecting to server. Please try again later.");
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Filter projects based on search query
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            return searchQuery 
                ? project.projectName?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  project.location?.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
        });
    }, [searchQuery, projects]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://i.etsystatic.com/43771025/r/il/e478bf/5018553333/il_fullxfull.5018553333_1rlm.jpg"
                        alt="Luxury Residential Properties"
                        fill
                        priority
                        className="object-cover brightness-75"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
                <div className="flex relative flex-col justify-center items-center px-4 h-full text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Residential Projects
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg md:text-xl">
                        Discover your dream home among our exclusive collection of premium residential properties
                    </p>
                </div>
            </section>

            {/* Search Section */}
            <section className="px-4 py-8 -mt-6 md:-mt-12">
                <div className="container relative p-6 mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
                    <div className="flex items-center">
                        <Search className="absolute ml-4 text-gray-400" size={20} />
                        <Input
                            placeholder="Search by project name or location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-3 pr-4 pl-12 w-full text-lg rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="flex-grow px-4 py-12 md:py-16">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold md:text-3xl">
                            Featured Residential Projects <span className="text-primary">🏡</span>
                        </h2>
                        <span className="text-sm text-gray-500">
                            {filteredProjects.length} {filteredProjects.length === 1 ? 'property' : 'properties'} found
                        </span>
                    </div>

                    {isLoading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-16 h-16 rounded-full border-4 border-gray-200 animate-spin border-t-primary border-r-primary"></div>
                        </div>
                    )}

                    {error && !isLoading && (
                        <div className="p-8 text-center bg-red-50 rounded-lg">
                            <p className="text-red-600">{error}</p>
                            <button 
                                className="px-4 py-2 mt-4 text-white rounded-md bg-primary hover:bg-primary/90"
                                onClick={() => window.location.reload()}
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {!isLoading && !error && filteredProjects.length === 0 && (
                        <div className="p-12 text-center bg-gray-100 rounded-lg">
                            <Home size={48} className="mx-auto mb-4 text-gray-400" />
                            <h3 className="mb-2 text-xl font-semibold">No properties found</h3>
                            <p className="text-gray-600">Try adjusting your search criteria</p>
                        </div>
                    )}

                    {!isLoading && !error && filteredProjects.length > 0 && (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <Link key={project._id} href={`/projects-residential/${project._id}`}>
                                    <Card className="overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-4px]">
                                        <div className="overflow-hidden relative w-full h-60 group">
                                            <Image
                                                src={`https://api.sevenwonder.in${project.images[0] || "/placeholder.svg"}`}
                                                alt={project.projectName}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity from-black/60 group-hover:opacity-100" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-xl font-bold text-gray-800 transition-colors hover:text-primary">
                                                    {project.projectName}
                                                </h3>
                                                <div className="px-3 py-1 text-xs font-medium text-white rounded-full bg-primary">
                                                    {project.projectType}
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center mt-3 text-gray-600">
                                                <MapPin size={16} className="mr-1" />
                                                <p>{project.location}</p>
                                            </div>
                                            
                                            <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
                                                <div>
                                                    <p className="text-lg font-bold text-primary">
                                                        ₹{project.priceStarting.toLocaleString('en-IN')}
                                                    </p>
                                                    <p className="text-xs text-gray-500">Starting Price</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-medium">
                                                        {project.size} sq.ft.
                                                    </p>
                                                    <p className="text-xs text-gray-500">Area</p>
                                                </div>
                                            </div>
                                            
                                            <button className="flex gap-2 justify-center items-center p-3 mt-4 w-full text-sm font-medium text-white rounded-md transition-colors bg-primary hover:bg-primary/90">
                                                View Details <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            
            <Footer />
        </div>
    );
}