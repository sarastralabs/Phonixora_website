import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import '../components/Navbar.css'
import '../components/Hero.css'
import '../components/About.css'
import '../components/Products.css'
import '../components/Comparison.css'
import '../components/Gallery.css'
import '../components/Contact.css'
import '../components/Footer.css'
import '../components/SplashLoader.css'
import SplashLoader from '@/components/SplashLoader'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair'
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  title: 'Phonixora - Biodegradable Packaging Solutions',
  description: 'Premium biodegradable packaging solutions for a sustainable future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <SplashLoader>{children}</SplashLoader>
      </body>
    </html>
  )
}
