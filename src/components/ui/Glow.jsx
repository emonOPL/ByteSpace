import { cn } from '@/lib/cn'

export default function Glow({ className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute bg-[radial-gradient(closest-side,currentColor,color-mix(in_srgb,currentColor_23%,transparent)_53%,color-mix(in_srgb,currentColor_6%,transparent)_75%,transparent)] blur-[1.25rem]',
        className,
      )}
    />
  )
}
