import { cn } from '@/lib/cn'

export default function TextField({ id, label, error, className, ...props }) {
  const errorId = `${id}-error`

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-label-s text-shuttle-gray-950">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-13 w-full rounded-xl border border-shuttle-gray-100 bg-white px-6 text-body-l text-shuttle-gray-950 transition-colors outline-none placeholder:text-shuttle-gray-400 autofill:shadow-[inset_0_0_0_62.5rem_white] autofill:[-webkit-text-fill-color:var(--color-shuttle-gray-950)] focus:border-persian-blue-800',
          error && 'border-error focus:border-error',
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-body-xs text-error">
          {error}
        </p>
      )}
    </div>
  )
}
