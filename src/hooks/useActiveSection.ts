import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[], offset = 120): string | null {
  const [active, setActive] = useState<string | null>(sectionIds[0] ?? null)

  useEffect(() => {
    if (!sectionIds.length) return

    const onScroll = () => {
      const scrollY = window.scrollY + offset
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }

      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return active
}
