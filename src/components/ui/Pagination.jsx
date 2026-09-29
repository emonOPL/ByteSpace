import chevronLeft from '@/assets/icons/chevron-left.svg'
import chevronRight from '@/assets/icons/chevron-right.svg'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

const arrowClass = cn(
  'flex h-12 w-14 items-center justify-center rounded-3xl border border-shuttle-gray-200 bg-white disabled:cursor-default [&:disabled>img]:opacity-[0.82]',
  focusRing,
)

export default function Pagination({
  page,
  totalPages,
  onChange,
  labels,
  className,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav
      aria-label={labels.label}
      className={cn('flex items-center gap-6', className)}
    >
      <button
        type="button"
        aria-label={labels.previous}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={arrowClass}
      >
        <img src={chevronLeft} alt="" />
      </button>
      <ul className="flex items-center gap-6">
        {pages.map((number) => (
          <li key={number}>
            <button
              type="button"
              aria-label={`${labels.page} ${number}`}
              aria-current={number === page ? 'page' : undefined}
              onClick={() => onChange(number)}
              className={cn(
                'h-12 font-heading text-heading-xs/7',
                focusRing,
                number === page
                  ? 'cursor-default text-shuttle-gray-200'
                  : 'text-shuttle-gray-950',
              )}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label={labels.next}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={arrowClass}
      >
        <img src={chevronRight} alt="" />
      </button>
    </nav>
  )
}
