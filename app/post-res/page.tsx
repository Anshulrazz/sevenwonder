"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, X, Upload, Home, Eye } from "lucide-react";
import Image from "next/image";
import axios from "axios";

const AMENITIES = [
    { id: "wifi", label: "WiFi" },
    { id: "parking", label: "Parking" },
    { id: "ac", label: "Air Conditioning" },
    { id: "printer", label: "Printer" },
    { id: "cafeteria", label: "Cafeteria" },
    { id: "projector", label: "Projector" },
];

export default function CreateResidentialProperty() {
    const { toast } = useToast();
    const fileInputRef = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
    const [showPreview, setShowPreview] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        area: "",
        bhk: "",
        washroom: "",
        floor: "",
        address: "",
        rent: "",
        amenities: [],
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmenityChange = (amenityId) => {
        setFormData(prev => {
            const amenities = prev.amenities.includes(amenityId)
                ? prev.amenities.filter(id => id !== amenityId)
                : [...prev.amenities, amenityId];
            
            return { ...prev, amenities };
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const remainingSlots = 5 - imageFiles.length;
        
        if (files.length > remainingSlots) {
            toast({
                title: "Too many images",
                description: `You can only upload up to 5 images. ${remainingSlots} slots remaining.`,
                variant: "destructive",
            });
            return;
        }

        const newFiles = [...imageFiles, ...files].slice(0, 5);
        setImageFiles(newFiles);

        // Create preview URLs
        const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
        
        // Clean up old preview URLs to prevent memory leaks
        imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
        
        setImagePreviewUrls(newPreviewUrls);
    };

    const removeImage = (index) => {
        // Create new arrays without the item at the specified index
        const newFiles = imageFiles.filter((_, i) => i !== index);
        setImageFiles(newFiles);

        // Clean up the removed preview URL
        URL.revokeObjectURL(imagePreviewUrls[index]);
        
        const newPreviewUrls = imagePreviewUrls.filter((_, i) => i !== index);
        setImagePreviewUrls(newPreviewUrls);
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // First, upload all images to an external service
            const imageUrls = [];

            for (const file of imageFiles) {
                // Create a FormData object for each file
                const fileData = new FormData();
                fileData.append('image', file);

                // Upload to your image hosting service
                // This is just an example - replace with your actual image hosting API
                const uploadResponse = await axios.post('http://localhost:4000/api/upload-image', fileData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Get the URL from the response and add it to our array
                imageUrls.push(uploadResponse.data.imageUrl);
            }

            // Now create the property with the image URLs
            const propertyData = {
                ...formData,
                images: imageUrls,
            };

            const response = await axios.post('http://localhost:4000/api/residential', propertyData);

            toast({
                title: "Success!",
                description: "Property has been successfully created",
            });

            // Reset form
            setFormData({
                title: "",
                area: "",
                bhk: "",
                washroom: "",
                floor: "",
                address: "",
                rent: "",
                amenities: [],
                description: "",
            });
            setImageFiles([]);
            setImagePreviewUrls([]);

        } catch (error) {
            console.error("Error creating property:", error);
            toast({
                title: "Error",
                description: error.response?.data?.message || "Failed to create property",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Render Property Preview
    const PropertyPreview = () => {
        if (!formData.title) return (
            <div className="p-8 text-center text-gray-500">
                Fill in the form to see a preview
            </div>
        );

        return (
            <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                {/* Image Gallery */}
                <div className="relative h-64 bg-gray-200">
                    {imagePreviewUrls.length > 0 ? (
                        <Image
                            src={imagePreviewUrls[0]}
                            alt={formData.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray-400">No images uploaded</p>
                        </div>
                    )}
                </div>

                {/* Property Details */}
                <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{formData.title || "Property Title"}</h3>
                    
                    <p className="mb-4 text-gray-600">{formData.address || "Property Address"}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                        {formData.bhk && (
                            <span className="px-3 py-1 text-sm rounded-full text-primary-700 bg-primary-50">
                                {formData.bhk} BHK
                            </span>
                        )}
                        {formData.area && (
                            <span className="px-3 py-1 text-sm rounded-full text-primary-700 bg-primary-50">
                                {formData.area} sq.ft
                            </span>
                        )}
                        {formData.washroom && (
                            <span className="px-3 py-1 text-sm rounded-full text-primary-700 bg-primary-50">
                                {formData.washroom} Bath
                            </span>
                        )}
                        {formData.floor && (
                            <span className="px-3 py-1 text-sm rounded-full text-primary-700 bg-primary-50">
                                Floor {formData.floor}
                            </span>
                        )}
                    </div>
                    
                    {formData.amenities.length > 0 && (
                        <div className="mb-4">
                            <h4 className="mb-2 text-sm font-semibold text-gray-700">Amenities</h4>
                            <div className="flex flex-wrap gap-2">
                                {formData.amenities.map(amenityId => {
                                    const amenity = AMENITIES.find(a => a.id === amenityId);
                                    return (
                                        <span key={amenityId} className="px-2 py-1 text-xs bg-gray-100 rounded">
                                            {amenity?.label}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    
                    {formData.description && (
                        <div className="mb-4">
                            <h4 className="mb-2 text-sm font-semibold text-gray-700">Description</h4>
                            <p className="text-gray-600">{formData.description}</p>
                        </div>
                    )}
                    
                    <div className="pt-4 mt-4 text-xl font-bold border-t text-primary">
                        ₹{formData.rent || "0"}/month
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container px-4 py-12 mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Form */}
                <Card className="border border-gray-200 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                        <div className="flex gap-3 items-center">
                            <Home className="text-primary" size={28} />
                            <CardTitle className="text-2xl">Add New Residential Property</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Title */}
                                <div className="space-y-2">
                                    <Label htmlFor="title">Property Title <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="3 BHK Apartment in Bandra"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Area */}
                                <div className="space-y-2">
                                    <Label htmlFor="area">Area (sq. ft) <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="area"
                                        name="area"
                                        type="number"
                                        placeholder="1200"
                                        value={formData.area}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                    />
                                </div>

                                {/* BHK */}
                                <div className="space-y-2">
                                    <Label htmlFor="bhk">BHK</Label>
                                    <Input
                                        id="bhk"
                                        name="bhk"
                                        type="number"
                                        placeholder="3"
                                        value={formData.bhk}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                </div>

                                {/* Washroom */}
                                <div className="space-y-2">
                                    <Label htmlFor="washroom">Washrooms</Label>
                                    <Input
                                        id="washroom"
                                        name="washroom"
                                        type="number"
                                        placeholder="2"
                                        value={formData.washroom}
                                        onChange={handleChange}
                                        min="0"
                                    />
                                </div>

                                {/* Floor */}
                                <div className="space-y-2">
                                    <Label htmlFor="floor">Floor</Label>
                                    <Input
                                        id="floor"
                                        name="floor"
                                        type="number"
                                        placeholder="3"
                                        value={formData.floor}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Rent */}
                                <div className="space-y-2">
                                    <Label htmlFor="rent">Monthly Rent (₹) <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="rent"
                                        name="rent"
                                        type="number"
                                        placeholder="25000"
                                        value={formData.rent}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="123 Main St, Bandra West, Mumbai"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Describe the property and its surroundings..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>

                            {/* Amenities */}
                            <div className="space-y-3">
                                <Label>Amenities</Label>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                    {AMENITIES.map((amenity) => (
                                        <div key={amenity.id} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`amenity-${amenity.id}`}
                                                checked={formData.amenities.includes(amenity.id)}
                                                onCheckedChange={() => handleAmenityChange(amenity.id)}
                                            />
                                            <Label htmlFor={`amenity-${amenity.id}`} className="cursor-pointer">
                                                {amenity.label}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-3">
                                <Label>Property Images (Max 5)</Label>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Image Previews */}
                                    {imagePreviewUrls.map((url, index) => (
                                        <div key={index} className="overflow-hidden relative h-40 bg-gray-100 rounded-md border">
                                            <Image
                                                src={url}
                                                alt={`Preview ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="icon"
                                                className="absolute top-2 right-2 w-8 h-8"
                                                onClick={() => removeImage(index)}
                                            >
                                                <X size={16} />
                                            </Button>
                                        </div>
                                    ))}

                                    {/* Upload Button */}
                                    {imagePreviewUrls.length < 5 && (
                                        <div
                                            className="flex flex-col justify-center items-center h-40 bg-gray-50 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload size={24} className="mb-2 text-gray-500" />
                                            <span className="text-sm text-gray-500">Click to upload</span>
                                            <span className="mt-1 text-xs text-gray-400">
                                                {imagePreviewUrls.length} of 5 images
                                            </span>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                className="hidden"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Preview Toggle Button (Mobile Only) */}
                            <div className="lg:hidden">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="flex items-center w-full"
                                    onClick={togglePreview}
                                >
                                    <Eye size={16} className="mr-2" />
                                    {showPreview ? "Hide Preview" : "Show Preview"}
                                </Button>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="py-6 w-full text-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                        Saving Property...
                                    </>
                                ) : (
                                    "Create Property"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Property Preview (Desktop always visible, Mobile toggle) */}
                <div className={`transition-all ${showPreview ? 'block' : 'hidden lg:block'}`}>
                    <Card className="border border-gray-200 shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                            <div className="flex gap-3 items-center">
                                <Eye className="text-primary" size={28} />
                                <CardTitle className="text-2xl">Property Preview</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <PropertyPreview />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}