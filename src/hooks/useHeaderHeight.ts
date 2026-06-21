import { useEffect } from 'react'

export function useHeaderHeight(headerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const update = () => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`)
    }

    update()
    window.addEventListener('resize', update, { passive: true })

    let observer: ResizeObserver | undefined
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(update)
      observer.observe(header)
    }

    return () => {
      window.removeEventListener('resize', update)
      observer?.disconnect()
    }
  }, [headerRef])
}
