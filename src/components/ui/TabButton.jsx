import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function TabButton({ active, className, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'rounded-3xl px-4 py-3 text-label-m',
        focusRing,
        active
          ? 'bg-electric-lime-400 text-shuttle-gray-950'
          : 'bg-shuttle-gray-50 text-shuttle-gray-700',
        className,
      )}
      {...props}
    />
  )
}
