import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function PillButton({ icon, className, children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-12 shrink-0 items-center gap-1 rounded-3xl border border-shuttle-gray-200 bg-white px-4 text-label-m text-shuttle-gray-700',
        focusRing,
        className,
      )}
      {...props}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  )
}
