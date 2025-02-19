"use client";

import * as React from "react";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, CheckCircle, DollarSign, Heart, Home, HomeIcon, MapPin, User } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import ImageGallery from "./gallary";
import Link from "next/link";

export default function WorkspaceDetailsClient({ workspace }: { workspace: any }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
    const images = workspace?.images || []; // Use workspace images or fallback to an empty array

    if (!workspace) {
        return <div className="py-24 text-center">Workspace data is missing.</div>;
    }

    return (
        <>
            <Header />
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col gap-8 md:flex-row">
                        {/* Image Carousel */}
                        <div className="relative flex-1">
                            {images.length > 0 ? (
                                <>
                                    <div className="relative w-full h-[37rem]">
                                        <img
                                            src={`http://localhost:4000${images[currentImageIndex]}`}
                                            alt={`Image ${currentImageIndex + 1}`}
                                            className="object-cover w-full h-full transition-opacity duration-500 rounded-lg"
                                        />
                                    </div>
                                    {/* Carousel Controls */}
                                    <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                                        {images.map((_: any, index: number) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-4 h-4 rounded-full transition-all ${currentImageIndex === index
                                                    ? "bg-white w-6"
                                                    : "bg-white/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-96">
                                    <span>No image available</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <h1 className="flex flex-row justify-between mt-4 mb-4 text-4xl font-bold">{workspace.workspaceName} <span><Heart className="w-8 h-8 text-red-500 cursor-pointer" /></span></h1>
                    <p><span className="inline-block px-2 py-1 mt-2 text-xs font-semibold text-white rounded-full bg-primary"><Link href="#site" >Site visit</Link> </span> <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold text-white rounded-full bg-primary"><Link href="#offer" >Offer Price</Link> </span></p>
                    <div className="flex flex-row gap-8 mt-8">
                        {/* Workspace Details */}
                        <div className="flex-1">
                            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                                <div className="flex flex-wrap gap-4">
                                    {/* Address */}
                                    <div className="flex items-center space-x-2 w-[48%]">
                                        <MapPin className="w-6 h-6 text-primary" />
                                        <span className="text-lg font-bold">Address:</span>
                                        <span className="text-lg text-gray-700">{workspace.address}</span>
                                    </div>

                                    {/* Capacity */}
                                    <div className="flex items-center space-x-2 w-[48%]">
                                        <User className="w-6 h-6 text-primary" />
                                        <span className="text-lg font-bold">Capacity:</span>
                                        <span className="text-lg text-gray-700">{workspace.capacity} people</span>
                                    </div>

                                    {/* Price Per Hour */}
                                    <div className="flex items-center space-x-2 w-[48%]">
                                        <FaRupeeSign className="w-6 h-6 text-primary" />
                                        <span className="text-lg font-bold">Rent:</span>
                                        <span className="text-lg text-gray-700">{workspace.pricePerHour}/.</span>
                                    </div>
                                    {/* Property Details */}
                                    {[
                                        { icon: Home, label: "Property ID", value: "9" },
                                        { icon: Home, label: "Type", value: "Residential Apartment" },
                                        { icon: CheckCircle, label: "Status", value: "Available", className: "text-green-500" },
                                        { icon: Home, label: "Furnishing", value: "Semi Furnished" },
                                        { icon: Home, label: "Facing", value: "East" },
                                        { icon: Home, label: "Bedrooms", value: "3 Bedrooms" },
                                        { icon: Calendar, label: "Published At", value: "2025-02-08" },
                                        { icon: Home, label: "Carpet Area", value: "1540 Sq.ft" },
                                        { icon: Home, label: "Built-up Area", value: workspace.area },
                                        { icon: Home, label: "Flooring", value: "Vitrified" },
                                        { icon: Calendar, label: "Age of Property", value: "2015" },
                                        { icon: CheckCircle, label: "Parking", value: "Available" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2 w-[48%]">
                                            <item.icon className={`w-6 h-6 text-primary ${item.className || ''}`} />
                                            <span className="text-lg font-bold">{item.label}:</span>
                                            <span className="text-lg text-gray-700">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 w-[48%]">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <span className="text-lg font-bold">Amenities:</span>
                                </div>
                                <div className="flex flex-wrap w-full gap-3">
                                    {workspace.amenities.map((amenity: any, index: any) => (
                                        <div key={index} className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-md">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-lg text-gray-700">{amenity.toUpperCase()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 ">
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <h2 className="mb-4 text-2xl font-semibold">Inquire About This Space</h2>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target as HTMLFormElement);
                                    const name = formData.get("name");
                                    const phone = formData.get("phone");
                                    const message = formData.get("message");
                                    console.log({ name, phone, message });
                                }}>
                                    <div className="grid grid-cols-1 gap-4">
                                        <label className="block">
                                            <span className="text-gray-700">Name</span>
                                            <input type="text" name="name" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required />
                                        </label>
                                        <label className="block">
                                            <span className="text-gray-700">Phone</span>
                                            <input type="phone" name="phone" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required />
                                        </label>
                                        <label className="block">
                                            <span className="text-gray-700">Message</span>
                                            <textarea name="message" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" rows={4} required />
                                        </label>
                                        {/* captcha */}
                                    </div>
                                    <button type="submit" className="px-6 py-3 mt-4 text-white rounded-lg shadow-lg bg-primary hover:bg-primary-dark">
                                        Send Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ImageGallery images={workspace.images} />
                    <div className="mt-6">
                        <h2 className="mb-4 text-xl font-bold">Location</h2>
                        <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                            <iframe
                                title="Google Map"
                                className="w-full h-full border-none"
                                src={`https://www.google.com/maps/embed/?pb=!1m18!1m12!1m3!1d694.7759773111572!2d77.29444355163979!3d28.64619131911523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb00407b7c4d%3A0x32c7a024487dd9b9!2sMZ%20FITNESS%20%7C%20Gym%20In%20Gagan%20Vihar!5e0!3m2!1sen!2sin!4v1739616446926!5m2!1sen!2sin`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="p-6 mt-6 rounded-lg shadow-md">
                        <h2 className="mb-4 text-xl font-bold">Description</h2>
                        <p className="mb-4 text-lg text-gray-700">{workspace.description}</p>
                    </div>
                    <div className="flex flex-col gap-8 mt-8 md:flex-row">
                        {/* Site Visit Form */}
                        <div id="site" className="w-full md:w-1/2">
                            <form action="" className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <h2 className="mb-4 text-2xl font-semibold text-gray-800">Site Visit Form</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    <label className="block">
                                        <span className="font-medium text-gray-700">Name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-medium text-gray-700">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-medium text-gray-700">Phone</span>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-medium text-gray-700">Date</span>
                                        <input
                                            type="date"
                                            name="date"
                                            className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 mt-4 font-medium text-white transition-all rounded-lg shadow-md bg-primary hover:bg-primary"
                                    >
                                        Book Site Visit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Offer Price Form */}
                        <div id="offer" className="w-full md:w-1/2">
                            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <h2 className="mb-4 text-2xl font-semibold text-gray-800">Offer Price Form</h2>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target as HTMLFormElement);
                                        const offerPrice = formData.get("offerPrice");
                                        console.log({ offerPrice });
                                    }}
                                >
                                    <div className="grid grid-cols-1 gap-4">
                                        <label className="block">
                                            <span className="font-medium text-gray-700">Name</span>
                                            <input
                                                type="text"
                                                name="name"
                                                className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-medium text-gray-700">Phone No.</span>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-medium text-gray-700">Offer Price</span>
                                            <input
                                                type="number"
                                                name="offerPrice"
                                                className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </label>
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 mt-4 font-medium text-white transition-all rounded-lg shadow-md bg-primary hover:bg-primary"
                                        >
                                            Submit Offer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
            <Footer />
        </>
    );
}
