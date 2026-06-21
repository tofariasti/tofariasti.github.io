import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, WA_MESSAGES } from '../utils/whatsapp'

describe('whatsapp', () => {
  it('builds dev pt url', () => {
    const url = buildWhatsAppUrl('dev', 'pt')
    expect(url).toContain('https://wa.me/5551989030405')
    expect(url).toContain(encodeURIComponent(WA_MESSAGES.dev.pt))
  })

  it('builds drone en url with multiline message', () => {
    const url = buildWhatsAppUrl('drone', 'en')
    expect(url).toContain(encodeURIComponent('Hi Tiago! I saw Tech Drone 360'))
  })
})
