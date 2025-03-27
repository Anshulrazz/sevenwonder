'use client'
import React, { useState } from 'react';
import {
    Home, HandCoins, Building, CheckCircle, Clock, Shield,
    MapPin, Coins, Award, Users, Calculator, Percent,
    FileText, MessageCircle, Mail, Phone, Briefcase, BarChart,
    TrendingUp, UserCheck, DollarSign, BookOpen, Star
} from 'lucide-react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const BuySellInfoPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const serviceSteps = {
        buying: [
            "Initial Consultation to Understand Your Needs",
            "Detailed Property Search and Shortlisting",
            "Financial Analysis and Budget Planning",
            "Property Tours and In-Depth Evaluations",
            "Due Diligence and Legal Checks",
            "Negotiation and Offer Submission",
            "Transaction Management and Closing Support",
            "Post-Purchase Assistance and Move-In Coordination"
        ],
        selling: [
            "Initial Property Assessment and Consultation",
            "Comprehensive Market Analysis and Trends Review",
            "Property Valuation and Pricing Strategy Development",
            "Professional Photography and Property Staging",
            "Targeted Marketing Campaign Across Multiple Channels",
            "Open Houses and Private Viewings Coordination",
            "Negotiation and Offer Management with Buyers",
            "Closing Process and Documentation Support",
            "Post-Sale Follow-Up and Transition Assistance"
        ],
        rental: [
            "Property Requirements Assessment",
            "Extensive Property Search Based on Your Criteria",
            "Virtual and Physical Property Tours",
            "Rental Agreement Review and Negotiation",
            "Background and Credit Verification",
            "Lease Documentation and Signing",
            "Move-In Coordination and Property Handover",
            "Ongoing Support and Maintenance Assistance"
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            {/* Hero Section with Enhanced Animation */}
            <div className="container overflow-hidden relative px-4 py-24 mx-auto text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#DD1D4A]/5 to-transparent opacity-50"></div>
                <h2 className="text-5xl font-bold text-[#DD1D4A] mb-8 animate-fade-in">
                    Expert Services for Buying and Selling Properties
                </h2>
                <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-700 animate-slide-up">
                    At Seven Wonders Real Estate, we pride ourselves on being your trusted partner in navigating the complex world of property transactions. Whether you're looking to purchase your dream home, invest in commercial real estate, or sell your property for the highest possible return, our team of seasoned professionals is here to guide you every step of the way.
                </p>
                <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 animate-slide-up-delayed">
                    From residential properties to commercial spaces and land development opportunities, we offer tailored solutions that cater to your unique needs.
                </p>
            </div>

            {/* Services Navigation with Enhanced Styling */}
            <div className="container px-4 mx-auto mb-16">
                <div className="flex justify-center p-6 space-x-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    {['overview', 'buying', 'selling', 'rental'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold transform hover:scale-105 ${
                                activeTab === tab
                                    ? 'bg-[#DD1D4A] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'overview' ? 'Overview' : tab === 'buying' ? 'Buying Services' : tab === 'selling' ? 'Selling Services' : 'Rental Services'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Content Section with Enhanced Cards */}
            <section className="container px-4 mx-auto mb-20">
                {activeTab === 'overview' && (
                    <div className="space-y-16">
                        <div className="grid gap-10 md:grid-cols-3">
                            {[
                                {
                                    icon: <Home className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />,
                                    title: "Residential Properties",
                                    description: "Whether you're buying your first home, upgrading to a larger space, or selling a luxury estate, our team provides expert guidance tailored to residential real estate."
                                },
                                {
                                    icon: <Building className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />,
                                    title: "Commercial Properties",
                                    description: "From office buildings to retail centers and industrial warehouses, we specialize in commercial property transactions."
                                },
                                {
                                    icon: <MapPin className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />,
                                    title: "Land and Development",
                                    description: "Looking to invest in land or develop a new project? We offer comprehensive services for land acquisition and development planning."
                                }
                            ].map((card, index) => (
                                <div
                                    key={index}
                                    className="p-8 text-center bg-white rounded-xl shadow-md transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
                                    onMouseEnter={() => setHoveredCard(`card-${index}`)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className={`transition-transform duration-300 ${hoveredCard === `card-${index}` ? 'scale-110' : ''}`}>
                                        {card.icon}
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-[#DD1D4A]">{card.title}</h3>
                                    <p className="leading-relaxed text-gray-700">{card.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-[#DD1D4A] mb-6">Our Expertise Across Markets</h3>
                            <p className="mx-auto max-w-4xl leading-relaxed text-gray-700">
                                With a deep understanding of local and regional markets, we provide insights into emerging trends, property hotspots, and investment opportunities. Our team works tirelessly to ensure you're equipped with the knowledge and resources to make informed decisions, whether you're entering the market as a buyer or exiting as a seller.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'buying' && (
                    <div className="grid gap-16 md:grid-cols-2">
                        <div>
                            <h3 className="text-4xl font-bold text-[#DD1D4A] mb-8">Buying a Property with Seven Wonders</h3>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Purchasing a property is one of the most significant investments you'll make, and our team is dedicated to making the process seamless and rewarding. We take the time to understand your goals—whether it's finding a family home, a commercial space, or an investment property—and deliver personalized solutions that exceed expectations.
                            </p>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Our buying process is designed to minimize stress and maximize value. From identifying properties that match your criteria to negotiating the best possible deal, we're with you at every stage, ensuring a smooth transition into your new property.
                            </p>
                            <div className="space-y-6">
                                {serviceSteps.buying.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="text-[#DD1D4A] mr-4 mt-1" />
                                        <span className="text-gray-700">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-10 bg-white rounded-lg shadow-md">
                            <h4 className="text-3xl font-bold text-[#DD1D4A] mb-8">Benefits of Buying with Us</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Award className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Access to exclusive listings not available on public platforms, giving you a competitive edge.</span>
                                </li>
                                <li className="flex items-start">
                                    <Users className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Expert negotiation by our skilled agents to secure the best price and terms.</span>
                                </li>
                                <li className="flex items-start">
                                    <Calculator className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Comprehensive due diligence, including financial analysis and legal reviews, for peace of mind.</span>
                                </li>
                                <li className="flex items-start">
                                    <Percent className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Market-driven pricing strategies to ensure you buy at the best possible rates.</span>
                                </li>
                                <li className="flex items-start">
                                    <Shield className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Full support with financing options, legal paperwork, and post-purchase logistics.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'selling' && (
                    <div className="grid gap-16 md:grid-cols-2">
                        <div>
                            <h3 className="text-4xl font-bold text-[#DD1D4A] mb-8">Selling Your Property with Seven Wonders</h3>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Selling a property can be a complex and emotional process, but with Seven Wonders Real Estate, you're in expert hands. Our strategic approach is designed to maximize your property's value, attract the right buyers, and ensure a smooth, stress-free transaction from start to finish.
                            </p>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                We leverage advanced marketing techniques, deep market knowledge, and a network of qualified buyers to get your property sold quickly and at the best price. Whether it's a residential home, commercial space, or undeveloped land, we tailor our services to meet your specific needs.
                            </p>
                            <div className="space-y-6">
                                {serviceSteps.selling.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="text-[#DD1D4A] mr-4 mt-1" />
                                        <span className="text-gray-700">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-10 bg-white rounded-lg shadow-md">
                            <h4 className="text-3xl font-bold text-[#DD1D4A] mb-8">Advantages of Selling with Us</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <FileText className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Maximum exposure through targeted marketing across digital and traditional channels.</span>
                                </li>
                                <li className="flex items-start">
                                    <MessageCircle className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Professional property presentation, including staging and high-quality photography.</span>
                                </li>
                                <li className="flex items-start">
                                    <Award className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Skilled negotiation to secure the highest possible sale price and favorable terms.</span>
                                </li>
                                <li className="flex items-start">
                                    <Shield className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Hassle-free closing process with full legal and documentation support.</span>
                                </li>
                                <li className="flex items-start">
                                    <TrendingUp className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Market trend analysis to time your sale for optimal results.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'rental' && (
                    <div className="grid gap-16 md:grid-cols-2">
                        <div>
                            <h3 className="text-4xl font-bold text-[#DD1D4A] mb-8">Rental Services at Seven Wonders</h3>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Finding the perfect rental property can be challenging, but with Seven Wonders Real Estate, we make it seamless. Whether you're looking for a temporary residence, a long-term rental, or a commercial space, our team provides comprehensive rental services tailored to your needs.
                            </p>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                We understand that renting is more than just finding a space—it's about creating a comfortable living or working environment. Our rental process is designed to match you with properties that meet your requirements, budget, and lifestyle preferences.
                            </p>
                            <div className="space-y-6">
                                {serviceSteps.rental.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="text-[#DD1D4A] mr-4 mt-1" />
                                        <span className="text-gray-700">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-10 bg-white rounded-lg shadow-md">
                            <h4 className="text-3xl font-bold text-[#DD1D4A] mb-8">Benefits of Renting with Us</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Home className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Access to an extensive portfolio of verified rental properties across various locations and price ranges.</span>
                                </li>
                                <li className="flex items-start">
                                    <Shield className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Thorough property verification and landlord background checks for your peace of mind.</span>
                                </li>
                                <li className="flex items-start">
                                    <FileText className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Expert assistance with lease agreements, documentation, and legal compliance.</span>
                                </li>
                                <li className="flex items-start">
                                    <MessageCircle className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Dedicated support for property maintenance and tenant-landlord communication.</span>
                                </li>
                                <li className="flex items-start">
                                    <Clock className="mr-4 text-[#DD1D4A] mt-1" />
                                    <span className="text-gray-700">Quick response time and efficient property matching to minimize your search time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </section>

            {/* Why Choose Us Section with Enhanced Cards */}
            <section className="container px-4 py-20 mx-auto bg-gradient-to-b from-gray-50 to-white">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Why Choose Seven Wonders Real Estate?</h3>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: <UserCheck className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />,
                            title: "Experienced Team",
                            description: "Our agents bring decades of experience in real estate, offering unparalleled expertise."
                        },
                        {
                            icon: <BarChart className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />,
                            title: "Market Insights",
                            description: "We provide detailed market analysis and trend reports to help you make informed decisions."
                        },
                        {
                            icon: <DollarSign className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />,
                            title: "Value Maximization",
                            description: "Whether buying or selling, we focus on getting you the best value through strategic pricing."
                        },
                        {
                            icon: <Shield className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />,
                            title: "Client-Centric Approach",
                            description: "Your needs come first. We offer personalized service and full transparency throughout."
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="p-8 text-center bg-white rounded-xl shadow-md transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
                            onMouseEnter={() => setHoveredCard(`why-choose-${index}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`transition-transform duration-300 ${hoveredCard === `why-choose-${index}` ? 'scale-110' : ''}`}>
                                {card.icon}
                            </div>
                            <h4 className="mb-4 text-xl font-bold text-[#DD1D4A]">{card.title}</h4>
                            <p className="leading-relaxed text-gray-700">{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Process Section */}
            <section className="container px-4 py-20 mx-auto">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Our Comprehensive Process</h3>
                <div className="space-y-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Step 1: Consultation</h4>
                            <p className="leading-relaxed text-gray-700">
                                We begin with an in-depth consultation to understand your goals, preferences, and financial situation, setting the foundation for a successful transaction.
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Step 2: Market Research</h4>
                            <p className="leading-relaxed text-gray-700">
                                Our team conducts extensive research into market trends, comparable sales, and property values to provide you with actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Step 3: Strategy Development</h4>
                            <p className="leading-relaxed text-gray-700">
                                We craft a tailored strategy—whether it's a buying plan or a selling campaign—designed to meet your specific objectives and timeline.
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Step 4: Execution</h4>
                            <p className="leading-relaxed text-gray-700">
                                From property tours and marketing to negotiations and closing, we execute the plan with precision, keeping you informed at every step.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="container px-4 py-20 mx-auto bg-gray-50">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">What Our Clients Say</h3>
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold text-lg">JD</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">John Doe</h4>
                                <p className="text-sm text-gray-600">Seller</p>
                            </div>
                        </div>
                        <p className="leading-relaxed text-gray-700">
                            "Seven Wonders sold my property in record time and exceeded my expectations on price. Their market analysis was spot-on, and the negotiation process was handled with incredible skill. I couldn't have asked for a better experience."
                        </p>
                        <div className="flex mt-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold text-lg">AS</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">Alice Smith</h4>
                                <p className="text-sm text-gray-600">Buyer</p>
                            </div>
                        </div>
                        <p className="leading-relaxed text-gray-700">
                            "The team at Seven Wonders made buying my first home an absolute breeze. They found properties that perfectly matched my needs, handled all the paperwork, and negotiated a price that fit my budget. Their attention to detail and care for their clients is unmatched."
                        </p>
                        <div className="flex mt-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-[#DD1D4A] rounded-full flex items-center justify-center text-white font-bold text-lg">RJ</div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold">Robert Johnson</h4>
                                <p className="text-sm text-gray-600">Investor</p>
                            </div>
                        </div>
                        <p className="leading-relaxed text-gray-700">
                            "As an investor, I rely on accurate market insights and expert advice. Seven Wonders delivered on both fronts, helping me buy and sell properties strategically. Their valuation expertise and proactive communication made all the difference."
                        </p>
                        <div className="flex mt-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="container px-4 py-20 mx-auto">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Case Studies</h3>
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Selling a Luxury Villa</h4>
                        <p className="leading-relaxed text-gray-700">
                            A client approached us to sell their high-end villa in a competitive market. We conducted a detailed valuation, staged the property professionally, and launched a targeted marketing campaign. The result? The villa sold within 45 days at 10% above the asking price, thanks to our strategic approach and negotiation skills.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Buying a Commercial Office Space</h4>
                        <p className="leading-relaxed text-gray-700">
                            An entrepreneur needed a prime office location for their growing business. We shortlisted properties, conducted due diligence, and negotiated a deal that saved them 15% off the listed price. The transaction was completed in just 60 days, allowing them to move in ahead of schedule.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Land Acquisition for Development</h4>
                        <p className="leading-relaxed text-gray-700">
                            A developer sought our help to acquire a large plot for a residential project. We identified an undervalued parcel, performed zoning analysis, and facilitated the purchase. The project is now underway, with projected returns exceeding initial estimates by 20%.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold text-[#DD1D4A] mb-4">Selling an Industrial Warehouse</h4>
                        <p className="leading-relaxed text-gray-700">
                            A business owner needed to offload an industrial property quickly. We marketed it to our network of investors, hosted multiple viewings, and closed the sale in 30 days at full asking price, ensuring a seamless transition for the seller.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container px-4 py-20 mx-auto bg-gray-50">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Frequently Asked Questions</h3>
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">How long does the buying process typically take?</h4>
                        <p className="leading-relaxed text-gray-700">
                            The buying process generally takes 2-4 months, depending on factors like financing approval, property availability, and legal clearances. During our initial consultation, we'll provide a detailed timeline tailored to your specific situation.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">What documents do I need to sell my property?</h4>
                        <p className="leading-relaxed text-gray-700">
                            You'll need ownership deeds, recent tax records, any applicable permits, and a clear title. Our team will guide you through the full list and assist with gathering and preparing all necessary paperwork.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">How do you determine my property's selling price?</h4>
                        <p className="leading-relaxed text-gray-700">
                            We conduct a thorough market analysis, evaluating your property's location, condition, recent comparable sales, and current market trends. This ensures we set a competitive price that attracts buyers while maximizing your return.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">Can you help with property improvements before selling?</h4>
                        <p className="leading-relaxed text-gray-700">
                            Absolutely. We partner with trusted contractors to handle repairs, upgrades, or staging that can enhance your property's appeal and increase its market value. We'll recommend cost-effective solutions tailored to your goals.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">What financing options do you support for buyers?</h4>
                        <p className="leading-relaxed text-gray-700">
                            We work with a network of lenders to help you explore mortgage options, pre-approvals, and other financing solutions. Our team ensures you find the best fit for your budget and timeline.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h4 className="mb-4 text-2xl font-bold">How do you market my property to potential buyers?</h4>
                        <p className="leading-relaxed text-gray-700">
                            We use a multi-channel approach, including online listings, social media campaigns, professional photography, virtual tours, and our extensive network of buyers and investors to ensure maximum visibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Market Insights Section */}
            <section className="container px-4 py-20 mx-auto">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Market Insights</h3>
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="p-8 text-center bg-white rounded-lg shadow-md">
                        <Building className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-2xl font-bold">Buying Trends</h4>
                        <p className="leading-relaxed text-gray-700">
                            Stay ahead of the curve with our insights into current buyer preferences, such as demand for sustainable homes, urban vs. suburban shifts, and emerging commercial hotspots.
                        </p>
                    </div>
                    <div className="p-8 text-center bg-white rounded-lg shadow-md">
                        <Clock className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-2xl font-bold">Selling Strategies</h4>
                        <p className="leading-relaxed text-gray-700">
                            Learn the most effective methods to maximize your property's value, from timing your sale to leveraging professional staging and digital marketing for broader reach.
                        </p>
                    </div>
                    <div className="p-8 text-center bg-white rounded-lg shadow-md">
                        <HandCoins className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-2xl font-bold">Investment Opportunities</h4>
                        <p className="leading-relaxed text-gray-700">
                            Discover lucrative real estate investments with our analysis of high-growth areas, undervalued properties, and development potential in today's dynamic market.
                        </p>
                    </div>
                    <div className="p-8 text-center bg-white rounded-lg shadow-md">
                        <Home className="w-20 h-20 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-2xl font-bold">Rental Market Trends</h4>
                        <p className="leading-relaxed text-gray-700">
                            Stay informed about rental market dynamics, including popular areas, price trends, and tenant preferences to make informed decisions about your rental property.
                        </p>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="container px-4 py-20 mx-auto bg-gray-100">
                <h3 className="mb-12 text-4xl font-bold text-center text-[#DD1D4A]">Resources for Buyers, Sellers, and Renters</h3>
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <BookOpen className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-xl font-bold">Buyer's Guide</h4>
                        <p className="leading-relaxed text-gray-700">
                            Download our comprehensive guide to buying a property, covering everything from budgeting and financing to closing the deal and moving in.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <BookOpen className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-xl font-bold">Seller's Checklist</h4>
                        <p className="leading-relaxed text-gray-700">
                            Get our detailed checklist for preparing your property for sale, including tips on repairs, staging, and documentation to streamline the process.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <BarChart className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-xl font-bold">Market Reports</h4>
                        <p className="leading-relaxed text-gray-700">
                            Access our latest market reports for in-depth analysis of trends, pricing, and forecasts across residential, commercial, and land sectors.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <FileText className="w-16 h-16 mx-auto text-[#DD1D4A] mb-6" />
                        <h4 className="mb-4 text-xl font-bold">Renter's Guide</h4>
                        <p className="leading-relaxed text-gray-700">
                            Access our comprehensive guide for renters, including tips on finding the right property, understanding lease agreements, and tenant rights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section with Enhanced Design */}
            <section className="bg-gradient-to-r from-[#DD1D4A] to-[#B81B42] text-white py-20">
                <div className="container px-4 mx-auto text-center">
                    <h3 className="mb-8 text-4xl font-bold">Ready to Get Started?</h3>
                    <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed">
                        Whether you're ready to buy your next property, sell your current one, or explore investment opportunities, our expert team is here to help.
                    </p>
                    <div className="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                        <a
                            href="tel:+919015651565"
                            className="bg-white text-[#DD1D4A] px-10 py-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300 text-lg font-semibold transform hover:scale-105"
                        >
                            <Phone className="mr-3" /> Call Us Now
                        </a>
                        <a
                            href="mailto:sales@sevenwonder.in"
                            className="bg-white text-[#DD1D4A] px-10 py-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300 text-lg font-semibold transform hover:scale-105"
                        >
                            <Mail className="mr-3" /> Email Us Today
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

// Add these styles to your global CSS file
const styles = `
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out;
}

.animate-slide-up-delayed {
    animation: slide-up 0.8s ease-out 0.2s both;
}
`;

export default BuySellInfoPage;