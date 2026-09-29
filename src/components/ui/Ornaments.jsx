import { cn } from '@/lib/cn'

export default function Ornaments({ items, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-y-0 left-1/2 w-360 -translate-x-1/2',
        className,
      )}
    >
      {items.map((item) => (
        <img
          key={item.className}
          src={item.src}
          alt=""
          className={cn('absolute max-w-none', item.className)}
        />
      ))}
    </div>
  )
}
