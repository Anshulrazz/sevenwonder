import type { Metadata } from "next"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: "Seven Wonders Promoters & Developers Pvt. Ltd.",
  description: "Your Trusted Partner in Property Management",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <main className="py-16">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Trusted Partner in Property Management</h2>
              <p className="text-gray-600">
                At Seven Wonders Promoters & Developers Pvt. Ltd., we believe that managing a property is more than just
                collecting rent—it's about protecting your investment, enhancing the living experience for tenants, and
                building long-term value. With decades of combined experience and a dedicated team of experts, we handle
                every aspect of property management with personalized attention and innovative technology, ensuring that
                your property runs smoothly and profitably.
              </p>
            </section>

            <section id="services" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Comprehensive Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  title="Tenant Screening & Placement"
                  description="We perform rigorous screening processes and craft clear, enforceable lease agreements."
                />
                <ServiceCard
                  title="Rent Collection & Financial Management"
                  description="Our secure online payment system ensures prompt rent collection with transparent financial reporting."
                />
                <ServiceCard
                  title="Maintenance & Repairs"
                  description="We offer proactive maintenance schedules and 24/7 emergency repair support."
                />
                <ServiceCard
                  title="Legal Compliance & Eviction Management"
                  description="Stay compliant with regulations and get professional support for dispute resolutions."
                />
                <ServiceCard
                  title="Marketing & Advertising"
                  description="We use digital strategies and local community engagement to showcase your property."
                />
                <ServiceCard
                  title="24/7 Support & Communication Tools"
                  description="Round-the-clock service with integrated communication platforms for owners and tenants."
                />
              </div>
            </section>

            <section id="why-choose-us" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Seven Wonders Promoters & Developers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Experience & Local Expertise"
                  description="With years in the industry, we offer insights and solutions tailored to your region."
                />
                <FeatureCard
                  title="Innovative Technology"
                  description="We leverage cutting-edge software to simplify your operations and provide real-time updates."
                />
                <FeatureCard
                  title="Personalized & Transparent Service"
                  description="Every client is assigned a dedicated property manager who becomes your personal advocate."
                />
                <FeatureCard
                  title="Full-Service Support"
                  description="From marketing to legal compliance, we handle every detail so you don't have to."
                />
              </div>
            </section>

            <section id="about" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to revolutionize property management, Seven Wonders Promoters & Developers Pvt.
                Ltd. is built on the principles of integrity, professionalism, and innovation. Our diverse team of
                experts is dedicated to providing a stress-free management experience while enhancing the quality of
                life for tenants.
              </p>
              <p className="text-gray-600">
                We believe in giving back to the communities we serve, regularly sponsoring local events and partnering
                with community organizations to create vibrant, thriving neighborhoods.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Ready to simplify property management and maximize your investment returns? Contact us today for a free,
                no-obligation consultation.
              </p>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900">+91 9015 65 1565</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">sales@sevenwonder.in</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Office Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}