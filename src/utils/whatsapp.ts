import type { Locale, WhatsAppContext } from '../types/content'
import { WHATSAPP_NUMBER } from '../data/constants'

export const WA_MESSAGES: Record<WhatsAppContext, Record<Locale, string>> = {
  dev: {
    pt: 'Olá Tiago, vi seu portfólio de Desenvolvedor de Software e gostaria de conversar sobre uma oportunidade ou projeto.',
    en: 'Hi Tiago, I saw your Software Developer portfolio and would like to discuss an opportunity or project.',
    es: 'Hola Tiago, vi tu portafolio de Desarrollador de Software y me gustaría conversar sobre una oportunidad o proyecto.',
  },
  drone: {
    pt: [
      'Olá Tiago! Vi o Tech Drone 360 e gostaria de solicitar um orçamento para captação aérea com drone.',
      '',
      'Para agilizar o atendimento, seguem algumas informações:',
      '',
      '• Nome completo:',
      '• Empresa (se for PJ):',
      '• Serviço desejado: ( ) Fotos  ( ) Filmagem  ( ) Fotos e filmagem',
      '• Local / endereço ou cidade da captação:',
      '• Data ou período pretendido:',
      '• Tipo de projeto: (ex.: evento, imóvel, paisagem, redes sociais)',
      '• Detalhes ou referências (opcional):',
      '',
      'Aguardo seu retorno. Obrigado(a)!',
    ].join('\n'),
    en: [
      'Hi Tiago! I saw Tech Drone 360 and would like a quote for aerial drone photo/video.',
      '',
      'To help you faster, here is some information:',
      '',
      '• Full name:',
      '• Company (if business):',
      '• Service needed: ( ) Photos  ( ) Video  ( ) Photos and video',
      '• Location / address or city:',
      '• Preferred date or time window:',
      '• Project type: (e.g. event, real estate, landscape, social media)',
      '• Extra details or references (optional):',
      '',
      'Looking forward to your reply. Thank you!',
    ].join('\n'),
    es: [
      '¡Hola Tiago! Vi Tech Drone 360 y me gustaría solicitar un presupuesto para captación aérea con dron.',
      '',
      'Para agilizar la atención, comparto algunos datos:',
      '',
      '• Nombre completo:',
      '• Empresa (si es persona jurídica):',
      '• Servicio deseado: ( ) Fotos  ( ) Video  ( ) Fotos y video',
      '• Local / dirección o ciudad de la captación:',
      '• Fecha o período deseado:',
      '• Tipo de proyecto: (ej.: evento, inmueble, paisaje, redes sociales)',
      '• Detalles o referencias (opcional):',
      '',
      'Quedo atento a su respuesta. ¡Gracias!',
    ].join('\n'),
  },
}

export function buildWhatsAppUrl(context: WhatsAppContext, locale: Locale): string {
  const text = WA_MESSAGES[context][locale]
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
