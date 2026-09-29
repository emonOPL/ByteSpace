import Container from '@/components/ui/Container'
import { partners } from '@/data/home'

const loop = [0, 1, 2].flatMap((set) =>
  partners.logos.map((logo) => ({ ...logo, key: `${set}-${logo.src}` })),
)

export default function PartnersSection() {
  return (
    <section
      aria-label={partners.label}
      className="overflow-hidden bg-shuttle-gray-50 py-20"
    >
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee motion-reduce:hidden"
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex min-h-10.5 shrink-0 items-end gap-x-18 pr-18"
          >
            {loop.map((logo) => (
              <li key={logo.key} className="shrink-0">
                <img src={logo.src} alt="" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <Container className="sr-only motion-reduce:not-sr-only">
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
