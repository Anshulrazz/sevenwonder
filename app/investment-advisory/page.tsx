'use cllient'
import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Briefcase, 
  Shield, 
  Users, 
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
function App() {
  return (
    <>
<Header/>
    <div className="min-h-screen bg-white">
      <div 
        className="relative h-[600px] bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Real Estate Investment Advisory Services</h1>
            <p className="text-xl mb-8">Maximize Your Wealth with Expert Real Estate Investment Strategies</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Real Estate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Investment Advisory Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <HelpCircle className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
    </div>
    <Footer/>
    </>
  );
}

const benefits = [
  {
    title: 'Steady Cash Flow',
    description: 'Generate passive income through rental properties and regular returns on your investment.'
  },
  {
    title: 'Appreciation',
    description: 'Watch your wealth grow as property values increase over time in prime locations.'
  },
  {
    title: 'Tax Advantages',
    description: 'Enjoy significant tax benefits including deductions on mortgage interest and operating expenses.'
  }
];

const services = [
  {
    icon: Building2,
    title: 'Market Research & Analysis',
    description: 'Make informed decisions with our comprehensive market insights and analysis.',
    features: [
      'Current market trends',
      'Supply and demand analysis',
      'Investment hotspots',
      'Risk assessment'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Investment Strategy',
    description: 'Customized investment strategies aligned with your financial goals.',
    features: [
      'Portfolio planning',
      'Risk management',
      'Return optimization',
      'Market timing'
    ]
  },
  {
    icon: Briefcase,
    title: 'Portfolio Management',
    description: 'Professional management of your real estate investment portfolio.',
    features: [
      'Asset monitoring',
      'Performance tracking',
      'Regular reporting',
      'Strategy adjustment'
    ]
  }
];

const testimonials = [
  {
    quote: "The team helped me identify an incredible rental property that has been generating steady cash flow for over two years.",
    name: "Michael Thompson",
    title: "Real Estate Investor"
  },
  {
    quote: "Their data-driven market research helped me avoid a risky investment and instead purchase a high-yield property.",
    name: "Sarah Lewis",
    title: "Business Owner"
  },
  {
    quote: "I've seen great returns since working with their advisory team. Their expertise is truly invaluable.",
    name: "David Rodriguez",
    title: "First-Time Investor"
  }
];
const faqs = [
    { question: 'What is real estate investment advisory?', answer: 'It is professional guidance on how to invest wisely in real estate based on market trends and financial goals.' },
    { question: 'How can I start investing?', answer: 'Begin by scheduling a consultation with our experts to evaluate your financial situation and investment goals.' },
    { question: 'What are the risks involved?', answer: 'Market fluctuations, property vacancies, and unexpected maintenance costs are some potential risks.' }
  ];
export default App;