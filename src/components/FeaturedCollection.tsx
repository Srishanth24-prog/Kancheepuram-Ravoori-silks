import { useScrollReveal } from '@/hooks/useScrollReveal'

const featured = [
  {
    id: 1,
    image: '/featured-1.webp',
    name: 'Royal Purple Kanchipuram',
    category: 'Signature Collection',
    span: 'row-span-2',
  },
  {
    id: 2,
    image: '/featured-2.webp',
    name: 'Crimson Bridal Pattu',
    category: 'Bridal Collection',
    span: '',
  },
  {
    id: 3,
    image: '/featured-3.webp',
    name: 'Emerald Contrast Silk',
    category: 'Kanchipuram Silk',
    span: '',
  },
  {
    id: 4,
    image: '/featured-4.webp',
    name: 'Navy Blue Banarasi',
    category: 'Banarasi Collection',
    span: 'row-span-2',
  },
  {
    id: 5,
    image: '/featured-5.webp',
    name: 'Blush Soft Silk',
    category: 'Soft Silk',
    span: '',
  },
  {
    id: 6,
    image: '/featured-6.webp',
    name: 'Mango Gold Kanchipuram',
    category: 'Signature Collection',
    span: '',
  },
]

export default function FeaturedCollection() {
  const { ref, visible } = useScrollReveal(0.05)

  return (
    <section id="featured" className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Handpicked For You
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Featured <span className="text-maroon font-semibold">Signatures</span>
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-lg mx-auto mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A glimpse into our most sought-after pieces — each one a masterwork of silk, zari, and generations of craft.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px]"
        >
          {featured.map((item, i) => (
            <div
              key={item.id}
              className={`relative group img-zoom-container cursor-pointer overflow-hidden bg-gray-100 ${item.span} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior:'smooth'}) }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p
                  className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-white text-lg md:text-xl font-light"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.name}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gold/50" />
                  <span className="text-gold text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Enquire</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => { const el = document.getElementById('visit'); if(el) el.scrollIntoView({behavior:'smooth'}) }}
            className="px-10 py-3.5 bg-maroon text-white text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#8C3A4A' }}
          >
            View All In Store
          </button>
        </div>
      </div>
    </section>
  )
}
