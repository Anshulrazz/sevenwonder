import React from 'react';
import { Phone, Mail, MapPin, Check, ChevronRight, Home, Percent, Clock, Shield, DollarSign, Building } from 'lucide-react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
function App() {
  const loanTypes = [
    {
      title: "First-Time Homebuyer Loans",
      icon: <Home className="w-8 h-8 text-primary" />,
      benefits: ["Low or no down payment options", "Easier qualification requirements", "Assistance programs available"]
    },
    {
      title: "Fixed-Rate Mortgages",
      icon: <Shield className="w-8 h-8 text-primary" />,
      benefits: ["Protection from market fluctuations", "Great for long-term homeowners", "Available in 10, 15, 20, and 30-year terms"]
    },
    {
      title: "Adjustable-Rate Mortgages (ARM)",
      icon: <Percent className="w-8 h-8 text-primary" />,
      benefits: ["Lower initial interest rates", "Good option if you plan to sell or refinance", "Cost-effective in declining rates"]
    },
    {
      title: "Construction Loans",
      icon: <Building className="w-8 h-8 text-primary" />,
      benefits: ["Finance land and construction costs", "Converts to permanent mortgage", "Customizable repayment options"]
    }
  ];

  const steps = [
    { title: "Check Your Eligibility", content: "Review your credit score, income, and debt-to-income ratio" },
    { title: "Get Pre-Approved", content: "Understand how much home you can afford" },
    { title: "Choose the Right Loan", content: "Explore different loan options for your situation" },
    { title: "Submit Application", content: "Gather documents and complete your application" },
    { title: "Loan Processing", content: "We review and verify your application" },
    { title: "Closing & Moving In", content: "Sign papers and get your keys!" }
  ];

  return (<>
  <Header/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Your Key to Homeownership</h1>
            <p className="text-xl mb-8">Affordable, flexible, and hassle-free financing solutions tailored to your needs.</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Home Loan Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Percent />, title: "Competitive Rates", desc: "Some of the lowest rates in the market" },
              { icon: <Clock />, title: "Quick Processing", desc: "Fast approval process without delays" },
              { icon: <DollarSign />, title: "Low Down Payment", desc: "Programs starting at 3-5% down" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-primary" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Types of Home Loans We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  {loan.icon}
                  <h3 className="text-xl font-semibold ml-4">{loan.title}</h3>
                </div>
                <ul className="space-y-3">
                  {loan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How to Apply for a Home Loan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-100 p-6 rounded-lg h-full">
                  <div className="flex items-center mb-4">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <ChevronRight className="w-5 h-5 text-primary mx-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Started on Your Home Loan Today!</h2>
            <p className="text-xl opacity-90">Contact our team of experts to begin your journey to homeownership</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <span> +91 90156 51565</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <span>sales@sevenwonder.in</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <span>G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default App;