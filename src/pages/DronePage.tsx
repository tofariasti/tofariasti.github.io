import { motion } from 'framer-motion'
import { droneContent } from '../data/drone'
import { uiCopy } from '../data/navigation'
import { useLocale } from '../context/LocaleContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ContactSection } from '../components/sections/ContactSection'
import { LocalizedText } from '../components/ui/Localized'
import { RichText } from '../components/ui/RichText'

function DroneIcon({ type }: { type: 'site' | 'youtube' | 'instagram' }) {
  if (type === 'youtube') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.2c2.7 0 3 .01 4.04.06 1.02.05 1.58.22 1.95.37.49.19.84.42 1.21.79.37.37.6.72.79 1.21.15.37.32.93.37 1.95.05 1.04.06 1.34.06 4.04s-.01 3-.06 4.04c-.05 1.02-.22 1.58-.37 1.95-.19.49-.42.84-.79 1.21-.37.37-.72.6-1.21.79-.37.15-.93.32-1.95.37-1.04.05-1.34.06-4.04.06s-3-.01-4.04-.06c-1.02-.05-1.58-.22-1.95-.37a3.3 3.3 0 0 1-1.21-.79 3.3 3.3 0 0 1-.79-1.21c-.15-.37-.32-.93-.37-1.95C2.2 15 2.2 14.7 2.2 12s.01-3 .06-4.04c.05-1.02.22-1.58.37-1.95.19-.49.42-.84.79-1.21.37-.37.72-.6 1.21-.79.37-.15.93-.32 1.95-.37C9 2.2 9.3 2.2 12 2.2zm0 1.8a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm5.9-2.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" />
      </svg>
    )
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function DronePage() {
  const { locale, t } = useLocale()
  const reduced = useReducedMotion()
  const waUrl = buildWhatsAppUrl('drone', locale)

  return (
    <main>
      <section className="hero hero--drone" id="hero">
        <div className="hero-glow hero-glow--drone" aria-hidden="true" />
        <div className="container hero-grid hero-grid--drone">
          <div className="hero-content">
            <motion.span className="tag tag--accent" initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {droneContent.brand}
            </motion.span>
            <motion.h1 initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <LocalizedText value={droneContent.title} />
            </motion.h1>
            <motion.p className="hero-subtitle" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <LocalizedText value={droneContent.subtitle} />
            </motion.p>
            <motion.p className="hero-desc" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <LocalizedText value={droneContent.description} />
            </motion.p>
            <motion.div className="hero-cta" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <a href={droneContent.youtube} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href={droneContent.instagram} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={waUrl} className="btn btn--whatsapp btn--lg" target="_blank" rel="noopener noreferrer">{t(uiCopy.whatsapp)}</a>
            </motion.div>
            <motion.ul className="hero-stats" aria-label={t({ pt: 'Serviços', en: 'Services', es: 'Servicios' })} initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              {droneContent.stats.map((stat) => (
                <li key={stat.value}>
                  <strong>{stat.value}</strong>
                  <LocalizedText value={stat.label} />
                </li>
              ))}
            </motion.ul>
            <div className="recruiter-note drone-trust-note">
              <RichText text={t(droneContent.trustNote)} as="p" />
            </div>
          </div>
          <div className="hero-visual hero-visual--drone">
            <div className="drone-portfolio drone-portfolio--hero">
              {droneContent.links.map((link, i) => (
                <AnimatedSection key={link.id} delay={i * 80}>
                  <a href={link.url} className={`drone-card drone-card--${link.type}`} target="_blank" rel="noopener noreferrer">
                    <span className="drone-card__icon"><DroneIcon type={link.type} /></span>
                    <span className="drone-card__body">
                      <strong><LocalizedText value={link.title} /></strong>
                      <span className="drone-card__handle">{link.handle}</span>
                      <span className="drone-card__cta"><LocalizedText value={link.cta} /></span>
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection variant="drone" />
    </main>
  )
}
