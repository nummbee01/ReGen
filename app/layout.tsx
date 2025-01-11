import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'ReGen - Empowering Sustainable Living',
  description: 'Join ReGen in creating a sustainable future through community engagement and eco-friendly practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen pt-16 pb-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}


