import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Real Estate Agent",
    quote: "Working here has been an incredible journey of growth and success.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Specialist",
    quote: "The collaborative culture and support from leadership is unmatched.",
  },
  {
    name: "Mike Johnson",
    role: "Property Manager",
    quote: "I've found not just a job, but a fulfilling career path with endless opportunities.",
  },
]

export default function LifeAtCompany() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Life at Our Company</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Image
                src={`/placeholder.svg?height=100&width=100&text=${index + 1}`}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mb-4">{testimonial.role}</p>
              <p className="text-gray-800 italic text-center">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

