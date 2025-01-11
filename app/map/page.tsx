'use client'

import { useState } from 'react'

export default function MapPage() {
  const [location, setLocation] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recycling Centers Map</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="bg-gray-200 h-96 flex items-center justify-center rounded">
        <p className="text-gray-500">Map API will be integrated here</p>
      </div>
    </div>
  )
}


