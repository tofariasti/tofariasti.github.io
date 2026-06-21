import type { CookieCopy, DroneContent, Localized } from '../types/content'

export const droneContent: DroneContent = {
  brand: 'Tech Drone 360',
  title: {
    pt: 'Imagens e vídeos aéreos com drone',
    en: 'Aerial drone photo & video',
    es: 'Fotografía y video aéreo con dron',
  },
  subtitle: {
    pt: 'Tiago O. de Farias · Porto Alegre, RS',
    en: 'Tiago O. de Farias · Porto Alegre, Brazil',
    es: 'Tiago O. de Farias · Porto Alegre, Brasil',
  },
  description: {
    pt: 'Atuo também com captação de imagens e vídeos aéreos com drone — paisagens, eventos, imóveis e material para redes sociais, com planejamento de voo, estabilização e pós-produção.',
    en: 'Aerial photo and video with drones — landscapes, events, real estate and social content, including flight planning, stabilization and post-production.',
    es: 'También realizo captación de imágenes y videos aéreos con dron — paisajes, eventos, inmuebles y material para redes sociales, con planificación de vuelo, estabilización y posproducción.',
  },
  stats: [
    { value: 'Foto', label: { pt: 'aérea', en: 'aerial', es: 'aérea' } },
    { value: 'Vídeo', label: { pt: '4K / redes', en: '4K / social', es: '4K / redes' } },
    { value: 'Eventos', label: { pt: 'e imóveis', en: 'and real estate', es: 'e inmuebles' } },
    { value: 'Pós', label: { pt: 'produção', en: 'production', es: 'producción' } },
  ],
  trustNote: {
    pt: '**Nota fiscal:** emito NF para pessoa física ou jurídica, com processo claro no orçamento e na contratação — para você contratar com tranquilidade.',
    en: '**Official invoice:** I issue invoices for individuals and companies, with a clear process from quote to booking — so you can hire with confidence.',
    es: '**Factura oficial:** emito factura para persona física o jurídica, con un proceso claro en el presupuesto y la contratación — para que contrate con tranquilidad.',
  },
  officialSite: 'https://techdrone360.com.br/',
  youtube: 'https://www.youtube.com/@techdrone360',
  instagram: 'https://www.instagram.com/techdrone360',
  links: [
    {
      id: 'site',
      type: 'site',
      url: 'https://techdrone360.com.br/',
      title: { pt: 'Site oficial', en: 'Official website', es: 'Sitio oficial' },
      handle: 'techdrone360.com.br',
      cta: {
        pt: 'Conheça serviços, portfólio e orçamento →',
        en: 'Explore services, portfolio and quotes →',
        es: 'Conozca servicios, portafolio y presupuesto →',
      },
    },
    {
      id: 'youtube',
      type: 'youtube',
      url: 'https://www.youtube.com/@techdrone360',
      title: { pt: 'YouTube', en: 'YouTube', es: 'YouTube' },
      handle: '@techdrone360',
      cta: { pt: 'Ver portfólio em vídeo', en: 'Watch video portfolio', es: 'Ver portafolio en video' },
    },
    {
      id: 'instagram',
      type: 'instagram',
      url: 'https://www.instagram.com/techdrone360',
      title: { pt: 'Instagram', en: 'Instagram', es: 'Instagram' },
      handle: '@techdrone360',
      cta: { pt: 'Ver fotos e reels', en: 'View photos & reels', es: 'Ver fotos y reels' },
    },
  ],
  contactTitle: {
    pt: 'Solicitar captação aérea',
    en: 'Request aerial shooting',
    es: 'Solicitar captación aérea',
  },
  contactText: {
    pt: 'Conte o tipo de projeto (evento, imóvel, paisagem, rede social) e retorno com disponibilidade e orçamento. Emito **nota fiscal** para pessoa física ou jurídica.',
    en: 'Tell me about your project (event, property, landscape, social media) and I will reply with availability and a quote. I issue **invoices** for individuals and companies.',
    es: 'Cuénteme el tipo de proyecto (evento, inmueble, paisaje, red social) y le responderé con disponibilidad y presupuesto. Emito **factura** para persona física o jurídica.',
  },
}

export const droneFooterCopy = {
  brand: 'Tech Drone 360 · Tiago O. de Farias',
  devPortfolio: { pt: 'Portfólio desenvolvimento', en: 'Development portfolio', es: 'Portafolio de desarrollo' },
  visitSite: {
    pt: 'Visitar techdrone360.com.br',
    en: 'Visit techdrone360.com.br',
    es: 'Visitar techdrone360.com.br',
  },
  siteCta: { pt: 'Site TechDrone360', en: 'TechDrone360 website', es: 'Sitio TechDrone360' },
}

export const cookieCopy: CookieCopy = {
  title: { pt: 'Preferências de cookies', en: 'Cookie preferences', es: 'Preferencias de cookies' },
  lead: {
    pt: 'Usamos armazenamento local para preferências (idioma e esta escolha). Sem cookies de publicidade.',
    en: 'We use local storage for preferences (language and this choice). No advertising cookies.',
    es: 'Usamos almacenamiento local para preferencias (idioma y esta elección). Sin cookies de publicidad.',
  },
  detailsSummary: { pt: 'Detalhes', en: 'Details', es: 'Detalles' },
  detailsText: {
    pt: 'Este portfólio é um site estático (GitHub Pages). Guardamos preferências locais no navegador. Ao aceitar confirmas que leste esta informação (LGPD).',
    en: 'This portfolio is a static site (GitHub Pages). We store local preferences in your browser. By accepting you confirm you have read this information.',
    es: 'Este portafolio es un sitio estático (GitHub Pages). Guardamos preferencias locales en el navegador. Al aceptar confirma que ha leído esta información (LGPD).',
  },
  configure: { pt: 'Configurar', en: 'Configure', es: 'Configurar' },
  reject: { pt: 'Rejeitar', en: 'Reject', es: 'Rechazar' },
  accept: { pt: 'Aceitar', en: 'Accept', es: 'Aceptar' },
}

export const droneCookieCopy: CookieCopy = {
  ...cookieCopy,
  detailsText: {
    pt: 'Este site é estático (GitHub Pages). Guardamos preferências locais no navegador. Ao aceitar confirmas que leste esta informação (LGPD).',
    en: 'This is a static site (GitHub Pages). We store local preferences in your browser. By accepting you confirm you have read this information.',
    es: 'Este sitio es estático (GitHub Pages). Guardamos preferencias locales en el navegador. Al aceptar confirma que ha leído esta información (LGPD).',
  },
}

interface SeoMetaEntry {
  title: Localized<string>
  description: Localized<string>
  ogTitle: Localized<string>
  ogDescription: Localized<string>
}

export const seoMeta: Record<'dev' | 'drone', SeoMetaEntry> = {
  dev: {
    title: {
      pt: 'Tiago O. de Farias | Desenvolvedor PHP Laravel (PHP, Laravel, APIs)',
      en: 'Tiago O. de Farias | Senior Backend Developer (PHP, Laravel, APIs)',
      es: 'Tiago O. de Farias | Desarrollador Backend Senior (PHP, Laravel, APIs)',
    },
    description: {
      pt: 'Desenvolvedor PHP Laravel com 10+ anos em PHP, Laravel, APIs REST, Offline First, Salesforce CRM, integrações corporativas e observabilidade. Porto Alegre, Brasil.',
      en: 'Senior Backend Developer with 10+ years in PHP, Laravel, REST APIs, Offline First, Salesforce CRM, enterprise integrations and observability. Porto Alegre, Brazil.',
      es: 'Desarrollador Backend Senior con más de 10 años en PHP, Laravel, APIs REST, Offline First, Salesforce CRM, integraciones corporativas y observabilidad. Porto Alegre, Brasil.',
    },
    ogTitle: {
      pt: 'Tiago O. de Farias | Desenvolvedor Backend',
      en: 'Tiago O. de Farias | Backend Developer',
      es: 'Tiago O. de Farias | Desarrollador Backend',
    },
    ogDescription: {
      pt: 'Desenvolvedor Backend — PHP, Laravel, APIs REST, Offline First, integrações Salesforce.',
      en: 'Senior Backend Developer — PHP, Laravel, REST APIs, Offline First, Salesforce integrations.',
      es: 'Desarrollador Backend Senior — PHP, Laravel, APIs REST, Offline First, integraciones Salesforce.',
    },
  },
  drone: {
    title: {
      pt: 'Tech Drone 360 | Imagens e vídeos aéreos — Tiago O. de Farias',
      en: 'Tech Drone 360 | Aerial Photo & Video — Tiago O. de Farias',
      es: 'Tech Drone 360 | Fotografía y video aéreo — Tiago O. de Farias',
    },
    description: {
      pt: 'Captação de imagens e vídeos aéreos com drone. Portfólio Tech Drone 360 no YouTube e Instagram. Porto Alegre, Brasil.',
      en: 'Aerial drone photo and video. Tech Drone 360 portfolio on YouTube and Instagram. Porto Alegre, Brazil.',
      es: 'Captación de imágenes y videos aéreos con dron. Portafolio Tech Drone 360 en YouTube e Instagram. Porto Alegre, Brasil.',
    },
    ogTitle: {
      pt: 'Tech Drone 360 | Fotos e vídeos aéreos',
      en: 'Tech Drone 360 | Aerial Photo & Video',
      es: 'Tech Drone 360 | Fotografía y video aéreo',
    },
    ogDescription: {
      pt: 'Fotografia e vídeo aéreo com drone — paisagens, eventos, imóveis e conteúdo para redes sociais.',
      en: 'Aerial drone photography and video — landscapes, events, real estate and social content.',
      es: 'Fotografía y video aéreo con dron — paisajes, eventos, inmuebles y contenido para redes sociales.',
    },
  },
}
