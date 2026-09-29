import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

const bar =
  'absolute left-0 h-0.5 w-full rounded-full bg-current transition-[top,rotate,opacity] duration-300'

export default function MenuButton({ open, className, ...props }) {
  return (
    <button
      type="button"
      aria-expanded={open}
      className={cn(
        'flex size-10 items-center justify-center text-shuttle-gray-50',
        focusRing,
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="relative h-4 w-6">
        <span className={cn(bar, open ? 'top-1.75 rotate-45' : 'top-0')} />
        <span className={cn(bar, 'top-1.75', open && 'opacity-0')} />
        <span className={cn(bar, open ? 'top-1.75 -rotate-45' : 'top-3.5')} />
      </span>
    </button>
  )
}
