import { cn } from '@/lib/cn'

export default function ProgressBar({ value, label, className }) {
  return (
    <progress
      value={value}
      max={100}
      aria-label={label}
      className={cn(
        'block h-2 w-full appearance-none overflow-hidden rounded-3xl bg-track [&::-moz-progress-bar]:rounded-3xl [&::-moz-progress-bar]:bg-electric-lime-400 [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:rounded-3xl [&::-webkit-progress-value]:bg-electric-lime-400',
        className,
      )}
    />
  )
}
