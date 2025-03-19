  'use client'
  import { useState } from "react";
  import { Header } from "@/components/header";
  import { Footer } from "@/components/footer";
  import { Mail, Phone, MapPin } from "lucide-react";
  import Link from 'next/link'
  import { ContactForm } from "@/components/contact-form";

  export default function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e: any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      alert("Your message has been sent! Our team will get back to you soon.");
    };

    return (
      <>
        <Header />
        <section className="py-24 bg-gray-50">
          <div className="container grid gap-12 px-4 mx-auto md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Looking for the perfect workspace?</h2>
              <p className="text-lg text-gray-600">
                Get in touch with our workspace experts who will help you find the perfect solution for your team.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3 items-center">
                  <Phone className="w-6 h-6 text-primary" />
                  <Link href="tel:+919015651565" className="text-primary hover:underline">
                    +91-90-1565-1565
                  </Link>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-6 h-6 text-primary" />
                  <Link href="mailto:sales@sevenwonder.in" className="text-primary hover:underline">
                    sales@sevenwonder.in
                  </Link>
                </div>
                <p className="mb-2 text-sm text-gray-600"><b>Regd. off.</b>G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092 </p>
                <p className="mb-2 text-sm text-gray-600"><b>Corp. off.</b>Plot No. A-61, Sector-16, Noida Gautam Buddha Nagar (UP)-201301</p>
                <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1171.1722388815097!2d77.2939475511604!3d28.645891907839776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb00407b7c4d%3A0x32c7a024487dd9b9!2sMZ%20FITNESS!5e0!3m2!1sen!2sin!4v1740376050168!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-sm"
        />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <Footer />
      </>
    );
  }