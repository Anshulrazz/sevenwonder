

'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, MapPin, User, CheckCircle, Home, Calendar } from "lucide-react"; // Added missing imports
import { FaRupeeSign } from "react-icons/fa"; // Added missing import
import Link from "next/link";



const facilities = [
    "Terrace Garden Area",
    "Smoking Zone",
    "24x7 Electricity & Water Facility",
    "24x7 UPS & DG Power Backup",
    "Biometric Attendance Services",
    "24x7 Hot & Cold Water for Drinking",
    "Housekeeping With Dusting & Deep Cleaning Services",
    "Pantry BYO/Outside Takeaway Services",
    "Fridge/Microwave/Induction Services",
    "Printers/Scanner/Photocopy Services",
    "Fire Safety Exit Services",
    "Signage Services",
    "Reception Area",
    "Well Groomed Receptionist",
    "Waiting Area",
    "Door Access Control Services",
    "Suggestion Box",
    "24x7 Maintenance for Common Area",
    "24x7 Maintenance for Private Office",
    "Intercom Connectivity Services",
    "Cafeteria Services With 24x7 Operational",
    "All Centre Signages Services",
    "High-Speed Broadband/Internet",
    "Dedicated Leased Line",
    "Ambulance/Doctor",
    "24x7 Security & Bouncer Services",
    "Metro to Office Shuttle Services",
    "Studio/YouTube Recording Room",
    "100 Seater Seminar/Presentation Room",
    "4/6/8/12 Seater Conference Room",
    "Lift Facility",
    "24x7 CCTV Security Services",
    "Reserved/Valet Parking for Cabs/Bike",
    "Housekeeping Services",
    "Access in all our Centers"
  ];

const officesData = [
    {
        id: "1",
        projectName: "Ready to move office in Preet Vihar",
        price: 25000,
        images: ["/bc1/office1/a11.jpeg", "/bc1/office1/a13.jpeg"],
        location: "City 1",
        latitude: "28.7041",
        longitude: "77.1025",
        description: "A premium office space with modern amenities.",
        address: "Preet Vihar, Delhi",
        capacity: 50,
        pricePerHour: "25000/month",
        area: "2000 Sq.ft",
        amenities: ["wifi", "parking", "conference room"]
    },
    {
        id: "2",
        projectName: "Office A2",
        price: 60000,
        images: ["/bc1/office1/a11.jpeg"],
        location: "City 1",
        latitude: "28.5355",
        longitude: "77.3910",
        description: "Spacious office with excellent connectivity.",
        address: "Noida, UP",
        capacity: 100,
        pricePerHour: "60000/month",
        area: "4000 Sq.ft",
        amenities: ["wifi", "parking", "cafeteria"]
    }
];

// ImageGallery component
const ImageGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="mt-2">
            <h2 className="mb-4 text-xl font-bold">Details :)</h2>
            {images.length > 0 ? (
                <div className="relative">
                    <div className="relative w-full h-[37rem]">
                        <Image
                            src={images[currentImageIndex]}
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

    useEffect(() => {
        if (id) {
            const selectedOffice = officesData.find((o) => o.id === id);
            if (selectedOffice) setOffice(selectedOffice);
        }
    }, [id]);

    if (!office) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <>
            <Header />
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col gap-8">
                        <ImageGallery images={office.images} />
                        <div>
                            <h1 className="flex flex-row justify-between mt-4 mb-4 text-4xl font-bold">
                                {office.projectName}
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
                                        <div className="flex items-center space-x-2 w-[48%]">
                                            <User className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-bold">Capacity:</span>
                                            <span className="text-lg text-gray-700">{office.capacity} people</span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center space-x-2 w-[48%]">
                                            <FaRupeeSign className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-bold">Rent:</span>
                                            <span className="text-lg text-gray-700">{office.pricePerHour}</span>
                                        </div>

                                        {/* Property Details */}
                                        {[
                                            { icon: Home, label: "Property ID", value: office.id },
                                            { icon: Home, label: "Type", value: "Commercial Office" },
                                            { icon: CheckCircle, label: "Status", value: "Available", className: "text-green-500" },
                                            { icon: Home, label: "Furnishing", value: "Semi Furnished" },
                                            { icon: Home, label: "Built-up Area", value: office.area },
                                            { icon: Calendar, label: "Published At", value: "2025-02-08" },
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
                                        {facilities.map((facility, index) => (
                                            <div key={index} className="flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-md">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-lg text-gray-700">{facility.toUpperCase()}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Inquiry Form */}
                            <div className="p-6 w-full md:w-1/3">
                                <div className="p-6 bg-white rounded-lg shadow-md">
                                    <h2 className="mb-4 text-2xl font-semibold">Inquire About This Space</h2>
                                    <form onSubmit={(e:any) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target);
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
                                                <input type="tel" name="phone" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" required />
                                            </label>
                                            <label className="block">
                                                <span className="text-gray-700">Message</span>
                                                <textarea name="message" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" rows={4} required />
                                            </label>
                                        </div>
                                        <button type="submit" className="px-6 py-3 mt-4 text-white rounded-lg shadow-lg bg-primary hover:bg-primary-dark">
                                            Send Inquiry
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="mt-6">
                            <h2 className="mb-4 text-xl font-bold">Location</h2>
                            <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                                <iframe
                                    title="Google Map"
                                    className="w-full h-full border-none"
                                    src={`https://www.google.com/maps/embed/v1/place?q=${office.latitude},${office.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="p-6 mt-6 rounded-lg shadow-md">
                            <h2 className="mb-4 text-xl font-bold">Description</h2>
                            <p className="mb-4 text-lg text-gray-700">{office.description}</p>
                        </div>

                        {/* Site Visit and Offer Forms */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}