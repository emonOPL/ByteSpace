import searchIcon from '@/assets/icons/search.svg'
import { cn } from '@/lib/cn'

export default function SearchField({ id, label, className, ...props }) {
  return (
    <div
      className={cn(
        'flex h-13 min-w-0 items-center gap-2 rounded-3xl bg-white px-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-electric-lime-400 sm:px-6',
        className,
      )}
    >
      <img src={searchIcon} alt="" className="shrink-0" />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        className="w-full min-w-0 bg-transparent text-body-m text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400 sm:text-body-l"
        {...props}
      />
    </div>
  )
}
