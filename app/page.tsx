'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, AlertTriangle, Award, User, Lightbulb, ArrowDown } from 'lucide-react'

const features = [
  { name: 'Map', description: 'Find recycling centers near you', icon: MapPin, href: '/map' },
  { name: 'Report', description: 'Report environmental issues', icon: AlertTriangle, href: '/report' },
  { name: 'Rewards', description: 'Earn points and redeem rewards', icon: Award, href: '/rewards' },
  { name: 'Profile', description: 'Manage your account and progress', icon: User, href: '/profile' },
  { name: 'Tips', description: 'Get eco-friendly living tips', icon: Lightbulb, href: '/tips' },
]

const stats = [
  { name: 'Trash Recycled', value: '10,000 kg' },
  { name: 'CO2 Emissions Reduced', value: '5,000 kg' },
  { name: 'Trees Planted', value: '1,000' },
  { name: 'Active Users', value: '50,000+' },
]

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-green-100 to-white dark:from-green-900 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to ReGen
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of eco-warriors and make a positive impact on the environment. Together, we can create a sustainable future!
            </p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button onClick={scrollToFeatures} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
                Explore Features
                <ArrowDown className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="bg-green-50 dark:bg-green-900 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{stat.name}</h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stat.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/impact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Learn More About Our Impact
            </Link>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href} className="block">
                  <feature.icon size={48} className="text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


