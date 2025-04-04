'use client'
import React, { useState } from 'react';
import { Download, Mail, Phone } from 'lucide-react';
import { MarketMetrics } from '@/components/MarketMetrics';
import MarketTrends from '@/components/MarketTrends';
import NewsSection from '@/components/NewsSection';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import axios from "axios";

function Market() {
  // Function to download the report
  const downloadReport = () => {
    const link = document.createElement("a");
    link.href = "/report.pdf"; // Ensure report.pdf is in the "public" folder
    link.download = "report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to handle email subscription
  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    try {
      const recipientEmail = email;
      const response = await axios.post('http://46.202.167.117:5000/send-email', { recipientEmail });

      if (response.status === 200) {
        setEmail('');
        setSubmitted(true);
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen py-16 bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Market Report</h1>
            <p className="mt-2 text-gray-600">Comprehensive analysis of the real estate market trends and insights</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Actions Bar */}
            <div className="flex flex-wrap gap-4">
              {/* Download Report Button */}
              <button
                className="flex items-center px-4 py-2 text-white rounded-lg bg-primary hover:bg-primary"
                onClick={downloadReport}
              >
                <Download size={20} className="mr-2" />
                Download Report
              </button>

              {/* Subscribe Button */}
              <button
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                onClick={() => {
                  const element = document.getElementById("cta");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail size={20} className="mr-2" />
                Subscribe to Updates
              </button>

              {/* Contact Expert Button */}
              <button className="flex flex-row items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Link href="tel:+919015651565" className="flex flex-row">
                  <Phone size={20} className="mr-2" />
                  Contact Expert
                </Link>
              </button>
            </div>

            {/* Market Metrics */}
            <MarketMetrics />

            {/* Market Trends */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <MarketTrends />
              </div>
              <div>
                <NewsSection />
              </div>
            </div>

            {/* Market Map */}
            <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <h3 className="mb-6 text-lg font-semibold text-gray-900">Market Activity Map</h3>
              <div className="flex items-center justify-center text-gray-500 bg-gray-100 rounded-lg h-96">
                <img
                  src="https://awealthofcommonsense.com/wp-content/uploads/2019/03/Capture1-1.png"
                  alt="Market Activity Chart"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Call to Action - Subscription Section */}
      <div className="px-4 mx-auto mb-8 text-center max-w-7xl sm:px-6 lg:px-8" id="cta">
        <h2 className="mb-4 text-2xl font-bold">Stay Updated!</h2>
        <p className="mb-6">Subscribe to our newsletter to get the latest market insights delivered to your inbox.</p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 ml-4 font-semibold text-white rounded-lg bg-primary" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>

        {submitted && (
          <p className="mt-4 font-medium text-green-500">Thank you for subscribing! 🎉</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Market;
