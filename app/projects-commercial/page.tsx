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
    const [activeTab, setActiveTab] = useState("All");
    
    const categories = ["All", "BC-1", "BC-2", "BC-3", "BC-4", "BC-5", "BC-6", "BC-7", "BC-8", "BC-9"];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/projects");
                if (response.data.success) {
                    const filteredProjects = response.data.projects.filter(
                        (project) => project.projectCategory === "residential"
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

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = searchQuery
                ? project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  project.location.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            const matchesCategory = activeTab === "all" || project.category === activeTab;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeTab, projects]);

    return (
        <>
            <Header />
            <section className="relative py-24">
                
                <div className='flex flex-wrap gap-2 ml-2'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`p-2 rounded ${activeTab === category ? "bg-primary text-white" : "bg-gray-200"}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <Card key={project.id} className="p-4">
                            <Image src={project.image} alt={project.projectName} width={300} height={200} className="rounded-lg" />
                            <h3 className="mt-2 font-semibold">{project.projectName}</h3>
                            <p className="text-sm text-gray-600">{project.location}</p>
                            <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                                View Details
                            </Link>
                        </Card>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No projects found.</p>
                )}
            </section>
            <Footer />
        </>
    );
}
