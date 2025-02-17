import Image from "next/image"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: number
  name: string
  location: string
  price?: string
  rent?: string
  bedrooms: number
  bathrooms: number
  sqft: number
  amenities: string[]
  image: string
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={property.image || "/placeholder.svg"}
        alt={property.name}
        width={300}
        height={200}
        className="object-cover w-full h-48"
      />
      <CardContent className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{property.name}</h2>
        <div className="flex items-center mb-2 text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="mb-2 text-lg font-bold">{property.price || property.rent}</div>
        <div className="flex justify-between mb-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            {property.bedrooms} beds
          </span>
          <span className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            {property.bathrooms} baths
          </span>
          <span className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            {property.sqft} sqft
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {property.amenities.map((amenity, index) => (
            <Badge key={index} variant="default">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button className="w-full py-2 transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
          View Details
        </button>
      </CardFooter>
    </Card>
  )
}

