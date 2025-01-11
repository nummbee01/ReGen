'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { year: 2020, plastic: 1000, paper: 1500, glass: 800 },
  { year: 2021, plastic: 1200, paper: 1700, glass: 900 },
  { year: 2022, plastic: 1500, paper: 2000, glass: 1100 },
  { year: 2023, plastic: 1800, paper: 2200, glass: 1300 },
  { year: 2024, plastic: 2100, paper: 2500, glass: 1500 },
]

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Impact in Nepal</h1>
      
      <div className="mb-6">
        <button
          className={`mr-4 pb-2 ${activeTab === 'overview' ? 'border-b-2 border-green-500' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`pb-2 ${activeTab === 'details' ? 'border-b-2 border-green-500' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Detailed Statistics
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div>
          <p className="mb-4">
            Since our inception, ReGen has made significant strides in promoting sustainable practices across Nepal. 
            Our efforts have resulted in substantial reductions in waste and increased recycling rates.
          </p>
          <div className="bg-green-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Over 10,000 kg of plastic recycled</li>
              <li>5,000 kg reduction in CO2 emissions</li>
              <li>1,000 trees planted across Nepal</li>
              <li>50,000+ active users engaged in sustainable practices</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeTab === 'details' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Recycling Trends in Nepal (2020-2024)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="plastic" fill="#8884d8" />
              <Bar dataKey="paper" fill="#82ca9d" />
              <Bar dataKey="glass" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-600">
            * Data represents recycling amounts in kilograms
          </p>
        </div>
      )}
    </div>
  )
}


