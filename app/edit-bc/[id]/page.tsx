"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Save, X, Upload, Trash2, ArrowLeft } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditOffice = () => {
  const { id } = useParams();
  const router = useRouter();
  const [office, setOffice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    rent: "",
    BC:"",
    capacity: "",
    type: "",
    status: "",
    furnishing: "",
    builtUpArea: "",
    parking: false,
    description: "",
    googleMapLink: "",
    amenities: [],
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle amenities changes
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value],
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter((amenity) => amenity !== value),
      });
    }
  };

  // Fetch office data
  useEffect(() => {
    const fetchOfficeDetails = async () => {
      try {
        const response = await axios.get(`https://api.sevenwonder.in/api/business_center/${id}`);
        setOffice(response.data);
        setFormData({
          title: response.data.title || "",
          address: response.data.address || "",
          rent: response.data.rent || "",
          capacity: response.data.capacity || "",
          type: response.data.type || "",
          BC: response.data.BC || "",
          status: response.data.status || "",
          furnishing: response.data.furnishing || "",
          builtUpArea: response.data.builtUpArea || "",
          parking: response.data.parking || false,
          description: response.data.description || "",
          googleMapLink: response.data.googleMapLink || "",
          amenities: response.data.amenities || [],
        });
      } catch (error) {
        console.error("Error fetching office data:", error);
        toast.error("Failed to load office data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchOfficeDetails();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await axios.put(`https://api.sevenwonder.in/api/business_center/${id}`, formData);
      
      if (response.data) {
        toast.success("Office details updated successfully!");
        setTimeout(() => {
          router.push(`/projects-commercial/${id}`);
        }, 2000);
      }
    } catch (error) {
      console.error("Error updating office:", error);
      toast.error(error.response?.data?.message || "Failed to update office. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    const formData = new FormData();
    
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      const response = await axios.post(
        `https://api.sevenwonder.in/api/business_center/${id}/images`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      
      if (response.data) {
        toast.success("Images uploaded successfully!");
        // Refresh office data to show new images
        const updatedOffice = await axios.get(`https://api.sevenwonder.in/api/business_center/${id}`);
        setOffice(updatedOffice.data);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Failed to upload images. Please try again.");
    } finally {
      setUploadingImages(false);
    }
  };

  // Handle image deletion
  const handleDeleteImage = async (imageIndex) => {
    try {
      const response = await axios.delete(
        `https://api.sevenwonder.in/api/business_center/${id}/images/${imageIndex}`
      );
      
      if (response.data) {
        toast.success("Image deleted successfully!");
        // Refresh office data
        const updatedOffice = await axios.get(`https://api.sevenwonder.in/api/business_center/${id}`);
        setOffice(updatedOffice.data);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image. Please try again.");
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 rounded-full border-4 border-t-4 border-gray-200 animate-spin border-t-blue-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!office) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="px-6 py-4 mt-10 text-lg font-semibold text-center text-red-500 bg-red-100 rounded-lg border border-red-300 shadow-md">
            🚫 Office not found! Please check the ID or try again later.
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const commonInputClasses = "px-4 py-2 w-full text-gray-700 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-700";

  return (
    <>
      <Header />
      <ToastContainer />

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Link href={`/projects-commercial/${id}`}>
                <button className="flex items-center px-4 py-2 mr-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Details
                </button>
              </Link>
              <h1 className="text-3xl font-bold">Edit Office</h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className={`flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 ${saving ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {saving ? (
                <>
                  <div className="mr-2 w-5 h-5 rounded-full border-t-2 border-l-2 border-white animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left Column - Office Details */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-bold">Basic Information</h2>
                
                <div className="mb-4">
                  <label htmlFor="title" className={labelClasses}>Office Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={commonInputClasses}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className={labelClasses}>Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={commonInputClasses}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="rent" className={labelClasses}>Rent (per month)</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <FaRupeeSign className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="rent"
                      name="rent"
                      value={formData.rent}
                      onChange={handleInputChange}
                      className={`pl-10 ${commonInputClasses}`}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="capacity" className={labelClasses}>Work Stations</label>
                    <input
                      type="number"
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="BC" className={labelClasses}>BC</label>
                    <input
                      type="text"
                      id="BC"
                      name="BC"
                      value={formData.BC}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="builtUpArea" className={labelClasses}>Super Area (sq.ft)</label>
                    <input
                      type="number"
                      id="builtUpArea"
                      name="builtUpArea"
                      value={formData.builtUpArea}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="type" className={labelClasses}>Cabin Type</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Private Office">Private Office</option>
                      <option value="Coworking Space">Coworking Space</option>
                      <option value="Meeting Room">Meeting Room</option>
                      <option value="Virtual Office">Virtual Office</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="status" className={labelClasses}>Status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="Available">Available</option>
                      <option value="Rented">Rented</option>
                      <option value="Under Maintenance">Under Maintenance</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="furnishing" className={labelClasses}>Furnishing</label>
                    <select
                      id="furnishing"
                      name="furnishing"
                      value={formData.furnishing}
                      onChange={handleInputChange}
                      className={commonInputClasses}
                      required
                    >
                      <option value="">Select Furnishing</option>
                      <option value="Fully Furnished">Fully Furnished</option>
                      <option value="Semi-Furnished">Semi-Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="parking"
                      name="parking"
                      checked={formData.parking}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="parking" className="ml-2 text-sm font-medium text-gray-700">Parking Available</label>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-bold">Description</h2>
                <div className="mb-4">
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="6"
                    className={commonInputClasses}
                    placeholder="Detailed description of the property..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-bold">Google Map Link</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    id="googleMapLink"
                    name="googleMapLink"
                    value={formData.googleMapLink}
                    onChange={handleInputChange}
                    className={commonInputClasses}
                    placeholder="Google Map Embed Link"
                  />
                </div>
                {formData.googleMapLink && (
                  <div className="overflow-hidden mt-4 w-full h-64 rounded-lg">
                    <iframe 
                      title="Google Map Preview" 
                      className="w-full h-full border-none" 
                      src={formData.googleMapLink} 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Images & Amenities */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-bold">Images</h2>
                <label className="flex justify-center items-center p-4 w-full h-32 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col justify-center items-center">
                    <Upload className="w-10 h-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Click to upload new images</p>
                  </div>
                  <input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    onChange={handleImageUpload}
                    disabled={uploadingImages} 
                  />
                </label>
                
                {uploadingImages && (
                  <div className="flex justify-center items-center mt-4 space-x-2">
                    <div className="w-5 h-5 rounded-full border-t-2 border-blue-500 border-solid animate-spin"></div>
                    <span className="text-sm text-gray-500">Uploading images...</span>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
                  {office.images && office.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="overflow-hidden relative w-full h-40 rounded-lg">
                        <Image
                          src={`https://api.sevenwonder.in${image}`}
                          alt={`Office Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        onClick={() => handleDeleteImage(index)}
                        className="flex absolute top-2 right-2 justify-center items-center w-8 h-8 text-white bg-red-500 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-bold">Amenities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Air Conditioning", "CCTV", "WiFi", "Conference Room", 
                    "Cafeteria", "Reception", "Parking", "24/7 Access",
                    "Power Backup", "Lift", "Security", "Pantry",
                    "Printer/Scanner", "Housekeeping", "Lounge", "Private Cabin"
                  ].map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`amenity-${index}`}
                        value={amenity}
                        checked={formData.amenities.includes(amenity)}
                        onChange={handleAmenityChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor={`amenity-${index}`} className="ml-2 text-sm font-medium text-gray-700">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h3 className="mb-2 text-sm font-medium text-gray-700">Custom Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.amenities.filter(amenity => 
                      !["Air Conditioning", "CCTV", "WiFi", "Conference Room", 
                        "Cafeteria", "Reception", "Parking", "24/7 Access",
                        "Power Backup", "Lift", "Security", "Pantry",
                        "Printer/Scanner", "Housekeeping", "Lounge", "Private Cabin"
                      ].includes(amenity)
                    ).map((amenity, index) => (
                      <div key={index} className="flex items-center px-3 py-1 space-x-1 bg-blue-100 rounded-full">
                        <span className="text-sm text-blue-800">{amenity}</span>
                        <button 
                          onClick={() => setFormData({
                            ...formData,
                            amenities: formData.amenities.filter(a => a !== amenity)
                          })}
                          className="text-blue-800 hover:text-blue-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    
                    <div className="flex items-center w-full">
                      <input
                        type="text"
                        placeholder="Add custom amenity"
                        className={`flex-1 ${commonInputClasses}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value.trim()) {
                            e.preventDefault();
                            if (!formData.amenities.includes(e.target.value.trim())) {
                              setFormData({
                                ...formData,
                                amenities: [...formData.amenities, e.target.value.trim()]
                              });
                            }
                            e.target.value = '';
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default EditOffice;