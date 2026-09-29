import coilLime from '@/assets/images/ornament-coil-lime.webp'
import CourseCard from '@/components/cards/CourseCard'
import ProgressCard from '@/components/cards/ProgressCard'
import { growth } from '@/data/home'

export default function GrowthSection() {
  const { title, description, stats, image, course, progress } = growth

  return (
    <section className="flex flex-col gap-12 xl:-mr-14.75 xl:ml-px xl:flex-row xl:items-center xl:gap-15.75">
      <div className="flex flex-col gap-10 xl:w-143.5 xl:shrink-0">
        <h2 className="max-w-144.25 font-heading text-heading-s text-shuttle-gray-950 md:text-heading-m">
          {title}
        </h2>
        <p className="max-w-119.25 text-body-l text-shuttle-gray-700">
          {description}
        </p>
        <dl className="flex flex-wrap items-end gap-x-14 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-body-l text-shuttle-gray-700">
                {stat.label}
              </dt>
              <dd className="font-heading text-display-xs text-persian-blue-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative h-69 shrink-0 sm:h-110.5 md:h-138 xl:w-155.25">
        <div className="absolute top-0 left-1/2 h-138 w-155.25 origin-top -translate-x-1/2 scale-50 sm:scale-80 md:scale-100">
          <CourseCard
            course={course}
            variant="highlight"
            className="absolute top-0 left-0 h-96 w-93.25"
          />
          <img
            src={image}
            alt=""
            className="absolute top-3 left-0 h-135 w-144.25 [filter:url(#portrait-shadow)]"
          />
          <ProgressCard
            {...progress}
            className="absolute top-53.25 left-86.25 w-58"
            labelClassName="leading-6"
          />
          <img
            src={coilLime}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-16.75 left-101 w-54.25"
          />
        </div>
      </div>
    </section>
  )
}
