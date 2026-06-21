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
    es: 'Desarrollador Backend Senior',
  },
  subtitle:
    'PHP · Laravel · Python/Django · APIs REST · Offline First · DDD · Clean Code · Salesforce · Redis/Horizon · AWS SQS · RabbitMQ',
  description: {
    pt: 'Desenvolvedor PHP Laravel com mais de 10 anos em PHP e Laravel, especializado em APIs REST, integrações corporativas e aplicações de missão crítica. Experiência com filas e processamento assíncrono — **Redis com Laravel Horizon**, **AWS SQS** e **RabbitMQ** — escolhendo a stack mais adequada ao contexto de cada projeto.',
    en: "Senior Backend Developer with 10+ years in PHP and Laravel, specialized in REST APIs, enterprise integrations and mission-critical applications. Experience with queues and async processing — **Redis with Laravel Horizon**, **AWS SQS** and **RabbitMQ** — choosing the stack best suited to each project's context.",
    es: 'Desarrollador Backend Senior con más de 10 años en PHP y Laravel, especializado en APIs REST, integraciones corporativas y aplicaciones de misión crítica. Experiencia con colas y procesamiento asíncrono — **Redis con Laravel Horizon**, **AWS SQS** y **RabbitMQ** — eligiendo la stack más adecuada al contexto de cada proyecto.',
  },
  location: {
    pt: 'Porto Alegre, RS — Brasil',
    en: 'Porto Alegre, RS — Brazil',
    es: 'Porto Alegre, RS — Brasil',
  },
  photoUrl: PHOTO_URL,
  email: CONTACT_EMAIL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  cvPdf: CV_PDF,
  cvPdfDownload: CV_PDF_DOWNLOAD,
  cvHtml: CV_HTML,
  stats: [
    { value: '10+', label: { pt: 'anos de experiência', en: 'years experience', es: 'años de experiencia' } },
    { value: 'Laravel', label: { pt: 'stack principal', en: 'core stack', es: 'stack principal' } },
    { value: 'APIs', label: { pt: 'integrações', en: 'integrations', es: 'integraciones' } },
    { value: 'Offline First', label: { pt: 'sync em campo', en: 'field sync', es: 'sync en campo' } },
  ],
}

export const aboutCopy = {
  tag: { pt: 'Atuação', en: 'How I work', es: 'Enfoque' },
  title: {
    pt: 'Do backend ao produto em produção',
    en: 'From backend to production-ready products',
    es: 'Del backend al producto en producción',
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
    es: [
      'Además de APIs e integraciones, asumo el ciclo completo del sistema: modelado de datos, reglas de negocio, colas, autenticación, pruebas y observabilidad — y mantenimiento de legados cuando el contexto lo exige. Aplico **DDD**, **Clean Code**, **SOLID**, **YAGNI** y **PSRs** con foco en bajo acoplamiento, legibilidad y evolución sostenible del código.',
      'Sectores en los que he trabajado: **agronegocio**, **salud**, **gobierno**, **medios de pago**, **logística** y **SaaS corporativo** — en productos críticos, portales, flujos B2B y evolución de plataformas existentes.',
    ],
  },
}

export const contactCopy = {
  tag: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
  title: { pt: 'Vamos conversar', en: "Let's talk", es: 'Hablemos' },
  text: {
    pt: 'Se quiser discutir uma oportunidade ou projeto, entre em contato.',
    en: "If you'd like to discuss an opportunity or project, feel free to reach out.",
    es: 'Si desea conversar sobre una oportunidad o proyecto, no dude en contactarme.',
  },
}

export const footerCopy = {
  role: { pt: 'Desenvolvedor PHP Laravel', en: 'Senior Backend Developer', es: 'Desarrollador Backend Senior' },
  cvPdf: { pt: 'Currículo PDF', en: 'Resume PDF', es: 'Currículum PDF' },
  cvHtml: { pt: 'Currículo HTML', en: 'Resume HTML', es: 'Currículum HTML' },
  cookies: { pt: 'Cookies', en: 'Cookies', es: 'Cookies' },
  droneLink: { pt: 'Tech Drone 360', en: 'Tech Drone 360', es: 'Tech Drone 360' },
}
