"use client";
import { useState } from "react";
import axios from "axios";

export default function CreateBusinessForm() {
    const [images, setImages] = useState<string[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        title: '',
        BC: "", // Assign the generated UID
        address: "",
        rent: "",
        type: "",
        furnishing: "",
        capacity: "",
        propertyUid: "",
        status: "",
        builtUpArea: "",
        parking: "",
        amenities: [] as string[],
        description: "",
        googleMapLink: "",
    });
    const [amenityInput, setAmenityInput] = useState("");

    const handleAddAmenity = () => {
        if (amenityInput.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                amenities: [...prev.amenities, amenityInput],
            }));
            setAmenityInput("");
        }
    };
    // Handle Image Uploads
    const handleImageChange = (e: any) => {
        const files = Array.from(e.target.files);
        const imageArray = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    imageArray.push(reader.result);
                    if (imageArray.length === files.length) {
                        setImages(imageArray);
                        setImagePreviews(imageArray);
                    }
                }
            };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const fData = { ...formData, images };
        // Assuming you're sending the data to your server via axios
        try {
            const response = await axios.post("http://46.202.167.117:4000/api/business_center", fData);
            console.log("Business created successfully:", response.data);
        } catch (error) {
            console.error("Error creating business:", error);
        }
    };

    return (
        <div className="max-w-3xl p-8 mx-auto mt-10 bg-white border border-gray-200 shadow-lg rounded-2xl">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
                Create a New Business
            </h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="col-span-2">
                        <label htmlFor="title" className="text-sm font-semibold text-gray-700">Business Center Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Address */}
                    <div className="col-span-2">
                        <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Rent */}
                    <div className="col-span-2">
                        <label htmlFor="rent" className="text-sm font-semibold text-gray-700">Rent</label>
                        <input 
                            type="text" 
                            id="rent" 
                            value={formData.rent}
                            onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Type */}
                    <div className="col-span-2">
                        <label htmlFor="type" className="text-sm font-semibold text-gray-700">Cabin </label>
                        <input 
                            type="text" 
                            id="type" 
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="capacity" className="text-sm font-semibold text-gray-700">WorkStations</label>
                        <input 
                            type="text" 
                            id="capacity" 
                            value={formData.capacity}
                            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div> 
                    
                    {/* Furnishing */}
                    <div className="col-span-2">
                        <label htmlFor="furnishing" className="text-sm font-semibold text-gray-700">Furnishing</label>
                        <input 
                            type="text" 
                            id="furnishing" 
                            value={formData.furnishing}
                            onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Capacity */}

                    {/* Property UID */}
                    <div className="col-span-2">
                        <label htmlFor="propertyUid" className="text-sm font-semibold text-gray-700">BC UID</label>
                        <input 
                            type="text" 
                            id="propertyUid" 
                            value={formData.BC}
                            onChange={(e) => setFormData({ ...formData, BC: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Status */}
                    <div className="col-span-2">
                        <label htmlFor="status" className="text-sm font-semibold text-gray-700">Status</label>
                        <input 
                            type="text" 
                            id="status" 
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Built-Up Area */}
                    <div className="col-span-2">
                        <label htmlFor="builtUpArea" className="text-sm font-semibold text-gray-700">Supper Area</label>
                        <input 
                            type="text" 
                            id="builtUpArea" 
                            value={formData.builtUpArea}
                            onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Parking */}
                    <div className="col-span-2">
                        <label htmlFor="parking" className="text-sm font-semibold text-gray-700">Parking</label>
                        <input 
                            type="text" 
                            id="parking" 
                            value={formData.parking}
                            onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Amenities */}
                    <div className="col-span-2">
                        <label htmlFor="amenities" className="text-sm font-semibold text-gray-700">
                            Amenities
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                id="amenities"
                                value={amenityInput}
                                onChange={(e) => setAmenityInput(e.target.value)}
                                className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                            />
                            <button
                                type="button"
                                onClick={handleAddAmenity}
                                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                            >
                                Add
                            </button>
                        </div>
                        <ul className="mt-2">
                            {formData.amenities.map((amenity, index) => (
                                <li key={index} className="text-gray-700">- {amenity}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</label>
                        <textarea 
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Google Map Link */}
                    <div className="col-span-2">
                        <label htmlFor="googleMapLink" className="text-sm font-semibold text-gray-700">Google Map Link</label>
                        <input 
                            type="text" 
                            id="googleMapLink" 
                            value={formData.googleMapLink}
                            onChange={(e) => setFormData({ ...formData, googleMapLink: e.target.value })}
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-2">
                        <label htmlFor="imageUpload" className="text-sm font-semibold text-gray-700">Upload Images</label>
                        <input 
                            type="file" 
                            id="imageUpload" 
                            accept="image/*" 
                            multiple 
                            onChange={handleImageChange} 
                            className="w-full p-2 text-gray-700 border rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Image Previews */}
                    <div className="flex flex-wrap col-span-2 gap-2 mt-4">
                        {imagePreviews.map((img, index) => (
                            <img
                                key={index}
                                src={img.startsWith("data") ? img : `http://46.202.167.117:4000/uploads/${img}`}
                                alt={`Preview ${index}`}
                                className="object-cover w-24 h-24 rounded-lg shadow-md"
                                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Fallback if image is broken
                            />
                        ))}
                    </div>
                </div>

                <button type="submit" className="w-full py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
}
