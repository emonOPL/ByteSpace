import { cn } from '@/lib/cn'

export default function GridPattern({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,currentColor_0.125rem,transparent_0.125rem),linear-gradient(currentColor_0.125rem,transparent_0.125rem)] bg-size-[7.5rem_7.5rem] bg-position-[calc(50%+3.6875rem)_-0.0625rem] text-white opacity-12',
        className,
      )}
    />
  )
}
