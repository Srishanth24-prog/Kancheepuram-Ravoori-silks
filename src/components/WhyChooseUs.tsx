import { ShieldCheck, Gem, HandHeart, Crown, HeartHandshake, Sparkles } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Authentic Kanchipuram Silks',
    desc: 'Certified authentic — sourced directly from master weavers, ensuring 100% pure silk with real gold and silver zari.',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Our rigorous selection process ensures only the finest silk sarees with perfect weave and unmatched durability.',
  },
  {
    icon: HandHeart,
    title: 'Handpicked Collections',
    desc: 'Each piece is personally handpicked by our experts — a curated universe of thousands of designs and motifs.',
  },
  {
    icon: Crown,
    title: 'Bridal Specialists',
    desc: 'With generations of experience dressing brides, we understand the sacred importance of the wedding saree.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Customer Service',
    desc: 'Our warm, knowledgeable team treats every customer like family and guides you to the saree that speaks to your heart.',
  },
  {
    icon: Sparkles,
    title: 'Elegant Shopping Experience',
    desc: 'Our showroom is designed for a serene, unhurried experience — explore, compare, and fall in love at your own pace.',
  },
]

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal(0.05)

  return (
    <section id="why-us" className="py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 50%, #FAF7F2 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold font-medium mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The <span className="text-maroon font-semibold">Ravoori</span> Promise
          </h2>
          <div className="luxury-divider max-w-xs mx-auto mt-4">
            <span />
          </div>
          <p
            className="text-charcoal/65 max-w-lg mx-auto mt-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            More than a showroom — we are custodians of a tradition that has dressed brides and adorned celebrations for generations.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className={`group relative bg-white border border-gold/10 p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500" />

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-gold/10 group-hover:bg-gold group-hover:text-white text-gold transition-all duration-300 mb-4">
                  <Icon size={18} />
                </div>

                <h3
                  className="text-lg font-medium text-charcoal mb-2 group-hover:text-maroon transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-charcoal/65 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {reason.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
