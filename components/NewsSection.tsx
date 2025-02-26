import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  category: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: 'Housing Market Shows Signs of Stabilization in Q1 2024',
      date: 'Mar 15, 2024',
      category: 'Market Analysis'
    },
    {
      title: 'New Regulations Impact Commercial Real Estate Investment',
      date: 'Mar 14, 2024',
      category: 'Regulations'
    },
    {
      title: 'Tech Hubs Drive Residential Property Demand',
      date: 'Mar 13, 2024',
      category: 'Trends'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Latest Market News</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
          View All <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Newspaper size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-medium mb-1">{item.title}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;