export function scrollToHash(hash: string): void {
  const id = hash.replace(/^#/, '')
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function getSectionIdsFromNav(hrefs: string[]): string[] {
  return hrefs
    .filter((href) => href.startsWith('#'))
    .map((href) => href.slice(1))
}
