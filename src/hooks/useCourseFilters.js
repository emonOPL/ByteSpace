import { useMemo } from 'react'
import { useSearchParams } from 'react-router'

const sorters = {
  'price-asc': (a, b) => a.priceValue - b.priceValue,
  'price-desc': (a, b) => b.priceValue - a.priceValue,
  rating: (a, b) => b.ratingValue - a.ratingValue,
}

export function useCourseFilters(courses, { perPage, featuredPages }) {
  const [params, setParams] = useSearchParams()
  const filters = {
    q: params.get('q') ?? '',
    category: params.get('category') ?? '',
    level: params.get('level') ?? '',
    sort: params.get('sort') ?? '',
  }
  const requestedPage = Number(params.get('page')) || 1
  const filtered = Boolean(filters.q || filters.category || filters.level)

  const { results, total } = useMemo(() => {
    const query = filters.q.trim().toLowerCase()
    const matches = courses.filter(
      (course) =>
        (!query || course.title.toLowerCase().includes(query)) &&
        (!filters.category || course.category === filters.category) &&
        (!filters.level || course.level === filters.level),
    )
    const sorted = sorters[filters.sort]
      ? [...matches].sort(sorters[filters.sort])
      : matches
    const length = filtered ? sorted.length : perPage * featuredPages
    return {
      total: sorted.length,
      results: sorted.length
        ? Array.from({ length }, (_, index) => {
            const course = sorted[index % sorted.length]
            return { key: `${course.id}-${index}`, course }
          })
        : [],
    }
  }, [
    courses,
    filters.q,
    filters.category,
    filters.level,
    filters.sort,
    filtered,
    perPage,
    featuredPages,
  ])

  const totalPages = Math.max(1, Math.ceil(results.length / perPage))
  const page = Math.min(Math.max(requestedPage, 1), totalPages)
  const items = results.slice((page - 1) * perPage, page * perPage)

  function update(changes, options) {
    const next = new URLSearchParams(window.location.search)
    Object.entries(changes).forEach(([key, value]) =>
      value ? next.set(key, value) : next.delete(key),
    )
    if (!('page' in changes)) next.delete('page')
    setParams(next, { preventScrollReset: true, ...options })
  }

  return {
    filters,
    items,
    total,
    page,
    totalPages,
    setFilter: (key, value, options) => update({ [key]: value }, options),
    setPage: (value) => update({ page: value > 1 ? String(value) : '' }),
    reset: () => setParams({}, { preventScrollReset: true }),
  }
}
