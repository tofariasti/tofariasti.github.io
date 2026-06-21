import type { MouseEvent } from 'react'

export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/** @deprecated use scrollToSection */
export function scrollToHash(hash: string): void {
  scrollToSection(hash.replace(/^#/, ''))
}

export function handleSectionNav(e: MouseEvent<HTMLAnchorElement>, id: string): void {
  e.preventDefault()
  scrollToSection(id)
}

export function getSectionIdsFromNav(hrefs: string[]): string[] {
  return hrefs
    .filter((href) => href.startsWith('#'))
    .map((href) => href.slice(1))
}

export function queueScrollToSection(id: string): void {
  requestAnimationFrame(() => {
    window.setTimeout(() => scrollToSection(id), 50)
  })
}
