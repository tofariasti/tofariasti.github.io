import type { TimelineEntry } from '../types/content'

export const experienceSection = {
  tag: { pt: 'Experiência', en: 'Experience' },
  title: { pt: 'Linha do tempo profissional', en: 'Professional timeline' },
}

export const experience: TimelineEntry[] = [
  {
    id: 'yara',
    period: { pt: '04/2024 – atual', en: '04/2024 – present' },
    periodDatetime: '2024',
    place: { pt: 'Porto Alegre, BR', en: 'Porto Alegre, BR' },
    title: { pt: 'Desenvolvedor PHP Laravel', en: 'Senior Backend Developer' },
    titleEn: '/ Senior Backend Developer',
    company: { pt: 'AP Digital Services · Alocação em Yara Brasil', en: 'AP Digital Services · Yara Brazil allocation' },
    context: {
      pt: 'Fertilizantes, nutrição para plantas e consultoria agrícola',
      en: 'Fertilizers, plant nutrition and agricultural consulting',
    },
    featuredPill: 'Offline First',
    pills: [
      'Laravel', 'DDD', 'Clean Code', 'SOLID', 'PSRs', 'Flutter', 'Salesforce', 'Redis', 'Horizon',
      'SSO', 'SAML2', 'Azure AD', 'Sanctum', 'Pulse', 'E2E',
    ],
    bullets: {
      pt: [
        'Sistema crítico de consultoria agrícola com API REST versionada em Laravel para app Flutter',
        'Backend **100% Offline First**: sincronização posterior, operação em campo, consistência e continuidade em áreas remotas',
        'Arquitetura **DDD** com **Clean Code**, **SOLID**, **YAGNI** e **PSRs** — baixo acoplamento, alta coesão e manutenibilidade',
        'Planejamento da migração **Laravel 10 → 12** (bootstrap, middleware, providers, exceptions e pacotes)',
        'Integrações com **Salesforce CRM**, cotação do dólar, dados climáticos e Atfarm API',
        'Mais de **11 pipelines** de importação assíncrona Salesforce (OAuth2 JWT, SOQL, jobs, Redis, Horizon)',
        'Adoção de **Redis + Laravel Horizon** em vez de RabbitMQ: alinhamento com a stack Laravel, menor complexidade operacional e observabilidade integrada de filas, workers e falhas',
        'Observabilidade: Telescope, Pulse, Spatie Health, Log Viewer e alertas MS Teams (5xx/exceptions)',
        'SSO corporativo via **SAML2** com **Microsoft Azure AD** (pacote aacotroneo/laravel-saml2), integrado a Sanctum e cenários de autenticação dupla',
        'Painel administrativo **Filament v3** e Livewire (clientes, campanhas, precificação)',
        'Testes E2E; Larastan, PHPStan, Pest, Pint, PHP Insights e CaptainHook',
      ],
      en: [
        'Critical agricultural consulting system with versioned Laravel REST API for Flutter app',
        '**100% Offline First** backend: deferred sync, field ops, data consistency and remote-area continuity',
        '**DDD** with **Clean Code**, **SOLID**, **YAGNI** and **PSRs** — low coupling, high cohesion and maintainability',
        'Planned **Laravel 10→12** migration (bootstrap, middleware, providers, exceptions and packages)',
        'Integrations with **Salesforce CRM**, FX rates, weather data and Atfarm API',
        '**11+ async pipelines** for Salesforce imports (OAuth2 JWT, SOQL, jobs, Redis, Horizon)',
        '**Redis + Laravel Horizon** instead of RabbitMQ: Laravel-native stack, lower ops complexity and integrated queue/worker observability',
        'Observability: Telescope, Pulse, Spatie Health, Log Viewer and MS Teams alerts (5xx/exceptions)',
        'Corporate **SSO via SAML2** with **Microsoft Azure AD** (aacotroneo/laravel-saml2), integrated with Sanctum and two-factor scenarios',
        '**Filament v3** and Livewire admin (clients, campaigns, pricing)',
        'E2E tests; Larastan, PHPStan, Pest, Pint, PHP Insights and CaptainHook',
      ],
    },
  },
  {
    id: 'stargrid',
    period: { pt: '11/2020 – 03/2024', en: '11/2020 – 03/2024' },
    periodDatetime: '2020-11/2024-03',
    title: { pt: 'Desenvolvedor PHP', en: 'PHP Developer' },
    company: { pt: 'Stargrid', en: 'Stargrid' },
    context: {
      pt: 'Plataforma SaaS healthtech para gestão de escalas hospitalares',
      en: 'Healthtech SaaS platform for hospital shift management',
    },
    pills: ['Healthtech', 'Laravel', 'RabbitMQ', 'AWS', 'MySQL', 'MongoDB'],
    bullets: {
      pt: [
        'Core da plataforma SaaS healthtech com alta disponibilidade e operação crítica',
        'APIs REST Laravel; regras de negócio e persistência híbrida MySQL + MongoDB',
        'Processamento assíncrono com **RabbitMQ** para rotinas em background, desacoplamento de tarefas demoradas e melhoria de performance',
        'Controle de workers, tratamento de falhas, reprocessamento e acompanhamento de filas em produção',
        'Uso do RabbitMQ pela necessidade de mensageria robusta em ambiente com volume operacional relevante',
        'Testes Cypress e Behat; PHP Insights e code review',
        'Infraestrutura AWS (EC2, RDS); GitLab; React, Alpine.js e Livewire',
      ],
      en: [
        'Core of a high-availability healthtech SaaS platform with critical operations',
        'Laravel REST APIs; business rules; hybrid MySQL + MongoDB persistence',
        'Async processing with **RabbitMQ** for background routines, decoupling long tasks and improving performance',
        'Worker management, failure handling, retries and production queue monitoring',
        'RabbitMQ chosen for robust messaging in a high-volume operational environment',
        'Cypress and Behat testing; PHP Insights and code review',
        'AWS infrastructure (EC2, RDS); GitLab; React, Alpine.js and Livewire',
      ],
    },
  },
  {
    id: 'soulog',
    period: { pt: '05/2020 – 10/2020', en: '05/2020 – 10/2020' },
    periodDatetime: '2020-05/2020-10',
    title: { pt: 'Desenvolvedor PHP', en: 'PHP Developer' },
    company: {
      pt: 'DBC Company · Alocação em SouLog / Goodmanager',
      en: 'DBC Company · SouLog / Goodmanager allocation',
    },
    context: {
      pt: 'Plataforma corporativa para gestão de processos de licitações',
      en: 'Corporate platform for bidding process management',
    },
    pills: ['PHP', 'Oracle', 'Sybase', 'Sistemas Corporativos'],
    bullets: {
      pt: [
        'Evolução do Goodmanager, plataforma corporativa para gestão de licitações',
        'Levantamento de requisitos e desenvolvimento em backend, frontend e banco de dados',
        'Oracle e Sybase: consultas, manutenção e regras de negócio em contexto corporativo',
      ],
      en: [
        'Goodmanager evolution — corporate bidding management platform',
        'Requirements and full-stack development (backend, frontend, database)',
        'Oracle and Sybase: queries, maintenance and business rules in a corporate context',
      ],
    },
  },
  {
    id: 'ticketlog',
    period: { pt: '05/2018 – 06/2020', en: '05/2018 – 06/2020' },
    periodDatetime: '2018-05/2020-06',
    title: { pt: 'Desenvolvedor Backend', en: 'Backend Developer' },
    company: {
      pt: 'DBC Company · Alocação em Ticket Log',
      en: 'DBC Company · Ticket Log allocation',
    },
    context: {
      pt: 'Gestão de frotas, abastecimento, manutenção veicular e meios de pagamento',
      en: 'Fleet management, fueling, vehicle maintenance and payment methods',
    },
    pills: ['PHP', 'ColdFusion', 'Java', 'Oracle', 'Sybase', 'Kanban', 'Azure DevOps', 'Acessibilidade'],
    bullets: {
      pt: [
        'Sistemas corporativos de alta criticidade para frotas e meios de pagamento',
        'Desenvolvimento, manutenção evolutiva e sustentação com PHP, ColdFusion e Java',
        'Procedures, queries e regras de negócio em Oracle e Sybase; análise de incidentes em produção',
        'Rotina ágil com Kanban, sprint planning, refinamentos e estimativas; **Azure DevOps** para backlog e bugs',
        'Sustentação de sistemas críticos: investigação de incidentes, logs, reprodução de cenários e correção de falhas',
        'Adequação de acessibilidade web (HTML5, NVDA, eMAG, Google Lighthouse)',
      ],
      en: [
        'High-criticality corporate systems for fleets and payment methods',
        'Development, evolutionary maintenance and support with PHP, ColdFusion and Java',
        'Oracle and Sybase procedures, queries and business rules; production incident analysis',
        'Agile routine with Kanban, sprint planning, refinements and estimates; **Azure DevOps** for backlog and bugs',
        'Critical system support: incident investigation, logs, scenario reproduction and bug fixes',
        'Web accessibility compliance (HTML5, NVDA, eMAG, Google Lighthouse)',
      ],
    },
  },
  {
    id: 'rz2',
    period: { pt: '07/2017 – 04/2018', en: '07/2017 – 04/2018' },
    periodDatetime: '2017-07/2018-04',
    title: { pt: 'Desenvolvedor PHP', en: 'PHP Developer' },
    company: { pt: 'RZ2 Sistemas de Gestão', en: 'RZ2 Sistemas de Gestão' },
    context: {
      pt: 'APIs REST, serviços backend e integração de sistemas',
      en: 'REST APIs, backend services and system integration',
    },
    pills: ['Lumen', 'Doctrine', 'JSON:API', 'JWT', 'Jenkins', 'JMeter'],
    bullets: {
      pt: [
        'APIs REST com CORS e JWT seguindo a especificação JSON:API',
        'Lumen e Doctrine na construção de serviços backend',
        'Testes de integração; deploy Jenkins; testes de carga com JMeter',
      ],
      en: [
        'REST APIs with CORS and JWT following the JSON:API specification',
        'Lumen and Doctrine backend services',
        'Integration tests; Jenkins deploy; JMeter load testing',
      ],
    },
  },
  {
    id: 'inmetro',
    period: { pt: '03/2015 – 05/2017', en: '03/2015 – 05/2017' },
    periodDatetime: '2015-03/2017-05',
    title: { pt: 'Analista Desenvolvedor PHP', en: 'PHP Developer Analyst' },
    company: {
      pt: 'AdvancedIT · Alocação em Inmetro',
      en: 'AdvancedIT · Inmetro allocation',
    },
    context: {
      pt: 'Projeto Cronotacógrafo — sistema nacional de controle e gestão metrológica',
      en: 'Chronotachograph project — national metrological control system',
    },
    contextUrl: 'https://cronotacografo.rbmlq.gov.br/',
    pills: ['CakePHP', 'Oracle', 'Inmetro', 'Sistema Governamental', 'BPMN', 'Bizagi'],
    bullets: {
      pt: [
        'Atuação no **Projeto Cronotacógrafo** no contexto do Inmetro e da Rede Brasileira de Metrologia Legal e Qualidade',
        'Desenvolvimento e manutenção de funcionalidades em sistema web governamental (ensaios, verificações, documentos e processos)',
        'Backend com PHP e CakePHP; regras de negócio regulatórias e persistência em Oracle',
        'Levantamento de requisitos junto às áreas envolvidas; mapeamento de processos com BPMN (Bizagi)',
      ],
      en: [
        'Work on the **Chronotachograph Project** within Inmetro and the Brazilian Legal Metrology network',
        'Development and maintenance of government web system features (tests, verifications, documents and processes)',
        'PHP and CakePHP backend; regulatory business rules and Oracle persistence',
        'Requirements gathering with stakeholders; business process mapping with BPMN (Bizagi)',
      ],
    },
  },
  {
    id: 'earlier',
    period: { pt: '2011 – 2015', en: '2011 – 2015' },
    periodDatetime: '2011/2015',
    title: { pt: 'Experiências anteriores', en: 'Earlier roles' },
    company: {
      pt: 'Construtora Pelotense · Constat · EMATER/ASCAR · CWI',
      en: 'Construtora Pelotense · Constat · EMATER/ASCAR · CWI',
    },
    context: {
      pt: 'Sistemas web internos, integrações corporativas, manutenção e suporte técnico',
      en: 'Internal web systems, enterprise integrations, maintenance and technical support',
    },
    pills: ['PHP', 'Laravel', 'CodeIgniter', 'Zend Framework', '.NET', 'Linux'],
    bullets: {
      pt: [
        'Desenvolvimento de sistemas web internos, integrações com bases corporativas e sustentação de aplicações',
        'PHP, Laravel, CodeIgniter, Zend Framework, .NET, SQL Server, MySQL, Oracle e Java',
        'Levantamento de requisitos, TDD, documentação técnica, Linux e projetos corporativos',
      ],
      en: [
        'Internal web systems, enterprise database integrations and application maintenance',
        'PHP, Laravel, CodeIgniter, Zend Framework, .NET, SQL Server, MySQL, Oracle and Java',
        'Requirements, TDD, technical documentation, Linux and enterprise projects',
      ],
    },
  },
]
