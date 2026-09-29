import { Link } from 'react-router'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function AuthFooter({ text, link, className }) {
  return (
    <p
      className={cn(
        'flex flex-wrap justify-center gap-1 text-center text-body-m',
        className,
      )}
    >
      <span>{text}</span>
      <Link to={link.to} className={cn('text-persian-blue-800', focusRing)}>
        {link.label}
      </Link>
    </p>
  )
}
