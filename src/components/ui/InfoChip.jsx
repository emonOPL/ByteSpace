import { cn } from '@/lib/cn'

export default function InfoChip({ icon, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-3xl bg-white px-6 text-label-m text-shuttle-gray-950',
        className,
      )}
    >
      <img src={icon} alt="" className="shrink-0" />
      {children}
    </span>
  )
}
