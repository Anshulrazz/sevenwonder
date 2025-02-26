"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { jobListings, type JobListing } from "@/lib/jobListings"

const departments = ["All", "Sales", "Marketing", "Operations", "Finance"]
const locations = ["All", "New York, NY", "Los Angeles, CA", "Chicago, IL", "Remote"]

export default function OpenPositions() {
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(jobListings)
  const [departmentFilter, setDepartmentFilter] = useState("All")
  const [locationFilter, setLocationFilter] = useState("All")

  useEffect(() => {
    const filtered = jobListings.filter(
      (job) =>
        (departmentFilter === "All" || job.department === departmentFilter) &&
        (locationFilter === "All" || job.location === locationFilter)
    )
    setFilteredJobs(filtered)
  }, [departmentFilter, locationFilter])

  return (
    <section id="open-positions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        
        {/* Department Filters */}
        <div className="flex flex-wrap justify-left gap-3 mb-4">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={departmentFilter === dept ? "default" : "outline"}
              onClick={() => setDepartmentFilter(dept)}
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Location Filters */}
        <div className="flex flex-wrap justify-left gap-3 mb-8">
          {locations.map((loc) => (
            <Button
              key={loc}
              variant={locationFilter === loc ? "default" : "outline"}
              onClick={() => setLocationFilter(loc)}
            >
              {loc}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.location} | {job.department}</p>
                <p className="text-gray-800 mb-4">{job.description}</p>
                <Button
        
          onClick={() => {
            const element = document.getElementById("apply")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
         Apply
        </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-2">No jobs found matching your filters.</p>
          )}
        </div>
      </div>
    </section>
  )
}
