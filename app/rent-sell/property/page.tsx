'use client'
import React, { useState } from 'react';
import {
    Home, HandCoins, Building, CheckCircle, Clock, Shield,
    MapPin, Coins, Award, Users, Calculator, Percent,
    FileText, MessageCircle, Mail, Phone
} from 'lucide-react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const RentSellInfoPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const serviceSteps = {
        rent: [
            "Initial Property Consultation",
            "Professional Property Valuation",
            "Marketing and Listing Preparation",
            "Tenant Screening and Selection",
            "Lease Agreement Preparation",
            "Ongoing Property Management"
        ],
        sell: [
            "Comprehensive Market Analysis",
            "Property Valuation and Pricing Strategy",
            "Professional Property Staging",
            "Targeted Marketing Campaign",
            "Negotiation and Offer Management",
            "Closing and Documentation Support"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50">

            <Header />
            {/* Hero Section */}
            <div className="container px-4 py-24 mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#DD1D4A] mb-6">Your Trusted Property Partner</h2>
                <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-700">
                    Seven Wonders Real Estate offers comprehensive solutions for property owners and investors. Whether you're looking to rent out your property or sell it at the best possible price, we provide expert guidance every step of the way.
                </p>
            </div>

            {/* Services Navigation */}
            <div className="container px-4 mx-auto mb-12">
                <div className="flex justify-center p-4 space-x-6 bg-white rounded-lg shadow-md">
                    {['overview', 'rent', 'sell'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 rounded-md transition duration-300 ${activeTab === tab
                                ? 'bg-[#DD1D4A] text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'overview' ? 'Overview' : tab === 'rent' ? 'Renting' : 'Selling'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Content Section */}
            <section className="container px-4 mx-auto mb-16">
                {activeTab === 'overview' && (
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="p-6 text-center bg-white rounded-lg shadow-md">
                            <MapPin className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                            <h3 className="mb-4 text-xl font-bold">Strategic Locations</h3>
                            <p>We focus on prime properties in the most desirable neighborhoods.</p>
                        </div>
                        <div className="p-6 text-center bg-white rounded-lg shadow-md">
                            <Coins className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                            <h3 className="mb-4 text-xl font-bold">Competitive Pricing</h3>
                            <p>Maximize your property's value with our expert market analysis.</p>
                        </div>
                        <div className="p-6 text-center bg-white rounded-lg shadow-md">
                            <Shield className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                            <h3 className="mb-4 text-xl font-bold">Complete Protection</h3>
                            <p>Comprehensive legal and financial safeguards for property owners.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'rent' && (
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-bold text-[#DD1D4A] mb-6">Renting Your Property</h3>
                            <p className="mb-6 text-gray-700">
                                Our comprehensive rental management service ensures you get the maximum return on your property with minimal hassle.
                            </p>
                            <div className="space-y-4">
                                {serviceSteps.rent.map((step, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="text-[#DD1D4A] mr-4" />
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-6">Rental Benefits</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <Award className="mr-4 text-[#DD1D4A]" />
                                    <span>Guaranteed Rent Protection</span>
                                </li>
                                <li className="flex items-center">
                                    <Users className="mr-4 text-[#DD1D4A]" />
                                    <span>Thorough Tenant Screening</span>
                                </li>
                                <li className="flex items-center">
                                    <Calculator className="mr-4 text-[#DD1D4A]" />
                                    <span>Transparent Financial Reporting</span>
                                </li>
                                <li className="flex items-center">
                                    <Percent className="mr-4 text-[#DD1D4A]" />
                                    <span>Competitive Market Rates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'sell' && (
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-bold text-[#DD1D4A] mb-6">Selling Your Property</h3>
                            <p className="mb-6 text-gray-700">
                                Our strategic approach ensures you get the best possible price for your property with a smooth, stress-free selling experience.
                            </p>
                            <div className="space-y-4">
                                {serviceSteps.sell.map((step, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="text-[#DD1D4A] mr-4" />
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-6">Selling Advantages</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <FileText className="mr-4 text-[#DD1D4A]" />
                                    <span>Comprehensive Market Report</span>
                                </li>
                                <li className="flex items-center">
                                    <MessageCircle className="mr-4 text-[#DD1D4A]" />
                                    <span>Regular Communication</span>
                                </li>
                                <li className="flex items-center">
                                    <Award className="mr-4 text-[#DD1D4A]" />
                                    <span>Professional Marketing</span>
                                </li>
                                <li className="flex items-center">
                                    <Shield className="mr-4 text-[#DD1D4A]" />
                                    <span>Legal Documentation Support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </section>

            {/* Testimonials Section */}
            <section className="container px-4 py-16 mx-auto">
                <h3 className="mb-12 text-3xl font-bold text-center text-[#DD1D4A]">What Our Clients Say</h3>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold">JD</div>
                            <div className="ml-4">
                                <h4 className="font-bold">John Doe</h4>
                                <p className="text-sm text-gray-600">Property Owner</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"Seven Wonders helped me sell my property at a price I never expected. Their market analysis and negotiation skills are exceptional."</p>
                        <div className="flex mt-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold">AS</div>
                            <div className="ml-4">
                                <h4 className="font-bold">Alice Smith</h4>
                                <p className="text-sm text-gray-600">Landlord</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"The rental management service is outstanding. They handle everything from tenant screening to maintenance, making my life much easier."</p>
                        <div className="flex mt-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold">RJ</div>
                            <div className="ml-4">
                                <h4 className="font-bold">Robert Johnson</h4>
                                <p className="text-sm text-gray-600">Investor</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"Their market insights and property valuation expertise helped me make informed investment decisions. Highly recommended!"</p>
                        <div className="flex mt-4 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container px-4 py-16 mx-auto bg-gray-50">
                <h3 className="mb-12 text-3xl font-bold text-center text-[#DD1D4A]">Frequently Asked Questions</h3>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-xl font-bold">How long does the selling process typically take?</h4>
                        <p className="text-gray-700">The selling process typically takes 3-6 months, depending on market conditions and property type. We'll provide a detailed timeline during our initial consultation.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-xl font-bold">What documents do I need to rent out my property?</h4>
                        <p className="text-gray-700">You'll need property ownership documents, tax records, and insurance information. We'll guide you through all required documentation.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-xl font-bold">How do you determine the right price for my property?</h4>
                        <p className="text-gray-700">We conduct a comprehensive market analysis, considering location, property condition, recent sales, and current market trends.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-xl font-bold">What happens if my property needs repairs?</h4>
                        <p className="text-gray-700">We have a network of trusted contractors and can coordinate repairs. For rentals, we handle maintenance requests promptly.</p>
                    </div>
                </div>
            </section>

            {/* Market Insights Section */}
            <section className="container px-4 py-16 mx-auto">
                <h3 className="mb-12 text-3xl font-bold text-center text-[#DD1D4A]">Market Insights</h3>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-6 text-center bg-white rounded-lg shadow-md">
                        <Building className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                        <h4 className="mb-4 text-xl font-bold">Property Types</h4>
                        <p className="text-gray-700">From luxury apartments to commercial spaces, we handle all property types with expertise.</p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-md">
                        <Clock className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                        <h4 className="mb-4 text-xl font-bold">Market Timing</h4>
                        <p className="text-gray-700">We help you identify the optimal time to sell or rent based on market conditions.</p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-md">
                        <HandCoins className="w-16 h-16 mx-auto text-[#DD1D4A] mb-4" />
                        <h4 className="mb-4 text-xl font-bold">Investment Opportunities</h4>
                        <p className="text-gray-700">Discover lucrative investment opportunities with our market analysis and property recommendations.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#DD1D4A] text-white py-16">
                <div className="container px-4 mx-auto text-center">
                    <h3 className="mb-6 text-3xl font-bold">Ready to Get Started?</h3>
                    <p className="mb-8 text-xl">Connect with our expert team for a free consultation.</p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="tel:+919015651565"
                            className="bg-white text-[#DD1D4A] px-8 py-3 rounded-full flex items-center hover:bg-gray-100 transition duration-300"
                        >
                            <Phone className="mr-2" /> Call Us
                        </a>
                        <a
                            href="mailto:sales@sevenwonder.in"
                            className="bg-white text-[#DD1D4A] px-8 py-3 rounded-full flex items-center hover:bg-gray-100 transition duration-300"
                        >
                            <Mail className="mr-2" /> Email Us
                        </a>    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default RentSellInfoPage;