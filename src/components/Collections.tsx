import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Collection {
  id: string
  name: string
  subtitle: string
  image: string
  description: string
  highlights: string[]
}

const collections: Collection[] = [
  {
    id: 'pelli-pattu',
    name: 'Pelli Pattu',
    subtitle: 'Sarees',
    image: '/pelli-pattu.webp',
    description: 'Sacred bridal silks steeped in Telugu wedding tradition. Our Pelli Pattu collection features the finest ceremonial silk sarees worn by brides on their most precious day.',
    highlights: ['Traditional ceremonial weave', 'Pure silk fabric', 'Auspicious motifs', 'Bridal red & gold'],
  },
  {
    id: 'bridal',
    name: 'Bridal',
    subtitle: 'Collection',
    image: '/collection-bridal.webp',
    description: 'Curated exclusively for the modern Indian bride, our bridal collection brings together the most exquisite Kanchipuram silks with intricate handcrafted details.',
    highlights: ['Handpicked for brides', 'Rich zari borders', 'Signature motifs', 'Premium silk weight'],
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram Silk',
    subtitle: 'Sarees',
    image: '/collection-kanchipuram.webp',
    description: 'The crown jewel of Indian silk — authentic Kanchipuram silk sarees featuring the hallmark three-shuttle weave technique passed down through generations of master weavers.',
    highlights: ['3-shuttle weave technique', 'Real gold zari', 'Silk mark certified', 'Temple & peacock motifs'],
  },
  {
    id: 'banarasi',
    name: 'Banarasi',
    subtitle: 'Sarees',
    image: '/collection-banarasi.webp',
    description: 'Magnificent Banarasi silks featuring intricate Mughal-inspired brocade work with gold and silver threads woven into opulent floral and paisley patterns.',
    highlights: ['Mughal floral patterns', 'Gold & silver brocade', 'Heavy silk base', 'Rich drape quality'],
  },
  {
    id: 'soft-silk',
    name: 'Soft Silk',
    subtitle: 'Sarees',
    image: '/collection-soft-silk.webp',
    description: 'Lightweight and graceful, our soft silk collection offers the elegance of silk with effortless drapeability — perfect for daily wear and semi-formal occasions.',
    highlights: ['Lightweight comfort', 'Subtle woven patterns', 'Pastel & deep tones', 'Easy drape'],
  },
  {
    id: 'cotton',
    name: 'Cotton',
    subtitle: 'Sarees',
    image: '/collection-cotton.webp',
    description: 'Handwoven pure cotton sarees celebrating India\'s rich textile heritage. Breathable, vibrant, and perfect for every season and occasion.',
    highlights: ['Pure handloom cotton', 'Natural dyes', 'Traditional checks', 'Seasonal comfort'],
  },
  {
    id: 'designer',
    name: 'Designer',
    subtitle: 'Sarees',
    image: '/collection-designer.webp',
    description: 'Contemporary designer sarees that blend modern aesthetics with traditional craftsmanship — for the woman who carries tradition forward with her own unique style.',
    highlights: ['Contemporary silhouettes', 'Embellished borders', 'Fusion motifs', 'Statement pieces'],
  },
  {
    id: 'party',
    name: 'Party Wear',
    subtitle: 'Collection',
    image: '/collection-party.webp',
    description: 'Glamorous silk and georgette sarees adorned with sequins, embroidery, and luxurious embellishments — made to dazzle at every celebration.',
    highlights: ['Sequin & crystal work', 'Embroidered borders', 'Evening luxury', 'Rich textures'],
  },
  {
    id: 'festive',
    name: 'Festive',
    subtitle: 'Collection',
    image: '/collection-festive.webp',
    description: 'Bright, joyful, and vibrant — our festive collection captures the spirit of celebration with rich colors and traditional motifs perfect for every festival.',
    highlights: ['Festival-ready colors', 'Traditional motifs', 'Gold zari borders', 'Celebratory designs'],
  },
]

interface GalleryModalProps {
  collection: Collection
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function GalleryModal({ collection, onClose, onPrev, onNext }: GalleryModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 max-w-4xl w-full bg-white max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto img-zoom-container">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
          <span
            className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Collection
          </span>
          <h2
            className="text-3xl md:text-4xl font-light text-charcoal mb-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {collection.name}
          </h2>
          <p
            className="text-lg text-gold font-light mb-6"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            {collection.subtitle}
          </p>
          <div className="w-12 h-px bg-gold mb-6" />
          <p
            className="text-charcoal/75 leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {collection.description}
          </p>
          <ul className="space-y-2 mb-8">
            {collection.highlights.map(h => (
              <li key={h} className="flex items-center gap-3 text-sm text-charcoal/70" style={{ fontFamily: 'var(--font-sans)' }}>
                <span className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <button
            onClick={() => { onClose(); setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior:'smooth'}) }, 300) }}
            className="w-full py-3.5 border border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Enquire About This Collection
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-gold hover:text-white transition-all duration-200 shadow-sm"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          className="absolute top-1/2 -translate-y-1/2 left-2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-gold text-white transition-all duration-200 md:left-[-44px] md:bg-white/10 md:hover:bg-gold"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          className="absolute top-1/2 -translate-y-1/2 right-2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-gold text-white transition-all duration-200 md:right-[-44px] md:bg-white/10 md:hover:bg-gold"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function Collections() {
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const { ref, visible } = useScrollReveal(0.05)

  const openModal = (i: number) => setActiveModal(i)
  const closeModal = () => setActiveModal(null)
  const prevModal = () => setActiveModal(i => (i !== null ? (i - 1 + collections.length) % collections.length : null))
  const nextModal = () => setActiveModal(i => (i !== null ? (i + 1) % collections.length : null))

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our Collections
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Timeless <span className="text-maroon font-semibold">Silk Treasures</span>
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-xl mx-auto mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Explore our curated universe of handpicked silk sarees — from ceremonial bridal silks to vibrant festive weaves, each collection a celebration of India's textile legacy.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {collections.map((collection, i) => (
            <div
              key={collection.id}
              className={`group relative cursor-pointer overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${i === 0 ? 'col-span-2 md:col-span-2 row-span-1' : ''}`}
              style={{ transitionDelay: `${Math.min(i * 80, 600)}ms` }}
              onClick={() => openModal(i)}
            >
              {/* Image */}
              <div className={`img-zoom-container bg-gray-100 ${i === 0 ? 'aspect-[16/9] md:aspect-[16/7]' : 'aspect-[4/5]'}`}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400" />
              </div>

              {/* Label band */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p
                  className="text-xs tracking-[0.3em] uppercase text-gold/80 font-medium mb-0.5"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {collection.subtitle}
                </p>
                <h3
                  className="text-white text-xl md:text-2xl font-light"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {collection.name}
                </h3>
              </div>

              {/* View indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/0 group-hover:bg-gold transition-all duration-300 border border-white/30 group-hover:border-gold">
                <span className="text-white/0 group-hover:text-white text-xs font-medium transition-all duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-charcoal/55 text-sm mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
            Can't find what you're looking for? We have thousands more designs in store.
          </p>
          <button
            onClick={() => { const el = document.getElementById('visit'); if(el) el.scrollIntoView({behavior:'smooth'}) }}
            className="px-10 py-3.5 border border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Visit Our Showroom
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      {activeModal !== null && (
        <GalleryModal
          collection={collections[activeModal]}
          onClose={closeModal}
          onPrev={prevModal}
          onNext={nextModal}
        />
      )}
    </section>
  )
}
