import { cn } from '@/lib/cn'

export default function Chip({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-3xl bg-track/60 px-3 py-1.5 text-label-xs whitespace-nowrap text-black-700 backdrop-blur-xs',
        className,
      )}
      {...props}
    />
  )
}
