import PropertyCard from "../../components/PropertyCard"
import SearchFilters from "../../components/SearchFilters" // Ensure this path is correct or update it to the correct path
import Pagination from "../../components/Pagination"

const properties = [
  {
    id: 1,
    name: "Sunny Meadows Villa",
    location: "123 Sunshine Blvd, Los Angeles, CA",
    price: "$750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    amenities: ["Pool", "Garden", "Garage"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Downtown Loft",
    location: "456 Urban St, New York, NY",
    rent: "$3,500/month",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    amenities: ["Gym", "Rooftop Terrace", "Concierge"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Seaside Retreat",
    location: "789 Ocean Dr, Miami, FL",
    price: "$1,200,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3000,
    amenities: ["Beach Access", "Private Dock", "Hot Tub"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Mountain View Cabin",
    location: "101 Pine Ridge Rd, Aspen, CO",
    rent: "$5,000/month",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    amenities: ["Fireplace", "Ski-in/Ski-out", "Sauna"],
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more properties as needed
]

export default function ResultsPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Property Search Results</h1>
      <SearchFilters />
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Pagination className="mt-8" />
    </div>
  )
}

