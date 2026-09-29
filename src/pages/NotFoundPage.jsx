import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import { notFound } from '@/data/notFound'

export default function NotFoundPage() {
  const { title, code, heading, description, action } = notFound

  return (
    <section className="relative overflow-hidden bg-persian-blue-800 pt-32 pb-24 sm:pt-40 sm:pb-31.25">
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <GridPattern />
      <Container className="relative flex flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="-mb-[0.248em] bg-[linear-gradient(to_bottom,rgb(212_251_32)_0%,rgb(212_251_32/0.96)_25%,rgb(212_251_32/0.81)_50.5%,rgb(212_251_32/0.61)_68%,rgb(255_255_255/0)_100%)] bg-clip-text font-heading text-[min(40vw,30rem)] leading-none font-semibold tracking-heading text-transparent"
        >
          {code}
        </p>
        <h1 className="relative max-w-234 font-heading text-heading-s text-white sm:text-heading-m lg:text-heading-l">
          {heading}
        </h1>
        <p className="relative mt-8 text-body-l text-shuttle-gray-100">
          {description}
        </p>
        <Button as={Link} to={action.to} className="relative mt-8">
          {action.label}
        </Button>
      </Container>
    </section>
  )
}
