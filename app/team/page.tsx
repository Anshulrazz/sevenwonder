'use client'
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// ... (keep the teamData array the same)

const teamData = [
  {
    department: "Founders & Directors",
    members: [
      {
        name: "Ashish Mittal",
        role: "Founder",
        image: "/images/john.jpg",
        bio: "Ashish Mittal is a seasoned real estate expert with 15+ years in the industry.",
      },
      {
        name: "Lokesh",
        role: "CEO & Director",
        image: "/images/jane.jpg",
        bio: "Jane leads business operations and strategic growth.",
      },
      {
        name: "Renu Sharma",
        role: "Managing Director",
        image: "/images/david.jpg",
        bio: "Renu ensures smooth company operations and team coordination.",
      },
      {
        name: "Amit Rathore",
        role: "Director",
        image: "/images/sophia.jpg",
        bio: "Amit focuses on long-term business growth and expansion.",
      },
    ],
  },
  {
    department: "Sales Team",
    members: [
      {
        name: "Kajal Awasthi",
        role: "Head of Sales",
        image: "/images/michael.jpg",
        bio: "Kajal ensures top-notch sales strategies and client satisfaction.",
      },
      {
        name: "Samantha Lee",
        role: "Senior Sales Executive",
        image: "/images/samantha.jpg",
        bio: "Samantha specializes in high-end property transactions.",
      },
      {
        name: "Kashish Thakur",
        role: "Client Coordinator",
        image: "/images/daniel.jpg",
        bio: "Coordination to clients for graving more and valuable leads.",
      },
      {
        name: "Jessica Adams",
        role: "Client Relations Manager",
        image: "/images/jessica.jpg",
        bio: "Jessica ensures excellent client communication and support.",
      },
    ],
  },
  {
    department: "Marketing",
    members: [
      {
        name: "Tisha Sharma",
        role: "Ad Management Executive",
        image: "/images/mark.jpg",
        bio: "Tisha drives innovative marketing campaigns for maximum reach.",
      },
      {
        name: "Olivia Brown",
        role: "Social Media Manager",
        image: "/images/olivia.jpg",
        bio: "Olivia manages digital content and brand visibility.",
      },
      {
        name: "Ryan Foster",
        role: "Content Strategist",
        image: "/images/ryan.jpg",
        bio: "Ryan develops engaging content for various marketing platforms.",
      },
      {
        name: "Natalie Brooks",
        role: "SEO Specialist",
        image: "/images/natalie.jpg",
        bio: "Natalie optimizes our online presence for better search visibility.",
      },
    ],
  },
  {
    department: "IT & Development",
    members: [
      {
        name: "Anshul Kumar",
        role: "CTO & Lead Developer",
        image: "/images/chris.jpg",
        bio: "Anshul leads the development of cutting-edge real estate tech.",
      },
      {
        name: "Kuldeep Rana",
        role: "UI/UX Designer",
        image: "/images/emma.jpg",
        bio: "Kuldeep creates intuitive user experiences for our platform.",
      },
      {
        name: "Ansh Verma",
        role: "Full Stack Developer",
        image: "/images/luke.jpg",
        bio: "Ansh develops and maintains our real estate platform.",
      },
      {
        name: "Sophia M.",
        role: "Cybersecurity Specialist",
        image: "/images/sophia_m.jpg",
        bio: "Sophia ensures our platform is secure from cyber threats.",
      },
    ],
  },
  {
    department: "Accounts & Finance",
    members: [
      {
        name: "Robert Davis",
        role: "Chief Financial Officer",
        image: "/images/robert.jpg",
        bio: "Robert ensures financial stability and strategic investments.",
      },
      {
        name: "Emily White",
        role: "Senior Accountant",
        image: "/images/emily.jpg",
        bio: "Emily oversees budgeting and financial compliance.",
      },
      {
        name: "Kevin Thompson",
        role: "Tax Consultant",
        image: "/images/kevin.jpg",
        bio: "Kevin handles taxation and financial regulations.",
      },
      {
        name: "Laura Bennett",
        role: "Payroll Manager",
        image: "/images/laura.jpg",
        bio: "Laura manages payroll and employee financial records.",
      },
    ],
  },
  {
    department: "Human Resources",
    members: [
      {
        name: "Neha Gupta",
        role: "HR Manager",
        image: "/images/neha.jpg",
        bio: "Neha oversees recruitment, employee relations, and HR policies.",
      },
      {
        name: "Rajesh Verma",
        role: "Talent Acquisition Specialist",
        image: "/images/rajesh.jpg",
        bio: "Rajesh focuses on hiring the best talent for the company.",
      },
      {
        name: "Priya Sharma",
        role: "Employee Engagement Officer",
        image: "/images/priya.jpg",
        bio: "Priya ensures employee satisfaction and organizational culture.",
      },
      {
        name: "Aarav Mehta",
        role: "HR Coordinator",
        image: "/images/aarav.jpg",
        bio: "Aarav handles HR administration and employee records.",
      },
    ],
  },
];

  
  

export default function Team() {
  return (
    <>
    <Header/>
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals work across departments to ensure seamless real estate solutions.
          </p>
        </motion.div>

        {teamData.map((department, deptIndex) => (
          <motion.div 
            key={deptIndex} 
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: deptIndex * 0.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-8 text-center relative inline-block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
                {department.department}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1"></span>
            </motion.h3>

            <div className="grid md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {department.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-300 transition-colors duration-300"></div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        {/* Add LinkedIn icon */}
                      </button>
                      <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors">
                        <span className="sr-only">Email</span>
                        {/* Add Email icon */}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}