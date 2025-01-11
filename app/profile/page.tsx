'use client'

import { useState } from 'react'
import { User, Mail, Phone, MapPin, Award, Recycle } from 'lucide-react'

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: '...Chinnaswami Muthuswami Venugopal Iyer.',
    email: 'iyer@gmail.com',
    phone: '+91 1234567890',
    location: 'India',
    points: 750,
    level: 'Taxi Driver',
    recyclables: [
      { type: 'Plastic', amount: '50 kg' },
      { type: 'Paper', amount: '30 kg' },
      { type: 'Glass', amount: '20 kg' },
    ]
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center mb-6">
          <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-32 h-32 rounded-full mr-6" />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.level}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Mail className="text-green-500 w-5 h-5 mr-2" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-green-500 w-5 h-5 mr-2" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-green-500 w-5 h-5 mr-2" />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center">
            <Award className="text-green-500 w-5 h-5 mr-2" />
            <span>{user.points} points</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Recycling Activity</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {user.recyclables.map((item, index) => (
            <div key={index} className="bg-green-100 p-4 rounded-lg">
              <Recycle className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold">{item.type}</h3>
              <p className="text-2xl font-bold text-green-600">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


