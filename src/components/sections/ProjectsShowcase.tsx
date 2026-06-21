import { useMemo, useState } from 'react'
import type { ProjectCategory } from '../../types/content'
import { projects, projectsSection } from '../../data/projects'
import { uiCopy } from '../../data/navigation'
import { useLocale } from '../../context/LocaleContext'
import { AnimatedSection } from '../ui/AnimatedSection'
import { LocalizedText } from '../ui/Localized'
import { Pill } from '../ui/Pill'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: typeof uiCopy.filterAll }[] = [
  { id: 'all', label: uiCopy.filterAll },
  { id: 'corporate', label: uiCopy.filterCorporate },
  { id: 'freelance', label: uiCopy.filterFreelance },
  { id: 'oss', label: uiCopy.filterOss },
]

export function ProjectsShowcase() {
  const { t } = useLocale()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="section" id="destaques">
      <div className="container">
        <AnimatedSection>
          <span className="tag tag--accent"><LocalizedText value={projectsSection.tag} /></span>
          <h2 className="section-title"><LocalizedText value={projectsSection.title} /></h2>
          <p className="section-lead"><LocalizedText value={projectsSection.lead!} /></p>
        </AnimatedSection>

        <div className="project-filters" role="tablist" aria-label={t({ pt: 'Filtrar projetos', en: 'Filter projects', es: 'Filtrar proyectos' })}>
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              className={`project-filter${filter === id ? ' project-filter--active' : ''}`}
              onClick={() => setFilter(id)}
            >
              {t(label)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <AnimatedSection
              key={project.id}
              as="article"
              className={`project-card project-card--${project.category}`}
              delay={i * 40}
            >
              <span className={`project-badge project-badge--${project.category}`}>{project.badge}</span>
              <h3>{project.title}</h3>
              <div className="tag-row">
                {project.pills.map((pill) => (
                  <Pill key={pill}>{pill}</Pill>
                ))}
              </div>
              <p><LocalizedText value={project.description} /></p>
              {project.features && (
                <ul className="project-features">
                  {t(project.features).map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              )}
              {project.link && (
                <a href={project.link} className="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">
                  {t(project.linkLabel ?? uiCopy.siteLink)}
                </a>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
