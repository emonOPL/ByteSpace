import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import { cta } from '@/data/home'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-persian-blue-800 pt-21.25 pb-21">
      <GridPattern />
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <h2 className="max-w-177.5 font-heading text-heading-s text-shuttle-gray-50 md:text-heading-m">
          {cta.title}
        </h2>
        <p className="max-w-241 text-body-l text-shuttle-gray-50">
          {cta.description}
        </p>
        <Button as={Link} to={cta.button.to}>
          {cta.button.label}
        </Button>
      </Container>
    </section>
  )
}
