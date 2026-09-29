import { cn } from '@/lib/cn'

export default function TestimonialCard({ testimonial, className }) {
  const { avatar, name, role, quote } = testimonial

  return (
    <figure
      className={cn(
        'group flex flex-col gap-6 rounded-3xl bg-white p-6',
        className,
      )}
    >
      <figcaption className="flex flex-col gap-6">
        {avatar && (
          <img
            src={avatar}
            alt=""
            loading="lazy"
            width="80"
            height="80"
            className="size-20 rounded-full object-cover"
          />
        )}
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none">
          <p className="font-heading text-heading-xs leading-7 text-black-950">
            {name}
          </p>
          <p className="text-body-l text-persian-blue-800">{role}</p>
        </div>
      </figcaption>
      <blockquote className="text-body-l text-black-700">{quote}</blockquote>
    </figure>
  )
}
