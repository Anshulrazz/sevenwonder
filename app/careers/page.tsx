'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function CareersPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: true,
        offset: 120,
      });
    }
  }, []);

  const sections = [
    {
      title: 'How We Work',
      text: 'At Iress, we support flexible ways of working and invest in tools that empower our teams. Our culture fosters innovation and collaboration, allowing everyone to thrive.',
      image: 'https://www.jrtechnologiesweb.com/wp-content/uploads/2019/08/How-do-we-work_.jpg',
    },
    {
      title: 'Diversity at Iress',
      text: 'Our diversity is our strength. By embracing different cultures, perspectives, and ideas, we build better solutions and drive meaningful change in our industry.',
      image: 'https://imengine.public.prod.sbp.infomaker.io/?uuid=9fc9e8f3-9de2-56a2-b620-f1b50f15fe14&type=preview&function=original',
    },
    {
      title: 'Industry-Leading Benefits',
      text: 'We offer an amazing range of benefits to help you succeed—health and wellbeing perks, flexible working, long weekends, extended parental leave, and much more.',
      image: 'https://www.aihr.com/wp-content/uploads/employee-benefits-cover.png',
    },
    {
      title: 'Join Our Mission',
      text: 'We’re on a mission to make financial services better. Whether you’re an engineer, designer, or marketer, we have a place for you. Join us and shape the future.',
      image: 'https://st3.depositphotos.com/14431644/34729/i/450/depositphotos_347298024-stock-photo-conceptual-hand-writing-showing-our.jpg',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section
          className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-abstract-polygonal-mountain-with-a-flag-on-top-and-a-path-image_16417452.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 text-left text-white px-6 flex flex-row">
            <div className="mt-12" data-aos="fade-right">
              <h1 className="text-4xl" data-aos="fade-right">
                Build Your Future with <span className='text-primary'>Seven Wonders <br /> Promoters & Developers Pvt. Ltd.</span> –<br /> Where Innovation Meets Opportunity
              </h1>
              <p data-aos="fade-right">
                At Seven Wonders Promoters & Developers Pvt. Ltd.,<br /> we believe in building not just dream projects but also<br />
                rewarding careers. As a leading name in the real <br /> industry, we offer a dynamic and growth-driven environment where innovation, <br />
                integrity, and excellence thrive.
              </p>
            </div>
            <DotLottieReact
              src="https://lottie.host/21797fb4-8dd1-4c91-81a0-08d9a500652a/pFeoIPSYrS.lottie"
              loop
              autoplay
              style={{
                height: "400px",
                width: "600px",
                border: 0,
                filter: "drop-shadow(2px 2px 14px #DC26)",
              }} data-aos="fade-left"
            />
          </div>
        </section>

        {/* Alternating Sections */}
        {sections.map((section, index) => (
          <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="text-center lg:text-left" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                    <p className="text-gray-700 text-lg">{section.text}</p>
                  </div>
                  <div className="w-full" data-aos="fade-up">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full" data-aos="fade-up">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center lg:text-left" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                    <p className="text-gray-700 text-lg">{section.text}</p>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section className="py-20 bg-primary text-white text-center">
          <h2 className="text-4xl font-bold">Your Future Starts Here</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Ready to take the next step in your career? Join a company that values your skills, creativity, and passion.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScLNH_2CTcjUfGq_318onjyv4wMx0ieRqWv1FwrAnXWw1gPEA/viewform?usp=header" target="_blank">
            <button className="mt-6 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-200">
              Apply Now
            </button>
          </Link>
        </section>
      </main>

      <div className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">Email us at <a href="mailto:hr@sevenwonder.in" className="underline">hr@sevenwonder.in</a></p>
          <p className="text-sm mt-2">Mail your documents to: hr@sevenwonder.in</p>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
