"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

// Form Popup Component
const FormPopup = ({ isOpen, onClose, title, description, formType, propertyId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyId: propertyId,
    formType: formType
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Disable body scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Reset form when opened
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyId: propertyId,
      formType: formType
    });
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, propertyId, formType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      await axios.post("https://api.sevenwonder.in/api/contact", formData);
      toast.success("Your request has been submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/50">
      <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block px-3 py-2 mt-1 w-full text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block px-3 py-2 mt-1 w-full text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block px-3 py-2 mt-1 w-full text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="+91 9876543210"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {formType === "site" ? "Preferred Date & Time" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="block px-3 py-2 mt-1 w-full text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder={formType === "site" ? "E.g., March 25, 2025 at 10:00 AM" : "Your message here..."}
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center px-4 py-2 w-full text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="mr-2 w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              formType === "site" ? "Schedule Site Visit" : "Get Best Offer"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Updated Contact Us section for ProjectDetails component
const ContactUs = ({ office }) => {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <>
      <div className="p-5 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/10">
            <h3 className="font-medium text-primary">Schedule a Site Visit</h3>
            <p className="mt-1 text-sm text-gray-600">
              Visit the property with our expert to know more details
            </p>
            <button 
              onClick={() => setSiteVisitOpen(true)}
              id="site"
              className="block px-4 py-3 mt-3 w-full text-center text-white rounded-md transition-colors bg-primary hover:bg-primary/90"
            >
              Schedule Now
            </button>
          </div>
          <div className="p-4 rounded-lg bg-primary/10">
            <h3 className="font-medium text-primary">Get Best Offer</h3>
            <p className="mt-1 text-sm text-gray-600">
              Contact our team to get the best price for this property
            </p>
            <button 
              onClick={() => setOfferOpen(true)}
              id="offer"
              className="block px-4 py-3 mt-3 w-full text-center text-white rounded-md transition-colors bg-primary hover:bg-primary/90"
            >
              Get Offer
            </button>
          </div>
        </div>
      </div>

      {/* Form Popups */}
      <FormPopup 
        isOpen={siteVisitOpen} 
        onClose={() => setSiteVisitOpen(false)}
        title="Schedule a Site Visit"
        description="Let us know your preferred date and time, and our expert will contact you to confirm the appointment."
        formType="site"
        propertyId={office.propertyUid}
      />
      
      <FormPopup 
        isOpen={offerOpen} 
        onClose={() => setOfferOpen(false)}
        title="Get Best Offer"
        description="Share your requirements with us, and we'll provide you with the best possible offer for this property."
        formType="offer"
        propertyId={office.propertyUid}
      />
    </>
  );
};

export { ContactUs, FormPopup };