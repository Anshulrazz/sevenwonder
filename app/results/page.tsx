'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from "../../components/PropertyCard";
import SearchFilters from "../../components/SearchFilters";
import Pagination from "../../components/Pagination";

// TypeScript interface for Property
interface Property {
  _id: string;
  title: string;
  BC: string;
  address: string;
  rent: number;
  type: string;
  furnishing: string;
  capacity: number;
  propertyUid: string;
  status: string;
  builtUpArea: number;
  parking: number;
  amenities: string[];
  description: string;
  images: string[];
  googleMapLink: string;
}

// Advanced Filter Interface
interface Filters {
  minRent?: number;
  maxRent?: number;
  type?: string;
  furnishing?: string;
  minArea?: number;
  maxArea?: number;
  amenities?: string[];
  status?: string;
}

// Utility function to format Rupees
const formatRupees = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export default function ResultsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const propertiesPerPage = 9;

  // Fetch Properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("https://api.sevenwonder.in/api/business_center");
        setProperties(response.data);
        setFilteredProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter Properties
  useEffect(() => {
    const applyFilters = () => {
      let result = properties;

      if (filters.minRent) {
        result = result.filter(prop => prop.rent >= filters.minRent!);
      }
      if (filters.maxRent) {
        result = result.filter(prop => prop.rent <= filters.maxRent!);
      }
      if (filters.type) {
        result = result.filter(prop => prop.type === filters.type);
      }
      if (filters.furnishing) {
        result = result.filter(prop => prop.furnishing === filters.furnishing);
      }
      if (filters.minArea) {
        result = result.filter(prop => prop.builtUpArea >= filters.minArea!);
      }
      if (filters.maxArea) {
        result = result.filter(prop => prop.builtUpArea <= filters.maxArea!);
      }
      if (filters.amenities && filters.amenities.length > 0) {
        result = result.filter(prop => 
          filters.amenities!.every(amenity => prop.amenities.includes(amenity))
        );
      }
      if (filters.status) {
        result = result.filter(prop => prop.status === filters.status);
      }

      setFilteredProperties(result);
      setCurrentPage(1);
    };

    applyFilters();
  }, [filters, properties]);

  // Pagination Logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Property Search Results</h1>
      
      <SearchFilters 
        filters={filters} 
        setFilters={setFilters} 
        propertyTypes={["1", "2", "3"]} 
        furnishingTypes={["Fully Furnished", "Semi Furnished", "Unfurnished"]}
        amenitiesList={["Reception Area", "Terrace Garden Area", "Conference room", "Lift", "Parking"]}
        statuses={["Available", "Booked", "Pending"]}
        // Additional props for Rupee range
        minRentLabel="Minimum Rent"
        maxRentLabel="Maximum Rent"
        rentStep={1000}
        formatRupees={formatRupees}
      />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 rounded-full border-t-2 border-blue-500 animate-spin"></div>
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="mt-8 text-center text-gray-500">
          No properties found matching your search criteria.
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Showing {indexOfFirstProperty + 1} to {Math.min(indexOfLastProperty, filteredProperties.length)} 
              {' '}of {filteredProperties.length} properties
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {currentProperties.map((property) => (
              <PropertyCard 
                key={property._id} 
                property={{
                  id: property._id,
                  name: property.title,
                  location: property.address,
                  price: formatRupees(property.rent) + '/month',
                  bedrooms: property.capacity,
                  bathrooms: 1, // Default as API doesn't provide
                  sqft: property.builtUpArea,
                  amenities: property.amenities,
                  image: property.images[0] || "/placeholder.svg?height=200&width=300"
                }} 
              />
            ))}
          </div>

          <Pagination 
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProperties.length / propertiesPerPage)}
            onPageChange={paginate}
            className="mt-8" 
          />
        </>
      )}
    </div>
  );
}