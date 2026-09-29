import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function Button({
  as: Component = 'button',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950',
        focusRing,
        className,
      )}
      {...props}
    />
  )
}
