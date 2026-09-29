import AvatarGroup from '@/components/ui/AvatarGroup'
import FloatingCard from '@/components/ui/FloatingCard'
import { cn } from '@/lib/cn'

export default function StudentsCard({
  title,
  rating,
  reviews,
  avatars,
  count,
  className,
  titleClassName,
  ratingClassName,
}) {
  return (
    <FloatingCard className={cn('justify-center', className)}>
      <div>
        <p className={cn('text-label-m text-shuttle-gray-950', titleClassName)}>
          {title}
        </p>
        <p
          className={cn('text-body-xs text-shuttle-gray-950', ratingClassName)}
        >
          {rating} <span className="text-shuttle-gray-400">{reviews}</span>
        </p>
      </div>
      <AvatarGroup avatars={avatars} count={count} />
    </FloatingCard>
  )
}
