import type { TimelineEntry } from '../types/content'

export const freelanceSection = {
  tag: { pt: 'Freelance', en: 'Freelance', es: 'Freelance' },
  title: { pt: 'Projetos freelance paralelos', en: 'Parallel freelance projects', es: 'Proyectos freelance en paralelo' },
  lead: {
    pt: 'Projetos realizados em horário oposto às atividades principais — Laravel, Python/Django, integrações e automação de dados.',
    en: 'Projects delivered alongside main roles — Laravel, Python/Django, integrations and data automation.',
    es: 'Proyectos realizados en horario complementario a las actividades principales — Laravel, Python/Django, integraciones y automatización de datos.',
  },
}

const freelancePill = { pt: 'Freelance paralelo', en: 'Parallel freelance', es: 'Freelance en paralelo' }

export const freelance: TimelineEntry[] = [
  {
    id: 'corrige-ai',
    period: { pt: '04/2025 – 06/2025', en: '04/2025 – 06/2025', es: '04/2025 – 06/2025' },
    periodDatetime: '2025-04/2025-06',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer', es: 'Desarrollador Backend Freelance' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'Corrige Aí', en: 'Corrige Aí', es: 'Corrige Aí' },
    companyUrl: 'https://corrigeai.com/',
    context: {
      pt: 'Reconstrução arquitetural de API REST em Laravel 10, DDD, Filament, AWS SQS e frontend React',
      en: 'Architectural rebuild of Laravel 10 REST API, DDD, Filament, AWS SQS and React frontend',
      es: 'Reconstrucción arquitectónica de API REST en Laravel 10, DDD, Filament, AWS SQS y frontend React',
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
      es: [
        'Reconstrucción de la API REST de la plataforma Corrige Aí en **Laravel 10**, reorganizando capas y reduciendo acoplamiento',
        'Aplicación de **DDD**, Clean Code, SOLID, YAGNI y PSRs entre dominio, aplicación, infraestructura y HTTP',
        'API REST estandarizada para consumo del frontend **React** — contratos JSON, validaciones y manejo de errores',
        'Paneles administrativos con **Laravel Filament**',
        'Colas asíncronas con **AWS SQS** y workers Laravel — jobs, reintentos y procesamiento en background sin bloquear la API',
        'Adopción de SQS como servicio gestionado AWS, reduciendo mantenimiento de infraestructura de mensajería propia',
      ],
    },
  },
  {
    id: 'sisbap',
    period: { pt: '01/2025 – 03/2025', en: '01/2025 – 03/2025', es: '01/2025 – 03/2025' },
    periodDatetime: '2025-01/2025-03',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer', es: 'Desarrollador Backend Freelance' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'SISBAP', en: 'SISBAP', es: 'SISBAP' },
    companyUrl: 'https://sisbap.com.br/',
    context: {
      pt: 'Manutenção evolutiva em sistema multi-tenant Python/Django, React, filas assíncronas e templates de laudos',
      en: 'Evolutionary maintenance on multi-tenant Python/Django system, React, async queues and report templates',
      es: 'Mantenimiento evolutivo en sistema multi-tenant Python/Django, React, colas asíncronas y plantillas de informes',
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
      es: [
        'Mantenimiento evolutivo en SISBAP — aplicación corporativa **Python/Django** multi-tenant con React y MySQL',
        'Rutinas asíncronas con colas, jobs y workers en Django; control de estado (solicitud, procesamiento, conclusión, fallo)',
        'Persistencia de control de colas en MySQL vía **Django ORM**, respetando aislamiento por tenant',
        'Creación y evolución de plantillas de informes; integración backend–frontend para generación y consulta de documentos',
      ],
    },
  },
  {
    id: 'cnpj-etl',
    period: { pt: '2023 · 2 meses', en: '2023 · 2 months', es: '2023 · 2 meses' },
    periodDatetime: '2023',
    title: { pt: 'Desenvolvedor Backend Freelancer', en: 'Freelance Backend Developer', es: 'Desarrollador Backend Freelance' },
    titleEn: '/ Freelance Backend Developer',
    company: { pt: 'Projeto para escritório de advocacia', en: 'Law firm project', es: 'Proyecto para bufete de abogados' },
    context: {
      pt: 'Automação em Python para download, processamento e carga dos dados públicos de CNPJ da Receita Federal em MySQL',
      en: "Python automation to download, process and load public CNPJ data from Brazil's Federal Revenue into MySQL",
      es: 'Automatización en Python para descarga, procesamiento y carga de datos públicos de CNPJ de la Receita Federal en MySQL',
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
      es: [
        'Automatización en **Python** para descargar, organizar, procesar e importar datos públicos de CNPJ de la Receita Federal',
        'Rutina de descarga de archivos oficiales, extracción, normalización y carga en MySQL con procesamiento por lotes',
        'Flujo ETL con tablas staging, inserciones masivas y mecanismos de reanudación con logs y control de progreso',
      ],
    },
  },
  {
    id: 'wk-detran',
    period: { pt: '03/2021 – 09/2021', en: '03/2021 – 09/2021', es: '03/2021 – 09/2021' },
    periodDatetime: '2021-03/2021-09',
    place: { pt: 'Florianópolis, SC — Remoto', en: 'Florianópolis, SC — Remote', es: 'Florianópolis, SC — Remoto' },
    title: { pt: 'Desenvolvedor de Software Laravel', en: 'Laravel Software Developer', es: 'Desarrollador de Software Laravel' },
    titleEn: '/ Laravel Software Developer',
    company: { pt: 'WK Technology · Freelance', en: 'WK Technology · Freelance', es: 'WK Technology · Freelance' },
    context: {
      pt: 'Controle de presença em aulas remotas de formação de condutores — credenciamento Detran/PR',
      en: 'Attendance control for remote driver training classes — Detran/PR (Paraná) accreditation',
      es: 'Control de asistencia en clases remotas de formación de conductores — acreditación Detran/PR',
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
      es: [
        'Proyecto para el **Detran/PR**: backend en Laravel responsable de registrar y auditar la asistencia de alumnos en **clases remotas** de autoescuelas acreditadas, conforme a los requisitos del organismo',
        'Desarrollo de **API REST** con endpoints para alumnos, grupos/clases, sesiones remotas y registro de asistencia — contratos JSON, validación de entrada, autenticación y persistencia de operaciones',
        'Capa de orquestación entre la plataforma de enseñanza y servicios externos: la API centraliza reglas de negocio, normaliza respuestas y expone flujos consumibles por el frontend e integraciones asociadas',
        'Integración con la plataforma **Gryfo** de reconocimiento facial: envío de datos biométricos, recepción del resultado de verificación y vinculación del match al alumno y a la clase en curso',
        'Flujo de asistencia: identificación facial del alumno al inicio (y/o durante) la clase remota; confirmación de que la persona conectada corresponde al registro antes de validar la asistencia ante el Detran/PR',
        'Manejo de fallos de reconocimiento, inconsistencias y reprocesamiento; registro de intentos e historial para trazabilidad y auditoría del proceso',
        'Trabajo remoto en WK Technology con foco en backend Laravel, documentación de endpoints y entrega incremental del servicio de integración',
      ],
    },
  },
  {
    id: 'base-tecnologia',
    period: { pt: '06/2020 – 10/2020', en: '06/2020 – 10/2020', es: '06/2020 – 10/2020' },
    periodDatetime: '2020-06/2020-10',
    title: { pt: 'Desenvolvedor PHP Freelancer', en: 'Freelance PHP Developer', es: 'Desarrollador PHP Freelance' },
    titleEn: '/ Freelance PHP Developer',
    company: {
      pt: 'Base em Tecnologia · Brondani Auto Peças · Profissionais SA',
      en: 'Base em Tecnologia · Brondani Auto Peças · Profissionais SA',
      es: 'Base em Tecnologia · Brondani Auto Peças · Profissionais SA',
    },
    context: {
      pt: 'Integrações, manutenção de sites, CRM e APIs para e-commerce automotivo',
      en: 'Integrations, website maintenance, CRM and APIs for automotive e-commerce',
      es: 'Integraciones, mantenimiento de sitios, CRM y APIs para e-commerce automotriz',
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
      es: [
        'Mantenimiento de sitios e integración con API AnyMarket',
        'Integración para consulta de repuestos automotrices vía APIs REST y SOAP (PostgreSQL)',
        'Adecuación de CRM en CodeIgniter con RD Station y ExactSales',
      ],
    },
  },
]

export { freelancePill }
