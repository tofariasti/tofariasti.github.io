import type { Localized } from '../../types/content'
import { useLocale } from '../../context/LocaleContext'

interface LocalizedTextProps {
  value: Localized<string>
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'strong' | 'em'
}

export function LocalizedText({ value, className, as: Tag = 'span' }: LocalizedTextProps) {
  const { t } = useLocale()
  return <Tag className={className}>{t(value)}</Tag>
}
