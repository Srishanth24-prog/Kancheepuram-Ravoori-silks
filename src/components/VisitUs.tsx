import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STORE_ADDRESS = '18/139, Nehru Rd, Bongul Bazar, Khadak Pura, Kurnool, Andhra Pradesh 518001'
const MAPS_QUERY = encodeURIComponent(STORE_ADDRESS)

export default function VisitUs() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal()
  const { ref: rightRef, visible: rightVisible } = useScrollReveal()

  return (
    <section id="visit" className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Come Experience It
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Visit Our <span className="text-maroon font-semibold">Showroom</span>
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-lg mx-auto mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Some experiences are best felt in person. We invite you to visit and immerse yourself in thousands of silk sarees, warm hospitality, and an atmosphere crafted for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Address */}
            <div className="bg-white p-8 border border-gold/15">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-charcoal mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Our Address
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    Kancheepuram Ravoori Silks<br />
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Contact options */}
              <div className="space-y-4 border-t border-gold/10 pt-6">
                <a
                  href="tel:+919160252528"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-charcoal/50 mb-0.5" style={{ fontFamily: 'var(--font-sans)' }}>Call Us</p>
                    <p className="text-charcoal font-medium text-sm group-hover:text-gold transition-colors duration-200" style={{ fontFamily: 'var(--font-sans)' }}>+91 91602 52528</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919160252528?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20silk%20saree%20collections."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-charcoal/50 mb-0.5" style={{ fontFamily: 'var(--font-sans)' }}>WhatsApp</p>
                    <p className="text-charcoal font-medium text-sm group-hover:text-[#25D366] transition-colors duration-200" style={{ fontFamily: 'var(--font-sans)' }}>+91 91602 52528</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative h-full min-h-[500px] border border-gold/15 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full min-h-[500px]"
                style={{ border: 0, filter: 'grayscale(20%) sepia(10%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kancheepuram Ravoori Silks Location"
              />
              {/* Map overlay label */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border-l-2 border-gold z-10">
                <p className="text-xs tracking-widest uppercase text-gold font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                  Kancheepuram
                </p>
                <p className="text-sm font-medium text-charcoal" style={{ fontFamily: 'var(--font-sans)' }}>
                  Ravoori Silks
                </p>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-3 w-full py-4 border border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <MapPin size={14} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
