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

const MarketTrends = () => {
  // Fixed data values - corrected the typo in 410000 (was 41000)
  const chartData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', ],
    datasets: [
      {
        label: 'Average Home Price (₹)',
        data: [400000, 410000, 460000, ],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Mortgage Rate (%)',
        data: [5.5, 5.6, 5.7, ],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  }), []);
    
  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months',
          font: {
            weight: 'bold',
          },
        },
        ticks: {
          autoSkip: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Price (₹)',
          font: {
            weight: 'bold',
          },
        },
        grid: {
          color: '#e5e7eb',
        },
        min: 390000,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Rate (%)',
          font: {
            weight: 'bold',
          },
        },
        grid: {
          drawOnChartArea: false,
        },
        min: 5.0,
        max: 6.5,
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
  }), []);

  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Market Trends</h3>
      </div>
      <div className="h-96">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MarketTrends;