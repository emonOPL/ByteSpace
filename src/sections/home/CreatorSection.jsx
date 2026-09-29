import checkCircle from '@/assets/icons/check-circle.svg'
import springLime from '@/assets/images/ornament-spring-lime.webp'
import StudentsCard from '@/components/cards/StudentsCard'
import FloatingCard from '@/components/ui/FloatingCard'
import ProgressBar from '@/components/ui/ProgressBar'
import { creator } from '@/data/home'
import { cn } from '@/lib/cn'

const brandCard = 'absolute left-0 bg-persian-blue-800 text-shuttle-gray-50'
const changeBadge =
  'rounded-3xl bg-electric-lime-500 px-2 py-0.5 text-2xs/5 font-medium text-shuttle-gray-950'
const amountText = 'font-heading text-2xl/8 font-semibold tracking-heading'

export default function CreatorSection() {
  const {
    title,
    brand,
    description,
    image,
    features,
    revenue,
    yearToDate,
    students,
  } = creator

  return (
    <section className="flex flex-col gap-12 xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-19.75">
      <div className="flex flex-col gap-10 xl:w-145">
        <h2 className="max-w-97.75 font-heading text-heading-s text-shuttle-gray-950 md:text-heading-m">
          {title}
        </h2>
        <p className="text-body-l/7 text-shuttle-gray-950">
          <strong className="font-bold">{brand}</strong> {description}
        </p>
        <ul className="flex flex-col gap-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex min-h-6 items-end gap-2 text-label-l text-shuttle-gray-950"
            >
              <img src={checkCircle} alt="" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-82 shrink-0 sm:h-119.25 md:h-149 xl:w-135.25">
        <div className="absolute top-0 left-1/2 h-149 w-135.25 origin-top -translate-x-1/2 scale-55 sm:scale-80 md:scale-100">
          <FloatingCard className={cn(brandCard, 'top-11 w-58')}>
            <div>
              <p className="text-label-m">{revenue.title}</p>
              <p className="text-2xs/heading">{revenue.period}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className={amountText}>{revenue.amount}</p>
              <span className={changeBadge}>{revenue.change}</span>
            </div>
            <ProgressBar
              value={revenue.progress}
              label={revenue.title}
              className="bg-white"
            />
          </FloatingCard>
          <FloatingCard className={cn(brandCard, 'top-48.5 w-33.5')}>
            <div>
              <p className="text-label-m">{yearToDate.title}</p>
              <p className="text-2xs/heading">{yearToDate.period}</p>
            </div>
            <p className={amountText}>{yearToDate.amount}</p>
            <span className={cn(changeBadge, 'self-start')}>
              {yearToDate.change}
            </span>
          </FloatingCard>
          <div className="absolute top-0 left-7 h-149 w-108.75 overflow-hidden drop-shadow-portrait">
            <img
              src={image}
              alt=""
              className="absolute top-0 -left-31 size-170.75 max-w-none"
            />
          </div>
          <StudentsCard
            {...students}
            className="absolute top-103.25 left-70.75 w-64.5"
            titleClassName="leading-6"
            ratingClassName="h-4 text-2xs/normal font-bold"
          />
          <img
            src={springLime}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-28.5 left-75.75 size-54"
          />
        </div>
      </div>
    </section>
  )
}
