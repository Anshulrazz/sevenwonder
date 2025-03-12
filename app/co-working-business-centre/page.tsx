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

export default function CoworkingBusinessCenters() {
    const [workspaces, setWorkspaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState("");

    // Fetch coworking and business centers data from the API
    useEffect(() => {
        const fetchWorkspaces = async () => {
            try {
                const response = await axios.get("http://46.202.167.117:4000/api/workspace");
                if (response.data.success) {
                    const filteredWorkspaces = response.data.workspaces.filter(
                        (workspace: any) => workspace.workspaceType === "coworking-space"
                    );
                    setWorkspaces(filteredWorkspaces);
                } else {
                    console.error("Failed to fetch workspaces: ", response.data.message || "Unknown error");
                }
            } catch (error) {
                console.error("Error fetching workspaces:", error);
            }
        };

        fetchWorkspaces();
    }, []);

    // Filter workspaces based on search query and filters
    const filteredWorkspaces = useMemo(() => {
        return workspaces.filter((workspace: any) => {
            const matchesQuery = searchQuery ? workspace.workspaceName.toLowerCase().includes(searchQuery.toLowerCase()) || workspace.address.toLowerCase().includes(searchQuery.toLowerCase()) : true;
            const matchesPrice = priceRange ? workspace.pricePerHour <= parseInt(priceRange) : true;
            return matchesQuery && matchesPrice;
        });
    }, [searchQuery, priceRange, workspaces]);

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
                            Coworking & Business Centers
                        </h1>
                        <p className="mb-8 text-lg">
                            Find the best coworking spaces and business centers to boost your productivity.
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
                                <option value="500">Up to ₹500/day</option>
                                <option value="1000">Up to ₹1000/day</option>
                                <option value="5000">Up to ₹5000/day</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="font-sans text-3xl text-left">Top Coworking Spaces & Business Centers 🏢</h2>
                    {/* Grid of Office Cards */}
                    <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredWorkspaces.map((workspace: any) => (
                            <Link key={workspace._id} href={`/coworking-business-centre/${workspace._id}`}>
                                <Card
                                    className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-2xl"
                                >
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={`http://46.202.167.117:4000${workspace.images[0] || "/placeholder.svg"}`}
                                            alt={workspace.workspaceName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 bg-white">
                                        <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                                            {workspace.workspaceName}
                                        </h3>
                                        <p className="mb-3 text-lg text-gray-600">{workspace.address}</p>
                                        <p className="text-lg font-bold text-primary">
                                            ₹{workspace?.pricePerHour} / day
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Capacity: {workspace.capacity} | Amenities: {workspace.amenities.join(", ")}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                        {filteredWorkspaces.length === 0 && (
                            <div className="text-xl text-center text-gray-600 col-span-full">
                                No coworking or business centers found.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
