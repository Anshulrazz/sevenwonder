import React from 'react';
import { Phone, Mail, MapPin, Check, Home, DollarSign, Clock, Shield, Award, ChevronRight, Percent, FileCheck, Building, Users, CreditCard, Calculator } from 'lucide-react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Mortgage Loans – Your Path to Homeownership</h1>
            <p className="text-xl mb-8">Secure, Flexible & Affordable Home Financing Solutions</p>
            <button className="bg-primary  text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Trusted Mortgage Partner</h2>
          <p className="text-gray-600 text-lg mb-8">
            A mortgage loan is one of the most important financial commitments you'll make in your lifetime. 
            Whether you're a first-time homebuyer, upgrading to a new home, or refinancing an existing mortgage, 
            choosing the right mortgage option can save you thousands of dollars in the long run.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-primary flex justify-center mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">First-Time Buyers</h3>
              <p className="text-gray-600">Special programs and guidance for new homeowners</p>
            </div>
            <div className="p-4">
              <div className="text-primary flex justify-center mb-3">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Home Upgrades</h3>
              <p className="text-gray-600">Solutions for moving to your next home</p>
            </div>
            <div className="p-4">
              <div className="text-primary flex justify-center mb-3">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Refinancing</h3>
              <p className="text-gray-600">Optimize your existing mortgage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Mortgage Loan Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign className="w-12 h-12" />, title: "Competitive Rates", desc: "Enjoy some of the lowest mortgage rates in the market" },
              { icon: <Clock className="w-12 h-12" />, title: "Fast Pre-Approval", desc: "Get pre-approved in minutes" },
              { icon: <Shield className="w-12 h-12" />, title: "Expert Advisors", desc: "Guidance through every step of the process" },
              { icon: <Percent className="w-12 h-12" />, title: "Low Down Payments", desc: "Programs starting from just 3% down" },
              { icon: <FileCheck className="w-12 h-12" />, title: "Simple Process", desc: "Streamlined application and approval" },
              { icon: <Award className="w-12 h-12" />, title: "Trusted Service", desc: "Decades of mortgage lending experience" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Types of Mortgage Loans We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Fixed-Rate Mortgage",
                desc: "Stable interest rate and predictable monthly payments throughout the entire loan term. Available in 15, 20, and 30-year terms.",
                features: ["Predictable payments", "Rate never changes", "Long-term stability"]
              },
              { 
                title: "Adjustable-Rate Mortgage",
                desc: "Lower initial rates that adjust over time based on market conditions. Ideal for shorter-term homeownership.",
                features: ["Lower initial rates", "Rate adjusts periodically", "Potential savings"]
              },
              { 
                title: "FHA Loans",
                desc: "Government-backed loans perfect for first-time buyers with lower down payments and flexible credit requirements.",
                features: ["3.5% down payment", "Lower credit scores OK", "Government-backed"]
              },
              { 
                title: "VA Loans",
                desc: "Exclusive benefits for veterans and service members with no down payment required and competitive rates.",
                features: ["No down payment", "No PMI required", "Competitive rates"]
              },
              { 
                title: "USDA Loans",
                desc: "Zero down payment options for rural home buyers with moderate income requirements.",
                features: ["100% financing", "Rural properties", "Income limits apply"]
              },
              { 
                title: "Jumbo Loans",
                desc: "Financing for high-value property purchases exceeding conventional loan limits.",
                features: ["Higher loan amounts", "Luxury properties", "Competitive rates"]
              },
            ].map((loan, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-3">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.desc}</p>
                <ul className="space-y-2 mb-4">
                  {loan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-semibold flex items-center hover:text-blue-800">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Mortgage Loan Eligibility</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Basic Requirements</h3>
              <ul className="space-y-4">
                {[
                  { title: "Credit Score", desc: "Minimum 620+ for conventional loans" },
                  { title: "Down Payment", desc: "3-20% depending on loan type" },
                  { title: "Income", desc: "Stable employment and verifiable income" },
                  { title: "Debt-to-Income Ratio", desc: "Usually 43% or lower" },
                ].map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">{req.title}</h4>
                      <p className="text-gray-600">{req.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Required Documentation</h3>
              <ul className="space-y-4">
                {[
                  { title: "Identification", desc: "Valid government-issued ID" },
                  { title: "Income Proof", desc: "Pay stubs, W-2s, tax returns" },
                  { title: "Asset Statements", desc: "Bank statements, investment accounts" },
                  { title: "Employment History", desc: "Past 2 years of employment" },
                ].map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <FileCheck className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">{doc.title}</h4>
                      <p className="text-gray-600">{doc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How to Apply for a Mortgage Loan</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "1",
                title: "Get Pre-Approved",
                desc: "Check your credit score and determine borrowing power",
                details: ["Credit check", "Income verification", "Initial consultation"]
              },
              { 
                step: "2",
                title: "Choose Your Mortgage",
                desc: "Select the best loan program for your needs",
                details: ["Compare rates", "Review terms", "Select program"]
              },
              { 
                step: "3",
                title: "Submit Application",
                desc: "Provide required documentation and verification",
                details: ["Complete forms", "Submit documents", "Property appraisal"]
              },
              { 
                step: "4",
                title: "Close Your Loan",
                desc: "Sign final documents and get your keys",
                details: ["Final review", "Sign documents", "Receive keys"]
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.desc}</p>
                <ul className="text-sm text-gray-500">
                  {step.details.map((detail, i) => (
                    <li key={i} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What credit score do I need for a mortgage?",
                a: "Most lenders require a minimum credit score of 620 for conventional loans. However, FHA loans may accept scores as low as 580 with a larger down payment."
              },
              {
                q: "How much down payment do I need?",
                a: "Down payment requirements vary by loan type: Conventional loans typically require 5-20%, FHA loans as low as 3.5%, while VA and USDA loans may require no down payment for eligible borrowers."
              },
              {
                q: "How long does the mortgage approval process take?",
                a: "The typical mortgage approval process takes 30-45 days from application to closing. However, pre-approval can be obtained within 24-48 hours."
              },
              {
                q: "What's the difference between fixed and adjustable-rate mortgages?",
                a: "Fixed-rate mortgages maintain the same interest rate for the entire loan term, while adjustable-rate mortgages start with a lower fixed rate that later adjusts based on market conditions."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started on Your Mortgage Today!</h2>
          <p className="text-xl mb-12">Our mortgage experts are ready to help you achieve your homeownership dreams</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span> +91 90156 51565</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>sales@sevenwonder.in</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092</span>
            </div>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
}

export default App;