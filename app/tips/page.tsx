'use client'

import { useState } from 'react'
import { Lightbulb, ThumbsUp, MessageSquare } from 'lucide-react'

const tips = [
  {
    id: 1,
    title: 'Reduce Single-Use Plastics',
    content: 'Bring your own reusable bags, water bottles, and coffee cups to minimize plastic waste.',
    likes: 120,
    comments: 15,
  },
  {
    id: 2,
    title: 'Compost Food Scraps',
    content: 'Start a compost bin for food scraps and yard waste to reduce landfill waste and create nutrient-rich soil.',
    likes: 95,
    comments: 8,
  },
  {
    id: 3,
    title: 'Use Energy-Efficient Appliances',
    content: 'Replace old appliances with energy-efficient models to reduce your carbon footprint and save on energy bills.',
    likes: 150,
    comments: 20,
  },
  {
    id: 4,
    title: 'Opt for Sustainable Transportation',
    content: 'Walk, bike, or use public transportation when possible to reduce emissions from personal vehicles.',
    likes: 80,
    comments: 12,
  },
]

export default function TipsPage() {
  const [likedTips, setLikedTips] = useState<number[]>([])

  const handleLike = (tipId: number) => {
    if (likedTips.includes(tipId)) {
      setLikedTips(likedTips.filter(id => id !== tipId))
    } else {
      setLikedTips([...likedTips, tipId])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Eco-Friendly Living Tips</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white p-6 rounded-lg shadow">
            <Lightbulb className="text-green-500 w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-600 mb-4">{tip.content}</p>
            <div className="flex items-center justify-between">
              <button
                className={`flex items-center ${
                  likedTips.includes(tip.id) ? 'text-green-500' : 'text-gray-500'
                }`}
                onClick={() => handleLike(tip.id)}
              >
                <ThumbsUp className="w-5 h-5 mr-1" />
                <span>{tip.likes + (likedTips.includes(tip.id) ? 1 : 0)}</span>
              </button>
              <div className="flex items-center text-gray-500">
                <MessageSquare className="w-5 h-5 mr-1" />
                <span>{tip.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


