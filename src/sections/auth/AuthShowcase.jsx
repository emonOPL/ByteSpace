import starBlue from '@/assets/icons/star-blue.svg'
import pyramidLime from '@/assets/images/ornament-pyramid-lime.webp'
import springWhite from '@/assets/images/ornament-spring-white.webp'
import torusLime from '@/assets/images/ornament-torus-lime.webp'
import CourseCard from '@/components/cards/CourseCard'
import StudentsCard from '@/components/cards/StudentsCard'
import Ornament from '@/components/ui/Ornament'
import { cn } from '@/lib/cn'

const ornaments = [
  { src: springWhite, className: 'top-80.25 left-93.75 w-44.25' },
  { src: torusLime, className: 'top-3.75 left-13.5 w-37' },
  { src: pyramidLime, className: 'top-99.25 left-0 w-47.5' },
]

export default function AuthShowcase({
  courses,
  students,
  reviewsClassName,
  className,
}) {
  const [first, second] = courses

  return (
    <div aria-hidden="true" className={cn('relative h-146.5 w-138', className)}>
      <CourseCard
        course={first}
        variant="highlight"
        className="absolute top-22.25 left-6.75 h-96 w-93.25"
      />
      <CourseCard
        course={second}
        variant="highlight"
        className="absolute top-0 left-34.5 h-96 w-93.25"
      />
      <StudentsCard
        {...students}
        star={starBlue}
        tone="ink"
        className="absolute top-108.75 left-63.25 w-64.5 bg-electric-lime-400"
        titleClassName="leading-6"
        ratingClassName="h-4 text-2xs/normal"
        ratingValueClassName="font-bold"
        reviewsClassName={reviewsClassName}
      />
      {ornaments.map((ornament) => (
        <Ornament
          key={ornament.className}
          src={ornament.src}
          className={ornament.className}
        />
      ))}
    </div>
  )
}
