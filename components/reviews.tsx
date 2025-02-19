import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Anshul Rajpoot",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQERqKzyvNRDXA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1733732676692?e=1740042000&v=beta&t=ZKtCk6mo1ncL3GGN8DJjtSwLudjNk5gl9ZzbCEDRSyY",
    rating: 5,
    review: "This real estate company is the best! They have been super responsive to all our needs and have been very helpful in finding our new home. Highly recommended!",
  },
  {
    id: 2,
    name: "Harshita 🐼",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFEkwl6vfXGjw/profile-displayphoto-shrink_400_400/B56ZO0roSIGcAk-/0/1733903157529?e=1744848000&v=beta&t=Azrc9O8wlUWibFlrHcqKmWpPacbnQp9zFmibrSD00vY",
    rating: 4,
    review: "Great experience with Seven Wonders! They showed us several properties that fit our requirements and were very knowledgeable about the areas we were looking in. The whole process was smooth and stress-free.",
  },
  {
    id: 3,
    name: "Anu Yadav",
    avatar: "https://github.com/Anshulrazz/UniProject_NetworkF/blob/main/src/assets/nurs.jpg?raw=true",
    rating: 5,
    review: "The team at Seven Wonders was super helpful in finding us our new home. Their knowledge of the area and attention to detail made the process so much easier. Highly recommend!",
  },
  
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">What Our <span className="text-primary">Customers</span> Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

