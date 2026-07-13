import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleExplore = () => {
    const el = document.getElementById('collections')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-saree.webp')`,
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Label */}
        <div
          className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold/90 mb-6 font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Kancheepuram · Est. Since Generations
          </span>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-4 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Kancheepuram
          </h1>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-wide text-gradient-gold"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ravoori Silks
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center gap-4 my-8 w-64 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-700 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p
            className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            Where every thread tells a story of tradition, artistry, and timeless elegance. Experience the finest Kancheepuram silks, handpicked for the discerning bride.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 items-center transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <button
            onClick={handleExplore}
            className="px-10 py-4 bg-gold text-white text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
            style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#D4AF37' }}
          >
            Explore Collections
          </button>
          <button
            onClick={() => { const el = document.getElementById('about'); if(el) el.scrollIntoView({behavior:'smooth'}) }}
            className="px-10 py-4 border border-white/50 text-white text-sm font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our Heritage
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-all duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: '1s' }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  )
}
