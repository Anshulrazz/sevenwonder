"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ContactUs from "@/components/contact";

// Dummy data for enterprise features.
const features = [
    {
        id: 1,
        title: "Customized Solutions",
        description:
            "Tailor-made office spaces designed to meet your enterprise's unique needs.",
        icon: "https://www.svgrepo.com/show/430187/solution-bulb-concept.svg",
    },
    {
        id: 2,
        title: "Scalable Infrastructure",
        description:
            "Seamlessly expand your operations with our flexible and scalable workspace options.",
        icon: "https://www.svgrepo.com/show/448253/terraform.svg",
    },
    {
        id: 3,
        title: "Premium Amenities",
        description:
            "Access world-class facilities and support services to empower your team.",
        icon: "https://www.svgrepo.com/show/380481/building-company-office-real-estate.svg",
    },
];

// Dummy testimonials data.
const testimonials = [
    {
        id: 1,
        quote:
            "The tailored solutions provided helped us scale quickly and efficiently.",
        author: "CEO, Tech Corp",
    },
    {
        id: 2,
        quote:
            "A premium experience from start to finish. The facilities are top-notch.",
        author: "Managing Director, FinServe",
    },
];

export default function EnterprisePage() {
    return (
        <>
        <Header/>
            <div className="relative">
                {/* Hero Section */}
                <section className="relative h-[90vh] bg-gray-800">
                    <Image
                        src="https://i.etsystatic.com/43771025/r/il/e478bf/5018553333/il_fullxfull.5018553333_1rlm.jpg"
                        alt="Enterprise Background"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                        <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl">
                            Enterprise Solutions
                        </h1>
                        <p className="max-w-2xl mb-8 text-xl text-white sm:text-2xl">
                            Discover premium office spaces and customized workspace solutions
                            designed for your enterprise.
                        </p>
                        <Link
                            href="#contact"
                            className="px-8 py-4 text-lg font-semibold text-white transition-colors rounded-full shadow-lg bg-primary hover:bg-primary-dark"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-bold">Our Enterprise Features</h2>
                            <p className="text-lg text-gray-600">
                                We provide state-of-the-art office spaces and services to help your
                                business scale seamlessly.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="p-6 transition-shadow duration-300 border rounded-lg shadow hover:shadow-lg"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-2xl font-semibold text-center">
                                        {feature.title}
                                    </h3>
                                    <p className="text-center text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-bold">What Our Clients Say</h2>
                            <p className="text-lg text-gray-600">
                                Hear from leading enterprises who have transformed their workspace.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-8 bg-white border rounded-lg shadow"
                                >
                                    <p className="mb-4 text-xl italic text-gray-700">
                                        “{item.quote}”
                                    </p>
                                    <p className="font-semibold text-gray-800">- {item.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="py-16 bg-primary">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="mb-4 text-4xl font-bold text-white">
                            Ready to Transform Your Workspace?
                        </h2>
                        <p className="mb-8 text-xl text-white">
                            Get in touch with us to explore enterprise solutions tailored to your
                            needs.
                        </p>
                        <Link
                            href="#contact"
                            className="px-8 py-4 text-lg font-semibold transition-shadow bg-white rounded-full shadow text-primary hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
            </div>
            <ContactUs/>
            <Footer/>
        </>
    );
}
