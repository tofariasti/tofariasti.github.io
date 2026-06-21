import { certifications, education, educationSection } from '../../data/education'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'

export function EducationSection() {
  return (
    <section className="section section--alt" id="formacao">
      <div className="container">
        <AnimatedSection>
          <span className="tag tag--dark"><LocalizedText value={educationSection.tag} /></span>
          <h2 className="section-title"><LocalizedText value={educationSection.title} /></h2>
        </AnimatedSection>
        <div className="edu-grid">
          {education.map((item, i) => (
            <AnimatedSection
              key={item.id}
              as="article"
              className={`edu-card${item.wide ? ' edu-card--wide' : ''}`}
              delay={i * 60}
            >
              <h3><LocalizedText value={item.title} /></h3>
              <p className="edu-meta">{item.meta}</p>
              {item.description && <p><LocalizedText value={item.description} /></p>}
              {item.article && (
                <p className="edu-article"><LocalizedText value={item.article} /></p>
              )}
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={100}>
          <h3 className="certs-title"><LocalizedText value={educationSection.certsTitle} /></h3>
          <ul className="certs-list">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.id} as="li" delay={i * 30}>
                {cert.text}
              </AnimatedSection>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  )
}
