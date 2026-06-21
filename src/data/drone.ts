import type { CookieCopy, DroneContent } from '../types/content'

export const droneContent: DroneContent = {
  brand: 'Tech Drone 360',
  title: {
    pt: 'Imagens e vídeos aéreos com drone',
    en: 'Aerial drone photo & video',
  },
  subtitle: {
    pt: 'Tiago O. de Farias · Porto Alegre, RS',
    en: 'Tiago O. de Farias · Porto Alegre, Brazil',
  },
  description: {
    pt: 'Atuo também com captação de imagens e vídeos aéreos com drone — paisagens, eventos, imóveis e material para redes sociais, com planejamento de voo, estabilização e pós-produção.',
    en: 'Aerial photo and video with drones — landscapes, events, real estate and social content, including flight planning, stabilization and post-production.',
  },
  stats: [
    { value: 'Foto', label: { pt: 'aérea', en: 'aerial' } },
    { value: 'Vídeo', label: { pt: '4K / redes', en: '4K / social' } },
    { value: 'Eventos', label: { pt: 'e imóveis', en: 'and real estate' } },
    { value: 'Pós', label: { pt: 'produção', en: 'production' } },
  ],
  trustNote: {
    pt: '**Nota fiscal:** emito NF para pessoa física ou jurídica, com processo claro no orçamento e na contratação — para você contratar com tranquilidade.',
    en: '**Official invoice:** I issue invoices for individuals and companies, with a clear process from quote to booking — so you can hire with confidence.',
  },
  officialSite: 'https://techdrone360.com.br/',
  youtube: 'https://www.youtube.com/@techdrone360',
  instagram: 'https://www.instagram.com/techdrone360',
  links: [
    {
      id: 'site',
      type: 'site',
      url: 'https://techdrone360.com.br/',
      title: { pt: 'Site oficial', en: 'Official website' },
      handle: 'techdrone360.com.br',
      cta: {
        pt: 'Conheça serviços, portfólio e orçamento →',
        en: 'Explore services, portfolio and quotes →',
      },
    },
    {
      id: 'youtube',
      type: 'youtube',
      url: 'https://www.youtube.com/@techdrone360',
      title: { pt: 'YouTube', en: 'YouTube' },
      handle: '@techdrone360',
      cta: { pt: 'Ver portfólio em vídeo', en: 'Watch video portfolio' },
    },
    {
      id: 'instagram',
      type: 'instagram',
      url: 'https://www.instagram.com/techdrone360',
      title: { pt: 'Instagram', en: 'Instagram' },
      handle: '@techdrone360',
      cta: { pt: 'Ver fotos e reels', en: 'View photos & reels' },
    },
  ],
  contactTitle: {
    pt: 'Solicitar captação aérea',
    en: 'Request aerial shooting',
  },
  contactText: {
    pt: 'Conte o tipo de projeto (evento, imóvel, paisagem, rede social) e retorno com disponibilidade e orçamento. Emito **nota fiscal** para pessoa física ou jurídica.',
    en: 'Tell me about your project (event, property, landscape, social media) and I will reply with availability and a quote. I issue **invoices** for individuals and companies.',
  },
}

export const droneFooterCopy = {
  brand: 'Tech Drone 360 · Tiago O. de Farias',
  devPortfolio: { pt: 'Portfólio desenvolvimento', en: 'Development portfolio' },
  visitSite: {
    pt: 'Visitar techdrone360.com.br',
    en: 'Visit techdrone360.com.br',
  },
  siteCta: { pt: 'Site TechDrone360', en: 'TechDrone360 website' },
}

export const cookieCopy: CookieCopy = {
  title: { pt: 'Preferências de cookies', en: 'Cookie preferences' },
  lead: {
    pt: 'Usamos armazenamento local para preferências (idioma e esta escolha). Sem cookies de publicidade.',
    en: 'We use local storage for preferences (language and this choice). No advertising cookies.',
  },
  detailsSummary: { pt: 'Detalhes', en: 'Details' },
  detailsText: {
    pt: 'Este portfólio é um site estático (GitHub Pages). Guardamos preferências locais no navegador. Ao aceitar confirmas que leste esta informação (LGPD).',
    en: 'This portfolio is a static site (GitHub Pages). We store local preferences in your browser. By accepting you confirm you have read this information.',
  },
  configure: { pt: 'Configurar', en: 'Configure' },
  reject: { pt: 'Rejeitar', en: 'Reject' },
  accept: { pt: 'Aceitar', en: 'Accept' },
}

export const droneCookieCopy: CookieCopy = {
  ...cookieCopy,
  detailsText: {
    pt: 'Este site é estático (GitHub Pages). Guardamos preferências locais no navegador. Ao aceitar confirmas que leste esta informação (LGPD).',
    en: 'This is a static site (GitHub Pages). We store local preferences in your browser. By accepting you confirm you have read this information.',
  },
}

export const seoMeta = {
  dev: {
    title: 'Tiago O. de Farias | Desenvolvedor PHP Laravel (PHP, Laravel, APIs)',
    description:
      'Desenvolvedor PHP Laravel com 10+ anos em PHP, Laravel, APIs REST, Offline First, Salesforce CRM, integrações corporativas e observabilidade. Porto Alegre, Brasil.',
    ogTitle: 'Tiago O. de Farias | Backend Developer',
    ogDescription:
      'Senior Backend Developer — PHP, Laravel, REST APIs, Offline First, Salesforce integrations.',
  },
  drone: {
    title: 'Tech Drone 360 | Imagens e vídeos aéreos — Tiago O. de Farias',
    description:
      'Captação de imagens e vídeos aéreos com drone. Portfólio Tech Drone 360 no YouTube e Instagram. Porto Alegre, Brasil.',
    ogTitle: 'Tech Drone 360 | Aerial Photo & Video',
    ogDescription:
      'Aerial drone photography and video — landscapes, events, real estate and social content.',
  },
}
