import { aboutCopy } from '../../data/profile'
import { useLocale } from '../../context/LocaleContext'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { RichText } from '../ui/RichText'

export function AboutSection() {
  const { t } = useLocale()

  return (
    <section className="section section--alt" id="sobre">
      <div className="container">
        <AnimatedSection>
          <span className="tag tag--dark"><LocalizedText value={aboutCopy.tag} /></span>
          <h2 className="section-title"><LocalizedText value={aboutCopy.title} /></h2>
        </AnimatedSection>
        <div className="about-text">
          {t(aboutCopy.paragraphs).map((paragraph, i) => (
            <AnimatedSection key={i} className="about-p" delay={i * 80} as="article">
              <RichText text={paragraph} as="p" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
