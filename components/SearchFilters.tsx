import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function SearchFilters() {
  return (
    <div className="p-4 rounded-lg bg-muted">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Input placeholder="Location" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500000">$0 - $500,000</SelectItem>
            <SelectItem value="500000-1000000">$500,000 - $1,000,000</SelectItem>
            <SelectItem value="1000000-plus">$1,000,000+</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full">Search</Button>
      </div>
    </div>
  )
}

