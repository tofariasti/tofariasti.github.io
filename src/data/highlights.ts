import type { Highlight } from '../types/content'

export const highlightsSection = {
  tag: { pt: 'Destaques', en: 'Highlights' },
  title: { pt: 'Destaques para recrutadores', en: 'Recruiter highlights' },
}

export const highlights: Highlight[] = [
  {
    id: 'offline-first',
    featured: true,
    text: {
      pt: '**Projeto mobile 100% Offline First** no agronegócio, com backend preparado para sincronização e operação em campo.',
      en: '**100% Offline First mobile project** in agribusiness, with a backend built for sync and field operations.',
    },
  },
  {
    id: 'experience',
    text: {
      pt: '**Mais de 10 anos** de experiência em backend PHP para sistemas corporativos.',
      en: '**10+ years** of PHP backend experience in enterprise systems.',
    },
  },
  {
    id: 'laravel',
    text: {
      pt: 'Forte atuação com **Laravel, APIs REST, integrações corporativas** e aplicações críticas.',
      en: 'Strong track record with **Laravel, REST APIs, enterprise integrations** and critical applications.',
    },
  },
  {
    id: 'salesforce',
    text: {
      pt: 'Experiência com **Salesforce CRM, RabbitMQ, Redis, Laravel Horizon** e processamento assíncrono.',
      en: 'Experience with **Salesforce CRM, RabbitMQ, Redis, Laravel Horizon** and async processing.',
    },
  },
  {
    id: 'observability',
    text: {
      pt: 'Vivência com **observabilidade**: Laravel Pulse, Telescope, Spatie Health, Log Viewer e alertas no Microsoft Teams.',
      en: '**Observability**: Laravel Pulse, Telescope, Spatie Health, Log Viewer and Microsoft Teams alerts.',
    },
  },
  {
    id: 'sectors',
    text: {
      pt: 'Experiência em **agronegócio, saúde, governo, pagamentos, logística e plataformas SaaS**.',
      en: 'Background in **agribusiness, healthcare, government, payments, logistics and SaaS platforms**.',
    },
  },
  {
    id: 'freelance',
    text: {
      pt: 'Projetos freelance paralelos em **Laravel** (Corrige Aí, AWS SQS) e **Python/Django** (SISBAP, multi-tenant).',
      en: 'Parallel freelance projects in **Laravel** (Corrige Aí, AWS SQS) and **Python/Django** (SISBAP, multi-tenant).',
    },
  },
  {
    id: 'practices',
    text: {
      pt: 'Boas práticas de engenharia: **Clean Code, DDD, SOLID, YAGNI e PSRs** em backends corporativos e integrações.',
      en: 'Engineering practices: **Clean Code, DDD, SOLID, YAGNI and PSRs** in enterprise backends and integrations.',
    },
  },
]
