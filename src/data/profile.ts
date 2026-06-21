import type { Profile } from '../types/content'
import {
  CONTACT_EMAIL,
  CV_HTML,
  CV_PDF,
  CV_PDF_DOWNLOAD,
  GITHUB_URL,
  LINKEDIN_URL,
  PHOTO_URL,
} from './constants'

export const profile: Profile = {
  name: 'Tiago O. de Farias',
  role: {
    pt: 'Desenvolvedor PHP Laravel',
    en: 'Senior Backend Developer',
  },
  subtitle:
    'PHP · Laravel · Python/Django · APIs REST · Offline First · DDD · Clean Code · Salesforce · Redis/Horizon · AWS SQS · RabbitMQ',
  description: {
    pt: 'Desenvolvedor PHP Laravel com mais de 10 anos em PHP e Laravel, especializado em APIs REST, integrações corporativas e aplicações de missão crítica. Experiência com filas e processamento assíncrono — **Redis com Laravel Horizon**, **AWS SQS** e **RabbitMQ** — escolhendo a stack mais adequada ao contexto de cada projeto.',
    en: "Senior Backend Developer with 10+ years in PHP and Laravel, specialized in REST APIs, enterprise integrations and mission-critical applications. Experience with queues and async processing — **Redis with Laravel Horizon**, **AWS SQS** and **RabbitMQ** — choosing the stack best suited to each project's context.",
  },
  location: {
    pt: 'Porto Alegre, RS — Brasil',
    en: 'Porto Alegre, RS — Brazil',
  },
  photoUrl: PHOTO_URL,
  email: CONTACT_EMAIL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  cvPdf: CV_PDF,
  cvPdfDownload: CV_PDF_DOWNLOAD,
  cvHtml: CV_HTML,
  stats: [
    { value: '10+', label: { pt: 'anos de experiência', en: 'years experience' } },
    { value: 'Laravel', label: { pt: 'stack principal', en: 'core stack' } },
    { value: 'APIs', label: { pt: 'integrações', en: 'integrations' } },
    { value: 'Offline First', label: { pt: 'sync em campo', en: 'field sync' } },
  ],
}

export const aboutCopy = {
  tag: { pt: 'Atuação', en: 'How I work' },
  title: {
    pt: 'Do backend ao produto em produção',
    en: 'From backend to production-ready products',
  },
  paragraphs: {
    pt: [
      'Além de APIs e integrações, assumo o ciclo completo do sistema: modelagem de dados, regras de negócio, filas, autenticação, testes e observabilidade — e sustentação de legados quando o contexto exige. Aplico **DDD**, **Clean Code**, **SOLID**, **YAGNI** e **PSRs** com foco em baixo acoplamento, legibilidade e evolução sustentável do código.',
      'Setores em que já atuei: **agronegócio**, **saúde**, **governo**, **meios de pagamento**, **logística** e **SaaS corporativo** — em produtos críticos, portais, fluxos B2B e evolução de plataformas existentes.',
    ],
    en: [
      'Beyond APIs and integrations, I own the full system lifecycle: data modeling, business rules, queues, authentication, testing and observability — plus legacy maintenance when required. I apply **DDD**, **Clean Code**, **SOLID**, **YAGNI** and **PSRs** with a focus on low coupling, readability and sustainable code evolution.',
      "Sectors I've worked in: **agribusiness**, **healthcare**, **government**, **payments**, **logistics** and **corporate SaaS** — on critical products, portals, B2B flows and evolving existing platforms.",
    ],
  },
}

export const contactCopy = {
  tag: { pt: 'Contato', en: 'Contact' },
  title: { pt: 'Vamos conversar', en: "Let's talk" },
  text: {
    pt: 'Se quiser discutir uma oportunidade ou projeto, entre em contato.',
    en: "If you'd like to discuss an opportunity or project, feel free to reach out.",
  },
}

export const footerCopy = {
  role: { pt: 'Desenvolvedor PHP Laravel', en: 'Senior Backend Developer' },
  cvPdf: { pt: 'Currículo PDF', en: 'Resume PDF' },
  cvHtml: { pt: 'Currículo HTML', en: 'Resume HTML' },
  cookies: { pt: 'Cookies', en: 'Cookies' },
  droneLink: { pt: 'Tech Drone 360', en: 'Tech Drone 360' },
}
