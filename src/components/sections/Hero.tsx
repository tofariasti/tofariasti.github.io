import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { uiCopy } from '../../data/navigation'
import { useLocale } from '../../context/LocaleContext'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { RichText } from '../ui/RichText'

function DownloadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg className="btn-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export function Hero() {
  const { locale, t } = useLocale()
  const reduced = useReducedMotion()
  const waUrl = buildWhatsAppUrl('dev', locale)

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <motion.span
            className="tag tag--accent"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LocalizedText value={profile.role} />
          </motion.span>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.subtitle}
          </motion.p>
          <motion.p
            className="hero-desc"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <RichText text={t(profile.description)} />
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={profile.cvPdf} className="btn btn--cv btn--lg" download={profile.cvPdfDownload}>
              <DownloadIcon />
              {t(uiCopy.cvDownload)}
            </a>
            <a href={profile.cvHtml} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              {t(uiCopy.cvView)}
            </a>
            <a href={waUrl} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
              {t(uiCopy.whatsappChat)}
            </a>
            <a href={profile.github} className="btn btn--outline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </motion.div>
          <motion.ul
            className="hero-stats"
            aria-label={t({ pt: 'Destaques', en: 'Highlights' })}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {profile.stats.map((stat) => (
              <li key={stat.value}>
                <strong>{stat.value}</strong>
                <LocalizedText value={stat.label} />
              </li>
            ))}
          </motion.ul>
        </div>
        <AnimatedSection className="hero-visual" variant="scale" delay={200}>
          <div className="hero-photo-wrap">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="hero-photo"
              width={320}
              height={320}
              loading="eager"
              decoding="async"
            />
          </div>
          <p className="hero-location">
            <LocalizedText value={profile.location} />
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
