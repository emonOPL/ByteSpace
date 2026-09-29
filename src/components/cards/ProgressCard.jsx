import FloatingCard from '@/components/ui/FloatingCard'
import ProgressBar from '@/components/ui/ProgressBar'
import { cn } from '@/lib/cn'

export default function ProgressCard({
  label,
  value,
  fill = value,
  className,
  labelClassName,
}) {
  return (
    <FloatingCard className={className}>
      <p className={cn('text-label-s text-shuttle-gray-950', labelClassName)}>
        {label}
      </p>
      <p className="font-heading text-5xl/heading font-semibold tracking-heading text-shuttle-gray-950">
        {value}%
      </p>
      <ProgressBar value={fill} label={label} />
    </FloatingCard>
  )
}
