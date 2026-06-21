import type { SkillGroup } from '../types/content'

export const skillsSection = {
  tag: { pt: 'Competências', en: 'Skills', es: 'Competencias' },
  title: { pt: 'Competências técnicas', en: 'Technical skills', es: 'Competencias técnicas' },
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    title: { pt: 'Linguagens e Frameworks', en: 'Languages & Frameworks', es: 'Lenguajes y Frameworks' },
    items: 'PHP 5/7/8, Laravel, Lumen, CakePHP, CodeIgniter, Python, Django.',
  },
  {
    id: 'backend',
    title: { pt: 'Backend e Arquitetura', en: 'Backend & Architecture', es: 'Backend y Arquitectura' },
    items:
      'APIs REST, Offline First, sincronização de dados, DDD, Clean Code, SOLID, YAGNI, PSRs, GRASP, multi-tenant, Repository Pattern, DTOs, Dependency Injection, SOAP e GraphQL.',
  },
  {
    id: 'integrations',
    title: { pt: 'Integrações e Segurança', en: 'Integrations & Security', es: 'Integraciones y Seguridad' },
    items:
      'Salesforce CRM, SOQL, OAuth2 JWT, SAML2, Azure AD, SSO, JWT, CORS, Microsoft Teams Webhook, APIs externas.',
  },
  {
    id: 'databases',
    title: { pt: 'Banco de Dados', en: 'Databases', es: 'Bases de Datos' },
    items: 'MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, Sybase, MongoDB e Redis.',
  },
  {
    id: 'messaging',
    title: { pt: 'Mensageria e Processamento Assíncrono', en: 'Messaging & Async Processing', es: 'Mensajería y Procesamiento Asíncrono' },
    items:
      'RabbitMQ, Redis, Laravel Horizon, AWS SQS, Supervisor, Queue Jobs, Workers, retry, backoff e importação incremental.',
  },
  {
    id: 'quality',
    title: { pt: 'Qualidade e Observabilidade', en: 'Quality & Observability', es: 'Calidad y Observabilidad' },
    items:
      'TDD, BDD, E2E Testing, Pest, Behat, PHPStan, Larastan, Pint, PHP Insights, OpenAPI, Scramble, Telescope, Laravel Pulse, Spatie Health e Log Viewer.',
  },
  {
    id: 'tools',
    title: { pt: 'Ferramentas e Colaboração', en: 'Tools & Collaboration', es: 'Herramientas y Colaboración' },
    items:
      'Git, Bitbucket, GitLab, SVN, Docker, Laravel Sail, Jenkins, Linux, Composer Scripts, CaptainHook, Confluence e AWS.',
  },
]
