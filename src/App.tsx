import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Collections from '@/components/Collections'
import FeaturedCollection from '@/components/FeaturedCollection'
import Gallery from '@/components/Gallery'
import VisitUs from '@/components/VisitUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { FloatingWhatsApp, ScrollProgress, LoadingScreen } from '@/components/FloatingElements'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <FeaturedCollection />
        <Gallery />
        <VisitUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
