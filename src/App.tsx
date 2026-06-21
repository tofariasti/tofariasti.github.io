import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CookieProvider } from './context/CookieContext'
import { LocaleProvider } from './context/LocaleContext'
import { CookieModal } from './components/layout/CookieModal'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { PageBackground } from './components/ui/PageBackground'
import { cookieCopy, droneCookieCopy, seoMeta } from './data/drone'
import { devNavLinks, droneNavLinks } from './data/navigation'
import { PHOTO_URL, SITE_URL } from './data/constants'
import { DevPortfolioPage } from './pages/DevPortfolioPage'
import { DronePage } from './pages/DronePage'
import { useSectionHashRecovery } from './hooks/useSectionHashRecovery'

function DocumentHead() {
  const { pathname } = useLocation()
  const isDrone = pathname === '/drone'
  const meta = isDrone ? seoMeta.drone : seoMeta.dev

  useEffect(() => {
    document.title = meta.title
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', meta.description)
    setMeta('og:title', meta.ogTitle, true)
    setMeta('og:description', meta.ogDescription, true)
    setMeta('og:image', PHOTO_URL, true)
    setMeta('og:url', isDrone ? `${SITE_URL}#/drone` : SITE_URL, true)
    setMeta('og:type', 'website', true)
    document.body.classList.toggle('page-drone', isDrone)
  }, [isDrone, meta])

  return null
}

function AppShell() {
  const { pathname } = useLocation()
  const isDrone = pathname === '/drone'
  useSectionHashRecovery()

  return (
    <>
      <DocumentHead />
      <PageBackground variant={isDrone ? 'drone' : 'dev'} />
      <Header
        variant={isDrone ? 'drone' : 'dev'}
        navLinks={isDrone ? droneNavLinks : devNavLinks}
        logoLabel={isDrone ? 'Tech Drone 360 — início' : 'Tiago O. de Farias — início'}
        logoClassName={isDrone ? 'logo--drone' : ''}
        whatsappContext={isDrone ? 'drone' : 'dev'}
      />
      <Routes>
        <Route path="/" element={<DevPortfolioPage />} />
        <Route path="/drone" element={<DronePage />} />
      </Routes>
      <Footer variant={isDrone ? 'drone' : 'dev'} />
      <CookieModal copy={isDrone ? droneCookieCopy : cookieCopy} />
    </>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <CookieProvider>
        <HashRouter>
          <AppShell />
        </HashRouter>
      </CookieProvider>
    </LocaleProvider>
  )
}
