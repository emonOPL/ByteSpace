import { cn } from '@/lib/cn'

export default function Ornament({ className, ...props }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={cn('pointer-events-none absolute max-w-none', className)}
      {...props}
    />
  )
}
