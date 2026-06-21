import { Link } from 'react-router-dom'
import { footerCopy, profile } from '../../data/profile'
import { droneFooterCopy } from '../../data/drone'
import { useLocale } from '../../context/LocaleContext'
import { useCookie } from '../../context/CookieContext'

interface FooterProps {
  variant: 'dev' | 'drone'
}

export function Footer({ variant }: FooterProps) {
  const { t } = useLocale()
  const { openModal } = useCookie()

  if (variant === 'drone') {
    return (
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-brand">{droneFooterCopy.brand}</p>
          <nav className="footer-links" aria-label="Links">
            <Link to="/">{t(droneFooterCopy.devPortfolio)}</Link>
            <a href="https://techdrone360.com.br/" target="_blank" rel="noopener noreferrer">techdrone360.com.br</a>
            <a href="https://www.youtube.com/@techdrone360" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.instagram.com/techdrone360" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${profile.email}`}>E-mail</a>
            <button type="button" className="footer-link-cookies" onClick={openModal}>
              {t(footerCopy.cookies)}
            </button>
          </nav>
          <p className="footer-copy">© 2026 Tiago O. de Farias.</p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          {profile.name} · {t(footerCopy.role)}
        </p>
        <nav className="footer-links" aria-label="Links">
          <a href={profile.cvPdf} download={profile.cvPdfDownload}>{t(footerCopy.cvPdf)}</a>
          <a href={profile.cvHtml} target="_blank" rel="noopener noreferrer">{t(footerCopy.cvHtml)}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link to="/drone">{t(footerCopy.droneLink)}</Link>
          <a href={`mailto:${profile.email}`}>E-mail</a>
          <button type="button" className="footer-link-cookies" onClick={openModal}>
            {t(footerCopy.cookies)}
          </button>
        </nav>
        <p className="footer-copy">© 2026 Tiago O. de Farias.</p>
      </div>
    </footer>
  )
}
