import { cn } from '@/lib/cn'

export default function FloatingCard({ className, ...props }) {
  return (
    <div
      className={cn('flex flex-col gap-2 rounded-2xl bg-white p-4', className)}
      {...props}
    />
  )
}
