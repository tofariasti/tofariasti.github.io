import { NavLink as RouterNavLink } from 'react-router-dom'
import type { SiteTab as SiteTabType } from '../../types/content'
import { uiCopy } from '../../data/navigation'
import { useLocale } from '../../context/LocaleContext'

interface SiteTabsProps {
  tabs: SiteTabType[]
  activeId: 'dev' | 'drone'
  compact?: boolean
}

export function SiteTabs({ tabs, activeId, compact = false }: SiteTabsProps) {
  const { t } = useLocale()

  return (
    <div className={`site-tabs${compact ? ' site-tabs--mobile' : ''}`} role="navigation" aria-label={t(uiCopy.siteArea)}>
      {tabs.map((tab) => (
        <RouterNavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) =>
            `site-tab${isActive || tab.id === activeId ? ' site-tab--active' : ''}`
          }
          title={t(tab.title)}
          aria-current={tab.id === activeId ? 'page' : undefined}
        >
          {!compact && (
            <>
              <span className="site-tab__lg">{t(tab.label)}</span>
              <span className="site-tab__sm">{t(tab.shortLabel)}</span>
            </>
          )}
          {compact && <span>{t(tab.label)}</span>}
        </RouterNavLink>
      ))}
    </div>
  )
}
