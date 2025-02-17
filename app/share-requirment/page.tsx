'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useAppDispatch } from '@/hooks/hooks';
import { postRequirment } from '@/lib/actions/user';
import { Building } from 'lucide-react';
import { useState } from 'react';
import { Calendar, MapPin } from 'react-feather';

const PostRequirementForm = () => {
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        requirementType: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        location: '',
        area: '',
        budget: '',
        moveInDate: '',
        seatingCapacity: '',
        workspaceType: '',
        message: ''
    });

    const steps = [
        { id: 1, title: 'Basic Details' },
        { id: 2, title: 'Location Preferences' },
        { id: 3, title: 'Space Requirements' },
        { id: 4, title: 'Contact Details' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        dispatch(postRequirment(formData));
        setCurrentStep(5); // Show success screen
    };


    return (
        <>
            <Header />
            <div className="min-h-screen py-24 bg-gray-50">
                <div className="max-w-4xl px-4 mx-auto">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex justify-between">
                            {steps.map((step) => (
                                <div key={step.id} className="flex flex-col items-center w-1/4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${currentStep >= step.id ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                                        {step.id}
                                    </div>
                                    <div className={`mt-2 text-sm ${currentStep >= step.id ? 'text-primary' : 'text-gray-400'}`}>
                                        {step.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Content */}
                    {currentStep <= 4 ? (
                        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-xl">
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Basic Details</h2>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Requirement Type</label>
                                        <select
                                            name="requirementType"
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Requirement Type</option>
                                            <option value="office">Office Space</option>
                                            <option value="coworking">Co-working Space</option>
                                            <option value="institute">Institute</option>
                                            <option value="shop">Shop</option>
                                            <option value="meeting">Spa</option>
                                            <option value="meeting">Residential</option>
                                            <option value="meeting">Showroom</option>
                                            <option value="meeting">Cafe</option>
                                            <option value="meeting">Resturant</option>
                                            <option value="meeting">Other</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Profession</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Location Preferences</h2>
                                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                                        <MapPin className="text-gray-400" />
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Preferred Location"
                                            className="flex-1 p-2 focus:outline-none"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-4 border rounded-lg">
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Budget</label>
                                            <div className="flex items-center gap-3">
                                                <Building className="text-gray-400" />
                                                <input
                                                    type='number'
                                                    name="workspaceType"
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                />
                                                <input
                                                    type='number'
                                                    name="workspaceType"
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="p-4 border rounded-lg">
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Shifting Days</label>
                                            <div className="flex items-center gap-3">
                                                <Calendar className="text-gray-400" />
                                                <select
                                                    name="requirementType"
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">--Select--</option>
                                                    <option value="office">Immidiately</option>
                                                    <option value="coworking">5 Days</option>
                                                    <option value="institute">10 Days</option>
                                                    <option value="institute">15 Days</option>
                                                    <option value="shop">20 Days</option>
                                                    <option value="meeting">1 month</option>
                                                    <option value="meeting">2 months</option>
                                                    <option value="meeting">3 months</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Space Requirements</h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Area</label>
                                           <p>.</p>
                                            <input
                                                type="text"
                                                name="area"
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">No. of Workstations and Cabins</label>
                                            <span className='flex items-center gap-36'>
                                                <p>Cabins  </p>
                                                <p>Workstations  </p>
                                            </span>
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type='number'
                                                    name="workspaceType"
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                />
                                                <input
                                                    type='number'
                                                    name="workspaceType"
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Additional Requirements</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                                    className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                                    disabled={currentStep === 1}
                                >
                                    Back
                                </button>
                                <button
                                    type={currentStep === 4 ? 'submit' : 'button'}
                                    onClick={() => currentStep < 4 && setCurrentStep(currentStep + 1)}
                                    className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary"
                                >
                                    {currentStep === 4 ? 'Submit Requirements' : 'Next'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Success Screen */
                        <div className="p-12 text-center bg-white shadow-lg rounded-xl">
                            <div className="mx-auto mb-6 text-green-500">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="mb-4 text-2xl font-bold">Requirements Submitted Successfully!</h2>
                            <p className="mb-8 text-gray-600">
                                Our team will get in touch with you shortly with customized solutions.
                            </p>
                            <button
                                className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary"
                                onClick={() => window.location.reload()}
                            >
                                Submit Another Requirement
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PostRequirementForm;
