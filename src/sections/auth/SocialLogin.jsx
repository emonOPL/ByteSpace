import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'

export default function SocialLogin({ divider, providers }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-2.75">
        <span className="h-px flex-1 bg-black-200 xl:w-50 xl:flex-none" />
        <span className="text-body-l text-black-400">{divider}</span>
        <span className="h-px flex-1 bg-black-200 xl:w-50 xl:flex-none" />
      </div>
      <ul className="flex justify-center gap-4">
        {providers.map((provider) => (
          <li key={provider.name}>
            <button
              type="button"
              aria-label={provider.label}
              className={cn(
                'flex size-18 items-center justify-center rounded-3xl border border-black-200',
                focusRing,
              )}
            >
              <img src={provider.icon} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
