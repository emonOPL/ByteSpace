import TestimonialCard from '@/components/cards/TestimonialCard'
import Container from '@/components/ui/Container'
import Glow from '@/components/ui/Glow'
import { testimonials, testimonialsIntro } from '@/data/home'

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-18.5 pb-14.25">
      <div className="absolute inset-y-0 left-1/2 w-360 -translate-x-1/2">
        <Glow className="-top-60.25 left-210.5 size-284.25 text-electric-lime-500/40" />
        <Glow className="-top-34.5 left-98.75 size-168 text-electric-lime-500/60" />
        <Glow className="top-37.25 -left-110.5 size-284.25 text-persian-blue-800/24" />
      </div>
      <Container className="relative">
        <div className="flex flex-col gap-18 xl:-mx-0.5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10.75">
            <h2 className="font-heading text-heading-s text-black-950 md:text-heading-m lg:w-144.25 lg:shrink-0">
              {testimonialsIntro.title}
            </h2>
            <p className="text-body-l text-black-700 lg:w-145">
              {testimonialsIntro.description}
            </p>
          </div>
          <ul className="grid auto-rows-fr gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,23.375rem)] xl:gap-10.25">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
