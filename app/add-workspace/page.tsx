'use client'
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useAppDispatch } from '@/hooks/hooks';
import { postWorkspace } from '@/lib/actions/user';
import { Building2, Camera, MapPin, Users, DollarSign, CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const AddWorkspaceForm = () => {
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [images, setImages] = useState<string[]>([
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200'
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [msg, setMsg] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        workspaceName: 'Modern Co-working Space',
        workspaceType: 'coworking-space',
        address: '123 Business District, City',
        capacity: '50',
        amenities: ['wifi', 'parking', 'ac'] as string[],
        pricePerHour: '10000',
        area: '200',
        description: 'A modern workspace designed for productivity and collaboration.',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % Math.max(images.length, 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageChange = (e) => {
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
                    }
                }
            };
        });
    };


    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
        if (currentImageIndex >= images.length - 1) {
            setCurrentImageIndex(0);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fData = { ...formData, images };
        dispatch(postWorkspace(fData));
        console.log(fData);
        setMsg("Thanks for adding your workspace! ❤️😊");
    };

    const amenityIcons: { [key: string]: JSX.Element } = {
        wifi: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
        parking: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 16V8h4a4 4 0 110 8H8zm0 0v-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
        ac: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.25 4.75h5.5m-5.5 0l-4.5 4.5m4.5-4.5v14.5m5.5-14.5l4.5 4.5m-4.5-4.5v14.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
        printer: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m10-4v8H7v-8h10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
        cafeteria: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 010 8h-1m-7-4h7M6 12h2v5a3 3 0 01-3 3H4a3 3 0 01-3-3v-5h2zm0 0V7a2 2 0 012-2h2a2 2 0 012 2v5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
        projector: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h.01M7 12h.01M11 12h.01M15 12h.01M19 12h.01M4 7h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>,
    };

    return (
        <>
            <Header />
            <div className="min-h-screen py-24 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">Add New Workspace</h1>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Preview Section */}
                        <div className="space-y-6">
                            <div className="relative overflow-hidden bg-gray-100 shadow-lg aspect-video rounded-xl">
                                {images.length > 0 ? (
                                    <>
                                        <img
                                            src={images[currentImageIndex]}
                                            alt="Workspace preview"
                                            className="object-cover w-full h-full transition-opacity duration-500"
                                        />
                                        <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                                            {images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                                        ? 'bg-white w-4'
                                                        : 'bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-gray-400">No images uploaded</p>
                                    </div>
                                )}
                            </div>

                            {/* Preview Details */}
                            <div className="p-6 space-y-4 bg-white shadow-lg rounded-xl">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {formData.workspaceName || 'Workspace Name'}
                                </h2>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-5 h-5" />
                                    <p>{formData.address || 'Address'}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="w-5 h-5" />
                                    <p>Capacity: {formData.capacity || '0'} people</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 rounded-lg bg-blue-50">
                                        <p className="text-sm text-gray-600">Per Month</p>
                                        <p className="text-xl font-bold text-blue-600">
                                            ₹{formData.pricePerHour || '0'}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold">Amenities</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {formData.amenities.map((amenity) => (
                                            <span
                                                key={amenity}
                                                className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full"
                                            >
                                                {amenityIcons[amenity]}
                                                <span className="capitalize">{amenity}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-xl">
                            {/* Step Indicators */}
                            <div className="flex gap-4 mb-8">
                                {[1, 2, 3].map((step) => (
                                    <button
                                        key={step}
                                        type="button"
                                        onClick={() => setCurrentStep(step)}
                                        className={`flex-1 py-3 rounded-lg transition-all ${currentStep === step
                                            ? 'bg-primary text-white shadow-lg scale-105'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        Step {step}
                                        {currentStep > step && (
                                            <CheckCircle2 className="inline-block w-5 h-5 ml-2" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Basic Information Section */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Building2 className="w-6 h-6 text-primary" />
                                        <h2 className="text-xl font-semibold">Basic Information</h2>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Workspace Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.workspaceName}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) =>
                                                setFormData({ ...formData, workspaceName: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                                Workspace Type*
                                            </label>
                                            <select
                                                required
                                                value={formData.workspaceType}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={(e) =>
                                                    setFormData({ ...formData, workspaceType: e.target.value })
                                                }
                                            >
                                                <option value="">Select Type</option>
                                                <option value="private-office">Private Office</option>
                                                <option value="coworking-space">Co-working Space</option>
                                                <option value="meeting-room">Meeting Room</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                                Capacity*
                                            </label>
                                            <div className="flex items-center gap-3">
                                                <Users className="text-gray-400" />
                                                <input
                                                    type="number"
                                                    required
                                                    value={formData.capacity}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, capacity: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Location & Images Section */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <MapPin className="w-6 h-6 text-primary" />
                                        <h2 className="text-xl font-semibold">Location & Images</h2>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Address*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.address}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) =>
                                                setFormData({ ...formData, address: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Upload Images (Max 5)
                                        </label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {images.map((img, index) => (
                                                <div key={index} className="relative aspect-square group">
                                                    <img
                                                        src={img}
                                                        alt={`Workspace ${index + 1}`}
                                                        className="object-cover w-full h-full rounded-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute p-1 text-white transition-opacity bg-red-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {images.length < 5 && (
                                                <label className="flex items-center justify-center transition-colors border-2 border-dashed rounded-lg cursor-pointer aspect-square hover:border-blue-500">
                                                    <input
                                                        type="file"
                                                        multiple
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />
                                                    <Camera className="w-8 h-8 text-gray-400" />
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Pricing & Amenities Section */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <DollarSign className="w-6 h-6 text-primary" />
                                        <h2 className="text-xl font-semibold">Pricing & Amenities</h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                                Rent per Month (₹)*
                                            </label>
                                            <input
                                                type="number"
                                                required
                                                value={formData.pricePerHour}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={(e) =>
                                                    setFormData({ ...formData, pricePerHour: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                                Area In sq Feet*
                                            </label>
                                            <input
                                                type="number"
                                                required
                                                value={formData.area}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={(e) =>
                                                    setFormData({ ...formData, area: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Amenities
                                        </label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {['wifi', 'parking', 'ac', 'printer', 'cafeteria', 'projector'].map(
                                                (amenity) => (
                                                    <label
                                                        key={amenity}
                                                        className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${formData.amenities.includes(amenity)
                                                            ? 'bg-blue-50 border-blue-200'
                                                            : 'hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.amenities.includes(amenity)}
                                                            className="hidden"
                                                            onChange={(e) => {
                                                                const amenities = e.target.checked
                                                                    ? [...formData.amenities, amenity]
                                                                    : formData.amenities.filter((a) => a !== amenity);
                                                                setFormData({ ...formData, amenities });
                                                            }}
                                                        />
                                                        {amenityIcons[amenity]}
                                                        <span className="capitalize">{amenity}</span>
                                                    </label>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.description}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) =>
                                                setFormData({ ...formData, description: e.target.value })
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Controls */}
                            <div className="flex justify-between mt-8">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(currentStep - 1)}
                                        className="px-6 py-2 text-gray-600 hover:text-gray-800"
                                    >
                                        Previous
                                    </button>
                                )}
                                <button
                                    type={currentStep === 3 ? 'submit' : 'button'}
                                    onClick={() => currentStep < 3 && setCurrentStep(currentStep + 1)}
                                    className="px-6 py-2 ml-auto text-white transition-colors rounded-lg bg-primary hover:bg-primary"
                                >
                                    {currentStep === 3 ? 'Submit Workspace' : 'Next'}
                                </button>
                            </div>
                            <p>{msg}</p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddWorkspaceForm;
