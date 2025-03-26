'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaKey, FaFileAlt, FaHandshake, FaChartLine, FaUsers, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaShieldAlt, FaCalculator, FaHandHoldingUsd, FaClipboardList, FaUserTie, FaChartBar, FaQuestionCircle, FaStar, FaComments, FaThumbsUp, FaArrowRight, FaSearch, FaWrench } from 'react-icons/fa';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const ResidentialSalesLease = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Header />
            <div className="relative h-[60vh] bg-[#DD1D4A]">
                <div className="absolute inset-0 bg-black/50" />
                <div className="container flex relative z-10 items-center px-4 mx-auto h-full min-h-screen lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl text-left text-white lg:max-w-4xl"
                    >
                        <h1 className="flex gap-4 items-center mb-4 text-5xl font-bold md:text-6xl">
                            <FaHome className="text-6xl text-white" />
                            <span>Residential Sales & Leasing</span>
                        </h1>
                        <p className="text-xl lg:text-xl">Your Trusted Partner in Real Estate Solutions</p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 py-16 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Sales Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 bg-white rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-6">
                            <FaKey className="text-4xl text-[#DD1D4A] mr-4" />
                            <h2 className="text-3xl font-bold text-[#DD1D4A]">Residential Sales</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Our residential sales team specializes in helping you find your perfect home. We offer:
                            </p>
                            <ul className="space-y-2 list-none text-gray-700">
                                {[
                                    { icon: <FaSearch className="inline mr-2 text-[#DD1D4A]" />, text: "Personalized property search" },
                                    { icon: <FaChartLine className="inline mr-2 text-[#DD1D4A]" />, text: "Market analysis and pricing" },
                                    { icon: <FaHandshake className="inline mr-2 text-[#DD1D4A]" />, text: "Negotiation expertise" },
                                    { icon: <FaCalculator className="inline mr-2 text-[#DD1D4A]" />, text: "Property valuation" },
                                    { icon: <FaFileAlt className="inline mr-2 text-[#DD1D4A]" />, text: "Documentation assistance" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {item.icon}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Leasing Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="p-8 bg-white rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-6">
                            <FaBuilding className="text-4xl text-[#DD1D4A] mr-4" />
                            <h2 className="text-3xl font-bold text-[#DD1D4A]">Residential Leasing</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700">
                                Our leasing services provide comprehensive solutions for both tenants and property owners:
                            </p>
                            <ul className="space-y-2 list-none text-gray-700">
                                {[
                                    { icon: <FaClipboardList className="inline mr-2 text-[#DD1D4A]" />, text: "Property listing and marketing" },
                                    { icon: <FaUserTie className="inline mr-2 text-[#DD1D4A]" />, text: "Tenant screening and selection" },
                                    { icon: <FaFileAlt className="inline mr-2 text-[#DD1D4A]" />, text: "Lease agreement preparation" },
                                    { icon: <FaWrench className="inline mr-2 text-[#DD1D4A]" />, text: "Property maintenance coordination" },
                                    { icon: <FaHandHoldingUsd className="inline mr-2 text-[#DD1D4A]" />, text: "Rent collection and management" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        {item.icon}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-12 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {[
                            {
                                step: "01",
                                title: "Initial Consultation",
                                description: "We begin with a detailed discussion of your requirements and preferences."
                            },
                            {
                                step: "02",
                                title: "Property Search",
                                description: "Our team conducts a thorough search based on your criteria."
                            },
                            {
                                step: "03",
                                title: "Property Viewing",
                                description: "We arrange and accompany you to view potential properties."
                            },
                            {
                                step: "04",
                                title: "Finalization",
                                description: "We assist with negotiations, documentation, and closing the deal."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 text-center bg-white rounded-lg shadow-lg">
                                <div className="text-4xl font-bold text-[#DD1D4A] mb-4">{item.step}</div>
                                {item.icon}
                                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: <FaUserTie className="text-4xl text-[#DD1D4A] mx-auto mb-4" />,
                                title: "Expert Guidance",
                                description: "Our experienced team provides professional advice throughout your real estate journey."
                            },
                            {
                                icon: <FaChartBar className="text-4xl text-[#DD1D4A] mx-auto mb-4" />,
                                title: "Market Knowledge",
                                description: "Stay informed with our deep understanding of local market trends and conditions."
                            },
                            {
                                icon: <FaUsers className="text-4xl text-[#DD1D4A] mx-auto mb-4" />,
                                title: "Personalized Service",
                                description: "We tailor our services to meet your specific needs and preferences."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-lg">
                                {item.icon}
                                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Services Overview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-12 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <FaHome className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Property Valuation",
                                description: "Accurate market value assessment for your property"
                            },
                            {
                                icon: <FaShieldAlt className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Legal Compliance",
                                description: "Ensuring all transactions meet legal requirements"
                            },
                            {
                                icon: <FaChartLine className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Market Analysis",
                                description: "In-depth market research and trend analysis"
                            },
                            {
                                icon: <FaFileAlt className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Documentation",
                                description: "Complete paperwork and legal documentation"
                            },
                            {
                                icon: <FaHandshake className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Negotiation",
                                description: "Expert negotiation for the best deals"
                            },
                            {
                                icon: <FaCheckCircle className="text-3xl text-[#DD1D4A] mb-4" />,
                                title: "Quality Assurance",
                                description: "Rigorous quality checks at every step"
                            }
                        ].map((service, index) => (
                            <div key={index} className="p-6 text-center bg-white rounded-lg shadow-lg">
                                {service.icon}
                                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {[
                            {
                                question: "How long does the property search process typically take?",
                                answer: "The duration varies based on your specific requirements and market conditions. On average, it takes 2-4 weeks to find suitable properties."
                            },
                            {
                                question: "What documents do I need to provide?",
                                answer: "You'll need to provide identification documents, proof of income, and any relevant financial statements. We'll guide you through the complete documentation process."
                            },
                            {
                                question: "Do you offer property management services?",
                                answer: "Yes, we provide comprehensive property management services including maintenance, tenant screening, and rent collection."
                            },
                            {
                                question: "What areas do you cover?",
                                answer: "We operate across major metropolitan areas and surrounding suburbs. Contact us to confirm coverage in your desired location."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center mb-3">
                                    <FaQuestionCircle className="text-2xl text-[#DD1D4A] mr-3" />
                                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                                </div>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-12 text-center">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Home Buyer",
                                testimonial: "The team's expertise and dedication made our home buying process smooth and stress-free.",
                                rating: 5
                            },
                            {
                                name: "Michael Chen",
                                role: "Property Owner",
                                testimonial: "Their property management services have been exceptional. They handle everything professionally.",
                                rating: 5
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Tenant",
                                testimonial: "Found my perfect rental property through their services. The team was very responsive and helpful.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="mb-4 italic text-gray-700">"{testimonial.testimonial}"</p>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Information Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-[#DD1D4A] mb-12 text-center">Get in Touch</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                            <FaPhone className="text-4xl text-[#DD1D4A] mx-auto mb-4" />
                            <h3 className="mb-2 text-xl font-semibold">Phone</h3>
                            <p className="text-gray-700">+919015651565</p>
                        </div>
                        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                            <FaEnvelope className="text-4xl text-[#DD1D4A] mx-auto mb-4" />
                            <h3 className="mb-2 text-xl font-semibold">Email</h3>
                            <p className="text-gray-700">sales@sevenwonder.in</p>
                        </div>
                        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                            <FaMapMarkerAlt className="text-4xl text-[#DD1D4A] mx-auto mb-4" />
                            <h3 className="mb-2 text-xl font-semibold">Address</h3>
                            <p className="text-gray-700">G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="mt-20 text-center bg-[#DD1D4A] text-white p-12 rounded-lg"
                >
                    <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="mb-8 text-xl">Contact us today to discuss your real estate needs</p>
                    <a href="/contact">
                        <button className="bg-white text-[#DD1D4A] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto">
                            Contact Us <FaArrowRight className="ml-2" />
                        </button>
                    </a>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default ResidentialSalesLease;
