'use client'
import Image from "next/image"
import { Building2, Users, Trophy, MapPin, Star, Award, Newspaper, CheckCircle, Calendar } from "lucide-react"
import CountUp from 'react-countup';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import imgs from './image.png';
import AwardPage from "@/components/awards/page";
export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[400px] md:h-[500px]">
                    <Image
                        src="https://www.remax.in/Sites/remaxindia/regionalweb/prop_category/office.png"
                        alt="Modern office space"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50">
                        <div className="container px-4 py-20 mx-auto md:py-32">
                            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Transforming <span className="text-primary">How India</span> Works</h1>
                            <p className="max-w-2xl text-xl text-gray-200">
                                Seven Wonders is revolutionizing the workspace industry by connecting businesses with perfect office
                                spaces across India.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 bg-white md:py-24">
                    <div className="container px-4 mx-auto">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
                                    <p className="text-gray-600">
                                        To simplify the workspace discovery and booking process while providing flexible, high-quality office
                                        solutions that empower businesses to thrive in any location across India.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
                                    <p className="text-gray-600">
                                        To become India's most trusted workspace solutions provider, creating an ecosystem where businesses of
                                        all sizes can access premium workspaces that foster growth and innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-lg bg-gray-50">
                                    <Building2 className="w-10 h-10 mb-4 text-red-600" />
                                    <h3 className="mb-2 text-xl font-bold"><CountUp end={5000} duration={2.5} />+</h3>
                                    <p className="text-gray-600">Workspace Locations</p>
                                </div>
                                <div className="p-6 rounded-lg bg-gray-50">
                                    <Users className="w-10 h-10 mb-4 text-red-600" />
                                    <h3 className="mb-2 text-xl font-bold"><CountUp end={50000} duration={2.5} />+</h3>
                                    <p className="text-gray-600">Happy Members</p>
                                </div>
                                <div className="p-6 rounded-lg bg-gray-50">
                                    <MapPin className="w-10 h-10 mb-4 text-red-600" />
                                    <h3 className="mb-2 text-xl font-bold"><CountUp end={50} duration={2.5} />+</h3>
                                    <p className="text-gray-600">Major Cities</p>
                                </div>
                                <div className="p-6 rounded-lg bg-gray-50">
                                    <Trophy className="w-10 h-10 mb-4 text-red-600" />
                                    <h3 className="mb-2 text-xl font-bold"><CountUp end={15} duration={2.5} />+ Years</h3>
                                    <p className="text-gray-600">Industry Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Values */}
                <section className="py-16 bg-white md:py-24">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">Our Core Values</h2>
                        <div className="grid gap-8 md:grid-cols-4">
                            {[
                                {
                                    title: "Innovation",
                                    description: "Constantly evolving our solutions to meet modern workplace needs",
                                },
                                {
                                    title: "Excellence",
                                    description: "Maintaining the highest standards in service and space quality",
                                },
                                {
                                    title: "Integrity",
                                    description: "Building trust through transparent and honest relationships",
                                },
                                {
                                    title: "Customer First",
                                    description: "Putting our customers' success at the heart of everything we do",
                                },
                            ].map((value, index) => (
                                <div key={index} className="p-6 text-center">
                                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-red-600" />
                                    <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">Our Journey</h2>
                        <div className="max-w-4xl mx-auto">
                            {[
                                {
                                    year: "2014",
                                    title: "Foundation",
                                    description: "Seven Wonders was established to revolutionize workspace solutions in India",
                                },
                                {
                                    year: "2016",
                                    title: "Initial Growth",
                                    description: "Began operations in 3 major cities with 20+ workspace locations",
                                },
                                {
                                    year: "2018",
                                    title: "Innovation Drive",
                                    description: "Introduced cutting-edge technology for workspace management",
                                },
                                {
                                    year: "2020",
                                    title: "Digital Transformation",
                                    description: "Launched a comprehensive digital platform for workspace solutions",
                                },
                                {
                                    year: "2023",
                                    title: "National Expansion",
                                    description: "Established presence in 12+ cities with over 1000 locations",
                                },
                            ].map((milestone, index) => (
                                <div key={index} className="flex gap-6 mb-8">
                                    <div className="flex-shrink-0 w-24 pt-2">
                                        <div className="flex items-center justify-center w-12 h-12 text-white bg-red-600 rounded-full">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            {milestone.year} - {milestone.title}
                                        </h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Team */}
                {/* <section className="py-16 bg-white md:py-24">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">Leadership Team</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[1, 2, 3].map((member) => (
                                <div key={member} className="text-center">
                                    <div className="relative w-48 h-48 mx-auto mb-4">
                                        <Image src="/placeholder.svg" alt="Team member" fill className="object-cover rounded-full" />
                                    </div>
                                    <h3 className="mb-1 text-xl font-bold">Leadership Name</h3>
                                    <p className="mb-3 text-gray-600">Position</p>
                                    <p className="text-sm text-gray-500">
                                        Brief description about the leader's experience and role in the company.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Testimonials */}
                {/* <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">What Our Clients Say</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[1, 2, 3].map((testimonial) => (
                                <div key={testimonial} className="p-8 bg-white rounded-lg shadow-sm">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="mb-6 text-gray-600">
                                        "Seven Wonders has transformed how our company works. The flexibility and quality of spaces they
                                        provide is unmatched."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12">
                                            <Image src="/placeholder.svg" alt="Client" fill className="object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Client Name</h4>
                                            <p className="text-sm text-gray-500">Company Name</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Awards & Recognition */}
                {/* <section className="py-16 bg-white md:py-24">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">Awards & Recognition</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[{
                                id: 1,
                                name: "#ALBL2024",
                                year: "2024"
                            }, {
                                id: 2,
                                name: "Leaders Awards",
                                year: "2024"
                            }, {
                                id: 3,
                                name: "Fast Growing Company",
                                year: "2024"
                            },].map((award) => (
                                <div key={award.id} className="text-center">
                                    <Award className="w-16 h-16 mx-auto mb-4 text-red-600" />
                                    <h3 className="mb-2 text-xl font-bold">{award.name}</h3>
                                    <p className="text-gray-600">{award.year}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-right"><Link className="text-blue-600 hover:underline" href={"/awards"}> See All</Link></p>
                    </div>
                </section> */}
                <AwardPage />

                {/* News & Media */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">In the News</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[1, 2, 3].map((news) => (
                                <Link href="https://economictimes.indiatimes.com/company/seven-wonders-promoters-developers-private-limited/U70200DL2015PTC275302" >
                                    <div key={news} className="overflow-hidden bg-white rounded-lg shadow-sm">
                                        <div className="relative h-48">
                                            <Image src={imgs} alt="News coverage" fill className="object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="mb-2 text-xl font-bold">SEVEN WONDERS</h3>
                                            <p className="mb-4 text-gray-600">SEVEN WONDERS PROMOTERS & DEVELOPERS PRIVATE LIMITED (CIN: U70200DL2015PTC275302) is a Private company incorporated on 12 Dec 2015.  Its authorized share capital.....</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Newspaper className="w-4 h-4 mr-2" />
                                                <span>The Economic Times</span>
                                                <span className="mx-2">•</span>
                                                <span>Dec 12, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Office Locations Map */}
                <section className="py-16 bg-white md:py-24">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-12 text-3xl font-bold text-center">Our Presence</h2>
                        <div className="relative rounded-lg overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141172.0105626981!2d77.191713223871!3d28.64445391223303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5034037b69%3A0x833f7bdabb4ed317!2sPreet%20Vihar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1739596742022!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute top-0 left-0 object-cover w-full h-full"
                            ></iframe>
                        </div>

                        <div className="grid gap-4 mt-8 md:grid-cols-4">
                            {["Delhi NCR", "Gurugram", "Gaziabad", "Faridabad"].map((city) => (
                                <div key={city} className="p-4 text-center rounded-lg bg-gray-50">
                                    <MapPin className="w-6 h-6 mx-auto mb-2 text-red-600" />
                                    <h3 className="font-bold">{city}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Find Your Perfect Workspace?</h2>
                        <p className="mb-8 text-xl">
                            Join thousands of businesses who trust Seven Wonders for their workspace needs.
                        </p>
                        <button className="px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary">
                            Explore Spaces
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

