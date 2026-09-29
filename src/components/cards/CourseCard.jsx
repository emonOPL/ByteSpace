import signal from '@/assets/icons/signal.svg'
import starRounded from '@/assets/icons/star-rounded.svg'
import starSharp from '@/assets/icons/star-sharp.svg'
import AvatarGroup from '@/components/ui/AvatarGroup'
import Chip from '@/components/ui/Chip'
import { cn } from '@/lib/cn'

const variants = {
  default: {
    chips: 'bottom-4.75',
    chip: '',
    title: '',
    author: '',
    level: '',
    rating: 'text-body-l',
    star: starRounded,
    tone: 'lime',
  },
  highlight: {
    chips: 'bottom-3.25',
    chip: 'leading-5',
    title: 'leading-7',
    author: 'leading-5',
    level: 'leading-5',
    rating: 'text-label-l/7',
    star: starSharp,
    tone: 'dark',
  },
}

export default function CourseCard({ course, variant = 'default', className }) {
  const {
    image,
    title,
    authorPrefix,
    author,
    meta,
    level,
    learners,
    learnerAvatars,
    price,
    billing,
    ratingLabel,
    rating,
    strongRating,
  } = course
  const styles = variants[variant]

  return (
    <article
      className={cn(
        'flex flex-col gap-5.25 rounded-3xl border border-shuttle-gray-200 bg-white p-3.75 xl:h-96',
        className,
      )}
    >
      <div className="relative h-[12.19625rem] shrink-0 overflow-hidden rounded-xl bg-media">
        {image && <img src={image} alt="" className="size-full object-cover" />}
        <ul
          className={cn(
            'absolute right-3 left-3 flex flex-wrap gap-x-3 gap-y-2',
            styles.chips,
          )}
        >
          {meta.map((item) => (
            <li key={item} className="flex">
              <Chip className={styles.chip}>{item}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="max-w-70">
            <h3
              className={cn(
                'truncate font-heading text-heading-xs text-black-950',
                styles.title,
              )}
            >
              {title}
            </h3>
            <p className={cn('text-body-xs text-black-700', styles.author)}>
              {authorPrefix}{' '}
              <span className="text-persian-blue-800">{author}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                'flex h-8 items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 text-label-xs text-shuttle-gray-700',
                styles.level,
              )}
            >
              <img src={signal} alt="" />
              {level}
            </span>
            <AvatarGroup
              avatars={learnerAvatars}
              count={learners}
              size="sm"
              tone={styles.tone}
            />
          </div>
          <p className="flex items-end">
            <span className="font-heading text-heading-xs text-persian-blue-800">
              {price}
            </span>
            <span className={cn('text-body-xs text-black-700', styles.author)}>
              {billing}
            </span>
          </p>
        </div>
        <p
          className={cn(
            'flex shrink-0 items-center text-black-700',
            strongRating ? 'text-label-l/7' : styles.rating,
          )}
        >
          <span className="sr-only">{ratingLabel} </span>
          {rating}
          <img src={styles.star} alt="" />
        </p>
      </div>
    </article>
  )
}
