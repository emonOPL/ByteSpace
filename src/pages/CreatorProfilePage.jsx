import { Fragment } from 'react'
import { useLoaderData } from 'react-router'
import CourseGrid from '@/components/cards/CourseGrid'
import PageMeta from '@/components/layout/PageMeta'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import { courseListing } from '@/data/courseListing'
import { creatorCopy } from '@/data/creators'
import { useCourseFilters } from '@/hooks/useCourseFilters'
import CourseFilters from '@/sections/courses/CourseFilters'
import CreatorHero from '@/sections/creator/CreatorHero'
import EmptyResults from '@/sections/listing/EmptyResults'

export default function CreatorProfilePage() {
  const creator = useLoaderData()
  const hasCourses = creator.courses.length > 0
  const { filters, items, total, setFilter, reset } = useCourseFilters(
    creator.courses,
    creatorCopy.pagination,
  )

  return (
    <Fragment key={creator.id}>
      <PageMeta
        title={creatorCopy.title(creator)}
        description={creatorCopy.description(creator)}
      />
      <section className="relative bg-persian-blue-800 pt-32 pb-12 xl:pt-43 xl:pb-20.5">
        <GridPattern />
        <Container className="relative">
          <CreatorHero creator={creator} />
        </Container>
      </section>
      <section className="pt-15.5 pb-16">
        <Container>
          <h2 className="sr-only">{creatorCopy.coursesHeading(creator)}</h2>
          {hasCourses ? (
            <>
              <CourseFilters
                filters={filters}
                onChange={setFilter}
                onReset={reset}
                showTabs={false}
              />
              <p aria-live="polite" className="sr-only">
                {courseListing.results(total)}
              </p>
              <div className="mt-10">
                {items.length > 0 ? (
                  <CourseGrid
                    items={items}
                    getHref={(course) => `/courses/${course.id}`}
                    className="xl:-ml-px"
                  />
                ) : (
                  <EmptyResults copy={courseListing.empty} onReset={reset} />
                )}
              </div>
            </>
          ) : (
            <EmptyResults copy={creatorCopy.noCourses(creator)} />
          )}
        </Container>
      </section>
    </Fragment>
  )
}
