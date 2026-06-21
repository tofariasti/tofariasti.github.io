import type { ProjectCard } from '../types/content'

export const projectsSection = {
  tag: { pt: 'Destaques', en: 'Highlights', es: 'Destacados' },
  title: { pt: 'Projetos e experiência', en: 'Projects & experience', es: 'Proyectos y experiencia' },
  lead: {
    pt: 'Casos corporativos, projetos freelance e repositórios open source — APIs REST, filas, integrações e regras de negócio em produção.',
    en: 'Corporate cases, freelance projects and open-source repos — REST APIs, queues, integrations and business rules in production.',
    es: 'Casos corporativos, proyectos freelance y repositorios open source — APIs REST, colas, integraciones y reglas de negocio en producción.',
  },
}

export const projects: ProjectCard[] = [
  {
    id: 'yara-offline',
    category: 'corporate',
    badge: '2024+ · Corporate',
    title: 'Yara Brasil · Offline First',
    pills: ['Laravel', 'DDD', 'Flutter', 'Salesforce', 'Redis', 'Horizon'],
    description: {
      pt: 'Consultoria agrícola com app Flutter offline e API Laravel DDD — Salesforce, câmbio, clima, Atfarm API e SSO SAML2/Azure AD.',
      en: 'Agricultural consulting with offline Flutter app and DDD Laravel API — Salesforce, FX, weather, Atfarm API and SAML2/Azure AD SSO.',
      es: 'Consultoría agrícola con app Flutter offline y API Laravel DDD — Salesforce, cambio, clima, Atfarm API y SSO SAML2/Azure AD.',
    },
    features: {
      pt: [
        'Backend 100% Offline First com sincronização em campo',
        '11+ pipelines assíncronos Salesforce (Redis, Horizon)',
        'Observabilidade, Filament v3 e alertas Microsoft Teams',
      ],
      en: [
        '100% Offline First backend with field sync',
        '11+ async Salesforce pipelines (Redis, Horizon)',
        'Observability, Filament v3 and Microsoft Teams alerts',
      ],
      es: [
        'Backend 100% Offline First con sincronización en campo',
        '11+ pipelines asíncronos Salesforce (Redis, Horizon)',
        'Observabilidad, Filament v3 y alertas Microsoft Teams',
      ],
    },
  },
  {
    id: 'corrige-ai',
    category: 'freelance',
    badge: '2025 · Freelance',
    title: 'Corrige Aí · API REST',
    pills: ['Laravel 10', 'DDD', 'Filament', 'AWS SQS', 'React'],
    description: {
      pt: 'Reconstrução arquitetural da API REST em Laravel 10 com DDD, Filament, filas AWS SQS e integração com frontend React.',
      en: 'Architectural rebuild of the Laravel 10 REST API with DDD, Filament, AWS SQS queues and React frontend integration.',
      es: 'Reconstrucción arquitectónica de la API REST en Laravel 10 con DDD, Filament, colas AWS SQS e integración con frontend React.',
    },
    features: {
      pt: [
        'Camadas desacopladas com Clean Code, SOLID e PSRs',
        'Workers Laravel para processamento assíncrono via SQS',
      ],
      en: [
        'Decoupled layers with Clean Code, SOLID and PSRs',
        'Laravel workers for async processing via SQS',
      ],
      es: [
        'Capas desacopladas con Clean Code, SOLID y PSRs',
        'Workers Laravel para procesamiento asíncrono vía SQS',
      ],
    },
    link: 'https://corrigeai.com/',
    linkLabel: { pt: 'Site', en: 'Website', es: 'Sitio web' },
  },
  {
    id: 'sisbap',
    category: 'freelance',
    badge: '2025 · Freelance',
    title: 'SISBAP · Multi-tenant',
    pills: ['Python', 'Django', 'Multi-tenant', 'MySQL', 'React'],
    description: {
      pt: 'Manutenção evolutiva em sistema corporativo Django multi-tenant — filas, jobs, workers, laudos e integração React.',
      en: 'Evolutionary maintenance on a corporate Django multi-tenant system — queues, jobs, workers, reports and React integration.',
      es: 'Mantenimiento evolutivo en sistema corporativo Django multi-tenant — colas, jobs, workers, informes e integración React.',
    },
    features: {
      pt: [
        'Rotinas assíncronas com controle de status por tenant',
        'Templates de laudos e persistência via Django ORM',
      ],
      en: [
        'Async routines with per-tenant status tracking',
        'Report templates and persistence via Django ORM',
      ],
      es: [
        'Rutinas asíncronas con control de estado por tenant',
        'Plantillas de informes y persistencia vía Django ORM',
      ],
    },
    link: 'https://sisbap.com.br/',
    linkLabel: { pt: 'Site', en: 'Website', es: 'Sitio web' },
  },
  {
    id: 'stargrid',
    category: 'corporate',
    badge: '2020–2024 · Healthtech',
    title: 'Stargrid · Escalas hospitalares',
    pills: ['Laravel', 'RabbitMQ', 'AWS', 'MongoDB'],
    description: {
      pt: 'Plataforma SaaS healthtech para gestão de escalas hospitalares — alta disponibilidade, APIs REST e mensageria robusta.',
      en: 'Healthtech SaaS for hospital shift management — high availability, REST APIs and robust messaging.',
      es: 'Plataforma SaaS healthtech para gestión de turnos hospitalarios — alta disponibilidad, APIs REST y mensajería robusta.',
    },
    features: {
      pt: [
        'Processamento assíncrono com RabbitMQ e workers',
        'Persistência híbrida MySQL + MongoDB',
      ],
      en: [
        'Async processing with RabbitMQ and workers',
        'Hybrid MySQL + MongoDB persistence',
      ],
      es: [
        'Procesamiento asíncrono con RabbitMQ y workers',
        'Persistencia híbrida MySQL + MongoDB',
      ],
    },
  },
  {
    id: 'wk-detran',
    category: 'freelance',
    badge: '2021 · Freelance',
    title: 'WK Technology · Detran/PR',
    pills: ['Laravel', 'REST API', 'Gryfo', 'Biometria'],
    description: {
      pt: 'API REST para o Detran/PR com integração Gryfo — reconhecimento facial para presença em aulas remotas de autoescolas.',
      en: 'REST API for Detran/PR with Gryfo integration — facial recognition for attendance in remote driving-school classes.',
      es: 'API REST para el Detran/PR con integración Gryfo — reconocimiento facial para asistencia en clases remotas de autoescuelas.',
    },
    features: {
      pt: [
        'Orquestração entre plataforma de ensino e biometria',
        'Auditoria e rastreabilidade de presença remota',
      ],
      en: [
        'Orchestration between training platform and biometrics',
        'Audit trail for remote attendance',
      ],
      es: [
        'Orquestación entre plataforma de enseñanza y biometría',
        'Auditoría y trazabilidad de asistencia remota',
      ],
    },
  },
  {
    id: 'inmetro',
    category: 'corporate',
    badge: '2015–2017 · Governo',
    title: 'Inmetro · Cronotacógrafo',
    pills: ['CakePHP', 'Oracle', 'BPMN'],
    description: {
      pt: 'Sistema governamental de metrologia legal — ensaios, verificações e gestão de cronotacógrafos no contexto do Inmetro.',
      en: 'Government legal metrology system — tests, verifications and chronotachograph management at Inmetro.',
      es: 'Sistema gubernamental de metrología legal — ensayos, verificaciones y gestión de cronotacógrafos en el contexto del Inmetro.',
    },
    link: 'https://cronotacografo.rbmlq.gov.br/',
    linkLabel: { pt: 'Sistema', en: 'System', es: 'Sistema' },
  },
  {
    id: 'ticketlog',
    category: 'corporate',
    badge: '2018–2020 · Fintech',
    title: 'Ticket Log · Meios de pagamento',
    pills: ['PHP', 'ColdFusion', 'Java', 'Oracle', 'Sybase'],
    description: {
      pt: 'Sistemas críticos de gestão de frotas e pagamentos — sustentação, Kanban, Azure DevOps e acessibilidade web.',
      en: 'Critical fleet and payment systems — maintenance, Kanban, Azure DevOps and web accessibility.',
      es: 'Sistemas críticos de gestión de flotas y pagos — mantenimiento, Kanban, Azure DevOps y accesibilidad web.',
    },
  },
  {
    id: 'cnpj-etl',
    category: 'freelance',
    badge: '2023 · Freelance',
    title: 'CNPJ · ETL Receita Federal',
    pills: ['Python', 'MySQL', 'ETL'],
    description: {
      pt: 'Automação em Python para download, processamento em lotes e carga dos dados públicos de CNPJ em MySQL.',
      en: 'Python automation to download, batch-process and load public CNPJ data into MySQL.',
      es: 'Automatización en Python para descarga, procesamiento por lotes y carga de datos públicos de CNPJ en MySQL.',
    },
  },
  {
    id: 'ibge-localidades',
    category: 'oss',
    badge: '2026 · Open Source',
    title: 'IBGE Localidades',
    pills: ['React', 'TypeScript', 'Vite', 'IBGE API', 'Docker'],
    description: {
      pt: 'Frontend React para a API de Localidades do IBGE — navegação hierárquica por regiões, UFs e municípios com tipos TypeScript e deploy Docker/nginx.',
      en: 'React frontend for the IBGE Localities API — hierarchical navigation across regions, states and municipalities with TypeScript types and Docker/nginx deploy.',
      es: 'Frontend React para la API de Localidades del IBGE — navegación jerárquica por regiones, estados y municipios con tipos TypeScript y deploy Docker/nginx.',
    },
    features: {
      pt: [
        'Cliente tipado para servicodados.ibge.gov.br',
        'Rotas: regiões → estados → municípios',
      ],
      en: [
        'Typed client for servicodados.ibge.gov.br',
        'Routes: regions → states → municipalities',
      ],
      es: [
        'Cliente tipado para servicodados.ibge.gov.br',
        'Rutas: regiones → estados → municipios',
      ],
    },
    link: 'https://github.com/tofariasti/ibge-localidades',
    linkLabel: { pt: 'Código', en: 'Code', es: 'Código' },
  },
  {
    id: 'gerenciador-financas',
    category: 'oss',
    badge: 'Open Source',
    title: 'gerenciador-financas-pessoais',
    pills: ['PHP', 'MySQL'],
    description: {
      pt: 'Gerenciador de finanças pessoais em PHP.',
      en: 'Personal finance manager built with PHP.',
      es: 'Gestor de finanzas personales en PHP.',
    },
    link: 'https://github.com/tofariasti/gerenciador-financas-pessoais',
    linkLabel: { pt: 'Código', en: 'Code', es: 'Código' },
  },
  {
    id: 'laravel-jqgrid',
    category: 'oss',
    badge: 'Open Source',
    title: 'laravel-jqgrid-retrieve-jsondata',
    pills: ['Laravel', 'JSON'],
    description: {
      pt: 'JQGrid com ordenação e paginação via JSON no Laravel.',
      en: 'JQGrid sorting and paging with Laravel JSON endpoints.',
      es: 'JQGrid con ordenación y paginación vía JSON en Laravel.',
    },
    link: 'https://github.com/tofariasti/laravel-jqgrid-retrieve-jsondata',
    linkLabel: { pt: 'Código', en: 'Code', es: 'Código' },
  },
  {
    id: 'silex-soaapi',
    category: 'oss',
    badge: 'Open Source',
    title: 'silex-soaapi',
    pills: ['PHP', 'Silex', 'SOA'],
    description: {
      pt: 'API SOA com Silex.',
      en: 'SOA API built with Silex.',
      es: 'API SOA con Silex.',
    },
    link: 'https://github.com/tofariasti/silex-soaapi',
    linkLabel: { pt: 'Código', en: 'Code', es: 'Código' },
  },
  {
    id: 'resume',
    category: 'oss',
    badge: 'Open Source',
    title: 'resume',
    pills: ['PHP'],
    description: {
      pt: 'Repositório de currículo / resume — Analista de Sistemas PHP.',
      en: 'Resume repository — PHP Systems Analyst.',
      es: 'Repositorio de currículum — Analista de Sistemas PHP.',
    },
    link: 'https://github.com/tofariasti/resume',
    linkLabel: { pt: 'Código', en: 'Code', es: 'Código' },
  },
]
