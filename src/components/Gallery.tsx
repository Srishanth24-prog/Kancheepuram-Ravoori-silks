import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const galleryItems = [
  {
    id: 1,
    image: 'public/Screenshot 2026-07-08 141143.png',
    title: 'Showroom exterior',
    description: 'Our grand showroom facade, welcoming you with warmth and elegance.',
    span: 'md:col-span-2',
  },
  {
    id: 3,
    image: 'public/Screenshot 2026-07-10 151557.png',
    title: 'Kanchipuram Silks',
    description: 'Pure authentic Kanchipuram silks, direct from the weaving capital.',
    span: '',
  },
  {
    id: 4,
    image: 'public/Screenshot 2026-07-08 141201.png',
    title: 'Showroom Interior',
    description: 'Helping brides find their dream saree for their most special day.',
    span: '',
  },
  {
    id: 5,
    image: '/collection-banarasi.webp',
    title: 'Banarasi Collection',
    description: 'Magnificent Banarasi silks with intricate gold and silver brocade work.',
    span: 'md:col-span-2',
  },
]

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const { ref, visible } = useScrollReveal(0.05)

  const closeLightbox = () => setLightboxIdx(null)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            The Showroom
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            A World of <span className="text-maroon font-semibold">Silk & Splendour</span>
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-lg mx-auto mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Step inside Kancheepuram Ravoori Silks and immerse yourself in an ambience that honours both heritage and luxury. Every corner is crafted to make your saree selection a cherished memory.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer img-zoom-container overflow-hidden bg-gray-100 h-56 md:h-72 lg:h-80 ${item.span} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center block"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                <h3 className="text-white text-lg font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item.description}
                </p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/0 group-hover:bg-gold transition-all duration-300 text-white/0 group-hover:text-white">
                <ZoomIn size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95"
          onClick={closeLightbox}
        >
          <div className="max-w-4xl w-full max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIdx].image}
              alt={galleryItems[lightboxIdx].title}
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                {galleryItems[lightboxIdx].title}
              </h3>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                {galleryItems[lightboxIdx].description}
              </p>
            </div>
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-gold text-white transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  )
}
