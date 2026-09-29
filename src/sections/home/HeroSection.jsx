import { useNavigate } from 'react-router'
import ProgressCard from '@/components/cards/ProgressCard'
import StudentsCard from '@/components/cards/StudentsCard'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import FloatingCard from '@/components/ui/FloatingCard'
import GridPattern from '@/components/ui/GridPattern'
import { hero } from '@/data/home'

export default function HeroSection() {
  const navigate = useNavigate()
  const { title, description, search, highlight, progress, students } = hero

  function handleSubmit(event) {
    event.preventDefault()
    const query = new FormData(event.currentTarget).get('q').trim()
    navigate({
      pathname: search.action,
      search: query ? `?${new URLSearchParams({ q: query })}` : '',
    })
  }

  return (
    <section className="relative overflow-hidden bg-persian-blue-800 pt-42.25 lg:h-256">
      <GridPattern />
      <Container className="relative flex flex-col items-center text-center">
        <h1 className="max-w-233.75 font-heading text-heading-s text-white sm:text-heading-m lg:text-heading-l">
          {title}
        </h1>
        <p className="mt-8 max-w-204.75 text-body-l text-shuttle-gray-100">
          {description}
        </p>
        <form
          role="search"
          onSubmit={handleSubmit}
          className="mt-15 flex w-full max-w-145.25 items-start gap-4"
        >
          <div className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-electric-lime-400">
            <label htmlFor="hero-search" className="sr-only">
              {search.label}
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder={search.placeholder}
              className="w-full min-w-0 bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
            />
          </div>
          <Button type="submit" className="shrink-0">
            {search.button}
          </Button>
        </form>
      </Container>
      <div className="relative h-81.25 sm:h-101.5 md:h-122 lg:-mt-0.5 lg:h-135.25">
        <div className="absolute top-0 left-1/2 h-135.25 w-144.5 origin-top -translate-x-1/2 scale-60 sm:scale-75 md:scale-90 lg:scale-100">
          <span
            aria-hidden="true"
            className="absolute top-17.5 -left-71.5 size-287.25 rounded-full border-[20rem] border-electric-lime-500"
          />
          <FloatingCard className="absolute top-31.75 -left-6.75 hidden w-52 text-left sm:flex">
            <div>
              <p className="text-label-m text-shuttle-gray-950">
                {highlight.title}
              </p>
              <p className="flex items-start gap-2 text-body-xs text-shuttle-gray-400">
                <span>{highlight.meta[0]}</span>
                <span aria-hidden="true" className="text-2xs/normal">
                  •
                </span>
                <span>{highlight.meta[1]}</span>
              </p>
            </div>
          </FloatingCard>
          <ProgressCard
            {...progress}
            className="absolute top-34.75 left-102.75 hidden w-58 text-left sm:flex"
          />
          <StudentsCard
            {...students}
            className="absolute top-81.25 -left-25.75 hidden w-64.5 text-left sm:flex"
          />
        </div>
      </div>
    </section>
  )
}
