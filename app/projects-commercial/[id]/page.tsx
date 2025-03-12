"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, MapPin, User, CheckCircle, Home, Calendar } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

const facilities = [
    "Terrace Garden Area", "Smoking Zone", "24x7 Electricity & Water Facility", 
    "24x7 UPS & DG Power Backup", "Biometric Attendance Services", 
    "Housekeeping With Dusting & Deep Cleaning Services", "Pantry BYO/Outside Takeaway Services"
];

// ImageGallery component
const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="mt-2">
            <h2 className="mb-4 text-xl font-bold">Details</h2>
            {images.length > 0 ? (
                <div className="relative">
                    <div className="relative w-full h-[37rem]">
                        <Image
                            src={`https://api.sevenwonder.in${images[currentImageIndex]}`}
                            alt={`Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-4 h-4 rounded-full transition-all ${
                                    currentImageIndex === index ? "bg-white w-6" : "bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-96">
                    <span>No image available</span>
                </div>
            )}
        </div>
    );
};

export default function ProjectDetails() {
    const { id } = useParams();
    const [office, setOffice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOfficeDetails = async () => {
            try {
                const response = await axios.get(`https://api.sevenwonder.in/api/business_center/${id}`);
                setOffice(response.data);
            } catch (error) {
                console.error("Error fetching office data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchOfficeDetails();
    }, [id]);

    if (loading) {
        return <p className="mt-10 text-center">Loading...</p>;
    }

    if (!office) {
        return <p className="mt-10 text-center text-red-500">Office not found!</p>;
    }

    return (
        <>
            <Header />
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col gap-8">
                        <ImageGallery images={office.images || []} />
                        <div>
                            <h1 className="flex flex-row justify-between mt-4 mb-4 text-4xl font-bold">
                                {office.title}
                                <span><Heart className="w-8 h-8 text-red-500 cursor-pointer" /></span>
                            </h1>
                            <p>
                                <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold text-white rounded-full bg-primary">
                                    <Link href="#site">Site visit</Link>
                                </span>{" "}
                                <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold text-white rounded-full bg-primary">
                                    <Link href="#offer">Offer Price</Link>
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 md:flex-row">
                            {/* Workspace Details */}
                            <div className="flex-1">
                                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                                    <div className="flex flex-wrap gap-4">
                                        {/* Address */}
                                        <div className="flex items-center space-x-2 w-[48%]">
                                            <MapPin className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-bold">Address:</span>
                                            <span className="text-lg text-gray-700">{office.address}</span>
                                        </div>

                                        {/* Capacity */}

                                        {/* Rent */}
                                        <div className="flex items-center space-x-2 w-[48%]">
                                            <FaRupeeSign className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-bold">Rent:</span>
                                            <span className="text-lg text-gray-700">{office.rent} per month</span>
                                        </div>

                                        <div className="flex items-center space-x-2 w-[48%]">
                                            <User className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-bold">Work Stations:</span>
                                            <span className="text-lg text-gray-700">{office.capacity}</span>
                                        </div>
                                        {/* Additional Property Details */}
                                        {[  
                                            { icon: Home, label: "Property ID", value: office.BC },
                                            { icon: Home, label: "Cabin", value: office.type },
                                            { icon: CheckCircle, label: "Status", value: office.status, className: "text-green-500" },
                                            { icon: Home, label: "Furnishing", value: office.furnishing },
                                            { icon: Home, label: "Super Area", value: `${office.builtUpArea} Sq.ft` },
                                            { icon: Calendar, label: "Published At", value: office.createdAt.split("T")[0] },
                                            { icon: CheckCircle, label: "Parking", value: office.parking ? "Available" : "Not Available" },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center space-x-2 w-[48%]">
                                                <item.icon className={`w-6 h-6 text-primary ${item.className || ''}`} />
                                                <span className="text-lg font-bold">{item.label}:</span>
                                                <span className="text-lg text-gray-700">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2 w-[48%]">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                        <span className="text-lg font-bold">Amenities:</span>
                                    </div>
                                    <div className="flex flex-wrap w-full gap-3">
                                        {office.amenities.map((facility, index) => (
                                            <div key={index} className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-md">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-lg text-gray-700">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2 w-[48%]">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                        <span className="text-lg font-bold">Facilities:</span>
                                    </div>
                                    <div className="flex flex-wrap w-full gap-3">
                                        {facilities.map((facility, index) => (
                                            <div key={index} className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-md">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-lg text-gray-700">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="mt-6">
                            <h2 className="mb-4 text-xl font-bold">Location</h2>
                            <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                                <iframe title="Google Map" className="w-full h-full border-none" src={office.googleMapLink} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="mb-4 text-xl font-bold">Descreption:</h2>
                            <p>{office.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
