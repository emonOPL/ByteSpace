import { cn } from '@/lib/cn'

export default function PanelSection({
  title,
  description,
  className,
  children,
}) {
  return (
    <section className={cn('flex flex-col gap-6', className)}>
      <h2 className="font-heading text-heading-xs text-shuttle-gray-950">
        {title}
      </h2>
      {description && (
        <p className="text-body-m text-shuttle-gray-700">{description}</p>
      )}
      {children}
    </section>
  )
}
