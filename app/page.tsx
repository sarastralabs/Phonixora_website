import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Comparison from '@/components/Comparison'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Phonixora Bio-Polymer',
  url: 'https://phonixora.com',
  logo: 'https://phonixora.com/logo.png',
  description: 'Leading manufacturer of biodegradable and bio-based polymer materials — carry bags, granules, and custom solutions for packaging, agriculture, and industrial use.',
  email: 'info@phonixora.com',
  telephone: '+91-63631-49612',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chikkamagaluru & Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  founders: [
    { '@type': 'Person', name: 'Akash Nayak', jobTitle: 'Founder & Director' },
    { '@type': 'Person', name: 'Nithin', jobTitle: 'Director' },
    { '@type': 'Person', name: 'Manjunath', jobTitle: 'CEO' },
  ],
  sameAs: [],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main aria-label="Phonixora Bio-Polymer website">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Comparison />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
