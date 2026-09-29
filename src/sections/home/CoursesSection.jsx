import { useState } from 'react'
import { Link } from 'react-router'
import CourseCard from '@/components/cards/CourseCard'
import Container from '@/components/ui/Container'
import { courseTabs, courses, coursesIntro } from '@/data/home'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState(courseTabs.rows[0][0])
  const lastRow = courseTabs.rows.at(-1)

  return (
    <section className="pt-18">
      <Container>
        <h2 className="mx-auto max-w-147 text-center font-heading text-heading-s text-vulcan-950 md:text-heading-m">
          {coursesIntro.title}
        </h2>
        <p className="mx-auto mt-4 max-w-229.25 text-center text-body-l text-shuttle-gray-400">
          {coursesIntro.description}
        </p>
        <div
          role="group"
          aria-label={courseTabs.label}
          className="mt-10.5 flex flex-wrap justify-center gap-x-4 gap-y-3 lg:flex-col lg:items-center lg:gap-y-5.25"
        >
          {courseTabs.rows.map((row) => (
            <div
              key={row[0]}
              className="contents lg:flex lg:items-center lg:gap-4"
            >
              {row.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'rounded-3xl px-4 py-3 text-label-m',
                    focusRing,
                    tab === activeTab
                      ? 'bg-electric-lime-400 text-shuttle-gray-950'
                      : 'bg-shuttle-gray-50 text-shuttle-gray-700',
                  )}
                >
                  {tab}
                </button>
              ))}
              {row === lastRow && (
                <Link
                  to={courseTabs.more.to}
                  className={cn(
                    'self-center text-label-m text-persian-blue-800',
                    focusRing,
                  )}
                >
                  {courseTabs.more.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <ul className="mt-19.25 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,23.3125rem)]">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
