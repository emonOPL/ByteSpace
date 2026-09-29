import FloatingCard from '@/components/ui/FloatingCard'
import ProgressBar from '@/components/ui/ProgressBar'
import { cn } from '@/lib/cn'

export default function ProgressCard({
  label,
  value,
  fill = value,
  className,
  labelClassName,
  valueClassName,
  barClassName,
}) {
  return (
    <FloatingCard className={className}>
      <p className={cn('text-label-s text-shuttle-gray-950', labelClassName)}>
        {label}
      </p>
      <p
        className={cn(
          'font-heading text-5xl/14.5 font-semibold tracking-heading text-shuttle-gray-950',
          valueClassName,
        )}
      >
        {value}%
      </p>
      <ProgressBar value={fill} label={label} className={barClassName} />
    </FloatingCard>
  )
}
