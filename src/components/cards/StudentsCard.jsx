import defaultStar from '@/assets/icons/star.svg'
import AvatarGroup from '@/components/ui/AvatarGroup'
import FloatingCard from '@/components/ui/FloatingCard'
import { cn } from '@/lib/cn'

export default function StudentsCard({
  title,
  rating,
  reviews,
  avatars,
  count,
  star = defaultStar,
  tone,
  className,
  titleClassName,
  ratingClassName,
  ratingValueClassName,
  reviewsClassName,
}) {
  return (
    <FloatingCard className={cn('justify-center', className)}>
      <div>
        <p className={cn('text-label-m text-shuttle-gray-950', titleClassName)}>
          {title}
        </p>
        <p
          className={cn(
            'flex items-center text-body-xs text-shuttle-gray-950',
            ratingClassName,
          )}
        >
          <span>
            <span className={ratingValueClassName}>{rating}</span>{' '}
            <span className={cn('text-shuttle-gray-400', reviewsClassName)}>
              {reviews}
            </span>
          </span>
          <img src={star} alt="" />
        </p>
      </div>
      <AvatarGroup avatars={avatars} count={count} tone={tone} />
    </FloatingCard>
  )
}
