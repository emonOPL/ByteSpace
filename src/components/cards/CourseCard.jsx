import AvatarGroup from '@/components/ui/AvatarGroup'
import Chip from '@/components/ui/Chip'
import { cn } from '@/lib/cn'

const variants = {
  default: {
    chip: '',
    title: '',
    author: '',
    level: '',
    price: '',
    rating: 'text-body-l',
    tone: 'lime',
  },
  highlight: {
    chip: 'leading-5',
    title: 'leading-7',
    author: 'leading-5',
    level: 'leading-5',
    price: 'font-medium leading-7',
    rating: 'text-label-l/7',
    tone: 'dark',
  },
}

export default function CourseCard({ course, variant = 'default', className }) {
  const {
    image,
    title,
    author,
    meta,
    level,
    learners,
    learnerAvatars,
    price,
    billing,
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
        <ul className="absolute top-37.5 left-3 flex gap-3">
          {meta.map((item) => (
            <li key={item}>
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
              by <span className="text-persian-blue-800">{author}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'flex h-8 items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 text-label-xs text-shuttle-gray-700',
                styles.level,
              )}
            >
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
            <span
              className={cn(
                'font-heading text-heading-xs text-persian-blue-800',
                styles.price,
              )}
            >
              {price}
            </span>
            <span className={cn('text-body-xs text-black-700', styles.author)}>
              {billing}
            </span>
          </p>
        </div>
        <p
          className={cn(
            'shrink-0 text-black-700',
            strongRating ? 'text-label-l/7' : styles.rating,
          )}
        >
          <span className="sr-only">Rating </span>
          {rating}
        </p>
      </div>
    </article>
  )
}
