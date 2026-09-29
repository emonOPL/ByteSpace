import starFilled from '@/assets/icons/star-filled.svg'
import { cn } from '@/lib/cn'

export default function StarRating({ value, max = 5, label, className }) {
  return (
    <div role="img" aria-label={label} className={cn('flex gap-1', className)}>
      {Array.from({ length: max }, (_, index) => (
        <img
          key={index}
          src={starFilled}
          alt=""
          className={cn('shrink-0', index >= value && 'opacity-25')}
        />
      ))}
    </div>
  )
}
