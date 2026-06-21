import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { NavLink as NavLinkType, WhatsAppContext } from '../../types/content'
import { LOCALES } from '../../types/content'
import { siteTabs } from '../../data/navigation'
import { uiCopy } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useLocale } from '../../context/LocaleContext'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useHeaderHeight } from '../../hooks/useHeaderHeight'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { handleSectionNav } from '../../utils/scroll'
import { SiteTabs } from './SiteTabs'

interface HeaderProps {
  variant: 'dev' | 'drone'
  navLinks: NavLinkType[]
  logoLabel: string
  logoClassName?: string
  whatsappContext: WhatsAppContext
}

function DownloadIcon() {
  return (
    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export function Header({
  variant,
  navLinks,
  logoLabel,
  logoClassName = '',
  whatsappContext,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const { locale, setLocale, t } = useLocale()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = navLinks.filter((l) => l.href.startsWith('#')).map((l) => l.href.slice(1))
  const activeSection = useActiveSection(sectionIds)

  useHeaderHeight(headerRef)

  useEffect(() => {
    setMobileOpen(false)
    document.body.classList.remove('nav-menu-open')
  }, [location.pathname])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = buildWhatsAppUrl(whatsappContext, locale)
  const hashNavLinks = navLinks.filter((l) => l.href.startsWith('#'))
  const externalNavLinks = navLinks.filter((l) => !l.href.startsWith('#'))

  const toggleMobile = () => {
    setMobileOpen((open) => {
      const next = !open
      document.body.classList.toggle('nav-menu-open', next)
      return next
    })
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.classList.remove('nav-menu-open')
  }

  return (
    <header id="header" ref={headerRef}>
      <div className="header-bar-wrap">
        <div className="container nav-floating">
          <div className="nav-top">
            <SiteTabs tabs={siteTabs} activeId={variant} />
            <div className="lang-switch" role="group" aria-label={t(uiCopy.langGroup)}>
              {LOCALES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`lang-btn${locale === lang ? ' lang-btn--active' : ''}`}
                  aria-pressed={locale === lang}
                  onClick={() => setLocale(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <nav className="nav-wrapper" aria-label={t(uiCopy.mainNav)}>
            <Link to={variant === 'dev' ? '/' : '/drone'} className={`logo ${logoClassName}`.trim()} aria-label={logoLabel}>
              <img src="img/favicon.svg" alt="" width="36" height="36" className="logo-icon" />
              <span className="logo-text">{variant === 'dev' ? profile.name : 'Tech Drone 360'}</span>
            </Link>
            <ul className={`nav-desktop${variant === 'drone' ? ' nav-desktop--compact' : ''}`}>
              {hashNavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={activeSection === link.href.slice(1) ? 'is-active' : undefined}
                    onClick={(e) => handleSectionNav(e, link.href.slice(1))}
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
              {externalNavLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="nav-link--highlight" target="_blank" rel="noopener noreferrer">
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              {variant === 'dev' && (
                <a
                  href={profile.cvPdf}
                  className="btn btn--nav btn--nav-cv"
                  download={profile.cvPdfDownload}
                  title={t(uiCopy.cvDownload)}
                >
                  <DownloadIcon />
                  <span className="nav-btn-label">{t(uiCopy.cv)}</span>
                </a>
              )}
              <a href={waUrl} className="btn btn--nav btn--nav-wa nav-wa" target="_blank" rel="noopener noreferrer" title={t(uiCopy.whatsapp)}>
                {t(uiCopy.whatsapp)}
              </a>
              <button
                type="button"
                className={`menu-hamburguer${mobileOpen ? ' change' : ''}`}
                aria-label={t(uiCopy.menu)}
                aria-expanded={mobileOpen}
                onClick={toggleMobile}
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <nav className={`nav-responsive${mobileOpen ? ' active' : ''}`} aria-label={t(uiCopy.mobileNav)} hidden={!mobileOpen}>
        <SiteTabs tabs={siteTabs} activeId={variant} compact />
        {variant === 'drone' && (
          <a href="https://techdrone360.com.br/" className="nav-mobile-site" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
            {t({ pt: 'Visitar techdrone360.com.br', en: 'Visit techdrone360.com.br', es: 'Visitar techdrone360.com.br' })}
          </a>
        )}
        {hashNavLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              handleSectionNav(e, link.href.slice(1))
              closeMobile()
            }}
          >
            {t(link.label)}
          </a>
        ))}
        {variant === 'dev' && (
          <a href={profile.cvPdf} className="btn btn--cv" download={profile.cvPdfDownload} onClick={closeMobile}>
            <DownloadIcon />
            {t(uiCopy.cvDownload)}
          </a>
        )}
        <a href={waUrl} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
          {t(uiCopy.whatsapp)}
        </a>
      </nav>
    </header>
  )
}
