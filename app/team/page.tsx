'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Linkedin, Mail, ChevronDown, Search, X } from "lucide-react";

const teamData = [
  {
    department: "Management and Founders",
    members: [
      {
        name: "Ashish Mittal",
        role: "Founder",
        image: "/team/ashish.jpg",
        bio: "With over 15 years in real estate, Ashish has revolutionized property investment strategies in the region. His visionary leadership has helped clients secure portfolio growth 32% above market average. A frequent speaker at industry conferences, Ashish combines market intuition with data-driven insights to navigate complex market cycles.",
      },
      {
        name: "Lokesh Jaat",
        role: "Managing Director",
        image: "/team/lokesh.jpg",
        bio: "As Managing Director, Lokesh orchestrates our company's strategic vision and operational excellence. With a background in business scaling and organizational leadership, he's driven 40% year-over-year growth while maintaining our client-first culture. His talent for identifying emerging market opportunities has opened three new service verticals since joining.",
      },
      {
        name: "Renu Sharma",
        role: "Director- HR & Admin",
        image: "/team/renu.jpg",
        bio: "Renu is the organizational backbone ensuring our talent thrives and operations flow seamlessly. Her innovative employee development programs have reduced turnover by 25% and increased satisfaction scores to industry-leading levels. Her administrative systems have streamlined internal processes, creating an environment where innovation flourishes.",
      },
      {
        name: "Amit Rathore",
        role: "Director - Sales",
        image: "/team/amit.jpg",
        bio: "Amit's strategic sales leadership has expanded our market presence across three states with 45% revenue growth in just two years. His talent for forging institutional partnerships has opened exclusive real estate opportunities for our clients. Amit brings a consultative approach to high-value transactions, ensuring personalized solutions for every client portfolio.",
      },
    ],
  },
  {
    department: "Operations Team",
    members: [
      {
        name: "Kajal Awasthi",
        role: "Operations Manager",
        image: "/team/kajal.jpg",
        bio: "Kajal orchestrates our operational excellence with precision and foresight. She's implemented workflow systems that increased efficiency by 37% while enhancing customer experience metrics. Her talent for identifying process bottlenecks and implementing targeted solutions has made our operation a model for the industry.",
      },
      {
        name: "Tisha Sharma",
        role: "Ass. Manager - Promotions",
        image: "/team/tisha.jpg",
        bio: "Tisha designs promotional campaigns that consistently outperform industry engagement benchmarks by 28%. Her innovative approach to property showcasing has reduced average closing time by 15 days. With a background in digital marketing and real estate psychology, she crafts promotions that connect emotionally with prospects.",
      },
      {
        name: "Kashish Thakur",
        role: "Ass. Manager- Operations",
        image: "/team/kashish.jpg",
        bio: "Kashish ensures operational continuity while implementing continuous improvement protocols. Her client-centric approach has boosted satisfaction ratings to 4.8/5. She excels at cross-departmental coordination, creating seamless client journeys from initial inquiry through post-purchase support.",
      },
      {
        name: "Alisha",
        role: "Ass. Manager- Operations",
        image: "/team/alisha.jpg",
        bio: "Alisha transforms operational challenges into growth opportunities. Her data-driven approach to operations has optimized response times by 42% and enhanced client communications. She specializes in creating personalized client experiences that have generated our highest referral rates and testimonial scores.",
      },
    ],
  },
  {
    department: "Sales Team",
    members: [
      {
        name: "Ajay Chaudhary",
        role: "Senior Sales Manager",
        image: "/team/ajay.jpg",
        bio: "Ajay's consultative sales approach has resulted in a 94% client satisfaction rating and the highest retention rate in our organization. He specializes in high-value property portfolios, consistently managing transactions 30% above market average. His market insights and negotiation expertise have saved clients millions in purchasing power.",
      },
      {
        name: "Manish Sharma",
        role: "Sales Manager",
        image: "/team/manish.jpg",
        bio: "Manish combines analytical precision with relationship building, creating custom property acquisition strategies for investors. He's closed over 120 transactions in the luxury segment, with an average 18% appreciation in the first year. His talent for matching client lifestyle aspirations with property features creates perfect investment matches.",
      },
      {
        name: "Ajay Pandey",
        role: "Sales Manager",
        image: "/team/ajayp.jpg",
        bio: "Ajay specializes in emerging neighborhood investments, helping clients secure properties before market booms. His historical success predicting neighborhood value increases has averaged 27% returns for early investors. With expertise in market timing and property potential assessment, he creates maximum value for growth-focused investors.",
      },
      {
        name: "Pardeep Kumar",
        role: "Ass. Manager- Sales",
        image: "/team/pardeep.jpg",
        bio: "Pardeep excels at educating first-time investors and homebuyers through the complex real estate journey. His clear communication style and patient approach have earned him a devoted client base with a 91% referral rate. He specializes in creating accessible investment strategies for clients entering the property market.",
      },
    ],
  },
  {
    department: "IT & Development",
    members: [
      {
        name: "Rohit Kumar",
        role: "Network & Software Engineer",
        image: "/team/rohit.png",
        bio: "Rohit architects our technological infrastructure, creating custom solutions that have accelerated transaction processing by 65%. His innovations include a proprietary market analysis tool that identifies undervalued properties with 87% accuracy. His technology systems have become a competitive advantage, enabling data-driven decisions across departments.",
      },
      { 
        name: "Anshul Rajput",
        role: "Full Stack Developer",
        image: "/team/ansh2.jpg",
        bio: "Anshul creates immersive digital experiences that showcase properties through interactive virtual tours and 3D modeling. His development of our property comparison tool has increased online engagement by 78%. With expertise in UX/UI and full-stack development, he transforms complex property data into intuitive client interfaces.",
      },
      {
        name: "Kuldeep Rana",
        role: "Digital Marketing Manager",
        image: "/team/kuldeep.jpg",
        bio: "Kuldeep orchestrates our digital presence with data-driven campaign strategies that have doubled lead generation while reducing acquisition costs by 35%. His implementation of targeted marketing automation has increased conversion rates by 42%. He combines SEO expertise, content strategy, and analytics to maximize our digital footprint.",
      },
      {
        name: "Vikram Singh",
        role: "IT Assistant",
        image: "/team/vikram.png",
        bio: "Vikram ensures our technology infrastructure operates flawlessly 24/7, with a 99.9% uptime record for critical systems. His proactive maintenance protocols have prevented potential disruptions and security vulnerabilities. He provides responsive technical support, ensuring team members can focus on serving clients without technological barriers.",
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
        bio: "Garima has cultivated our award-winning company culture through innovative talent acquisition and retention strategies. Her leadership development program has promoted 35% of participants into advanced roles. She's created a diverse, inclusive workplace where top real estate professionals thrive while delivering exceptional client outcomes.",
      },
      {
        name: "Soni Mishra",
        role: "HR Manager",
        image: "/team/soni.jpg",
        bio: "Soni designs people-centered HR systems that balance employee well-being with performance excellence. Her mentorship program pairs new team members with industry veterans, accelerating professional development. She's implemented work-life balance initiatives that have increased productivity while maintaining our family-friendly culture.",
      },
      {
        name: "Rohan Verma",
        role: "Accounts Manager",
        image: "/team/rohan.jpg",
        bio: "Rohan brings financial precision and strategic insight to our operations, implementing systems that have optimized cash flow while ensuring regulatory compliance. His financial modeling has supported expansion decisions with 92% forecast accuracy. He translates complex financial data into actionable insights for management and stakeholders.",
      },
    ],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [expandedDepts, setExpandedDepts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  const [activeFilters, setActiveFilters] = useState([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Initialize all departments as expanded
  useEffect(() => {
    const initialExpanded = {};
    teamData.forEach((dept, index) => {
      initialExpanded[index] = true;
    });
    setExpandedDepts(initialExpanded);
  }, []);

  // Handle search and filtering
  useEffect(() => {
    if (searchTerm === "" && activeFilters.length === 0) {
      setFilteredTeam(teamData);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    
    const filtered = teamData.map(dept => {
      // Filter members based on search term
      const filteredMembers = dept.members.filter(member => {
        const matchesSearch = searchTerm === "" || 
          member.name.toLowerCase().includes(lowerSearchTerm) || 
          member.role.toLowerCase().includes(lowerSearchTerm) ||
          member.bio.toLowerCase().includes(lowerSearchTerm);
          
        const matchesFilter = activeFilters.length === 0 || 
          activeFilters.includes(dept.department);
          
        return matchesSearch && matchesFilter;
      });
      
      // Only include departments that have matching members
      return {
        ...dept,
        members: filteredMembers
      };
    }).filter(dept => dept.members.length > 0);
    
    setFilteredTeam(filtered);
  }, [searchTerm, activeFilters]);

  // Toggle department expansion
  const toggleDepartment = (deptIndex) => {
    setExpandedDepts(prev => ({
      ...prev,
      [deptIndex]: !prev[deptIndex]
    }));
  };

  // Toggle filter for departments
  const toggleFilter = (department) => {
    setActiveFilters(prev => {
      if (prev.includes(department)) {
        return prev.filter(d => d !== department);
      } else {
        return [...prev, department];
      }
    });
  };

  // Clear all filters and search
  const clearFilters = () => {
    setSearchTerm("");
    setActiveFilters([]);
  };

  // Function to handle image errors
  const handleImageError = (memberName: string) => {
    setImageErrors(prev => ({
      ...prev,
      [memberName]: true
    }));
  };

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <>
      <Header />
      <section className="py-16 min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our dedicated professionals work across departments to ensure seamless real estate solutions.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div 
            className="p-6 mb-10 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
              <div className="relative w-full md:w-1/3">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, role or keyword..."
                  className="py-3 pr-4 pl-10 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="flex absolute inset-y-0 right-0 items-center pr-3"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto md:justify-end">
                {teamData.map((dept) => (
                  <button
                    key={dept.department}
                    onClick={() => toggleFilter(dept.department)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilters.includes(dept.department)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {dept.department}
                  </button>
                ))}
                {(searchTerm || activeFilters.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-full transition-all duration-300 hover:bg-red-200"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {filteredTeam.length === 0 ? (
            <motion.div 
              className="py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-medium text-gray-700">No team members found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 mt-4 text-white bg-purple-600 rounded-xl transition-colors hover:bg-purple-700"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            filteredTeam.map((department, deptIndex) => (
              <motion.div 
                key={department.department} 
                className="mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: deptIndex * 0.2 }}
              >
                <motion.div 
                  className="flex justify-between items-center mb-6 cursor-pointer"
                  onClick={() => toggleDepartment(deptIndex)}
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="inline-block relative text-2xl font-bold text-gray-800 md:text-3xl">
                    <span className="relative z-10 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
                      {department.department}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1"></span>
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedDepts[deptIndex] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedDepts[deptIndex] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {department.members.map((member, index) => (
                          <motion.div
                            key={member.name}
                            className="relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-out group hover:shadow-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedMember(member)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                              <div className="relative mx-auto mb-5 w-40 h-40">
                                {!imageErrors[member.name] ? (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full rounded-full border-4 border-white shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                                    onError={() => handleImageError(member.name)}
                                  />
                                ) : (
                                  <div className="flex justify-center items-center w-full h-full text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg">
                                    {getInitials(member.name)}
                                  </div>
                                )}
                                <div className="absolute inset-0 rounded-full border-2 border-transparent transition-colors duration-300 group-hover:border-purple-300"></div>
                              </div>
                              <h4 className="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-700">{member.name}</h4>
                              <p className="mb-2 font-medium text-purple-600">{member.role}</p>
                              <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 group-hover">{member.bio}</p>
                              <div className="flex justify-center mt-4 space-x-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                                <button className="p-2 text-blue-600 bg-blue-100 rounded-full transition-colors hover:bg-blue-200">
                                  <Linkedin className="w-4 h-4" />
                                  <span className="sr-only">LinkedIn</span>
                                </button>
                                <button className="p-2 text-purple-600 bg-purple-100 rounded-full transition-colors hover:bg-purple-200">
                                  <Mail className="w-4 h-4" />
                                  <span className="sr-only">Email</span>
                                </button>
                              </div>
                            </div>
                            <div className="absolute right-2 bottom-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <button className="text-xs font-medium text-purple-600 hover:text-purple-800">
                                View Profile
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
        
        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div 
                className="overflow-hidden relative w-full max-w-2xl bg-white rounded-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 z-10 p-1 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100"
                  onClick={() => setSelectedMember(null)}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 md:h-40"></div>
                
                <div className="px-6 pt-0 pb-6 -mt-20">
                  <div className="flex flex-col md:flex-row">
                    <div className="mx-auto -mt-2 mb-4 md:mx-0 md:mb-0 md:mr-6">
                      {!imageErrors[selectedMember.name] ? (
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name}
                          className="object-cover w-32 h-32 rounded border-4 border-white shadow-xl"
                          onError={() => handleImageError(selectedMember.name)}
                        />
                      ) : (
                        <div className="flex justify-center items-center w-32 h-32 text-3xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-xl">
                          {getInitials(selectedMember.name)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="mt-4 text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                      <p className="font-medium text-purple-600">{selectedMember.role}</p>
                      
                      <div className="mt-4 text-gray-700">
                        <p className="mb-4">{selectedMember.bio}</p>
                        <p className="text-sm">With a passion for real estate excellence and client satisfaction, {selectedMember.name} exemplifies our commitment to innovative solutions and personalized service in every interaction.</p>
                      </div>
                      
                      <div className="flex justify-center mt-6 space-x-3 md:justify-start">
                        <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                          <Linkedin className="w-4 h-4" />
                          <span>Connect</span>
                        </button>
                        <button className="flex items-center px-4 py-2 space-x-2 text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700">
                          <Mail className="w-4 h-4" />
                          <span>Contact</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
}