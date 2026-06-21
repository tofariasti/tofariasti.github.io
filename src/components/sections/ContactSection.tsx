import { contactCopy, profile } from '../../data/profile'
import { droneContent } from '../../data/drone'
import { uiCopy } from '../../data/navigation'
import { useLocale } from '../../context/LocaleContext'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { RichText } from '../ui/RichText'

function DownloadIcon() {
  return (
    <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

interface ContactSectionProps {
  variant?: 'dev' | 'drone'
}

export function ContactSection({ variant = 'dev' }: ContactSectionProps) {
  const { locale, t } = useLocale()
  const waUrl = buildWhatsAppUrl(variant === 'drone' ? 'drone' : 'dev', locale)

  if (variant === 'drone') {
    return (
      <section className="section section--alt contact-section" id="contacto">
        <div className="container contact-inner">
          <AnimatedSection>
            <span className="tag tag--accent"><LocalizedText value={{ pt: 'Contato', en: 'Contact' }} /></span>
            <h2 className="section-title"><LocalizedText value={droneContent.contactTitle} /></h2>
            <p className="contact-text">
              <RichText text={t(droneContent.contactText)} as="span" />
            </p>
          </AnimatedSection>
          <AnimatedSection className="contact-actions" delay={80}>
            <a href={droneContent.officialSite} className="btn btn--cv btn--lg" target="_blank" rel="noopener noreferrer">
              {t({ pt: 'Site TechDrone360', en: 'TechDrone360 website' })}
            </a>
            <a href={waUrl} className="btn btn--whatsapp btn--lg" target="_blank" rel="noopener noreferrer">
              {t(uiCopy.whatsappChat)}
            </a>
            <a href={droneContent.youtube} className="btn btn--outline" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={droneContent.instagram} className="btn btn--outline" target="_blank" rel="noopener noreferrer">Instagram</a>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-inner">
        <AnimatedSection>
          <span className="tag tag--accent"><LocalizedText value={contactCopy.tag} /></span>
          <h2 className="section-title"><LocalizedText value={contactCopy.title} /></h2>
          <p className="contact-text"><LocalizedText value={contactCopy.text} /></p>
        </AnimatedSection>
        <AnimatedSection className="contact-actions" delay={80}>
          <a href={profile.cvPdf} className="btn btn--cv btn--lg" download={profile.cvPdfDownload}>
            <DownloadIcon />
            {t(uiCopy.cvDownload)}
          </a>
          <a href={profile.cvHtml} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            {t(uiCopy.cvView)}
          </a>
          <a href={waUrl} className="btn btn--whatsapp btn--lg" target="_blank" rel="noopener noreferrer">
            {t(uiCopy.whatsappChat)}
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--outline">{t(uiCopy.sendEmail)}</a>
          <a href={profile.linkedin} className="btn btn--outline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} className="btn btn--outline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </AnimatedSection>
      </div>
    </section>
  )
}
