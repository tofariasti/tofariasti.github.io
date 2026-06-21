import { skills, skillsSection } from '../../data/skills'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'

export function SkillsGrid() {
  return (
    <section className="section section--alt" id="competencias">
      <div className="container">
        <AnimatedSection>
          <span className="tag tag--accent"><LocalizedText value={skillsSection.tag} /></span>
          <h2 className="section-title"><LocalizedText value={skillsSection.title} /></h2>
        </AnimatedSection>
        <div className="skills-grid skills-grid--wide">
          {skills.map((group, i) => (
            <AnimatedSection key={group.id} as="article" className="skill-group" delay={i * 50}>
              <h3><LocalizedText value={group.title} /></h3>
              <p>{group.items}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
