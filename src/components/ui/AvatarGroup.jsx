import { cn } from '@/lib/cn'

const sizes = {
  sm: { item: 'size-8', stack: '-space-x-2', count: 'text-label-xs' },
  md: {
    item: 'size-10.75',
    stack: '-space-x-4',
    count: 'text-xs/normal font-bold',
  },
}

const tones = {
  lime: 'bg-electric-lime-400 text-shuttle-gray-950',
  dark: 'bg-black-950 text-white',
  ink: 'bg-shuttle-gray-950 text-shuttle-gray-50',
}

export default function AvatarGroup({
  avatars = [],
  count,
  size = 'md',
  tone = 'lime',
  className,
}) {
  const styles = sizes[size]

  return (
    <div className={cn('flex', styles.stack, className)}>
      {avatars.map((avatar) => (
        <img
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt ?? ''}
          className={cn('rounded-full object-cover', styles.item)}
        />
      ))}
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full',
          styles.item,
          styles.count,
          tones[tone],
        )}
      >
        {count}
      </span>
    </div>
  )
}
