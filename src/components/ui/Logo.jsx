import logoMark from '@/assets/icons/logo-mark.svg'
import { cn } from '@/lib/cn'

export default function Logo({ className }) {
  return (
    <span className={cn('relative block h-9.25 w-42.75', className)}>
      <img src={logoMark} alt="" className="absolute top-0 left-0" />
      <span className="absolute top-1.75 left-9.25 font-brand text-2xl/7.5 font-bold">
        ByteSpace
      </span>
    </span>
  )
}
