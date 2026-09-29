import { Link } from 'react-router'
import CourseCard from '@/components/cards/CourseCard'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function CourseGrid({ items, getHref, className }) {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,23.3125rem)]',
        className,
      )}
    >
      {items.map(({ key, course }) => (
        <li key={key}>
          {getHref ? (
            <Link
              to={getHref(course)}
              className={cn('block h-full rounded-3xl', focusRing)}
            >
              <CourseCard course={course} className="h-full" />
            </Link>
          ) : (
            <CourseCard course={course} className="h-full" />
          )}
        </li>
      ))}
    </ul>
  )
}
