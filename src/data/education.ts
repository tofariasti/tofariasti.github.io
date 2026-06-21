import type { Certification, EducationEntry } from '../types/content'

export const educationSection = {
  tag: { pt: 'Formação', en: 'Education' },
  title: { pt: 'Formação e certificações', en: 'Education & certifications' },
  certsTitle: { pt: 'Cursos e certificações', en: 'Courses & certifications' },
}

export const education: EducationEntry[] = [
  {
    id: 'postgrad',
    wide: true,
    title: {
      pt: 'Pós-Graduação em Sistemas de Informação com Métodos Ágeis',
      en: 'Postgraduate in Information Systems with Agile Methods',
    },
    meta: 'UniRitter · 2014 – 2016',
    description: {
      pt: 'Práticas ágeis, Design Patterns, arquiteturas web e testes ágeis.',
      en: 'Agile practices, Design Patterns, web architectures and agile testing.',
    },
    article: {
      pt: 'Artigo: Aplicação de Domain-Driven Design no Gerenciamento de GRU de Cronotacógrafo no Inmetro/RS',
      en: 'Article: Applying Domain-Driven Design to chronotachograph GRU management at Inmetro/RS',
    },
  },
  {
    id: 'grad',
    title: {
      pt: 'Graduação em Análise e Desenvolvimento de Sistemas',
      en: 'Bachelor in Systems Analysis and Development',
    },
    meta: 'Faculdades QI · 2010 – 2013',
  },
  {
    id: 'tech',
    title: {
      pt: 'Técnico em Informática',
      en: 'IT Technician',
    },
    meta: 'Faculdade QI · 2008 – 2010',
  },
]

export const certifications: Certification[] = [
  { id: 'flutter', text: 'Flutter para Android e iOS — Udemy · 07/2025 · 60 horas' },
  { id: 'python', text: 'Python 3: do básico ao avançado — Udemy · 11/2020' },
  { id: 'imasters', text: 'iMasters Certified Professional – PHP Boas Práticas · 04/2017' },
  { id: 'behat', text: 'BDD - Testes Guiados por Comportamento com Behat PHP — TreinaWeb · 09/2017' },
  { id: 'expressive', text: 'Zend Expressive - Microframework PHP — TreinaWeb · 08/2017' },
  { id: 'pg-dev', text: 'PostgreSQL - Desenvolvedor — TreinaWeb · 08/2017' },
  { id: 'pg-dba', text: 'PostgreSQL - DBA — TreinaWeb · 10/2017' },
]
