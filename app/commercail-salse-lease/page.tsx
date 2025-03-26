'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaPhone, FaEnvelope, FaChartLine, FaHandshake, FaFileContract, FaUsers, FaShieldAlt, FaLightbulb, FaCalculator, FaChartBar } from 'react-icons/fa';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const CommercialSalesLease = () => {
    const benefits = [
        {
            icon: <FaChartLine className="text-4xl text-[#DD1D4A]" />,
            title: "Market Analysis",
            description: "Comprehensive market research and analysis to help you make informed decisions about your commercial real estate investment."
        },
        {
            icon: <FaHandshake className="text-4xl text-[#DD1D4A]" />,
            title: "Expert Negotiation",
            description: "Skilled negotiators who work to secure the best possible terms for your commercial property transaction."
        },
        {
            icon: <FaFileContract className="text-4xl text-[#DD1D4A]" />,
            title: "Legal Compliance",
            description: "Ensure all transactions comply with local, state, and federal regulations for commercial real estate."
        }
    ];

    const types = [
        {
            title: "Office Space",
            description: "Professional spaces suitable for businesses, from small startups to large corporations.",
            features: ["Modern amenities", "High-speed internet", "Meeting rooms", "Parking facilities"]
        },
        {
            title: "Retail Space",
            description: "Prime locations for retail businesses with high foot traffic and visibility.",
            features: ["Storefront access", "Display windows", "Loading areas", "Customer parking"]
        },
        {
            title: "Industrial Space",
            description: "Functional spaces designed for manufacturing, warehousing, and distribution.",
            features: ["High ceilings", "Loading docks", "Heavy-duty flooring", "Security systems"]
        }
    ];

    const additionalServices = [
        {
            icon: <FaUsers className="text-4xl text-[#DD1D4A]" />,
            title: "Tenant Representation",
            description: "Expert guidance in finding and securing the perfect commercial space for your business needs."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-[#DD1D4A]" />,
            title: "Risk Assessment",
            description: "Comprehensive evaluation of potential risks and opportunities in commercial real estate investments."
        },
        {
            icon: <FaLightbulb className="text-4xl text-[#DD1D4A]" />,
            title: "Strategic Planning",
            description: "Long-term planning and strategy development for your commercial real estate portfolio."
        }
    ];

    const marketInsights = [
        {
            icon: <FaCalculator className="text-4xl text-[#DD1D4A]" />,
            title: "Financial Analysis",
            description: "Detailed financial modeling and analysis to evaluate investment opportunities and returns."
        },
        {
            icon: <FaChartBar className="text-4xl text-[#DD1D4A]" />,
            title: "Market Trends",
            description: "Stay informed about current market trends and future projections in commercial real estate."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-gradient-to-r from-[#DD1D4A] to-[#B3183F]">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container flex relative z-10 items-center px-4 mx-auto h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="mb-6 text-5xl font-bold">Commercial Real Estate Solutions</h1>
                        <p className="mb-8 text-xl">Your trusted partner in commercial property sales and leasing</p>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 font-semibold text-[#DD1D4A] bg-white rounded-lg transition hover:bg-gray-100">
                                Learn More
                            </button>
                            <button className="px-8 py-3 font-semibold text-white rounded-lg border-2 border-white transition hover:bg-white hover:text-[#DD1D4A]">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="p-6 bg-gray-50 rounded-lg"
                            >
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Commercial Space */}
            <section className="py-20 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center">Types of Commercial Space</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {types.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="p-6 bg-white rounded-lg shadow-lg"
                            >
                                <h3 className="mb-4 text-xl font-semibold">{type.title}</h3>
                                <p className="mb-4 text-gray-600">{type.description}</p>
                                <ul className="space-y-2">
                                    {type.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <span className="w-2 h-2 mr-2 bg-[#DD1D4A] rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center">Additional Services</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="p-6 bg-gray-50 rounded-lg"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Insights */}
            <section className="py-20 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center">Market Insights</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {marketInsights.map((insight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="p-6 bg-white rounded-lg shadow-lg"
                            >
                                <div className="mb-4">{insight.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{insight.title}</h3>
                                <p className="text-gray-600">{insight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-12 text-3xl font-bold text-center">Our Process</h2>
                    <div className="mx-auto max-w-3xl">
                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#DD1D4A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">Initial Consultation</h3>
                                    <p className="text-gray-600">We begin with a detailed consultation to understand your specific needs, budget, and timeline for your commercial real estate project.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#DD1D4A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">Market Analysis</h3>
                                    <p className="text-gray-600">Our team conducts thorough market research to identify the best opportunities and provide you with detailed insights.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#DD1D4A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">Property Selection</h3>
                                    <p className="text-gray-600">We help you identify and evaluate properties that match your criteria and business objectives.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#DD1D4A] text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">Transaction Management</h3>
                                    <p className="text-gray-600">Our experts handle all aspects of the transaction, from negotiation to closing, ensuring a smooth process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#DD1D4A]">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold text-white">Ready to Start Your Commercial Real Estate Journey?</h2>
                    <p className="mb-8 text-xl text-white opacity-90">Let us help you find the perfect commercial space for your business</p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact">
                            <button className="px-8 py-3 font-semibold text-[#DD1D4A] bg-white rounded-lg transition hover:bg-gray-100">
                                Schedule Consultation
                            </button>
                        </a>

                        <a href="/brochure.pdf" download>
                            <button className="px-8 py-3 font-semibold text-white rounded-lg border-2 border-white transition hover:bg-white hover:text-[#DD1D4A]">
                                Download Brochure
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CommercialSalesLease;
