import { describe, expect, it } from 'vitest'
import { getSectionIdsFromNav } from '../utils/scroll'

describe('scroll utils', () => {
  it('extracts section ids from nav hrefs', () => {
    expect(getSectionIdsFromNav(['#sobre', '#freelance', 'https://example.com'])).toEqual([
      'sobre',
      'freelance',
    ])
  })
})
