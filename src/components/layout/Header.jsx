import { Link, NavLink } from 'react-router'
import shoppingBag from '@/assets/icons/shopping-bag.svg'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import { authNav, cartLink, mainNav } from '@/data/navigation'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

const linkClass = cn('block text-shuttle-gray-50', focusRing)

export default function Header({ className }) {
  return (
    <header className={cn('relative z-10', className)}>
      <Container className="relative flex flex-wrap items-center justify-between gap-y-4 py-6 lg:h-30 lg:items-start lg:py-0">
        <Link to="/" className={cn(linkClass, 'lg:mt-8.75 lg:ml-0.5')}>
          <Logo />
        </Link>
        <nav
          aria-label="Main"
          className="order-last w-full lg:absolute lg:top-11.75 lg:left-1/2 lg:order-0 lg:w-auto lg:-translate-x-1/2"
        >
          <ul className="flex items-start justify-center gap-6">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
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
        <ul className="flex items-start gap-6 lg:mt-12">
          {authNav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className={cn(linkClass, 'text-body-m/6')}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={cartLink.to}
              aria-label={cartLink.label}
              className={linkClass}
            >
              <img src={shoppingBag} alt="" />
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}
