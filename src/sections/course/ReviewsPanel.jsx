import { useState } from 'react'
import starFilled from '@/assets/icons/star-filled.svg'
import ReviewCard from '@/components/cards/ReviewCard'
import ProgressBar from '@/components/ui/ProgressBar'
import StarRating from '@/components/ui/StarRating'
import TabButton from '@/components/ui/TabButton'
import PanelSection from '@/sections/course/PanelSection'

export default function ReviewsPanel({ reviews }) {
  const [rating, setRating] = useState(null)
  const { summary, filters } = reviews
  const visible = rating
    ? reviews.items.filter((review) => review.rating === rating)
    : reviews.items

  return (
    <div className="flex flex-col gap-6">
      <PanelSection title={reviews.title} description={reviews.description}>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-shuttle-gray-200 p-6 sm:flex-row sm:p-9.75">
          <div className="flex h-35 w-32.25 shrink-0 flex-col items-center justify-center rounded-lg bg-electric-lime-400 text-shuttle-gray-950">
            <p className="text-label-s">{summary.label}</p>
            <p className="font-heading text-heading-s">{summary.value}</p>
          </div>
          <ul className="flex w-full flex-col gap-1">
            {summary.breakdown.map((row) => (
              <li key={row.stars} className="flex items-center gap-4">
                <ProgressBar
                  value={row.percent}
                  label={filters.stars(row.stars)}
                  className="min-w-0 flex-1 bg-shuttle-gray-100"
                />
                <StarRating
                  value={row.stars}
                  label={reviews.starsLabel(row.stars)}
                  className="shrink-0"
                />
                <span className="w-10 shrink-0 text-right text-body-m text-shuttle-gray-700">
                  {row.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </PanelSection>
      <PanelSection title={reviews.listTitle}>
        <div
          role="group"
          aria-label={filters.label}
          className="flex flex-wrap gap-4"
        >
          <TabButton
            active={rating === null}
            onClick={() => setRating(null)}
            className="h-12 py-0"
          >
            {filters.all}
          </TabButton>
          {summary.breakdown.map((row) => (
            <TabButton
              key={row.stars}
              active={rating === row.stars}
              aria-label={filters.stars(row.stars)}
              onClick={() => setRating(row.stars)}
              className="flex h-12 items-center gap-1 py-0"
            >
              <img src={starFilled} alt="" />
              {row.stars}
            </TabButton>
          ))}
        </div>
        {visible.length > 0 ? (
          <ul className="flex flex-col gap-6">
            {visible.map((review) => (
              <li key={review.name}>
                <ReviewCard
                  review={review}
                  ratingLabel={reviews.starsLabel(review.rating)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-3xl border border-shuttle-gray-200 px-6 py-12 text-center text-body-m text-shuttle-gray-700">
            {reviews.empty}
          </p>
        )}
      </PanelSection>
    </div>
  )
}
