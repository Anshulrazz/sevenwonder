"use client";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ProjectsResidential() {
    const [businessCenters, setBusinessCenters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [locationFilter, setLocationFilter] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const categories = ["All", "BC-1", "BC-2", "BC-3", "BC-4", "BC-5", "BC-6", "BC-7", "BC-8", "BC-9"];

    useEffect(() => {
        const dummyBusinessCenters = [
            {
                id: "BC-1",
                name: "Business Center 1",
                location: "City 1",
                offices: [
                    { id: "1", projectName: "Office A1", price: 25000, image: "/bc1/office1/project1.jpg" },
                    { id: "2", projectName: "Office A2", price: 25000, image: "/bc1/office2/project1.jpg" },
                    { id: "3", projectName: "Office A3", price: 25000, image: "/bc1/office3/project1.jpg" },
                    { id: "4", projectName: "Office A4", price: 25000, image: "/bc1/office4/project1.jpg" },
                    { id: "5", projectName: "Office A5", price: 25000, image: "/bc1/office5/project1.jpg" },
                    { id: "6", projectName: "Office A6", price: 25000, image: "/bc1/office6/project1.jpg" },
                    { id: "7", projectName: "Office A7", price: 25000, image: "/bc1/office7/project1.jpg" },
                    { id: "8", projectName: "Office A8", price: 25000, image: "/bc1/office8/project1.jpg" },
                    { id: "9", projectName: "Office A9", price: 25000, image: "/bc1/office9/project1.jpg" },
                    { id: "10", projectName: "Office A10", price: 25000, image: "/bc1/office10/project1.jpg" },
                    { id: "11", projectName: "Office A11", price: 25000, image: "/bc1/office11/project1.jpg" },
                    { id: "12", projectName: "Office A12", price: 25000, image: "/bc1/office12/project1.jpg" },
                ]
            },
            {
                id: "BC-2",
                name: "Business Center 2",
                location: "City 2",
                offices: [
                    { id: "13", projectName: "Office B1", price: 25000, image: "/bc2/office1/project3.jpg" },
                    { id: "14", projectName: "Office B2", price: 25000, image: "/bc2/office2/project4.jpg" },
                    { id: "15", projectName: "Office B2", price: 25000, image: "/bc2/office3/project4.jpg" },
                    { id: "16", projectName: "Office B2", price: 40000, image: "/bc2/office4/project4.jpg" },
                    { id: "17", projectName: "Office B2", price: 15000, image: "/bc2/office5/project4.jpg" },
                ]
            }
        ];

        setBusinessCenters(dummyBusinessCenters);
    }, []);

    const filteredProjects = useMemo(() => {
        return businessCenters.flatMap((bc) =>
            bc.offices.filter((office) => {
                const matchesSearch = searchQuery
                    ? office.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    bc.location.toLowerCase().includes(searchQuery.toLowerCase())
                    : true;
                const matchesCategory = activeTab === "All" || bc.id === activeTab;
                const matchesLocation = locationFilter ? bc.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
                const matchesPrice = (!minPrice || office.price >= Number(minPrice)) && (!maxPrice || office.price <= Number(maxPrice));

                return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
            })
        );
    }, [searchQuery, activeTab, locationFilter, minPrice, maxPrice, businessCenters]);

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

                <div className="mt-4 flex flex-wrap gap-4 p-4">
                    <input type="text" placeholder="Search by name or location" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-2 border rounded" />
                    <input type="text" placeholder="Filter by location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="p-2 border rounded" />
                    <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="p-2 border rounded" />
                    <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="p-2 border rounded" />
                </div>
            </section>

            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((office) => (
                        <Card key={office.id} className="p-4">
                            <Image src={office.image} alt={office.projectName} width={300} height={200} className="rounded-lg" />
                            <h3 className="mt-2 font-semibold">{office.projectName}</h3>
                            <p className="text-sm text-gray-600">Price: ${office.price}</p>
                            <Link href={`/projects-commercial/${office.id}`} className="text-blue-500 hover:underline">
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
