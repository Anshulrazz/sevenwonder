'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const blogs = [
  {
    id: 1,
    title: "Top Investment Locations for Real Estate in 2024",
    image: "https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2024/11/4th-Nov.jpg",
    content: `Discover the top emerging real estate markets for 2024. From bustling city centers to serene suburban areas, find out where your next big investment should be.`,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Home for Your Family",
    image: "https://thestoreys.in/wp-content/uploads/2023/07/The-perfect-home-for-the-perfect-family.jpg",
    content: `Buying a home is a big decision. Learn about the key factors to consider, such as location, amenities, and future value, to make the best choice for your family.`,
  },
  {
    id: 3,
    title: "Understanding Real Estate Market Trends",
    image: "https://www.axiomlandbase.in/wp-content/uploads/2024/06/Understanding-the-Gurgaon-Real-Estate-Market-Trends-and-Opportunities-2.png",
    content: `Stay ahead of the curve with insights into the latest real estate trends. Understand how market shifts can impact property prices and investment opportunities.`,
  },
];

export default function BlogList() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210709/original/pngtree-creative-synthesis-city-comic-real-estate-picture-image_916360.jpg')" }}>
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Explore the Latest Real Estate Insights</h1>
          <p className="mt-2 text-lg">Stay informed with expert advice, market trends, and home-buying tips.</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 py-24">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.content.substring(0, 50)}...</p>
              <Button className="mt-4" onClick={() => setSelectedBlog(blog)}>
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}

        {selectedBlog && (
          <Dialog open={true} onOpenChange={() => setSelectedBlog(null)}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{selectedBlog.title}</DialogTitle>
              </DialogHeader>
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-56 object-cover rounded-md" />
              <p className="mt-4 text-gray-700">{selectedBlog.content}</p>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Footer />
    </>
  );
}