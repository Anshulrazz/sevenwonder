'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useAppDispatch } from '@/hooks/hooks';
import { postRequirment } from '@/lib/actions/user';
import { Building } from 'lucide-react';
import { useState } from 'react';
import { Calendar, MapPin } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostRequirementForm = () => {
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        requirementType: 'coworking',
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
        message: ' '
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

    const validateCurrentStep = () => {
        switch (currentStep) {
            case 1:
                if (!formData.requirementType || !formData.name || !formData.company) {
                    toast.error("Please fill in all required fields");
                    return false;
                }
                return true;
            case 2:
                if (!formData.location || !formData.budget || !formData.moveInDate) {
                    toast.error("Please fill in all required fields");
                    return false;
                }
                return true;
            case 3:
                if (!formData.seatingCapacity || !formData.workspaceType || !formData.message) {
                    toast.error("Please fill in all required fields");
                    return false;
                }
                return true;
            case 4:
                if (!formData.email || !formData.phone) {
                    toast.error("Please fill in all required fields");
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Check if all required fields are filled
        const requiredFields = [
            'name', 'company', 'email', 'budget', 'location', 
            'message', 'moveInDate', 'phone', 'requirementType', 
            'seatingCapacity', 'workspaceType'
        ];
        
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }
        
        try {
            // Convert budget and seatingCapacity to numbers
            const submissionData = {
                ...formData,
                budget: Number(formData.budget),
                seatingCapacity: Number(formData.seatingCapacity)
            };
            
            dispatch(postRequirment(submissionData));
            toast.success("Requirements submitted successfully!");
            setTimeout(() => {
                setCurrentStep(5); // Show success screen after toast
            }, 1500);
        } catch (error) {
            toast.error("Failed to submit requirements. Please try again.");
        }
    };

    const handleNext = () => {
        if (validateCurrentStep()) {
            const stepMessages = [
                "Basic details saved!",
                "Location preferences saved!",
                "Space requirements saved!",
                "Almost done!"
            ];
            
            toast.info(stepMessages[currentStep - 1]);
            setCurrentStep(currentStep + 1);
        }
    };

    // Format date string for input type="date"
    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    return (
        <>
            <Header />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            
            <div className="py-24 min-h-screen bg-gray-50">
                <div className="px-4 mx-auto max-w-4xl">
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
                        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-lg">
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Basic Details</h2>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Requirement Type <span className="text-red-500">*</span></label>
                                        <select
                                            name="requirementType"
                                            className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                            onChange={handleInputChange}
                                            value={formData.requirementType}
                                            required
                                        >
                                            <option value="">Select Requirement Type</option>
                                            <option value="office">Office Space</option>
                                            <option value="coworking">Co-working Space</option>
                                            <option value="institute">Institute</option>
                                            <option value="shop">Shop</option>
                                            <option value="spa">Spa</option>
                                            <option value="residential">Residential</option>
                                            <option value="showroom">Showroom</option>
                                            <option value="cafe">Cafe</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Company/Organization <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Location Preferences</h2>
                                    <div className="flex gap-3 items-center p-4 rounded-lg border">
                                        <MapPin className="text-gray-400" />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            placeholder="Preferred Location"
                                            className="flex-1 p-2 focus:outline-none"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-4 rounded-lg border">
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Budget (₹) <span className="text-red-500">*</span></label>
                                            <div className="flex gap-3 items-center">
                                                <Building className="text-gray-400" />
                                                <input
                                                    type="number"
                                                    name="budget"
                                                    value={formData.budget}
                                                    placeholder="Enter your budget"
                                                    className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-lg border">
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Move-in Date <span className="text-red-500">*</span></label>
                                            <div className="flex gap-3 items-center">
                                                <Calendar className="text-gray-400" />
                                                <input
                                                    type="date"
                                                    name="moveInDate"
                                                    value={formatDateForInput(formData.moveInDate)}
                                                    className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                    onChange={handleInputChange}
                                                    required
                                                />
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
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Workspace Type <span className="text-red-500">*</span></label>
                                            <select
                                                name="workspaceType"
                                                value={formData.workspaceType}
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Workspace Type</option>
                                                <option value="private">Private Office</option>
                                                <option value="shared">Shared Space</option>
                                                <option value="dedicated">Dedicated Desk</option>
                                                <option value="virtual">Virtual Office</option>
                                                <option value="meeting">Meeting Room</option>
                                                <option value="event">Event Space</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Seating Capacity <span className="text-red-500">*</span></label>
                                            <input
                                                type="number"
                                                name="seatingCapacity"
                                                value={formData.seatingCapacity}
                                                placeholder="Number of people"
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Additional Requirements <span className="text-red-500">*</span></label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            rows={4}
                                            className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Please specify any special requirements or preferences..."
                                        ></textarea>
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h3 className="mb-2 font-medium">Summary of Your Requirements</h3>
                                        <ul className="text-sm text-gray-600">
                                            <li><strong>Requirement Type:</strong> {formData.requirementType}</li>
                                            <li><strong>Location:</strong> {formData.location}</li>
                                            <li><strong>Budget:</strong> ₹{formData.budget}</li>
                                            <li><strong>Space Type:</strong> {formData.workspaceType}</li>
                                            <li><strong>Seating Capacity:</strong> {formData.seatingCapacity}</li>
                                        </ul>
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
                                    onClick={() => currentStep < 4 && handleNext()}
                                    className="px-6 py-2 text-white rounded-lg bg-primary hover:bg-primary"
                                >
                                    {currentStep === 4 ? 'Submit Requirements' : 'Next'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Success Screen */
                        <div className="p-12 text-center bg-white rounded-xl shadow-lg">
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
                                onClick={() => {
                                    toast.info("Starting a new submission");
                                    setTimeout(() => window.location.reload(), 1000);
                                }}
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