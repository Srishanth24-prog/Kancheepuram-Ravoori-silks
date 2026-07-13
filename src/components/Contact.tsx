import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface FormData {
  name: string
  email: string
  phone: string
  occasion: string
  message: string
}

const occasions = [
  'Wedding / Bridal',
  'Reception',
  'Festival',
  'Religious Ceremony',
  'Party / Event',
  'Gift',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref, visible } = useScrollReveal()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = `w-full bg-white border border-gold/20 px-4 py-3.5 text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200`

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Send Us an <span className="text-maroon font-semibold">Enquiry</span>
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-6">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-lg mx-auto mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Have a question about our collections or wish to reserve a consultation? We'd love to hear from you.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {submitted ? (
            <div className="text-center py-20 border border-gold/20 bg-ivory">
              <CheckCircle size={48} className="text-gold mx-auto mb-6" />
              <h3
                className="text-3xl font-light text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Thank You, {form.name}!
              </h3>
              <p
                className="text-charcoal/65 max-w-sm mx-auto leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Your enquiry has been received. Our team will get back to you within 24 hours. We look forward to welcoming you to our showroom.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-8 py-3.5 border border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2"
                    htmlFor="name"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2"
                    htmlFor="phone"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2"
                  htmlFor="email"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2"
                  htmlFor="occasion"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">Select an Occasion</option>
                  {occasions.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2"
                  htmlFor="message"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you're looking for — collection, occasion, specific design preferences..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-charcoal text-white text-sm font-medium tracking-widest uppercase hover:bg-maroon transition-all duration-300 hover:scale-[1.01] shadow-lg"
                style={{ fontFamily: 'var(--font-sans)', backgroundColor: '#333333' }}
              >
                <Send size={14} />
                Send Enquiry
              </button>

              <p className="text-center text-xs text-charcoal/45" style={{ fontFamily: 'var(--font-sans)' }}>
                We typically respond within 24 hours. For immediate assistance, call or WhatsApp us directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
