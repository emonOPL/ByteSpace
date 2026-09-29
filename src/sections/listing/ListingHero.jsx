import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import chevronDown from '@/assets/icons/chevron-down.svg'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Dropdown from '@/components/ui/Dropdown'
import GridPattern from '@/components/ui/GridPattern'
import SearchField from '@/components/ui/SearchField'
import { searchScope } from '@/data/navigation'

export default function ListingHero({
  id,
  heading,
  search,
  scope,
  query,
  onQueryChange,
}) {
  const navigate = useNavigate()
  const current = searchScope.options.find((option) => option.value === scope)
  const [value, setValue] = useState(query)
  const pending = useRef(null)

  useEffect(() => {
    if (!pending.current) setValue(query)
  }, [query])

  useEffect(() => () => clearTimeout(pending.current), [])

  function changeQuery(next) {
    setValue(next)
    clearTimeout(pending.current)
    pending.current = setTimeout(() => {
      pending.current = null
      onQueryChange(next)
    }, 250)
  }

  function submit(event) {
    event.preventDefault()
    clearTimeout(pending.current)
    pending.current = null
    onQueryChange(value)
  }

  function changeScope(scopeValue) {
    const option = searchScope.options.find((item) => item.value === scopeValue)
    if (option.value === current.value) return
    navigate({
      pathname: option.to,
      search: value ? `?${new URLSearchParams({ q: value })}` : '',
    })
  }

  return (
    <section className="relative bg-persian-blue-800 pt-32 pb-17.25 lg:pt-41">
      <GridPattern />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <h1 className="font-heading text-heading-s text-shuttle-gray-50">
          {heading}
        </h1>
        <form
          role="search"
          onSubmit={submit}
          className="flex w-full max-w-156 flex-col gap-3 min-[23.4375rem]:flex-row min-[23.4375rem]:items-start sm:gap-4"
        >
          <SearchField
            id={id}
            label={search.label}
            placeholder={search.placeholder}
            value={value}
            onChange={(event) => changeQuery(event.target.value)}
            className="min-[23.4375rem]:flex-1"
          />
          <Dropdown
            label={searchScope.label}
            value={current.value}
            options={searchScope.options}
            onChange={changeScope}
            align="end"
            className="shrink-0"
            trigger={(props) => (
              <Button {...props} className="w-full min-[23.4375rem]:w-auto">
                {current.label}
                <img src={chevronDown} alt="" />
              </Button>
            )}
          />
        </form>
      </Container>
    </section>
  )
}
