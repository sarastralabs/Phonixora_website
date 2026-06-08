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
  title: 'Phonixora Bio-Polymer | Eco-Friendly Biodegradable Packaging Solutions',
  description: 'Phonixora Bio-Polymer is a leading manufacturer of biodegradable and bio-based polymer materials. Sustainable carry bags, granules, and custom solutions for packaging, agriculture, and industrial use. Based in Chikkamagaluru & Bangalore, India.',
  keywords: [
    'biodegradable packaging',
    'bio-polymer manufacturer',
    'eco-friendly bags',
    'biodegradable carry bags',
    'bio-polymer granules',
    'sustainable packaging India',
    'compostable bags',
    'green packaging solutions',
    'Phonixora',
    'bioplastic manufacturer Bangalore',
    'biodegradable plastic India',
  ],
  authors: [{ name: 'Phonixora Bio-Polymer' }],
  creator: 'Phonixora Bio-Polymer',
  publisher: 'Phonixora Bio-Polymer',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phonixora.com',
    siteName: 'Phonixora Bio-Polymer',
    title: 'Phonixora Bio-Polymer | Eco-Friendly Biodegradable Packaging Solutions',
    description: 'Leading manufacturer of biodegradable bio-polymer materials — carry bags, granules, and custom solutions for a sustainable future.',
    images: [
      {
        url: '/images/Hero.png',
        width: 1200,
        height: 630,
        alt: 'Phonixora Bio-Polymer - Sustainable Packaging Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phonixora Bio-Polymer | Eco-Friendly Biodegradable Packaging',
    description: 'Leading manufacturer of biodegradable bio-polymer materials for packaging, agriculture, and industrial use.',
    images: ['/images/Hero.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
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
