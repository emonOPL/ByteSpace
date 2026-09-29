import { useRef } from 'react'
import TabButton from '@/components/ui/TabButton'
import { cn } from '@/lib/cn'

export default function Tabs({
  id,
  label,
  items,
  active,
  onChange,
  className,
}) {
  const refs = useRef({})

  function onKeyDown(event) {
    const index = items.findIndex((item) => item.id === active)
    const last = items.length - 1
    const moves = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    if (!(event.key in moves)) return
    event.preventDefault()
    const next = items[moves[event.key]]
    onChange(next.id)
    refs.current[next.id]?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
      className={cn('flex flex-wrap gap-4', className)}
    >
      {items.map((item) => (
        <TabButton
          key={item.id}
          ref={(node) => (refs.current[item.id] = node)}
          role="tab"
          id={`${id}-tab-${item.id}`}
          aria-controls={`${id}-panel-${item.id}`}
          aria-selected={item.id === active}
          aria-pressed={undefined}
          tabIndex={item.id === active ? 0 : -1}
          active={item.id === active}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </TabButton>
      ))}
    </div>
  )
}
