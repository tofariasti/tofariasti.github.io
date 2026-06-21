import { beforeEach, describe, expect, it } from 'vitest'
import { readStorage, removeStorage, writeStorage } from '../utils/storage'

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('writes and reads values', () => {
    writeStorage('test_key', 'hello')
    expect(readStorage('test_key')).toBe('hello')
  })

  it('removes values', () => {
    writeStorage('test_key', 'hello')
    removeStorage('test_key')
    expect(readStorage('test_key')).toBeNull()
  })
})
