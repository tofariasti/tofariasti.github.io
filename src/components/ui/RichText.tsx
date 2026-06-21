import { parseRichText } from '../../utils/richText'

interface RichTextProps {
  text: string
  className?: string
  as?: 'p' | 'span' | 'li'
}

export function RichText({ text, className, as: Tag = 'span' }: RichTextProps) {
  return <Tag className={className}>{parseRichText(text)}</Tag>
}
