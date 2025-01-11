import Link from 'next/link'
import { Facebook, Instagram, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">ReGen</h2>
            <p className="text-gray-600 dark:text-gray-300">Empowering sustainable living through technology and community engagement.</p>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300">
            © 2025 ReGen. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


