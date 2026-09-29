import { useLoaderData, useSearchParams } from 'react-router'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import Tabs from '@/components/ui/Tabs'
import { courseDetailsCopy } from '@/data/courseDetails'
import AboutPanel from '@/sections/course/AboutPanel'
import CourseHero from '@/sections/course/CourseHero'
import CoursePreview from '@/sections/course/CoursePreview'
import CourseSidebar from '@/sections/course/CourseSidebar'
import LessonsPanel from '@/sections/course/LessonsPanel'
import ReviewsPanel from '@/sections/course/ReviewsPanel'

export default function CourseDetailsPage() {
  const details = useLoaderData()
  const [params, setParams] = useSearchParams()
  const { tabs, preview } = courseDetailsCopy
  const [firstTab] = tabs.items
  const requested = params.get('tab')
  const active = tabs.items.some((item) => item.id === requested)
    ? requested
    : firstTab.id

  function changeTab(id) {
    setParams(id === firstTab.id ? {} : { tab: id }, {
      replace: true,
      preventScrollReset: true,
    })
  }

  const panels = {
    about: <AboutPanel about={details.about} />,
    lessons: <LessonsPanel lessons={details.lessons} />,
    reviews: <ReviewsPanel reviews={details.reviews} />,
  }

  return (
    <>
      <title>{courseDetailsCopy.title(details.course)}</title>
      <section className="relative bg-persian-blue-800 pt-32 pb-10 xl:h-239.25 xl:pt-43 xl:pb-0">
        <GridPattern />
        <Container className="relative">
          <CourseHero details={details} />
        </Container>
      </section>
      <Container className="relative grid gap-8 pt-8 pb-16 xl:-mt-135.25 xl:grid-cols-[45.3125rem_25.75rem] xl:items-start xl:justify-between xl:gap-y-0 xl:pt-0">
        <CoursePreview
          image={details.preview}
          label={`${details.title} ${preview}`}
          className="xl:col-start-1 xl:row-start-1"
        />
        <CourseSidebar
          details={details}
          className="xl:col-start-2 xl:row-span-2 xl:row-start-1"
        />
        <div className="flex min-w-0 flex-col gap-10 xl:col-start-1 xl:row-start-2 xl:pt-31">
          <Tabs
            id="course"
            label={tabs.label}
            items={tabs.items}
            active={active}
            onChange={changeTab}
          />
          <div
            role="tabpanel"
            id={`course-panel-${active}`}
            aria-labelledby={`course-tab-${active}`}
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-800"
          >
            {panels[active]}
          </div>
        </div>
      </Container>
    </>
  )
}
