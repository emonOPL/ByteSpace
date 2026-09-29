import StarRating from '@/components/ui/StarRating'
import { cn } from '@/lib/cn'

export default function ReviewCard({ review, ratingLabel, className }) {
  const { name, role, avatar, date, rating, text } = review

  return (
    <article
      className={cn(
        'flex flex-col gap-6 rounded-3xl border border-shuttle-gray-200 p-6 sm:p-9.75',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <img
              src={avatar}
              alt=""
              className="size-13 shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="text-label-l text-shuttle-gray-950">{name}</h3>
              <p className="text-body-m text-shuttle-gray-700">{role}</p>
            </div>
          </div>
          <StarRating value={rating} label={ratingLabel} />
        </div>
        <p className="shrink-0 text-body-m text-shuttle-gray-700">{date}</p>
      </div>
      <p className="text-body-m text-shuttle-gray-700">{text}</p>
    </article>
  )
}
