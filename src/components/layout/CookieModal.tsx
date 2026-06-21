import { useEffect, useRef, useState } from 'react'
import type { CookieCopy } from '../../types/content'
import { useLocale } from '../../context/LocaleContext'
import { useCookie } from '../../context/CookieContext'
import { LocalizedText } from '../ui/Localized'

interface CookieModalProps {
  copy: CookieCopy
}

export function CookieModal({ copy }: CookieModalProps) {
  const { t } = useLocale()
  const { isModalOpen, accept, reject, closeModal } = useCookie()
  const [detailsOpen, setDetailsOpen] = useState(false)
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      setDetailsOpen(false)
      acceptRef.current?.focus()
    }
  }, [isModalOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isModalOpen, closeModal])

  if (!isModalOpen) return null

  return (
    <div id="cookie-modal" className="cookie-modal" role="dialog" aria-labelledby="cookie-modal-title" aria-modal="true">
      <div className="cookie-modal__box">
        <h2 id="cookie-modal-title"><LocalizedText value={copy.title} /></h2>
        <p className="cookie-modal__lead"><LocalizedText value={copy.lead} /></p>
        <details id="cookie-modal-details" className="cookie-modal__details" open={detailsOpen}>
          <summary onClick={(e) => { e.preventDefault(); setDetailsOpen((v) => !v) }}>
            <LocalizedText value={copy.detailsSummary} />
          </summary>
          {detailsOpen && (
            <p className="cookie-modal__text"><LocalizedText value={copy.detailsText} /></p>
          )}
        </details>
        <div className="cookie-modal__actions">
          <button
            type="button"
            className="btn btn--outline btn--sm"
            aria-expanded={detailsOpen}
            aria-controls="cookie-modal-details"
            onClick={() => setDetailsOpen((v) => !v)}
          >
            {t(copy.configure)}
          </button>
          <button type="button" className="btn btn--outline btn--sm" onClick={reject}>
            {t(copy.reject)}
          </button>
          <button ref={acceptRef} type="button" className="btn btn--cv btn--sm" onClick={accept}>
            {t(copy.accept)}
          </button>
        </div>
      </div>
    </div>
  )
}
