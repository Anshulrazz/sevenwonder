"use client"

import React from "react"
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PropertyValuationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="py-16">
                <section className="text-white py-20" style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-4">Unlock the True Value of Your Property</h2>
                        <p className="text-xl mb-8">Discover the Real Worth of Your Investment</p>
                        <Button size="lg" onClick={() => {
                            const element = document.getElementById("apply")
                            element?.scrollIntoView({ behavior: "smooth" })
                        }}>Get Your Free Valuation</Button>
                    </div>
                </section>

                <section id="intro" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Whether you're looking to sell, refinance, or simply want to know how your property stacks up in the
                            current market, accurate valuation is the cornerstone of informed real estate decisions. At Your Company
                            Name, our certified professionals use a blend of traditional appraisal techniques and cutting-edge data
                            analytics to deliver precise and unbiased property valuations that empower you to make confident financial
                            choices.
                        </p>
                    </div>
                </section>

                <section id="services" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Property Valuation Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard
                                title="Residential Valuations"
                                items={["Home Appraisals", "Comparative Market Analysis (CMA)"]}
                            />
                            <ServiceCard
                                title="Commercial Valuations"
                                items={["Income Approach Analysis", "Cost Approach Reviews", "Broker Price Opinions (BPOs)"]}
                            />
                            <ServiceCard
                                title="Specialized & Hybrid Solutions"
                                items={["Automated Valuation Models (AVMs)", "Hybrid Reports", "Tax & Insurance Valuations"]}
                            />
                        </div>
                    </div>
                </section>

                <section id="approach" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Approach</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Multiple Valuation Methodologies</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Sales Comparison Approach</li>
                                    <li>Income Approach</li>
                                    <li>Cost Approach</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                                <p className="text-gray-700">
                                    Our advanced systems integrate publicly available records, recent sales data, and local market trends.
                                    We enhance AVM estimates with on-site inspections and expert adjustments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-choose-us" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Your Company Name?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard
                                title="Expertise & Experience"
                                description="With [X] years in the industry, our team knows the market inside and out."
                            />
                            <FeatureCard
                                title="Unbiased, Accurate Valuations"
                                description="Our commitment to integrity means you receive an independent assessment—free from conflicts of interest."
                            />
                            <FeatureCard
                                title="Advanced Technology"
                                description="We combine traditional appraisal methods with modern data analytics for precise and timely valuations."
                            />
                            <FeatureCard
                                title="Customized Service"
                                description="Every property is unique. We tailor our process to fit your specific needs and goals."
                            />
                            <FeatureCard
                                title="Transparent Communication"
                                description="From initial consultation to final report, we keep you informed every step of the way."
                            />
                        </div>
                    </div>
                </section>

                <section id="process" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Valuation Process</h2>
                        <div className="space-y-8">
                            <ProcessStep
                                number={1}
                                title="Initial Consultation"
                                description="We start by understanding your objectives—whether you're planning to sell, refinance, or simply want a valuation update."
                            />
                            <ProcessStep
                                number={2}
                                title="Property Inspection & Data Collection"
                                description="Our team conducts a thorough on-site inspection (if required) and gathers relevant market data, including recent comparables and local economic indicators."
                            />
                            <ProcessStep
                                number={3}
                                title="Analysis & Valuation"
                                description="Using a combination of the sales comparison, income, and cost approaches, we analyze all factors affecting your property's value."
                            />
                            <ProcessStep
                                number={4}
                                title="Detailed Reporting"
                                description="We compile a comprehensive report that outlines our methodology, adjustments made, and the final estimated market value."
                            />
                            <ProcessStep
                                number={5}
                                title="Review & Recommendations"
                                description="We discuss the results with you, offering insights and strategic advice tailored to your next steps."
                            />
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <FaqItem
                                question="What is a property valuation?"
                                answer="A property valuation is an independent assessment of a property's market value. It's essential for selling, refinancing, and ensuring accurate property tax or insurance coverage."
                            />
                            <FaqItem
                                question="How accurate are online valuation tools?"
                                answer="While Automated Valuation Models (AVMs) provide a quick estimate, they often miss nuances that only a professional inspection can capture. Our process combines AVM data with expert on-site evaluations to deliver the most precise results."
                            />
                            <FaqItem
                                question="How long does the valuation process take?"
                                answer="Typically, a full property valuation report is completed within 7-10 business days, though expedited services may be available upon request."
                            />
                            <FaqItem
                                question="Do you provide valuations for both residential and commercial properties?"
                                answer="Yes, we specialize in valuations for all types of properties—from single-family homes to large commercial complexes."
                            />
                            <FaqItem
                                question="Can your valuation report help with disputes or legal matters?"
                                answer="Absolutely. Our detailed reports are prepared in accordance with industry standards and can be used in legal proceedings, refinancing, or tax assessments."
                            />
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <TestimonialCard
                                quote="The valuation report from Your Company Name gave me a clear, professional insight into my property's worth. Their attention to detail and transparent process were exactly what I needed before refinancing."
                                author="Amanda R., Homeowner"
                            />
                            <TestimonialCard
                                quote="As a commercial investor, understanding the true value of my assets is critical. The team's comprehensive approach, combining AVM data with on-site inspections, helped me make informed decisions on my portfolio."
                                author="David S., Commercial Real Estate Investor"
                            />
                            <TestimonialCard
                                quote="Their unbiased valuation helped me set the right price for my home, and I was able to sell quickly without any surprises. Highly recommended!"
                                author="Lisa M., Property Seller"
                            />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-16 bg-gray-100" id="apply">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Get Your Free Property Valuation Today</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-lg mb-6">
                                    Ready to unlock the true value of your property? Contact us for a no-obligation consultation and let
                                    our experts provide you with a precise, detailed valuation report.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="w-6 h-6 mr-2 text-primary" />
                                        <span> +91 90156 51565</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-6 h-6 mr-2 text-primary" />
                                        <span>sales@sevenwonder.in</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-6 h-6 mr-2 text-primary" />
                                        <span>G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092</span>
                                    </div>
                                </div>
                            </div>
                            <form className="space-y-4" >
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Input type="tel" placeholder="Your Phone" />
                                <Textarea placeholder="Tell us about your property" />
                                <Button type="submit" className="w-full">
                                    Get Free Valuation
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

function ServiceCard({ title, items }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

function ProcessStep({ number, title, description }) {
    return (
        <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="border-b border-gray-200 pb-4">
            <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-lg font-semibold">{question}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
        </div>
    )
}

function TestimonialCard({ quote, author }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <svg
                className="w-8 h-8 text-gray-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <p className="text-gray-600 mb-4">{quote}</p>
            <p className="font-semibold">{author}</p>
        </div>
    )
}

