import type { SectionCopy, TimelineEntry } from '../../types/content'
import { freelancePill } from '../../data/freelance'
import { useLocale } from '../../context/LocaleContext'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { Pill } from '../ui/Pill'
import { RichText } from '../ui/RichText'

interface ExperienceTimelineProps {
  id: string
  section: SectionCopy
  entries: TimelineEntry[]
  variant?: 'default' | 'freelance'
}

export function ExperienceTimeline({ id, section, entries, variant = 'default' }: ExperienceTimelineProps) {
  const { t, locale } = useLocale()

  return (
    <section className={`section${variant === 'default' && id === 'experiencia' ? '' : ' section--alt'}`} id={id}>
      <div className="container">
        <AnimatedSection>
          <span className={`tag ${variant === 'freelance' ? 'tag--accent' : id === 'experiencia' ? 'tag--dark' : 'tag--accent'}`}>
            <LocalizedText value={section.tag} />
          </span>
          <h2 className="section-title"><LocalizedText value={section.title} /></h2>
          {section.lead && <p className="section-lead"><LocalizedText value={section.lead} /></p>}
        </AnimatedSection>
        <div className={`timeline${variant === 'freelance' ? ' timeline--freelance' : ''}`}>
          {entries.map((entry, i) => (
            <AnimatedSection key={entry.id} as="article" className="timeline-item" variant="fadeLeft" delay={i * 40}>
              <div className="timeline-meta">
                {entry.period[locale] && (
                  <time dateTime={entry.periodDatetime}>{t(entry.period)}</time>
                )}
                {entry.place && <span className="timeline-place">{t(entry.place)}</span>}
              </div>
              <h3>
                {t(entry.title)}
                {entry.titleEn && locale === 'pt' && <span className="timeline-en">{entry.titleEn}</span>}
              </h3>
              <p className="timeline-company">
                {t(entry.company)}
                {entry.companyUrl && (
                  <>
                    {' · '}
                    <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                      {entry.companyUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </>
                )}
              </p>
              <p className="timeline-context">
                {t(entry.context)}
                {entry.contextUrl && (
                  <>
                    {' · '}
                    <a href={entry.contextUrl} target="_blank" rel="noopener noreferrer">
                      {entry.contextUrl.replace('https://', '')}
                    </a>
                  </>
                )}
              </p>
              <div className="tag-row">
                {entry.freelancePill && <Pill variant="freelance">{t(freelancePill)}</Pill>}
                {entry.featuredPill && <Pill variant="featured">{entry.featuredPill}</Pill>}
                {entry.pills.map((pill) => (
                  <Pill key={pill}>{pill}</Pill>
                ))}
              </div>
              <ul className="timeline-bullets">
                {t(entry.bullets).map((bullet, j) => (
                  <li key={j}><RichText text={bullet} /></li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
