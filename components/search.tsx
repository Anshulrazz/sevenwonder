"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const propertyTypes = ["Apartment", "House", "Villa", "Plot", "Commercial", "Office Space"]

const budgetRanges = [
  "₹5 - 10 Lac",
  "₹10 - 20 Lac",
  "₹20 - 30 Lac",
  "₹30 - 40 Lac",
  "₹40 - 50 Lac",
  "₹50 Lac - 1 Cr",
  "₹1 - 2 Cr",
  "₹2 Cr+",
]

export function RealEstateSearch() {
  const [propertyStatus, setPropertyStatus] = React.useState("buy")

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md z-10">
      <Tabs value={propertyStatus} onValueChange={setPropertyStatus} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
          <TabsTrigger value="pg">PG</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="location" className="mb-2 block">
            Location
          </Label>
          <Input id="location" placeholder="Enter city, locality or project" className="w-full" />
        </div>

        <div>
          <Label htmlFor="property-type" className="mb-2 block">
            Property Type
          </Label>
          <Select>
            <SelectTrigger id="property-type">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budget" className="mb-2 block">
            Budget
          </Label>
          <Select>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range.toLowerCase()}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </div>
  )
}

