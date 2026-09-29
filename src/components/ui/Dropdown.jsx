import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

export default function Dropdown({
  label,
  value,
  options,
  onChange,
  trigger,
  align = 'start',
  className,
}) {
  const id = useId()
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const listRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [placement, setPlacement] = useState(align)
  const selected = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  )

  useLayoutEffect(() => {
    if (!open || !listRef.current) return
    const { left, right } = listRef.current.getBoundingClientRect()
    const viewport = document.documentElement.clientWidth
    if (right > viewport) setPlacement('end')
    else if (left < 0) setPlacement('start')
  }, [open])

  useEffect(() => {
    if (!open) return
    listRef.current?.focus()
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  function show() {
    setPlacement(align)
    setActive(selected)
    setOpen(true)
  }

  function close() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  function choose(option) {
    onChange(option.value)
    close()
  }

  function onListKeyDown(event) {
    const last = options.length - 1
    const moves = {
      ArrowDown: Math.min(active + 1, last),
      ArrowUp: Math.max(active - 1, 0),
      Home: 0,
      End: last,
    }
    if (event.key in moves) {
      event.preventDefault()
      setActive(moves[event.key])
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      choose(options[active])
    } else if (event.key === 'Escape') {
      event.preventDefault()
      close()
    } else if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      {trigger({
        ref: triggerRef,
        'aria-haspopup': 'listbox',
        'aria-expanded': open,
        'aria-controls': open ? `${id}-list` : undefined,
        onClick: () => (open ? setOpen(false) : show()),
        onKeyDown: (event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            show()
          }
        },
      })}
      {open && (
        <ul
          ref={listRef}
          id={`${id}-list`}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          aria-activedescendant={`${id}-${active}`}
          onKeyDown={onListKeyDown}
          className={cn(
            'absolute top-full z-20 mt-2 max-h-80 w-max min-w-full overflow-y-auto rounded-2xl border border-shuttle-gray-200 bg-white py-2 shadow-float outline-none',
            placement === 'end' ? 'right-0' : 'left-0',
          )}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${id}-${index}`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => choose(option)}
              onPointerMove={() => setActive(index)}
              className={cn(
                'cursor-pointer px-4 py-2.5 text-left text-body-m text-shuttle-gray-950',
                index === active && 'bg-shuttle-gray-50',
                option.value === value && 'font-medium text-persian-blue-800',
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
