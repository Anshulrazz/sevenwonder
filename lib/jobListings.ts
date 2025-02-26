export interface JobListing {
    id: number
    title: string
    location: string
    department: string
    description: string
  }
  
  export const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Senior Real Estate Agent",
      location: "New York, NY",
      department: "Sales",
      description:
        "We are seeking an experienced real estate agent to join our team and help drive sales in the New York market.",
    },
    {
      id: 2,
      title: "Marketing Specialist",
      location: "Los Angeles, CA",
      department: "Marketing",
      description:
        "Join our marketing team to develop and implement innovative strategies for our real estate portfolio.",
    },
    {
      id: 3,
      title: "Property Manager",
      location: "Chicago, IL",
      department: "Operations",
      description:
        "Oversee the day-to-day operations of our properties and ensure tenant satisfaction in the Chicago area.",
    },
    {
      id: 4,
      title: "Real Estate Analyst",
      location: "Remote",
      department: "Finance",
      description:
        "Analyze market trends and property valuations to support our investment decisions across multiple markets.",
    },
  ]
  
  