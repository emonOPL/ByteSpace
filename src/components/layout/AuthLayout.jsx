import { Link } from 'react-router'
import logoMark from '@/assets/icons/logo-mark.svg'
import Container from '@/components/ui/Container'
import GridPattern from '@/components/ui/GridPattern'
import { homeLink } from '@/data/navigation'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function AuthLayout({ intro, aside, cardClassName, children }) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-persian-blue-800">
      <GridPattern />
      <Container className="relative flex flex-col pb-16 xl:block xl:h-256 xl:pb-0">
        <header className="w-full max-w-144.75 self-center pt-8.75 xl:absolute xl:top-0 xl:left-0.5">
          <Link
            to={homeLink.to}
            aria-label={homeLink.label}
            className={cn('block w-fit', focusRing)}
          >
            <img src={logoMark} alt="" />
          </Link>
        </header>
        <div className="mt-10 flex w-full max-w-144.75 flex-col gap-4 self-center text-shuttle-gray-50 xl:absolute xl:top-30 xl:left-0.5 xl:mt-0 xl:max-w-118.75">
          <p className="font-heading text-heading-xs">{intro.title}</p>
          <p className="text-body-l">{intro.description}</p>
        </div>
        {aside && (
          <div className="hidden xl:absolute xl:top-76.25 xl:-left-6.25 xl:block">
            {aside}
          </div>
        )}
        <main
          className={cn(
            'mt-8 flex w-full max-w-144.75 flex-col gap-10 self-center rounded-3xl bg-white px-6 py-10 sm:px-15.75 sm:pt-15.25 xl:absolute xl:top-30 xl:right-0 xl:mt-0 xl:h-196 xl:justify-between xl:gap-0 xl:pb-10',
            cardClassName,
          )}
        >
          {children}
        </main>
      </Container>
    </div>
  )
}
