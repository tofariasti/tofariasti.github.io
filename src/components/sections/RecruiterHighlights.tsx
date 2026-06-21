import { highlights, highlightsSection } from '../../data/highlights'
import { useLocale } from '../../context/LocaleContext'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { RichText } from '../ui/RichText'

export function RecruiterHighlights() {
  const { t } = useLocale()

  return (
    <section className="section" id="destaques-recrutador">
      <div className="container">
        <AnimatedSection>
          <span className="tag tag--accent"><LocalizedText value={highlightsSection.tag} /></span>
          <h2 className="section-title"><LocalizedText value={highlightsSection.title} /></h2>
        </AnimatedSection>
        <div className="highlights-grid">
          {highlights.map((item, i) => (
            <AnimatedSection
              key={item.id}
              as="article"
              className={`highlight-card${item.featured ? ' highlight-card--featured' : ''}`}
              delay={i * 60}
            >
              <RichText text={t(item.text)} as="p" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
