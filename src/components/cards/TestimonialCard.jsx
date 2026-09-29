import { cn } from '@/lib/cn'

export default function TestimonialCard({ testimonial, className }) {
  const { avatar, name, role, quote, compactName } = testimonial

  return (
    <figure
      className={cn('flex flex-col gap-6 rounded-3xl bg-white p-6', className)}
    >
      <figcaption className="flex flex-col gap-6">
        {avatar && (
          <img
            src={avatar}
            alt=""
            className="size-20 rounded-full object-cover"
          />
        )}
        <div>
          <p
            className={cn(
              'font-heading text-heading-xs text-black-950',
              !compactName && 'leading-7',
            )}
          >
            {name}
          </p>
          <p className="text-body-l text-persian-blue-800">{role}</p>
        </div>
      </figcaption>
      <blockquote className="text-body-l text-black-700">{quote}</blockquote>
    </figure>
  )
}
