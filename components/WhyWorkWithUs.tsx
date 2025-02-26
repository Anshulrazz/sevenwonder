import { Building, Heart, Briefcase, GraduationCap, Trophy, Users } from "lucide-react"

const benefits = [
  {
    icon: Building,
    title: "Modern Workspace",
    description: "State-of-the-art offices designed for collaboration and productivity",
  },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health benefits and wellness programs" },
  { icon: Briefcase, title: "Flexible Work", description: "Work-life balance with flexible hours and remote options" },
  { icon: GraduationCap, title: "Career Growth", description: "Continuous learning and development opportunities" },
  { icon: Trophy, title: "Employee Recognition", description: "Rewards and recognition for outstanding performance" },
  { icon: Users, title: "Collaborative Culture", description: "A supportive team environment that fosters innovation" },
]

export default function WhyWorkWithUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

