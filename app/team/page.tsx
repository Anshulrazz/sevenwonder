'use client'
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const teamData = [
  {
    department: "Founders & Directors",
    members: [
      {
        name: "Ashish Mittal",
        role: "Founder",
        image: "/team/ashish.jpg",
        bio: "Ashish Mittal is a seasoned real estate expert with 15+ years in the industry, driving innovation and excellence.",
      },
      {
        name: "Lokesh",
        role: "CEO & Director",
        image: "/team/Lokesh.jpg",
        bio: "Lokesh oversees company growth, strategic planning, and overall business operations.",
      },
      {
        name: "Renu Sharma",
        role: "Managing Director",
        image: "/team/renu.jpg",
        bio: "Renu ensures smooth company operations, team coordination, and process efficiency.",
      },
      {
        name: "Amit Rathore",
        role: "Director",
        image: "/team/amit.jpg",
        bio: "Amit focuses on long-term business growth, strategic partnerships, and expansion.",
      },
    ],
  },
  {
    department: "Sales Team",
    members: [
      {
        name: "Kajal Awasthi",
        role: "Head of Sales",
        image: "/team/kajal2.jpg",
        bio: "Kajal leads the sales team with innovative strategies to drive revenue growth and client satisfaction.",
      },
      {
        name: "Manish Sharma",
        role: "Senior Sales Manager",
        image: "/team/manish.jpg",
        bio: "Manish specializes in high-value property transactions and client relationship management.",
      },
      {
        name: "Kashish Thakur",
        role: "Client Coordinator",
        image: "/team/kashish.jpg",
        bio: "Kashish ensures seamless client communication, support, and lead generation.",
      },
      {
        name: "Pardeep",
        role: "Sales Executive",
        image: "/team/pardeep.jpg",
        bio: "Pardeep focuses on building strong client relationships and closing successful deals.",
      },
    ],
  },
  {
    department: "Marketing",
    members: [
      {
        name: "Ajay Chaudhary",
        role: "Senior Ads Manager",
        image: "/team/ajay.jpg",
        bio: "Ajay optimizes ad campaigns to maximize brand reach and engagement.",
      },
      {
        name: "Kajal Awasthi",
        role: "Ads Manager",
        image: "/team/kajal.jpg",
        bio: "Kajal manages digital advertising campaigns for brand growth and lead generation.",
      },
      {
        name: "Tisha Sharma",
        role: "Ad Management Executive",
        image: "/team/tisha.jpg",
        bio: "Tisha strategizes and executes innovative marketing campaigns for maximum outreach.",
      },
      {
        name: "Kuldeep Rana",
        role: "Ads Designer",
        image: "/team/kuldeep.jpg",
        bio: "Kuldeep creates visually compelling ad designs to enhance brand visibility.",
      },
    ],
  },
  {
    department: "IT & Development",
    members: [
      {
        name: "Anshul Kumar",
        role: "CTO & Lead Developer",
        image: "/team/ansh.jpg",
        bio: "Anshul leads technology innovation and software development for our org.",
      },
      {
        name: "Kuldeep Rana",
        role: "UI/UX Designer",
        image: "/team/kuldeep.jpg",
        bio: "Kuldeep designs user-friendly interfaces to enhance digital experiences.",
      },
      {
        name: "Anshul Verma",
        role: "Full Stack Developer",
        image: "/team/ansh2.jpg",
        bio: "Anshul develops and maintains robust web applications for the our Org.",
      },
      {
        name: "Rohit Kumar",
        role: "Hardware Expert",
        image: "/team/rohit.png",
        bio: "Rohit manages hardware infrastructure and ensures seamless IT operations.",
      },
    ],
  },
  {
    department: "Accounts & HR",
    members: [
      {
        name: "Garima Singh",
        role: "HR Head",
        image: "/team/garima.jpg",
        bio: "Garima oversees talent acquisition, employee relations, and HR operations.",
      },
      {
        name: "Soni Mishra",
        role: "HR Manager",
        image: "/team/soni.jpg",
        bio: "Soni manages recruitment, employee engagement, and HR policies to ensure a productive work environment.",
      },
      {
        name: "Rohan Verma",
        role: "Accounts Manager",
        image: "/team/rohan.jpg",
        bio: "Rohan handles company finances, taxation, and regulatory compliance.",
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
