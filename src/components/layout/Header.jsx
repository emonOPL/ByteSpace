import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import shoppingBag from '@/assets/icons/shopping-bag.svg'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import MenuButton from '@/components/ui/MenuButton'
import {
  authNav,
  cartLink,
  homeLink,
  mainNav,
  menuLabels,
  navLabels,
} from '@/data/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

const linkClass = cn('block text-shuttle-gray-50', focusRing)

export default function Header({ className }) {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
        scrolled || open
          ? 'bg-persian-blue-800 shadow-float'
          : 'bg-transparent',
        className,
      )}
    >
      <Container
        className={cn(
          'relative flex h-18 items-center justify-between transition-[margin] duration-300 lg:h-30 lg:items-start',
          scrolled && 'lg:-my-5',
        )}
      >
        <Link
          to={homeLink.to}
          onClick={close}
          className={cn(linkClass, 'lg:mt-8.75 lg:ml-0.5')}
        >
          <Logo />
        </Link>
        <nav
          aria-label={navLabels.main}
          className="hidden lg:absolute lg:top-11.75 lg:left-1/2 lg:block lg:-translate-x-1/2"
        >
          <ul className="flex items-start gap-6">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === homeLink.to}
                  className={({ isActive }) =>
                    cn(linkClass, isActive ? 'text-label-m' : 'text-body-m')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 lg:mt-12 lg:items-start lg:gap-6">
          <ul className="hidden items-start gap-6 lg:flex">
            {authNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={cn(linkClass, 'text-body-m/6')}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={cartLink.to}
            aria-label={cartLink.label}
            onClick={close}
            className={linkClass}
          >
            <img src={shoppingBag} alt="" />
          </Link>
          <MenuButton
            open={open}
            aria-controls="mobile-menu"
            aria-label={open ? menuLabels.close : menuLabels.open}
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 lg:hidden"
          />
        </div>
      </Container>
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-4 border-t border-shuttle-gray-50/12 pt-4 pb-6">
            <nav aria-label={navLabels.mobile}>
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === homeLink.to}
                      onClick={close}
                      className={({ isActive }) =>
                        cn(
                          linkClass,
                          'py-3',
                          isActive ? 'text-label-l' : 'text-body-l',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex gap-6 border-t border-shuttle-gray-50/12 pt-4">
              {authNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={close}
                    className={cn(linkClass, 'py-2 text-body-l')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  )
}
