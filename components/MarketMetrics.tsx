import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Home, Building2, Percent } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, icon }) => (
  <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-gray-600">{icon}</span>
    </div>
    <div className="flex items-baseline">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className={`ml-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'} flex items-center`}>
        {isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
        {change}
      </span>
    </div>
  </div>
);

export const MarketMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Average Home Price',
      value: '₹25,00000',
      change: '+5.2%',
      isPositive: true,
      icon: <Home size={20} />
    },
    {
      title: 'Commercial Rates',
      value: '₹15000/sqft',
      change: '-2.1%',
      isPositive: false,
      icon: <Building2 size={20} />
    },
    {
      title: 'Mortgage Rate',
      value: '8.5%',
      change: '-0.3%',
      isPositive: false,
      icon: <Percent size={20} />
    },
    {
      title: 'Rental Yield',
      value: '2.8%',
      change: '+0.5%',
      isPositive: true,
      icon: <DollarSign size={20} />
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};