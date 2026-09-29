import { useRef } from 'react'
import CourseGrid from '@/components/cards/CourseGrid'
import Container from '@/components/ui/Container'
import Pagination from '@/components/ui/Pagination'
import { courseListing } from '@/data/courseListing'
import { courses } from '@/data/courses'
import { useCourseFilters } from '@/hooks/useCourseFilters'
import CourseFilters from '@/sections/courses/CourseFilters'
import EmptyResults from '@/sections/listing/EmptyResults'
import ListingHero from '@/sections/listing/ListingHero'

export default function CoursesPage() {
  const resultsRef = useRef(null)
  const { filters, items, total, page, totalPages, setFilter, setPage, reset } =
    useCourseFilters(courses, courseListing.pagination)

  function changePage(value) {
    setPage(value)
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <title>{courseListing.title}</title>
      <ListingHero
        id="courses-search"
        heading={courseListing.heading}
        search={courseListing.search}
        scope={courseListing.scope}
        query={filters.q}
        onQueryChange={(value) => setFilter('q', value, { replace: true })}
      />
      <section className="pt-18 pb-18">
        <Container>
          <CourseFilters
            filters={filters}
            onChange={setFilter}
            onReset={reset}
          />
          <h2 className="sr-only">{courseListing.resultsHeading}</h2>
          <p aria-live="polite" className="sr-only">
            {courseListing.results(total)}
          </p>
          <div ref={resultsRef} className="mt-19.25 scroll-mt-28">
            {items.length > 0 ? (
              <CourseGrid
                items={items}
                getHref={(course) => `/courses/${course.id}`}
                className="xl:ml-px"
              />
            ) : (
              <EmptyResults copy={courseListing.empty} onReset={reset} />
            )}
          </div>
          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={changePage}
              labels={courseListing.pagination}
              className="mt-18 justify-center xl:ml-117 xl:justify-start"
            />
          )}
        </Container>
      </section>
    </>
  )
}
