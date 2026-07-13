import { MapPin, Phone, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

const collectionsLinks = [
  'Pelli Pattu Sarees',
  'Bridal Collection',
  'Kanchipuram Silk',
  'Banarasi Sarees',
  'Soft Silk Sarees',
  'Designer Sarees',
]

const handleNav = (href: string) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Top gold line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2
                className="text-2xl font-light text-white"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Kancheepuram <br />
                <span className="text-gradient-gold font-semibold">Ravoori Silks</span>
              </h2>
              <p
                className="text-xs tracking-[0.25em] uppercase text-white/40 mt-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Premium Silk Saree Showroom
              </p>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Trusted custodians of authentic Kancheepuram silk, weaving together tradition, heritage, and the dreams of brides for generations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919160252528?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20silk%20saree%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="tel:+919160252528"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Phone"
              >
                <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/55 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-3 h-px bg-gold/0 group-hover:bg-gold/80 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Collections
            </h3>
            <ul className="space-y-3">
              {collectionsLinks.map(c => (
                <li key={c}>
                  <button
                    onClick={() => handleNav('#collections')}
                    className="text-white/55 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-3 h-px bg-gold/0 group-hover:bg-gold/80 transition-all duration-300" />
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  18/139, Nehru Rd, Bongul Bazar,<br />Khadak Pura, Kurnool,<br />Andhra Pradesh 518001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+919160252528" className="text-white/55 text-sm hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                  +91 91602 52528
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle size={14} className="text-gold flex-shrink-0" />
                <a href="https://wa.me/919160252528" target="_blank" rel="noopener noreferrer" className="text-white/55 text-sm hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} Kancheepuram Ravoori Silks. All rights reserved.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            Crafted with love for India's silk heritage.
          </p>
        </div>
      </div>
    </footer>
  )
}
