import { useState } from 'react'
import { Link } from 'react-router'
import CourseGrid from '@/components/cards/CourseGrid'
import Container from '@/components/ui/Container'
import TabButton from '@/components/ui/TabButton'
import { courses } from '@/data/courses'
import { courseTabs, coursesIntro } from '@/data/home'
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
                <TabButton
                  key={tab}
                  active={tab === activeTab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </TabButton>
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
        <CourseGrid
          items={courses.map((course) => ({ key: course.id, course }))}
          getHref={(course) => `/courses/${course.id}`}
          className="mt-19.25"
        />
      </Container>
    </section>
  )
}
