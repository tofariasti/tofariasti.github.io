import type { NavLink, SiteTab } from '../types/content'

export const siteTabs: SiteTab[] = [
  {
    id: 'dev',
    path: '/',
    label: { pt: 'Desenvolvedor de Software', en: 'Software Developer', es: 'Desarrollador de Software' },
    shortLabel: { pt: 'Desenv. Software', en: 'Software Dev', es: 'Desar. Software' },
    title: { pt: 'Portfólio Desenvolvedor de Software', en: 'Software Developer Portfolio', es: 'Portafolio Desarrollador de Software' },
  },
  {
    id: 'drone',
    path: '/drone',
    label: { pt: 'Operador de Drone', en: 'Drone Operator', es: 'Operador de Dron' },
    shortLabel: { pt: 'Op. Drone', en: 'Drone Op.', es: 'Op. Dron' },
    title: { pt: 'Tech Drone 360 — Operador de Drone', en: 'Tech Drone 360 — Drone Operator', es: 'Tech Drone 360 — Operador de Dron' },
  },
]

export const devNavLinks: NavLink[] = [
  { id: 'sobre', href: '#sobre', label: { pt: 'Atuação', en: 'Approach', es: 'Enfoque' } },
  { id: 'destaques-recrutador', href: '#destaques-recrutador', label: { pt: 'Principais', en: 'Highlights', es: 'Destacados' } },
  { id: 'competencias', href: '#competencias', label: { pt: 'Competências', en: 'Skills', es: 'Competencias' } },
  { id: 'experiencia', href: '#experiencia', label: { pt: 'Experiência', en: 'Experience', es: 'Experiencia' } },
  { id: 'freelance', href: '#freelance', label: { pt: 'Freelance', en: 'Freelance', es: 'Freelance' } },
  { id: 'destaques', href: '#destaques', label: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' } },
  { id: 'formacao', href: '#formacao', label: { pt: 'Formação', en: 'Education', es: 'Formación' } },
  { id: 'contacto', href: '#contacto', label: { pt: 'Contato', en: 'Contact', es: 'Contacto' } },
]

export const droneNavLinks: NavLink[] = [
  {
    id: 'site',
    href: 'https://techdrone360.com.br/',
    label: { pt: 'Site oficial', en: 'Official site', es: 'Sitio oficial' },
  },
  { id: 'contacto', href: '#contacto', label: { pt: 'Contato', en: 'Contact', es: 'Contacto' } },
]

export const uiCopy = {
  cv: { pt: 'CV', en: 'CV', es: 'CV' },
  cvDownload: { pt: 'Baixar currículo (PDF)', en: 'Download resume (PDF)', es: 'Descargar currículum (PDF)' },
  cvView: { pt: 'Ver currículo completo', en: 'View full resume', es: 'Ver currículum completo' },
  whatsapp: { pt: 'WhatsApp', en: 'WhatsApp', es: 'WhatsApp' },
  whatsappChat: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp', es: 'Hablar por WhatsApp' },
  sendEmail: { pt: 'Enviar e-mail', en: 'Send email', es: 'Enviar correo' },
  menu: { pt: 'Menu', en: 'Menu', es: 'Menú' },
  langGroup: { pt: 'Idioma', en: 'Language', es: 'Idioma' },
  siteArea: { pt: 'Área do site', en: 'Site area', es: 'Área del sitio' },
  mainNav: { pt: 'Principal', en: 'Main', es: 'Principal' },
  mobileNav: { pt: 'Menu mobile', en: 'Mobile menu', es: 'Menú móvil' },
  prev: { pt: 'Anterior', en: 'Previous', es: 'Anterior' },
  next: { pt: 'Seguinte', en: 'Next', es: 'Siguiente' },
  filterAll: { pt: 'Todos', en: 'All', es: 'Todos' },
  filterCorporate: { pt: 'Corporativo', en: 'Corporate', es: 'Corporativo' },
  filterFreelance: { pt: 'Freelance', en: 'Freelance', es: 'Freelance' },
  filterOss: { pt: 'Open Source', en: 'Open Source', es: 'Open Source' },
  siteLink: { pt: 'Site', en: 'Website', es: 'Sitio web' },
  codeLink: { pt: 'Código', en: 'Code', es: 'Código' },
  systemLink: { pt: 'Sistema', en: 'System', es: 'Sistema' },
}
