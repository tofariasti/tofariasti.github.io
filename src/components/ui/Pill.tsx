interface PillProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'freelance'
}

export function Pill({ children, variant = 'default' }: PillProps) {
  const className = ['pill', variant === 'featured' && 'pill--featured', variant === 'freelance' && 'pill--freelance']
    .filter(Boolean)
    .join(' ')
  return <span className={className}>{children}</span>
}
