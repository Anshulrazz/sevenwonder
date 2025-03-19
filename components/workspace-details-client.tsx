"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, CheckCircle, DollarSign, Heart, Home, HomeIcon, Info, MapPin, Phone, Send, User } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import ImageGallery from "./gallary";
import Link from "next/link";

export default function WorkspaceDetailsClient({ workspace }: { workspace: any }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInquirySent, setIsInquirySent] = useState(false);
    const [activeTab, setActiveTab] = useState("details");
    const images = workspace?.images || [];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const message = formData.get("message");
        console.log({ name, phone, message });
        setIsInquirySent(true);
        setTimeout(() => setIsInquirySent(false), 5000);
    };

    if (!workspace) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="p-8 text-center bg-white rounded-lg shadow-md">
                    <Info className="mx-auto mb-4 w-16 h-16 text-primary" />
                    <h2 className="mb-2 text-2xl font-bold">Workspace Not Found</h2>
                    <p className="mb-4 text-gray-600">The workspace data you're looking for is missing or unavailable.</p>
                    <Link href="/workspaces">
                        <span className="px-4 py-2 text-white rounded-md bg-primary hover:bg-opacity-90">
                            Browse Workspaces
                        </span>
                    </Link>
            </div>

            </div>
        );
    }

    return (
        <>
            <Header />
            <section className="py-8 md:py-16">
                <div className="container px-4 mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center mb-6 text-sm text-gray-600">
                        <Link href="/">
                            <span className="hover:text-primary">Home</span>
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/workspaces">
                            <span className="hover:text-primary">Workspaces</span>
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="font-medium text-primary">{workspace.workspaceName}</span>
                    </div>

                    {/* Title Section */}
                    <div className="flex flex-col justify-between items-start mb-6 md:flex-row md:items-center">
                        <h1 className="text-3xl font-bold md:text-4xl">{workspace.workspaceName}</h1>
                        <button
                            onClick={toggleFavorite}
                            className="flex items-center mt-2 md:mt-0"
                            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                            <Heart className={`w-6 h-6 transition-colors ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"}`} />
                            <span className="ml-2 text-sm">{isFavorite ? "Saved" : "Save"}</span>
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <div className="overflow-hidden mb-8 bg-gray-100 rounded-xl">
                        {images.length > 0 ? (
                            <div className="relative">
                                <div className="relative w-full h-64 md:h-96 lg:h-[37rem]">
                                    <img
                                        src={`https://api.sevenwonder.in${images[currentImageIndex]}`}
                                        alt={`${workspace.workspaceName} - Image ${currentImageIndex + 1}`}
                                        className="object-cover w-full h-full rounded-lg transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                                </div>

                                {/* Navigation buttons */}
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 p-2 bg-white rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100"
                                    aria-label="Previous image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 p-2 bg-white rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100"
                                    aria-label="Next image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Indicators */}
                                <div className="flex absolute bottom-4 left-1/2 gap-2 transform -translate-x-1/2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                                ? "bg-white w-6"
                                                : "bg-white/50"
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Image counter */}
                                <div className="absolute right-4 bottom-4 px-3 py-1 text-sm text-white bg-black bg-opacity-60 rounded-full">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center w-full h-64 bg-gray-200 rounded-lg md:h-96">
                                <span className="text-gray-500">No images available</span>
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-4">
                        <Link href="#site" className="p-4 text-center bg-white rounded-lg shadow-sm transition-colors hover:bg-primary hover:text-white">
                            <Calendar className="mx-auto mb-2 w-6 h-6" />
                            <span className="text-sm font-medium">Book Site Visit</span>
                        </Link>
                        <Link href="#offer" className="p-4 text-center bg-white rounded-lg shadow-sm transition-colors hover:bg-primary hover:text-white">
                            <DollarSign className="mx-auto mb-2 w-6 h-6" />
                            <span className="text-sm font-medium">Make Offer</span>
                        </Link>
                        <Link href="#inquiry" className="p-4 text-center bg-white rounded-lg shadow-sm transition-colors hover:bg-primary hover:text-white">
                            <Send className="mx-auto mb-2 w-6 h-6" />
                            <span className="text-sm font-medium">Send Inquiry</span>
                        </Link>
                        <Link href="#map" className="p-4 text-center bg-white rounded-lg shadow-sm transition-colors hover:bg-primary hover:text-white">
                            <MapPin className="mx-auto mb-2 w-6 h-6" />
                            <span className="text-sm font-medium">View Location</span>
                        </Link>
                    </div>

                    {/* Tabs for mobile */}
                    {isMobile && (
                        <div className="flex overflow-x-auto mb-6">
                            <button
                                onClick={() => setActiveTab("details")}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === "details" ? "text-primary border-b-2 border-primary" : "text-gray-500"
                                    }`}
                            >
                                Details
                            </button>
                            <button
                                onClick={() => setActiveTab("amenities")}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === "amenities" ? "text-primary border-b-2 border-primary" : "text-gray-500"
                                    }`}
                            >
                                Amenities
                            </button>
                            <button
                                onClick={() => setActiveTab("description")}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === "description" ? "text-primary border-b-2 border-primary" : "text-gray-500"
                                    }`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab("location")}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === "location" ? "text-primary border-b-2 border-primary" : "text-gray-500"
                                    }`}
                            >
                                Location
                            </button>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === "contact" ? "text-primary border-b-2 border-primary" : "text-gray-500"
                                    }`}
                            >
                                Contact
                            </button>
                        </div>
                    )}

                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Key Details */}
                            <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                                <h2 className="mb-4 text-xl font-semibold">Key Details</h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <MapPin className="mr-3 w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500">Location</p>
                                            <p className="font-medium">{workspace.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <User className="mr-3 w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500">Capacity</p>
                                            <p className="font-medium">{workspace.capacity} people</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <FaRupeeSign className="mr-3 w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500">Price</p>
                                            <p className="font-medium">₹{workspace.pricePerHour} per hour</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <Home className="mr-3 w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500">Type</p>
                                            <p className="font-medium">Residential Apartment</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <CheckCircle className="mr-3 w-5 h-5 text-green-500" />
                                        <div>
                                            <p className="text-xs text-gray-500">Status</p>
                                            <p className="font-medium">Available</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                        <Home className="mr-3 w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-gray-500">Area</p>
                                            <p className="font-medium">{workspace.area}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {(!isMobile || activeTab === "details") && (
                                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Property Details</h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {[
                                            { icon: Home, label: "Property ID", value: "9" },
                                            { icon: Home, label: "Furnishing", value: "Semi Furnished" },
                                            { icon: Home, label: "Facing", value: "East" },
                                            { icon: Home, label: "Bedrooms", value: "3 Bedrooms" },
                                            { icon: Calendar, label: "Published", value: "2025-02-08" },
                                            { icon: Home, label: "Carpet Area", value: "1540 Sq.ft" },
                                            { icon: Home, label: "Flooring", value: "Vitrified" },
                                            { icon: Calendar, label: "Age", value: "Built in 2015" },
                                            { icon: CheckCircle, label: "Parking", value: "Available" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-md">
                                                <item.icon className="mt-1 mr-3 w-5 h-5 text-primary" />
                                                <div>
                                                    <p className="text-xs text-gray-500">{item.label}</p>
                                                    <p className="font-medium">{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {(!isMobile || activeTab === "amenities") && (
                                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Amenities</h2>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                        {workspace.amenities.map((amenity: string, index: number) => (
                                            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                                                <CheckCircle className="mr-2 w-4 h-4 text-green-500" />
                                                <span className="text-sm">{amenity.toUpperCase()}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {(!isMobile || activeTab === "description") && (
                                <div className="p-6 mb-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Description</h2>
                                    <p className="text-gray-700 whitespace-pre-line">{workspace.description}</p>
                                </div>
                            )}

                            {(!isMobile || activeTab === "location") && (
                                <div id="map" className="mb-6">
                                    <div className="p-6 bg-white rounded-lg shadow-sm">
                                        <h2 className="mb-4 text-xl font-semibold">Location</h2>
                                        <div className="overflow-hidden w-full h-64 rounded-lg">
                                            <iframe
                                                title="Google Map"
                                                className="w-full h-full border-none"
                                                src={`https://www.google.com/maps/embed/?pb=!1m18!1m12!1m3!1d694.7759773111572!2d77.29444355163979!3d28.64619131911523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb00407b7c4d%3A0x32c7a024487dd9b9!2sMZ%20FITNESS%20%7C%20Gym%20In%20Gagan%20Vihar!5e0!3m2!1sen!2sin!4v1739616446926!5m2!1sen!2sin`}
                                                allowFullScreen
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="mb-2 text-lg font-medium">Address</h3>
                                            <p className="text-gray-700">{workspace.address}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                                {/* Site Visit Form */}
                                <div id="site" className="p-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Schedule a Site Visit</h2>
                                    <form action="" className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Time</label>
                                            <select
                                                name="time"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            >
                                                <option value="">Select a time</option>
                                                <option value="morning">Morning (9AM - 12PM)</option>
                                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                                <option value="evening">Evening (4PM - 7PM)</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-4 py-3 w-full text-sm font-medium text-white rounded-md transition-colors bg-primary hover:bg-opacity-90"
                                        >
                                            Book Site Visit
                                        </button>
                                    </form>
                                </div>

                                {/* Offer Price Form */}
                                <div id="offer" className="p-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Make an Offer</h2>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target as HTMLFormElement);
                                        const offerPrice = formData.get("offerPrice");
                                        console.log({ offerPrice });
                                    }} className="space-y-4">
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Your Offer (₹)</label>
                                            <div className="relative">
                                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <FaRupeeSign className="w-4 h-4 text-gray-500" />
                                                </div>
                                                <input
                                                    type="number"
                                                    name="offerPrice"
                                                    className="py-2 pr-4 pl-10 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    placeholder="Enter your offer amount"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm font-medium text-gray-700">Message (Optional)</label>
                                            <textarea
                                                name="message"
                                                rows={3}
                                                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                placeholder="Any additional information about your offer"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-4 py-3 w-full text-sm font-medium text-white rounded-md transition-colors bg-primary hover:bg-opacity-90"
                                        >
                                            Submit Offer
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="mb-6">
                                <h2 className="mb-4 text-xl font-semibold">Photo Gallery</h2>
                                <ImageGallery images={workspace.images} />
                            </div>
                        </div>

                        {/* Sidebar */}
                        {(!isMobile || activeTab === "contact") && (
                            <div id="inquiry" className="w-full lg:w-80">
                                <div className="sticky top-6 p-6 bg-white rounded-lg shadow-sm">
                                    <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
                                    {isInquirySent ? (
                                        <div className="p-4 mb-4 text-center text-green-700 bg-green-100 rounded-md">
                                            <CheckCircle className="mx-auto mb-2 w-8 h-8" />
                                            <p className="font-medium">Thank you for your inquiry!</p>
                                            <p className="text-sm">We'll get back to you soon.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleInquirySubmit} className="space-y-4">
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                                                <textarea
                                                    name="message"
                                                    rows={4}
                                                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="px-4 py-3 w-full text-sm font-medium text-white rounded-md transition-colors bg-primary hover:bg-opacity-90"
                                            >
                                                Send Inquiry
                                            </button>
                                        </form>
                                    )}

                                    <div className="pt-6 mt-6 border-t border-gray-200">
                                        <h3 className="mb-3 text-lg font-medium">Need Help?</h3>
                                        <div className="flex items-center mb-3">
                                            <Phone className="mr-3 w-5 h-5 text-primary" />
                                            <a href="tel:+911234567890" className="text-gray-700 hover:text-primary">+91 12345 67890</a>
                                        </div>
                                        <div className="flex items">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
           
        </section>
        </>
    );
}
