import checkCircle from '@/assets/icons/check-circle.svg'
import { cn } from '@/lib/cn'

export default function CheckList({ items, className, itemClassName }) {
  return (
    <ul className={cn('flex flex-col', className)}>
      {items.map((item) => (
        <li key={item} className={cn('flex gap-2', itemClassName)}>
          <img src={checkCircle} alt="" className="shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}
