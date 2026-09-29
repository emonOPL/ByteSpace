import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import { footer } from '@/data/footer'
import { homeLink, navLabels } from '@/data/navigation'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

const linkClass = cn('block text-shuttle-gray-950', focusRing)

export default function Footer() {
  const { description, newsletter, columns, copyright, legal } = footer

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <footer className="border-t border-shuttle-gray-200 bg-white pt-17.5 pb-12">
      <Container className="flex flex-col gap-16 xl:gap-32.5">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-23">
          <div className="flex flex-col gap-11.25 xl:w-132">
            <div className="flex flex-col gap-4">
              <Link to={homeLink.to} className={cn(linkClass, 'self-start')}>
                <Logo />
              </Link>
              <p className="text-body-s text-shuttle-gray-950">{description}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletter.label}
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder={newsletter.placeholder}
                  className={cn(
                    'h-13 w-full rounded-full border border-shuttle-gray-200 bg-white px-6 text-body-m text-shuttle-gray-950 placeholder:text-shuttle-gray-950 sm:w-94',
                    focusRing,
                  )}
                />
                <Button type="submit" className="self-start sm:self-center">
                  {newsletter.button}
                </Button>
              </div>
              <p className="text-body-xs text-shuttle-gray-950">
                {newsletter.consent}
              </p>
            </form>
          </div>
          <nav
            aria-label={navLabels.footer}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-[repeat(3,10.4375rem)] xl:gap-10 xl:pt-12"
          >
            {columns.map((column) => (
              <div key={column.id}>
                {column.title && <h2 className="sr-only">{column.title}</h2>}
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={cn(linkClass, 'text-body-s')}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-shuttle-gray-200 pt-5.5 sm:flex-row sm:justify-between">
          <p className="text-body-xs text-shuttle-gray-950">{copyright}</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((link) => (
              <li key={link}>
                <a href="#" className={cn(linkClass, 'text-body-xs')}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
