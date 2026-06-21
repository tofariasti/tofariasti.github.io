export type Locale = 'pt' | 'en' | 'es'

export const LOCALES: Locale[] = ['pt', 'en', 'es']

export type Localized<T> = Record<Locale, T>

export type WhatsAppContext = 'dev' | 'drone'

export type ProjectCategory = 'corporate' | 'freelance' | 'oss'

export interface SiteTab {
  id: 'dev' | 'drone'
  path: string
  label: Localized<string>
  shortLabel: Localized<string>
  title: Localized<string>
}

export interface NavLink {
  id: string
  href: string
  label: Localized<string>
}

export interface HeroStat {
  value: string
  label: Localized<string>
}

export interface Profile {
  name: string
  role: Localized<string>
  subtitle: string
  description: Localized<string>
  location: Localized<string>
  photoUrl: string
  stats: HeroStat[]
  email: string
  linkedin: string
  github: string
  cvPdf: string
  cvPdfDownload: string
  cvHtml: string
}

export interface Highlight {
  id: string
  featured?: boolean
  text: Localized<string>
}

export interface SkillGroup {
  id: string
  title: Localized<string>
  items: string
}

export interface TimelineEntry {
  id: string
  period: Localized<string>
  periodDatetime?: string
  place?: Localized<string>
  title: Localized<string>
  titleEn?: string
  company: Localized<string>
  companyUrl?: string
  context: Localized<string>
  contextUrl?: string
  pills: string[]
  featuredPill?: string
  freelancePill?: boolean
  bullets: Localized<string[]>
}

export interface ProjectCard {
  id: string
  category: ProjectCategory
  badge: string
  title: string
  pills: string[]
  description: Localized<string>
  features?: Localized<string[]>
  link?: string
  linkLabel?: Localized<string>
}

export interface EducationEntry {
  id: string
  title: Localized<string>
  meta: string
  description?: Localized<string>
  article?: Localized<string>
  wide?: boolean
}

export interface Certification {
  id: string
  text: string
}

export interface DroneLink {
  id: string
  type: 'site' | 'youtube' | 'instagram'
  url: string
  title: Localized<string>
  handle: string
  cta: Localized<string>
}

export interface DroneContent {
  brand: string
  title: Localized<string>
  subtitle: Localized<string>
  description: Localized<string>
  stats: HeroStat[]
  trustNote: Localized<string>
  links: DroneLink[]
  contactTitle: Localized<string>
  contactText: Localized<string>
  officialSite: string
  youtube: string
  instagram: string
}

export interface CookieCopy {
  title: Localized<string>
  lead: Localized<string>
  detailsSummary: Localized<string>
  detailsText: Localized<string>
  configure: Localized<string>
  reject: Localized<string>
  accept: Localized<string>
}

export interface SectionCopy {
  tag: Localized<string>
  title: Localized<string>
  lead?: Localized<string>
}
