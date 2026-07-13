import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/919160252528?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20silk%20saree%20collections."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span
        className="bg-white text-charcoal text-xs font-medium px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gold/20"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Chat with us
      </span>
      {/* Button */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-float"
        style={{ background: '#25D366' }}>
        <MessageCircle size={26} />
      </div>
    </a>
  )
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #8C3A4A, #D4AF37)',
        }}
      />
    </div>
  )
}

export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setHidden(true), 2200)
    const timer2 = setTimeout(onFinish, 2700)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-charcoal transition-all duration-500 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Loading bar */}
      <div className="w-48 h-px bg-white/20 overflow-hidden mb-8">
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #8C3A4A, #D4AF37)',
            animation: 'loadingProgress 2s ease-out forwards',
          }}
        />
      </div>

      <h1
        className="text-3xl font-light text-white tracking-widest mb-2"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Kancheepuram Ravoori
      </h1>
      <p
        className="text-xs tracking-[0.5em] uppercase text-gold"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Silks
      </p>
    </div>
  )
}
