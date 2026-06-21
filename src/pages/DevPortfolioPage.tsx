import { experience, experienceSection } from '../data/experience'
import { freelance, freelanceSection } from '../data/freelance'
import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline'
import { Hero } from '../components/sections/Hero'
import { ProjectsShowcase } from '../components/sections/ProjectsShowcase'
import { RecruiterHighlights } from '../components/sections/RecruiterHighlights'
import { SkillsGrid } from '../components/sections/SkillsGrid'

export function DevPortfolioPage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <RecruiterHighlights />
      <SkillsGrid />
      <ExperienceTimeline id="experiencia" section={experienceSection} entries={experience} />
      <ExperienceTimeline id="freelance" section={freelanceSection} entries={freelance} variant="freelance" />
      <ProjectsShowcase />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
