"use client";
import { useState, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INITIAL_FORM_STATE = {
  title: "",
  BC: "",
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
};

export default function CreateBusinessForm() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [amenityInput, setAmenityInput] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // Handle input changes efficiently using a single function
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }, []);

  // Handle amenity addition with Enter key and button
  const handleAddAmenity = useCallback(() => {
    if (amenityInput.trim() !== "") {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, amenityInput.trim()],
      }));
      setAmenityInput("");
    }
  }, [amenityInput]);

  // Handle Enter key for amenity input
  const handleAmenityKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddAmenity();
    }
  }, [handleAddAmenity]);

  // Remove amenity efficiently
  const handleRemoveAmenity = useCallback((index: number) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter((_, i) => i !== index),
    }));
  }, []);

  // Image handling with improved error handling
  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    
    const fileArray = Array.from(files);
    const maxSize = 10 * 1024 * 1024; // 10MB limit
    
    // Filter out files that are too large
    const validFiles = fileArray.filter(file => {
      if (file.size > maxSize) {
        toast.error(`File ${file.name} is too large (max 10MB)`);
        return false;
      }
      return true;
    });
    
    if (!validFiles.length) return;
    
    // Process valid files
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          setImages(prev => [...prev, event.target!.result as string]);
          setImagePreviews(prev => [...prev, event.target!.result as string]);
        }
      };
      reader.onerror = () => toast.error(`Failed to read file ${file.name}`);
      reader.readAsDataURL(file);
    });
  }, []);

  // Remove image with confirmation
  const removeImage = useCallback((index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  }, []);

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_STATE);
    setImages([]);
    setImagePreviews([]);
    setAmenityInput("");
  }, []);

  // Form submission with improved error handling
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.address || !formData.rent) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.post(
        "https://api.sevenwonder.in/api/business_center", 
        { ...formData, images }
      );
      
      toast.success("Business center created successfully! 🎉");
      resetForm();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Error creating business center. Please try again.";
      toast.error(errorMessage);
      console.error("Error creating business center:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto mt-4 max-w-4xl bg-white rounded-xl shadow-lg md:p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">List a New Business Center</h1>
        <p className="mt-2 text-gray-600">Fill in the details below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Basic Info Section */}
        <FormSection title="Basic Information">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-2">
              <FormInput
                id="title"
                label="Business Center Title*"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-span-2">
              <FormInput
                id="address"
                label="Address*"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <FormInput
              id="rent"
              label="Rent (₹)*"
              value={formData.rent}
              onChange={handleChange}
              required
            />

            <div>
              <label htmlFor="BC" className="block mb-1 text-sm font-medium text-gray-700">
                Business Center ID
              </label>
              <select
                id="BC"
                value={formData.BC}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Business Center</option>
                <option value="BC-1">BC-1</option>
                <option value="BC-2">BC-2</option>
                <option value="BC-3">BC-3</option>
                <option value="BC-4">BC-4</option>
                <option value="BC-5">BC-5</option>
                <option value="BC-6">BC-6</option>
                <option value="BC-7">BC-7</option>
                <option value="BC-8">BC-8</option>
                <option value="BC-9">BC-9</option>
              </select>
            </div>
          </div>
        </FormSection>

        {/* Property Details Section */}
        <FormSection title="Property Details">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              id="type"
              label="Cabins"
              type="number"
              value={formData.type}
              onChange={handleChange}
            />

            <FormInput
              id="capacity"
              label="Workstations"
              type="number"
              value={formData.capacity}
              onChange={handleChange}
            />

            <div>
              <label htmlFor="furnishing" className="block mb-1 text-sm font-medium text-gray-700">
                Furnishing
              </label>
              <select
                id="furnishing"
                value={formData.furnishing}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Furnishing</option>
                <option value="Fully Furnished">Fully Furnished</option>
                <option value="Semi Furnished">Semi Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block mb-1 text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Status</option>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Maintenance">Under Maintenance</option>
              </select>
            </div>

            <FormInput
              id="builtUpArea"
              label="Super Area (sq ft)"
              value={formData.builtUpArea}
              onChange={handleChange}
            />

            <FormInput
              id="parking"
              label="Parking"
              value={formData.parking}
              onChange={handleChange}
              placeholder="e.g., 2 cars, 4 bikes"
            />
          </div>
        </FormSection>

        {/* Amenities Section */}
        <FormSection title="Amenities">
          <div className="flex space-x-2">
            <input
              type="text"
              id="amenities"
              value={amenityInput}
              onChange={(e) => setAmenityInput(e.target.value)}
              onKeyDown={handleAmenityKeyDown}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add an amenity (e.g., WiFi, Conference Room)"
            />
            <button
              type="button"
              onClick={handleAddAmenity}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {formData.amenities.length === 0 && (
              <p className="text-sm italic text-gray-500">No amenities added yet</p>
            )}
            
            {formData.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center px-3 py-1 bg-blue-100 rounded-full">
                <span className="text-blue-800">{amenity}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveAmenity(index)}
                  className="ml-2 text-blue-800 hover:text-blue-600"
                  aria-label={`Remove ${amenity}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </FormSection>

        {/* Description Section */}
        <FormSection title="Description & Location">
          <div className="space-y-4">
            <div>
              <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="px-4 py-2 w-full h-32 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide a detailed description of the business center..."
              />
            </div>

            <FormInput
              id="googleMapLink"
              label="Google Map Link"
              value={formData.googleMapLink}
              onChange={handleChange}
              placeholder="https://maps.google.com/..."
            />
          </div>
        </FormSection>

        {/* Image Upload Section */}
        <FormSection title="Images">
          <div className="space-y-4">
            <div className="flex justify-center items-center w-full">
              <label
                htmlFor="imageUpload"
                className="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-colors cursor-pointer hover:bg-gray-100"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    className="mb-3 w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-1 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                </div>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/png, image/jpeg, image/jpg"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
                {imagePreviews.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img.startsWith("data") ? img : `https://api.sevenwonder.in/uploads/${img}`}
                      alt={`Preview ${index + 1}`}
                      className="object-cover w-full h-24 rounded-lg shadow-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/fallback-image.jpg";
                        target.onerror = null;
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="flex absolute top-1 right-1 justify-center items-center w-6 h-6 text-white bg-red-500 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label={`Remove image ${index + 1}`}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}

            {imagePreviews.length === 0 && (
              <p className="text-sm italic text-center text-gray-500">No images uploaded yet</p>
            )}
          </div>
        </FormSection>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 text-white bg-blue-600 rounded-lg transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="mr-2 -ml-1 w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

// Reusable components for better organization
interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg md:p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 md:text-xl">{title}</h2>
      {children}
    </div>
  );
}

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function FormInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}