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
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ["All", "BC-1", "BC-2", "BC-3", "BC-4", "BC-5", "BC-6", "BC-7", "BC-8", "BC-9"];
    const itemsPerPage = 21;

    useEffect(() => {
        const dummyBusinessCenters = [
            {
                id: "BC-1",
                name: "Business Center 1",
                location: "Preet Vihar",
                offices: [
                    { id: "1", projectName: "Office A1", price: 25000, image: "/bc1/office1/aa.jpeg" },
                    { id: "2", projectName: "Office A2", price: 25000, image: "/bc1/office2/aa.jpg" },
                    { id: "3", projectName: "Office A3", price: 25000, image: "/bc1/office3/aa.jpg" },
                    { id: "4", projectName: "Office A4", price: 25000, image: "/bc1/office4/aa.jpg" },
                    { id: "5", projectName: "Office A5", price: 25000, image: "/bc1/office5/aa.jpg" },
                    { id: "6", projectName: "Office A6", price: 25000, image: "/bc1/office6/aa.jpeg" },
                    { id: "7", projectName: "Office A7", price: 25000, image: "/bc1/office7/aa.jpg" },
                    { id: "8", projectName: "Office A8", price: 25000, image: "/bc1/office8/aa.jpeg" },
                    { id: "9", projectName: "Office A9", price: 25000, image: "/bc1/office9/aa.jpg" },
                    { id: "10", projectName: "Office A10", price: 25000, image: "/bc1/office10/aa.jpg" },
                    { id: "11", projectName: "Office A11", price: 25000, image: "/bc1/office11/aa.jpg" },
                    { id: "12", projectName: "Office A12", price: 25000, image: "/bc1/office12/aa.jpg" },
                ]
            },
            {
                id: "BC-2",
                name: "Business Center 2",
                location: "City 2",
                offices: [
                    { id: "13", projectName: "Office B1", price: 25000, image: "/bc2/office1/aa.jpeg" },
                    { id: "14", projectName: "Office B2", price: 25000, image: "/bc2/office2/aa.jpeg" },
                    { id: "15", projectName: "Office B2", price: 25000, image: "/bc2/office3/aa.jpeg" },
                    { id: "16", projectName: "Office B2", price: 40000, image: "/bc2/office4/aa.jpeg" },
                    { id: "17", projectName: "Office B2", price: 15000, image: "/bc2/office5/aa.jpg" },
                ]
            },
            {
                id: "BC-3",
                name: "Business Center 3",
                location: "City 2",
                offices: [
                    { id: "18", projectName: "Office C1", price: 25000, image: "/bc3/101/aa.jpeg" },
                    { id: "19", projectName: "Office C2", price: 25000, image: "/bc3/102/aa.jpeg" },
                    { id: "20", projectName: "Office C3", price: 25000, image: "/bc3/103/aa.jpeg" },
                    { id: "22", projectName: "Office C5", price: 40000, image: "/bc3/201/aa.jpeg" },
                    { id: "23", projectName: "Office C6", price: 15000, image: "/bc3/202/aa.jpeg" },
                    { id: "24", projectName: "Office C7", price: 32000, image: "/bc3/203/aa.jpeg" },
                    { id: "25", projectName: "Office C8", price: 28000, image: "/bc3/204/aa.jpeg" },
                    { id: "26", projectName: "Office C9", price: 27000, image: "/bc3/301/aa.jpeg" },
                    { id: "27", projectName: "Office C10", price: 35000, image: "/bc3/302/aa.jpeg" },
                    { id: "28", projectName: "Office C11", price: 38000, image: "/bc3/303/aa.jpeg" },
                    { id: "29", projectName: "Office C12", price: 36000, image: "/bc3/304/aa.jpeg" },
                    { id: "30", projectName: "Office C13", price: 30000, image: "/bc3/401/aa.jpeg" },
                    { id: "31", projectName: "Office C14", price: 33000, image: "/bc3/402/aa.jpeg" },
                    { id: "32", projectName: "Office C15", price: 34000, image: "/bc3/402/aa.jpeg" },
                    { id: "33", projectName: "Office C15", price: 34000, image: "/bc3/403/aa.jpeg" }
                ]
            }
        ];

        setBusinessCenters(dummyBusinessCenters);
    }, []);

    const filteredProjects = useMemo(() => {
        return businessCenters.flatMap((bc: any) =>
            bc.offices.filter((office: any) => {
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

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const displayedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

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
                {displayedProjects.length > 0 ? (
                    displayedProjects.map((office) => (
                        <Card key={office.id} className="p-4">
                            <div className="relative w-full h-56">
                                <Image 
                                    src={office.image} 
                                    alt={office.projectName} 
                                    layout="fill"  
                                    objectFit="cover"  
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="mt-2 font-semibold">{office.projectName}</h3>
                            <p className="text-sm text-gray-600">Price: ₹{office.price}</p>
                            <Link href={`/projects-commercial/${office.id}`} className="text-blue-500 hover:underline">
                                View Details
                            </Link>
                        </Card>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No projects found.</p>
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
