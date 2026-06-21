interface PageBackgroundProps {
  variant?: 'dev' | 'drone'
}

export function PageBackground({ variant = 'dev' }: PageBackgroundProps) {
  return (
    <div className={`page-bg page-bg--${variant}`} aria-hidden="true">
      <span className="page-bg__blob page-bg__blob--1" />
      <span className="page-bg__blob page-bg__blob--2" />
      <span className="page-bg__blob page-bg__blob--3" />
      <span className="page-bg__blob page-bg__blob--4" />
    </div>
  )
}
