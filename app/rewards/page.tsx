'use client'

import { useState } from 'react'
import { Gift, Award } from 'lucide-react'

const rewards = [
  { id: 1, name: 'Eco-friendly Water Bottle', points: 500, image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Reusable Shopping Bag Set', points: 300, image: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Solar-powered Charger', points: 1000, image: '/placeholder.svg?height=100&width=100' },
  { id: 4, name: 'Bamboo Utensil Set', points: 400, image: '/placeholder.svg?height=100&width=100' },
]

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(750)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rewards Center</h1>
      <div className="bg-green-100 p-4 rounded-lg mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Award className="text-green-500 w-8 h-8 mr-3" />
          <div>
            <p className="font-semibold">Your Points</p>
            <p className="text-2xl font-bold text-green-600">{userPoints}</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
          Earn More
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Available Rewards</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white p-4 rounded-lg shadow">
            <img src={reward.image} alt={reward.name} className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="font-semibold mb-2">{reward.name}</h3>
            <p className="text-gray-600 mb-4">{reward.points} points</p>
            <button
              className={`w-full p-2 rounded ${
                userPoints >= reward.points
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors duration-300`}
              disabled={userPoints < reward.points}
            >
              {userPoints >= reward.points ? 'Redeem' : 'Not Enough Points'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


