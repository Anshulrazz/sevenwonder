'use client'
import React, { useMemo } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const MarketTrends: React.FC = () => {
  const chartData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Home Price (₹)',
        data: [400000, 41000, 420000, 43000, 44000, 450000],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Mortgage Rate (%)',
        data: [5.5, 5.6, 5.7, 5.8, 6.0, 6.2],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  }), []);


  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Market Trends</h3>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50">
            <Calendar size={16} className="mr-2" />
            Last 12 Months
          </button>
          <button className="flex items-center px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
      </div>
      <div className="h-64">
        <Line data={chartData} options={useMemo(() => ({
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'category',
              title: {
                display: true,
                text: 'Months',
              },
              ticks: {
                autoSkip: false,
              },
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: 'Values',
              },
              grid: {
                color: '#e5e7eb',
              },
            },
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          },
        }), [])} />
      </div>
    </div>
  );
};

export default MarketTrends;