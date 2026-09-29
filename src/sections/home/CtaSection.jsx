import { Link } from 'react-router'
import coilLime from '@/assets/images/ornament-coil-lime.webp'
import coneWhite from '@/assets/images/ornament-cone-white.webp'
import cylinderWhite from '@/assets/images/ornament-cylinder-white.webp'
import pyramidLime from '@/assets/images/ornament-pyramid-lime.webp'
import springLime from '@/assets/images/ornament-spring-lime.webp'
import springWhite from '@/assets/images/ornament-spring-white.webp'
import torusLime from '@/assets/images/ornament-torus-lime.webp'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import Ornaments from '@/components/ui/Ornaments'
import { cta } from '@/data/home'

const ornaments = [
  { src: pyramidLime, className: 'top-0 left-269.5 w-47.5' },
  { src: coilLime, className: 'top-72.25 left-276.75 w-83.5' },
  { src: springLime, className: '-top-40.5 -left-30.5 w-97.25' },
  { src: springWhite, className: 'top-1.25 left-44.5 w-44.25' },
  { src: coneWhite, className: 'top-56.25 -left-12.5 w-47.5' },
  { src: torusLime, className: 'top-74.5 left-4 w-86.5' },
  { src: cylinderWhite, className: 'top-1.25 left-305.5 w-93.5' },
]

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
      <Ornaments items={ornaments} loading="lazy" />
    </section>
  )
}
