import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale, Localized } from '../types/content'
import { LANG_KEY } from '../data/constants'
import { readStorage, writeStorage } from '../utils/storage'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T>(value: Localized<T>) => T
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function detectInitialLocale(): Locale {
  const stored = readStorage(LANG_KEY)
  if (stored === 'en' || stored === 'pt') return stored
  return 'pt'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeStorage(LANG_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const t = useCallback(
    <T,>(value: Localized<T>): T => value[locale],
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
