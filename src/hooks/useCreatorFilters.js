import { useMemo } from 'react'
import { useSearchParams } from 'react-router'

const sorters = {
  '': (a, b) =>
    b.courses.length - a.courses.length || b.followers - a.followers,
  followers: (a, b) => b.followers - a.followers,
  name: (a, b) => a.name.localeCompare(b.name),
}

export function useCreatorFilters(creators) {
  const [params, setParams] = useSearchParams()
  const filters = {
    q: params.get('q') ?? '',
    specialty: params.get('specialty') ?? '',
    sort: params.get('sort') ?? '',
  }

  const items = useMemo(() => {
    const query = filters.q.trim().toLowerCase()
    const matches = creators.filter(
      (creator) =>
        (!query ||
          [creator.name, creator.headline, creator.specialty].some((text) =>
            text.toLowerCase().includes(query),
          )) &&
        (!filters.specialty || creator.specialty === filters.specialty),
    )
    return [...matches].sort(sorters[filters.sort] ?? sorters[''])
  }, [creators, filters.q, filters.specialty, filters.sort])

  function setFilter(key, value, options) {
    const next = new URLSearchParams(window.location.search)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { preventScrollReset: true, ...options })
  }

  return {
    filters,
    items,
    setFilter,
    reset: () => setParams({}, { preventScrollReset: true }),
  }
}
