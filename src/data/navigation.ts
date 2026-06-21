import type { NavLink, SiteTab } from '../types/content'

export const siteTabs: SiteTab[] = [
  {
    id: 'dev',
    path: '/',
    label: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
    shortLabel: { pt: 'Desenv. Software', en: 'Software Dev' },
    title: { pt: 'Portfólio Desenvolvedor de Software', en: 'Software Developer Portfolio' },
  },
  {
    id: 'drone',
    path: '/drone',
    label: { pt: 'Operador de Drone', en: 'Drone Operator' },
    shortLabel: { pt: 'Op. Drone', en: 'Drone Op.' },
    title: { pt: 'Tech Drone 360 — Operador de Drone', en: 'Tech Drone 360 — Drone Operator' },
  },
]

export const devNavLinks: NavLink[] = [
  { id: 'sobre', href: '#sobre', label: { pt: 'Atuação', en: 'Approach' } },
  { id: 'destaques-recrutador', href: '#destaques-recrutador', label: { pt: 'Principais', en: 'Highlights' } },
  { id: 'competencias', href: '#competencias', label: { pt: 'Competências', en: 'Skills' } },
  { id: 'experiencia', href: '#experiencia', label: { pt: 'Experiência', en: 'Experience' } },
  { id: 'freelance', href: '#freelance', label: { pt: 'Freelance', en: 'Freelance' } },
  { id: 'destaques', href: '#destaques', label: { pt: 'Projetos', en: 'Projects' } },
  { id: 'formacao', href: '#formacao', label: { pt: 'Formação', en: 'Education' } },
  { id: 'contacto', href: '#contacto', label: { pt: 'Contato', en: 'Contact' } },
]

export const droneNavLinks: NavLink[] = [
  {
    id: 'site',
    href: 'https://techdrone360.com.br/',
    label: { pt: 'Site oficial', en: 'Official site' },
  },
  { id: 'contacto', href: '#contacto', label: { pt: 'Contato', en: 'Contact' } },
]

export const uiCopy = {
  cv: { pt: 'CV', en: 'CV' },
  cvDownload: { pt: 'Baixar currículo (PDF)', en: 'Download resume (PDF)' },
  cvView: { pt: 'Ver currículo completo', en: 'View full resume' },
  whatsapp: { pt: 'WhatsApp', en: 'WhatsApp' },
  whatsappChat: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
  sendEmail: { pt: 'Enviar e-mail', en: 'Send email' },
  menu: { pt: 'Menu', en: 'Menu' },
  langGroup: { pt: 'Idioma', en: 'Language' },
  siteArea: { pt: 'Área do site', en: 'Site area' },
  mainNav: { pt: 'Principal', en: 'Main' },
  mobileNav: { pt: 'Menu mobile', en: 'Mobile menu' },
  prev: { pt: 'Anterior', en: 'Previous' },
  next: { pt: 'Seguinte', en: 'Next' },
  filterAll: { pt: 'Todos', en: 'All' },
  filterCorporate: { pt: 'Corporativo', en: 'Corporate' },
  filterFreelance: { pt: 'Freelance', en: 'Freelance' },
  filterOss: { pt: 'Open Source', en: 'Open Source' },
  siteLink: { pt: 'Site', en: 'Website' },
  codeLink: { pt: 'Código', en: 'Code' },
  systemLink: { pt: 'Sistema', en: 'System' },
}
