import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { devNavLinks } from '../data/navigation'
import { queueScrollToSection } from '../utils/scroll'

const DEV_SECTION_IDS = new Set(
  devNavLinks.filter((link) => link.href.startsWith('#')).map((link) => link.href.slice(1)),
)

/**
 * HashRouter treats `#freelance` as route `/freelance`, which unmounts the portfolio.
 * Recover legacy / mistaken section hashes by restoring `#/` and scrolling.
 */
export function useSectionHashRecovery() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pendingScroll = useRef<string | null>(null)

  useEffect(() => {
    const sectionId = pathname.replace(/^\//, '')
    if (!sectionId || sectionId === 'drone') return

    if (DEV_SECTION_IDS.has(sectionId)) {
      pendingScroll.current = sectionId
      navigate('/', { replace: true })
    }
  }, [pathname, navigate])

  useEffect(() => {
    if (pathname !== '/' || !pendingScroll.current) return
    const id = pendingScroll.current
    pendingScroll.current = null
    queueScrollToSection(id)
  }, [pathname])
}
