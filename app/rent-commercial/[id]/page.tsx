"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, MapPin, User, CheckCircle, Home, Calendar, Share2, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { ContactUs } from "@/components/form-popups";

const facilities = [
    "Terrace Garden Area", "Smoking Zone", "24x7 Electricity & Water Facility",
    "24x7 UPS & DG Power Backup", "Biometric Attendance Services",
    "Housekeeping With Dusting & Deep Cleaning Services", "Pantry BYO/Outside Takeaway Services"
];

// Enhanced ImageGallery component with better responsive design
const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Optional: Add keyboard navigation
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") goToPrevImage();
            if (e.key === "ArrowRight") goToNextImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="mt-2 w-full">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">Gallery</h2>
            {images.length > 0 ? (
                <div className="relative group">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[36rem] rounded-lg overflow-hidden">
                        <Image
                            src={`https://api.sevenwonder.in${images[currentImageIndex]}`}
                            alt={`Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover transition-opacity duration-300"
                            priority
                        />
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={goToPrevImage}
                        className="absolute left-3 top-1/2 p-2 text-white rounded-full opacity-0 transition-opacity duration-300 transform -translate-y-1/2 bg-black/50 group-hover:opacity-100 focus:outline-none"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={goToNextImage}
                        className="absolute right-3 top-1/2 p-2 text-white rounded-full opacity-0 transition-opacity duration-300 transform -translate-y-1/2 bg-black/50 group-hover:opacity-100 focus:outline-none"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-3 right-3 px-3 py-1 text-sm text-white rounded-full bg-black/50">
                        {currentImageIndex + 1} / {images.length}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex overflow-x-auto gap-2 justify-center pb-2 mt-4 max-w-full">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${currentImageIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    src={`https://api.sevenwonder.in${image}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center w-full h-64 bg-gray-200 rounded-lg sm:h-80 md:h-96">
                    <span className="text-gray-500">No images available</span>
                </div>
            )}
        </div>
    );
};

export default function ProjectDetails() {
    const { id } = useParams();
    const [office, setOffice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isBookmarkActive, setIsBookmarkActive] = useState(false);
    const router = useRouter();
    const isAdmin = useAppSelector((state) => state.user.user?.isAdmin);

    useEffect(() => {
        const fetchOfficeDetails = async () => {
            try {
                const response = await axios.get(`https://api.sevenwonder.in/api/business_center/${id}`);
                setOffice(response.data);

                // Dynamically update metadata once data is available
                if (response.data) {
                    document.title = `${response.data.title} - Office Space for Rent | Seven Wonder`;
                    updateMetaTags(response.data);
                }
            } catch (error) {
                console.error("Error fetching office data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchOfficeDetails();
    }, [id]);

    // Function to update meta tags dynamically
    const updateMetaTags = (officeData) => {
        updateOrCreateMetaTag('name', 'description', `${officeData.title} available for rent at ${officeData.address}. Fully furnished with modern amenities.`);
        updateOrCreateMetaTag('property', 'og:title', `${officeData.title} - Office Space for Rent`);
        updateOrCreateMetaTag('property', 'og:description', officeData.description.substring(0, 160));
        updateOrCreateMetaTag('property', 'og:image', `https://api.sevenwonder.in/${officeData.images?.[0]}`);
        updateOrCreateMetaTag('property', 'og:url', `https://sevenwonder.in/projects-commercial/${id}`);
        updateOrCreateMetaTag('name', 'keywords', 'office space, office for rent, coworking space, commercial property, workspace, seven wonder offices');
        updateOrCreateMetaTag('name', 'author', 'Seven Wonder');
        updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateOrCreateMetaTag('name', 'robots', 'index, follow');

        // Update canonical link
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', `https://sevenwonder.in/projects-commercial/${id}`);
        } else {
            const newCanonicalLink = document.createElement('link');
            newCanonicalLink.setAttribute('rel', 'canonical');
            newCanonicalLink.setAttribute('href', `https://sevenwonder.in/projects-commercial/${id}`);
            document.head.appendChild(newCanonicalLink);
        }
    };

    // Helper function to update or create meta tags
    const updateOrCreateMetaTag = (attributeName, attributeValue, content) => {
        const metaTag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
        if (metaTag) {
            metaTag.setAttribute('content', content);
        } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.setAttribute(attributeName, attributeValue);
            newMetaTag.setAttribute('content', content);
            document.head.appendChild(newMetaTag);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: office.title,
                text: `Check out this property: ${office.title}`,
                url: window.location.href,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("URL copied to clipboard! 🎉");
        }
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center py-24 min-h-screen">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-4 animate-spin border-primary border-t-transparent"></div>
                        <p className="mt-4 text-lg">Loading property details...</p>
                    </div>
                </div>
            </>
        );
    }

    if (!office) {
        return (
            <>
                <Header />
                <div className="container px-4 py-24 mx-auto">
                    <div className="p-6 mx-auto max-w-lg bg-red-50 rounded-lg border border-red-200 shadow-md">
                        <h2 className="mb-4 text-2xl font-bold text-red-700">Property Not Found</h2>
                        <p className="mb-6 text-gray-700">
                            We couldn't find the property you're looking for. It may have been removed or the ID might be incorrect.
                        </p>
                        <Link href="/projects-commercial" className="inline-block px-6 py-3 text-white rounded-md transition-colors bg-primary hover:bg-primary/90">
                            Browse Other Properties
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="py-20 lg:py-24">
                <ToastContainer position="top-right" autoClose={3000} />
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col gap-6 lg:gap-8">
                        {/* Property Title & Actions */}
                        <div className="mt-8">
                            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">{office.title}</h1>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleShare}
                                        className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full transition-colors hover:bg-gray-200"
                                        aria-label="Share"
                                    >
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={() => setIsBookmarkActive(!isBookmarkActive)}
                                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isBookmarkActive ? "bg-red-100" : "bg-gray-100 hover:bg-gray-200"
                                            }`}
                                        aria-label="Bookmark"
                                    >
                                        <Heart className={`w-5 h-5 ${isBookmarkActive ? "text-red-500 fill-red-500" : "text-gray-600"}`} />
                                    </button>
                                    {isAdmin && (
                                        <button
                                            onClick={() => router.push(`/edit-bc/${id}`)}
                                            className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full transition-colors hover:bg-gray-200"
                                            aria-label="Edit"
                                        >
                                            <Edit className="w-5 h-5 text-gray-600" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-full bg-primary">
                                    <Link href="#site">Site visit</Link>
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-full bg-primary">
                                    <Link href="#offer">Offer Price</Link>
                                </span>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                                    {office.status}
                                </span>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <ImageGallery images={office.images || []} />

                        {/* Property Details */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {/* Main Details */}
                            <div className="lg:col-span-2">
                                <div className="p-5 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-4 text-xl font-bold">Property Details</h2>
                                    <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                                        {/* Location */}
                                        <div className="flex gap-3 items-start">
                                            <MapPin className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Location</p>
                                                <p className="text-gray-600">{office.address}</p>
                                            </div>
                                        </div>

                                        {/* Rent */}
                                        <div className="flex gap-3 items-start">
                                            <FaRupeeSign className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Monthly Rent</p>
                                                <p className="text-gray-600">{Number(office.rent).toLocaleString('en-IN')} ₹</p>
                                            </div>
                                        </div>

                                        {/* Work Stations */}
                                        <div className="flex gap-3 items-start">
                                            <User className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Work Stations</p>
                                                <p className="text-gray-600">{office.capacity}</p>
                                            </div>
                                        </div>

                                        {/* Property ID */}
                                        <div className="flex gap-3 items-start">
                                            <Home className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Property ID</p>
                                                <p className="text-gray-600">{office.propertyUid}</p>
                                            </div>
                                        </div>

                                        {/* Cabin Type */}
                                        <div className="flex gap-3 items-start">
                                            <Home className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Cabin</p>
                                                <p className="text-gray-600">{office.type}</p>
                                            </div>
                                        </div>

                                        {/* Furnishing */}
                                        <div className="flex gap-3 items-start">
                                            <Home className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Furnishing</p>
                                                <p className="text-gray-600">{office.furnishing}</p>
                                            </div>
                                        </div>

                                        {/* Super Area */}
                                        <div className="flex gap-3 items-start">
                                            <Home className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Super Area</p>
                                                <p className="text-gray-600">{office.builtUpArea} Sq.ft</p>
                                            </div>
                                        </div>

                                        {/* Published Date */}
                                        <div className="flex gap-3 items-start">
                                            <Calendar className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Published On</p>
                                                <p className="text-gray-600">{new Date(office.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        {/* Parking */}
                                        <div className="flex gap-3 items-start">
                                            <CheckCircle className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium text-gray-700">Parking</p>
                                                <p className="text-gray-600">{office.parking ? "Available" : "Not Available"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="p-5 mt-6 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-4 text-xl font-bold">Description</h2>
                                    <div className="space-y-3 text-gray-700">
                                        {office.description.split("\n").map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Google Map */}
                                <div className="mt-6">
                                    <h2 className="mb-4 text-xl font-bold">Location</h2>
                                    <div className="overflow-hidden w-full h-64 rounded-lg shadow-md sm:h-80">
                                        <iframe
                                            title="Google Map"
                                            className="w-full h-full border-none"
                                            src={office.googleMapLink}
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Contact & Amenities */}
                            <div className="lg:col-span-1">
                                {/* Contact Card */}
                                <ContactUs office={office} />

                                {/* Amenities Card */}
                                <div className="p-5 mt-6 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-4 text-xl font-bold">Amenities</h2>
                                    <div className="space-y-3">
                                        {office.amenities.map((amenity, index) => (
                                            <div key={index} className="flex gap-2 items-center">
                                                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                                                <span className="text-gray-700">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Facilities Card */}
                                <div className="p-5 mt-6 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-4 text-xl font-bold">Facilities</h2>
                                    <div className="space-y-3">
                                        {facilities.map((facility, index) => (
                                            <div key={index} className="flex gap-2 items-center">
                                                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                                                <span className="text-gray-700">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}