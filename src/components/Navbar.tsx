import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex flex-col items-start gap-0 group"
        >
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-maroon' : 'text-white'
              }`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Kancheepuram Ravoori
          </span>
          <span
            className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white/80'
              }`}
            style={{ letterSpacing: '0.2em', fontFamily: 'var(--font-sans)' }}
          >
            Silks
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${scrolled
                  ? activeSection === link.href.replace('#', '')
                    ? 'text-maroon'
                    : 'text-charcoal hover:text-maroon'
                  : 'text-white/90 hover:text-white'
                }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className={`ml-4 px-5 py-2 text-sm font-medium tracking-widest uppercase border transition-all duration-300 hover:scale-105 ${scrolled
                ? 'border-gold text-gold hover:bg-gold hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-maroon'
              }`}
            style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.1em' }}
          >
            Enquire
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1 border-t border-gold/20">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left py-3 text-sm font-medium tracking-wide border-b border-gray-100 last:border-0 transition-colors duration-200 ${activeSection === link.href.replace('#', '')
                  ? 'text-maroon'
                  : 'text-charcoal hover:text-maroon'
                }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-3 py-3 text-sm font-medium tracking-widest uppercase border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  )
}
