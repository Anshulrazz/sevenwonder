'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const features = [
    {
        title: 'Flexible Workspaces',
        description: 'Choose from various workspace options that adapt to your needs',
        icon: '🎯',
    },
    {
        title: 'High-Speed Internet',
        description: 'Enterprise-grade connectivity for seamless productivity',
        icon: '⚡',
    },
    {
        title: 'Meeting & Conference Rooms',
        description: 'Professional spaces for collaboration and presentations',
        icon: '🤝',
    },
    {
        title: 'Community & Networking',
        description: 'Connect with like-minded professionals and grow together',
        icon: '🌐',
    },
    {
        title: '24/7 Access',
        description: 'Work on your schedule with round-the-clock access',
        icon: '⏰',
    },
    {
        title: 'On-Demand Amenities',
        description: 'Access to premium facilities when you need them',
        icon: '✨',
    },
    {
        title: 'Business Support',
        description: 'Professional reception and mail handling services',
        icon: '📬',
    },
    {
        title: 'Printing Services',
        description: 'High-quality printing and scanning facilities',
        icon: '🖨️',
    },
    {
        title: 'Security',
        description: '24/7 security and CCTV surveillance',
        icon: '🔒',
    },
];

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Startup Founder',
        content: 'SevenWonders has been instrumental in our growth. The community and facilities are exceptional.',
    },
    {
        name: 'Michael Chen',
        role: 'Freelance Developer',
        content: 'The perfect balance of professional environment and creative energy.',
    },
    {
        name: 'Emma Rodriguez',
        role: 'Small Business Owner',
        content: 'Flexible plans and amazing amenities make it the ideal workspace solution.',
    },
    {
        name: 'David Kumar',
        role: 'Tech Entrepreneur',
        content: 'The networking opportunities and professional environment have helped us scale rapidly.',
    },
    {
        name: 'Priya Sharma',
        role: 'Digital Marketing Agency',
        content: 'Modern facilities and excellent support staff make work a pleasure.',
    },
    {
        name: 'Alex Thompson',
        role: 'Remote Team Lead',
        content: 'Perfect solution for our distributed team to work together effectively.',
    },
];

const membershipPlans = [
    {
        name: 'Flex',
        price: '₹2,999',
        period: 'month',
        features: ['Hot Desk Access', 'High-Speed Internet', 'Basic Amenities', 'Community Events', 'Printing Credits', 'Mail Handling'],
    },
    {
        name: 'Dedicated',
        price: '₹5,999',
        period: 'month',
        features: ['Dedicated Desk', 'Priority Meeting Room Access', 'Mail Handling', 'Business Address', 'Unlimited Printing', 'Phone Booth Access'],
    },
    {
        name: 'Private',
        price: '₹9,999',
        period: 'month',
        features: ['Private Office', '24/7 Access', 'Custom Branding', 'Premium Support', 'Meeting Room Credits', 'Event Space Access'],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'month',
        features: ['Custom Office Space', 'Dedicated Support Team', 'Custom Amenities', 'Priority Booking', 'Exclusive Events', 'Branded Space'],
    },
];

const amenities = [
    {
        title: 'Fitness Center',
        description: 'State-of-the-art gym facilities for your wellness needs',
        icon: '💪',
    },
    {
        title: 'Cafeteria',
        description: 'Healthy food options and coffee bar available',
        icon: '☕',
    },
    {
        title: 'Event Space',
        description: 'Perfect venue for workshops and networking events',
        icon: '🎉',
    },
    {
        title: 'Parking',
        description: 'Secure parking space for all members',
        icon: '🚗',
    },
    {
        title: 'Phone Booths',
        description: 'Private spaces for calls and virtual meetings',
        icon: '📞',
    },
    {
        title: 'Lounge Areas',
        description: 'Comfortable spaces for informal meetings',
        icon: '🛋️',
    },
    {
        title: 'Kitchen',
        description: 'Fully equipped kitchen with dining area',
        icon: '🍽️',
    },
    {
        title: 'Storage',
        description: 'Secure storage solutions for members',
        icon: '📦',
    },
];

const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Meeting Rooms' },
    { number: '24/7', label: 'Access Available' },
    { number: '100+', label: 'Events Monthly' },
    { number: '95%', label: 'Member Satisfaction' },
    { number: '1000+', label: 'Networking Events' },
];

const benefits = [
    {
        title: 'Professional Growth',
        description: 'Access to workshops, seminars, and networking events to enhance your skills and expand your network.',
        icon: '📈',
    },
    {
        title: 'Work-Life Balance',
        description: 'Flexible working hours and wellness programs to maintain a healthy work-life balance.',
        icon: '⚖️',
    },
    {
        title: 'Cost Efficiency',
        description: 'All-inclusive pricing with no hidden costs, saving you money on office setup and maintenance.',
        icon: '💰',
    },
    {
        title: 'Global Network',
        description: 'Connect with professionals from various industries and expand your business opportunities.',
        icon: '🌍',
    },
];

export default function CoWorkingPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <Header />
            <section className="relative py-24 bg-[#DD1d4A] text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-[#DD1d4A] to-[#c41a42] opacity-90"></div>
                <div className="relative z-10 px-4 mx-auto max-w-6xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 text-4xl font-bold md:text-6xl"
                    >
                        Transform Your Work Environment
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl"
                    >
                        Join our vibrant community of innovators and entrepreneurs at SevenWonders Co-Working Space
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-4 justify-center md:flex-row"
                    >
                        <button className="px-8 py-3 text-lg font-semibold bg-white text-[#DD1d4A] rounded-full transition-colors hover:bg-gray-100">
                            Book a Tour
                        </button>
                        <button className="px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-full transition-colors hover:bg-white hover:text-[#DD1d4A]">
                            View Plans
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#DD1d4A] text-white">
                <div className="px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="mb-2 text-4xl font-bold">{stat.number}</div>
                                <div className="text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="px-4 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="mb-6 text-4xl font-bold text-[#DD1d4A]">Welcome to SevenWonders</h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            We're more than just a workspace. We're a community of innovators, creators, and entrepreneurs
                            who come together to build something extraordinary. Our state-of-the-art facilities and
                            vibrant community create the perfect environment for your business to thrive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-4 py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">Why Choose SevenWonders?</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <div className="mb-4 text-4xl">{benefit.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold text-[#DD1d4A]">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">Our Features</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-gray-50 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold text-[#DD1d4A]">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="px-4 py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">Premium Amenities</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={amenity.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 text-center bg-white rounded-lg transition-shadow hover:shadow-lg"
                            >
                                <div className="mb-4 text-4xl">{amenity.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold text-[#DD1d4A]">{amenity.title}</h3>
                                <p className="text-gray-600">{amenity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Plans */}
            <section className="px-4 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">Membership Plans</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {membershipPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gray-50 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <h3 className="mb-4 text-2xl font-bold text-[#DD1d4A]">{plan.name}</h3>
                                <div className="mb-6 text-4xl font-bold">
                                    {plan.price}
                                    <span className="text-lg text-gray-600">/{plan.period}</span>
                                </div>
                                <ul className="mb-8 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <span className="mr-2 text-[#DD1d4A]">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="py-3 w-full font-semibold text-white bg-[#DD1d4A] rounded-full transition-colors hover:bg-[#c41a42]">
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">What Our Members Say</h2>
                    <div className="relative">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-white rounded-lg shadow-lg"
                                >
                                    <p className="mb-4 text-gray-600">"{testimonial.content}"</p>
                                    <div>
                                        <h4 className="font-semibold text-[#DD1d4A]">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="px-4 py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 text-4xl font-bold text-center text-[#DD1d4A]">Our Space</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            "https://api.sevenwonder.in/uploads/1742040287385-0.jpg",
                            "https://api.sevenwonder.in/uploads/1742037126823-0.jpg",
                            "https://api.sevenwonder.in/uploads/1742025105596-0.jpg",
                            "https://api.sevenwonder.in/uploads/1741850905925-0.jpg",
                            "https://api.sevenwonder.in/uploads/1741780937086-0.jpg",
                            "https://api.sevenwonder.in/uploads/1742369479680-0.jpg",
                        ].map((url, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="overflow-hidden relative h-64 rounded-lg"
                            >
                                <Image
                                    src={url} // Corrected: Now dynamically using the mapped URL
                                    alt={`Workspace ${index + 1}`} // Dynamic alt text
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 py-20 bg-gray-50">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-8 text-4xl font-bold text-[#DD1d4A]">Ready to Get Started?</h2>
                    <p className="mb-8 text-xl text-gray-600">
                        Schedule a visit and experience the SevenWonders difference for yourself.
                    </p>
                    <div className="flex flex-col gap-4 justify-center md:flex-row">
                        <button className="px-8 py-3 font-semibold text-white bg-[#DD1d4A] rounded-full transition-colors hover:bg-[#c41a42]">
                            Schedule a Visit
                        </button>
                        <button className="px-8 py-3 font-semibold text-[#DD1d4A] rounded-full border-2 border-[#DD1d4A] transition-colors hover:bg-[#DD1d4A] hover:text-white">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="px-4 py-20 bg-[#DD1d4A] text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-8 text-4xl font-bold">Stay Updated</h2>
                    <p className="mb-8 text-xl">
                        Subscribe to our newsletter for the latest updates and exclusive offers.
                    </p>
                    <div className="flex flex-col gap-4 justify-center md:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 w-full text-gray-900 rounded-full md:w-96"
                        />
                        <button className="px-8 py-3 font-semibold text-[#DD1d4A] bg-white rounded-full transition-colors hover:bg-gray-100">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
