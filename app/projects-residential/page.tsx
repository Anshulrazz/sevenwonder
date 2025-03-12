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

export default function ProjectsResidential() {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch residential projects data from the API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://46.202.167.117:4000/api/projects");
                if (response.data.success) {
                    const filteredProjects = response.data.projects.filter(
                        (project: any) => project.projectCategory === "residential"
                    );
                    setProjects(filteredProjects);
                } else {
                    console.error("Failed to fetch projects: ", response.data.message || "Unknown error");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    // Filter projects based on search query
    const filteredProjects = useMemo(() => {
        return projects.filter((project: any) => {
            return searchQuery ? project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) || project.location.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        });
    }, [searchQuery, projects]);

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
                            Residential Projects
                        </h1>
                        <p className="mb-8 text-lg">
                            Discover the latest residential projects available.
                        </p>
                        <div className="max-w-md mx-auto">
                            <Input
                                placeholder="Search by name or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <h2 className="font-sans text-3xl text-left">Featured Residential Projects 🏡</h2>
                    {/* Grid of Project Cards */}
                    <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project: any) => (
                            <Link key={project._id} href={`/projects-residential/${project._id}`}>
                                <Card
                                    className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-2xl"
                                >
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={`http://46.202.167.117:4000${project.images[0] || "/placeholder.svg"}`}
                                            alt={project.projectName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 bg-white">
                                        <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                                            {project.projectName}
                                        </h3>
                                        <p className="mb-3 text-lg text-gray-600">{project.location}</p>
                                        <p className="text-lg font-bold text-primary">
                                            Starting at ₹{project.priceStarting} 
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Type: {project.projectType} | Size: {project.size} sq.ft.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                        {filteredProjects.length === 0 && (
                            <div className="text-xl text-center text-gray-600 col-span-full">
                                No residential projects found.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
