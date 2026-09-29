import { cn } from '@/lib/cn'

export default function Container({ className, ...props }) {
  return (
    <div
      className={cn('mx-auto w-full max-w-300 px-4 xl:px-0', className)}
      {...props}
    />
  )
}
