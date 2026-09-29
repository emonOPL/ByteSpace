import Container from '@/components/ui/Container'
import { partners } from '@/data/home'
import { cn } from '@/lib/cn'

export default function PartnersSection() {
  return (
    <section aria-label={partners.label} className="bg-shuttle-gray-50 py-20">
      <Container className="overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0 || undefined}
              className={cn(
                'flex min-h-10.5 shrink-0 items-end gap-x-18 pr-18 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8 motion-reduce:pr-0',
                copy > 0 && 'motion-reduce:hidden',
              )}
            >
              {partners.logos.map((logo) => (
                <li key={logo.src} className="shrink-0">
                  <img src={logo.src} alt={copy > 0 ? '' : logo.name} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </section>
  )
}
