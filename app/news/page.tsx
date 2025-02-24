'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const newsData = [
  {
    id: 1,
    title: "Luxury Homes Market Trends in 2025",
    summary: "Discover the latest trends in luxury real estate for 2025.",
    content: "The luxury real estate market is evolving with new architectural designs, sustainable features, and smart home technologies. Experts predict a rise in eco-friendly luxury homes...",
    image: "https://homesfy.in/blog/wp-content/uploads/2024/09/Untitled-design-5-1024x576.jpg"
  },
  {
    id: 2,
    title: "How to Invest in Commercial Real Estate",
    summary: "A guide to smart investments in commercial properties.",
    content: "Investing in commercial real estate requires market knowledge, financial analysis, and strategic planning. Experts suggest looking into mixed-use developments...",
    image: "https://thetrilight.com/wp-content/uploads/2024/04/best-city-hyderabad.jpg"
  },
  {
    id: 3,
    title: "Affordable Housing Initiatives for 2025",
    summary: "Government programs supporting affordable housing solutions.",
    content: "Several new policies and incentives have been introduced to boost affordable housing development, helping middle and lower-income families secure homes...",
    image: "https://www.edenlandmarks.com/blog/wp-content/uploads/2024/05/Top_Emerging_Investment_Locations_in_Pune_s_Real_Estate_Market.jpg"
  },
  {
    id: 4,
    title: "Smart Homes: The Future of Real Estate",
    summary: "How technology is reshaping modern living spaces.",
    content: "The integration of AI and IoT into homes is creating smarter, more efficient living environments. Home automation, security, and energy efficiency are key trends...",
    image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/2/real-estate-investment-in-gurgaon_0_1200.jpg"
  }
];

export default function RealEstateNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <>
    <Header/>
    <div className="p-6">
        <div className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210709/original/pngtree-creative-synthesis-city-comic-real-estate-picture-image_916360.jpg')" }}>
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Explore the Latest Real Estate Insights</h1>
          <p className="mt-2 text-lg">Stay informed with expert advice, market trends, and home-buying tips.</p>
        </div>
      </div>
      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {newsData.map((news:any) => (
          <Card key={news.id} className="p-2 shadow-md">
            <CardContent>
              <img src={news.image} alt={news.title} className="w-full h-32 object-cover rounded-md" />
              <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{news.summary}</p>
              <Button
                className="mt-2 text-sm"
                onClick={() => setSelectedNews(news)}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Modal for Detailed News */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedNews?.title}</DialogTitle>
          </DialogHeader>
          <img src={selectedNews?.image} alt={selectedNews?.title} className="w-full h-64 object-cover rounded-md" />
          <p className="mt-4">{selectedNews?.content}</p>
        </DialogContent>
      </Dialog>
    </div>
    <Footer/>
    </>
  );
}