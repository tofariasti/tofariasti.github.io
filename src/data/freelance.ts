import type { TimelineEntry } from '../types/content'

export const freelanceSection = {
  tag: { pt: 'Freelance', en: 'Freelance' },
  title: { pt: 'Projetos freelance paralelos', en: 'Parallel freelance projects' },
  lead: {
    pt: 'Projetos realizados em horário oposto às atividades principais — Laravel, Python/Django, integrações e automação de dados.',
    en: 'Projects delivered alongside main roles — Laravel, Python/Django, integrations and data automation.',
  },
}

const freelancePill = { pt: 'Freelance paralelo', en: 'Parallel freelance' }

export const freelance: TimelineEntry[] = [
  {
    id: 'corrige-ai',
    period: { pt: '04/2025 – 06/2025', en: '04/2025 – 06/2025' },
    periodDatetime: '2025-04/2025-06',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'Corrige Aí', en: 'Corrige Aí' },
    companyUrl: 'https://corrigeai.com/',
    context: {
      pt: 'Reconstrução arquitetural de API REST em Laravel 10, DDD, Filament, AWS SQS e frontend React',
      en: 'Architectural rebuild of Laravel 10 REST API, DDD, Filament, AWS SQS and React frontend',
    },
    freelancePill: true,
    pills: ['Laravel 10', 'DDD', 'Clean Code', 'Filament', 'AWS SQS', 'React'],
    bullets: {
      pt: [
        'Reconstrução da API REST da plataforma Corrige Aí em **Laravel 10**, reorganizando camadas e reduzindo acoplamento',
        'Aplicação de **DDD**, Clean Code, SOLID, YAGNI e PSRs entre domínio, aplicação, infraestrutura e HTTP',
        'API REST padronizada para consumo pelo frontend **React** — contratos JSON, validações e tratamento de erros',
        'Painéis administrativos com **Laravel Filament**',
        'Filas assíncronas com **AWS SQS** e workers Laravel — jobs, retries e processamento em background sem bloquear a API',
        'Adoção do SQS como serviço gerenciado AWS, reduzindo manutenção de infraestrutura de mensageria própria',
      ],
      en: [
        'Rebuild of the Corrige Aí REST API in **Laravel 10**, reorganizing layers and reducing coupling',
        '**DDD**, Clean Code, SOLID, YAGNI and PSRs across domain, application, infrastructure and HTTP',
        'Standardized REST API for **React** frontend — JSON contracts, validation and error handling',
        'Admin panels with **Laravel Filament**',
        'Async queues with **AWS SQS** and Laravel workers — jobs, retries and background processing without blocking the API',
        'SQS as managed AWS service, reducing self-hosted messaging infrastructure maintenance',
      ],
    },
  },
  {
    id: 'sisbap',
    period: { pt: '01/2025 – 03/2025', en: '01/2025 – 03/2025' },
    periodDatetime: '2025-01/2025-03',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'SISBAP', en: 'SISBAP' },
    companyUrl: 'https://sisbap.com.br/',
    context: {
      pt: 'Manutenção evolutiva em sistema multi-tenant Python/Django, React, filas assíncronas e templates de laudos',
      en: 'Evolutionary maintenance on multi-tenant Python/Django system, React, async queues and report templates',
    },
    freelancePill: true,
    pills: ['Python', 'Django', 'Multi-tenant', 'MySQL', 'React'],
    bullets: {
      pt: [
        'Manutenção evolutiva no SISBAP — aplicação corporativa **Python/Django** multi-tenant com React e MySQL',
        'Rotinas assíncronas com filas, jobs e workers no Django; controle de status (solicitação, processamento, conclusão, falha)',
        'Persistência de controle de filas no MySQL via **Django ORM**, respeitando isolamento por tenant',
        'Criação e evolução de templates de laudos; integração backend–frontend para geração e consulta de documentos',
      ],
      en: [
        'Evolutionary maintenance on SISBAP — corporate **Python/Django** multi-tenant app with React and MySQL',
        'Async routines with queues, jobs and Django workers; status tracking (requested, processing, done, failed)',
        'Queue control persistence in MySQL via **Django ORM**, respecting per-tenant isolation',
        'Report template creation and evolution; backend–frontend integration for document generation and lookup',
      ],
    },
  },
  {
    id: 'cnpj-etl',
    period: { pt: '2023 · 2 meses', en: '2023 · 2 months' },
    periodDatetime: '2023',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'Projeto para escritório de advocacia', en: 'Law firm project' },
    context: {
      pt: 'Automação em Python para download, processamento e carga dos dados públicos de CNPJ da Receita Federal em MySQL',
      en: "Python automation to download, process and load public CNPJ data from Brazil's Federal Revenue into MySQL",
    },
    freelancePill: true,
    pills: ['Python', 'MySQL', 'ETL', 'Automação', 'CNPJ'],
    bullets: {
      pt: [
        'Automação em **Python** para baixar, organizar, processar e importar dados públicos de CNPJ da Receita Federal',
        'Rotina de download dos arquivos oficiais, extração, normalização e carga em MySQL com processamento em lotes',
        'Fluxo ETL com tabelas staging, inserções em massa e mecanismos de retomada com logs e controle de progresso',
      ],
      en: [
        '**Python** automation to download, organize, process and import public CNPJ data from the Federal Revenue',
        'Official file download routine, extraction, normalization and batch MySQL loading',
        'ETL flow with staging tables, bulk inserts and resume mechanisms with logs and progress tracking',
      ],
    },
  },
  {
    id: 'wk-detran',
    period: { pt: '03/2021 – 09/2021', en: '03/2021 – 09/2021' },
    periodDatetime: '2021-03/2021-09',
    place: { pt: 'Florianópolis, SC — Remoto', en: 'Florianópolis, SC — Remote' },
    title: { pt: 'Desenvolvedor de Software Laravel', en: 'Laravel Software Developer' },
    titleEn: '/ Laravel Software Developer',
    company: { pt: 'WK Technology · Freelance', en: 'WK Technology · Freelance' },
    context: {
      pt: 'Controle de presença em aulas remotas de formação de condutores — credenciamento Detran/PR',
      en: 'Attendance control for remote driver training classes — Detran/PR (Paraná) accreditation',
    },
    freelancePill: true,
    pills: ['Laravel', 'REST API', 'Detran/PR', 'Gryfo', 'Biometria'],
    bullets: {
      pt: [
        'Projeto para o **Detran/PR**: backend em Laravel responsável por registrar e auditar a presença de alunos em **aulas remotas** de autoescolas credenciadas, em conformidade com exigências do órgão',
        'Desenvolvimento de **API REST** com endpoints para alunos, turmas/aulas, sessões remotas e registro de presença — contratos JSON, validação de entrada, autenticação e persistência das operações',
        'Camada de orquestração entre a plataforma de ensino e serviços externos: a API centraliza regras de negócio, normaliza respostas e expõe fluxos consumíveis pelo frontend e por integrações parceiras',
        'Integração com a plataforma **Gryfo** de reconhecimento facial: envio de dados biométricos, recebimento do resultado da verificação e amarração do match ao aluno e à aula em andamento',
        'Fluxo de presença: identificação facial do aluno no início (e/ou durante) da aula remota; confirmação de que a pessoa logada corresponde ao cadastro antes de validar a frequência junto ao Detran/PR',
        'Tratamento de falhas de reconhecimento, inconsistências e reprocessamento; registro de tentativas e histórico para rastreabilidade e auditoria do processo',
        'Atuação remota na WK Technology com foco em backend Laravel, documentação dos endpoints e entrega incremental do serviço de integração',
      ],
      en: [
        '**Detran/PR** project: Laravel backend to record and audit student attendance in **remote classes** at accredited driving schools, meeting state traffic department requirements',
        '**REST API** development with endpoints for students, classes, remote sessions and attendance records — JSON contracts, input validation, authentication and operation persistence',
        'Orchestration layer between the training platform and external services: the API centralizes business rules, normalizes responses and exposes flows for the frontend and partner integrations',
        'Integration with the **Gryfo** facial recognition platform: biometric submission, verification result handling and linking the match to the student and active class session',
        'Attendance flow: facial identification at the start (and/or during) remote lessons; confirmation that the logged-in person matches enrollment records before marking attendance for Detran/PR',
        'Handling of recognition failures, inconsistencies and retries; attempt logging and history for traceability and process audit',
        'Remote work at WK Technology focused on Laravel backend, API documentation and incremental delivery of the integration service',
      ],
    },
  },
  {
    id: 'base-tecnologia',
    period: { pt: '06/2020 – 10/2020', en: '06/2020 – 10/2020' },
    periodDatetime: '2020-06/2020-10',
    title: { pt: 'Desenvolvedor PHP Freelancer', en: 'Freelance PHP Developer' },
    titleEn: '/ Freelance PHP Developer',
    company: {
      pt: 'Base em Tecnologia · Brondani Auto Peças · Profissionais SA',
      en: 'Base em Tecnologia · Brondani Auto Peças · Profissionais SA',
    },
    context: {
      pt: 'Integrações, manutenção de sites, CRM e APIs para e-commerce automotivo',
      en: 'Integrations, website maintenance, CRM and APIs for automotive e-commerce',
    },
    freelancePill: true,
    pills: ['PHP', 'CodeIgniter', 'AnyMarket', 'RD Station', 'ExactSales'],
    bullets: {
      pt: [
        'Manutenção de sites e integração com API AnyMarket',
        'Integração para consulta de peças automotivas via APIs REST e SOAP (PostgreSQL)',
        'Adequação de CRM em CodeIgniter com RD Station e ExactSales',
      ],
      en: [
        'Website maintenance and AnyMarket API integration',
        'Auto parts lookup via REST and SOAP APIs (PostgreSQL)',
        'CodeIgniter CRM integration with RD Station and ExactSales',
      ],
    },
  },
]

export { freelancePill }
