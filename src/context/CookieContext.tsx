import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { COOKIE_KEY } from '../data/constants'
import { readStorage, writeStorage } from '../utils/storage'

type CookieChoice = 'accepted' | 'rejected' | null

interface CookieContextValue {
  choice: CookieChoice
  isModalOpen: boolean
  accept: () => void
  reject: () => void
  openModal: () => void
  closeModal: () => void
}

const CookieContext = createContext<CookieContextValue | null>(null)

function readChoice(): CookieChoice {
  const stored = readStorage(COOKIE_KEY)
  if (stored === '1') return 'accepted'
  if (stored === '0') return 'rejected'
  return null
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<CookieChoice>(() => readChoice())
  const [isModalOpen, setIsModalOpen] = useState(() => readChoice() === null)

  const accept = useCallback(() => {
    writeStorage(COOKIE_KEY, '1')
    setChoice('accepted')
    setIsModalOpen(false)
  }, [])

  const reject = useCallback(() => {
    writeStorage(COOKIE_KEY, '0')
    setChoice('rejected')
    setIsModalOpen(false)
  }, [])

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  useEffect(() => {
    document.body.classList.toggle('cookie-modal-open', isModalOpen)
    return () => document.body.classList.remove('cookie-modal-open')
  }, [isModalOpen])

  const value = useMemo(
    () => ({ choice, isModalOpen, accept, reject, openModal, closeModal }),
    [choice, isModalOpen, accept, reject, openModal, closeModal],
  )

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
}

export function useCookie() {
  const ctx = useContext(CookieContext)
  if (!ctx) throw new Error('useCookie must be used within CookieProvider')
  return ctx
}
