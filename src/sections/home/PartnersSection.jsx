import Container from '@/components/ui/Container'
import { partners } from '@/data/home'

export default function PartnersSection() {
  return (
    <section aria-label={partners.label} className="bg-shuttle-gray-50 py-20">
      <Container>
        <ul className="flex min-h-10.5 flex-wrap items-end justify-center gap-x-18 gap-y-8">
          {partners.logos.map((logo) => (
            <li key={logo.src}>
              <img src={logo.src} alt={logo.name} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
