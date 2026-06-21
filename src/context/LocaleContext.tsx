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

function isLocale(value: string | null): value is Locale {
  return value === 'pt' || value === 'en' || value === 'es'
}

function getLangFromUrl(): Locale | null {
  const lang = new URLSearchParams(window.location.search).get('lang')
  return isLocale(lang) ? lang : null
}

function syncLangQueryParam(locale: Locale) {
  const url = new URL(window.location.href)
  if (locale === 'pt') {
    url.searchParams.delete('lang')
  } else {
    url.searchParams.set('lang', locale)
  }
  window.history.replaceState(null, '', url.toString())
}

function detectInitialLocale(): Locale {
  const fromUrl = getLangFromUrl()
  if (fromUrl) return fromUrl
  const stored = readStorage(LANG_KEY)
  if (isLocale(stored)) return stored
  return 'pt'
}

function htmlLang(locale: Locale): string {
  if (locale === 'pt') return 'pt-BR'
  if (locale === 'es') return 'es'
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeStorage(LANG_KEY, next)
    syncLangQueryParam(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale)
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
