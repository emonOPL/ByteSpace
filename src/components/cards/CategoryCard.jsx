import { cn } from '@/lib/cn'

export default function CategoryCard({ label, icon, className }) {
  return (
    <div
      className={cn(
        'flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-gray-200 p-2 text-center',
        className,
      )}
    >
      <span className="flex size-15 items-center justify-center rounded-full bg-electric-lime-400 p-3">
        {icon && <img src={icon} alt="" className="size-9" />}
      </span>
      <span className="text-label-xl text-shuttle-gray-950">{label}</span>
    </div>
  )
}
