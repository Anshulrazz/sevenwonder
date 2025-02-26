'use client'
import React, { useState } from 'react';
import { 
  Search, Filter, Share2, Calendar, Home, Building2, Crown,
  ChevronLeft, ChevronRight, X, PlayCircle, ExternalLink
} from 'lucide-react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  category: string;
  tags: string[];
  isNew?: boolean;
};

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Home },
  { id: 'residential', label: 'Residential', icon: Home },
  { id: 'commercial', label: 'Commercial', icon: Building2 },
  { id: 'luxury', label: 'Luxury', icon: Crown },
];

const SAMPLE_DATA: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'Modern Luxury Villa',
    category: 'luxury',
    tags: ['For Sale', 'Luxury'],
    isNew: true,
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'Waterfront Property',
    category: 'residential',
    tags: ['For Sale'],
  },
  {
    id: '3',
    type: 'video',
    url: 'https://player.vimeo.com/video/428938847',
    thumbnail: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'Downtown Office Space',
    category: 'commercial',
    tags: ['For Rent', 'Commercial'],
  },
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = SAMPLE_DATA.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Property Gallery</h1>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {CATEGORIES.map(category => (
              <button
              key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
                  ${selectedCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
            key={item.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                )}
                {item.isNew && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-2 py-1 text-sm rounded-full">
                    New
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-white text-gray-800 px-2 py-1 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary transition-colors"
                  >
                    View Details
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          <div className="max-w-6xl w-full mx-4 rounded">
            {selectedItem.type === 'image' ? (
                <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded"
              />
            ) : (
              <div className="relative pt-[56.25%]">
                <iframe
                  src={selectedItem.url}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            )}
            <div className="mt-4 flex items-center justify-between text-white">
              <h2 className="text-xl font-semibold">{selectedItem.title}</h2>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 hover:text-gray-300">
                  <Calendar size={20} />
                  Schedule Visit
                </button>
                <button className="flex items-center gap-2 hover:text-gray-300">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      <Footer/>
      </>
  );
};

export default Gallery;