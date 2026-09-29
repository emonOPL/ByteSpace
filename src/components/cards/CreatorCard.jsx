import { cn } from '@/lib/cn'

function Stat({ value, label }) {
  return (
    <div className="flex flex-col-reverse">
      <dt className="text-body-xs text-black-700">{label}</dt>
      <dd className="font-heading text-heading-xs text-persian-blue-800">
        {value}
      </dd>
    </div>
  )
}

export default function CreatorCard({ creator, labels, className }) {
  const { name, headline, specialty, avatar, bio, followers, courses } = creator

  return (
    <article
      className={cn(
        'flex flex-col gap-5 rounded-3xl border border-shuttle-gray-200 bg-white p-5.75',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt=""
          loading="lazy"
          width="80"
          height="80"
          className="size-20 shrink-0 rounded-3xl object-cover"
        />
        <div className="flex min-w-0 flex-col gap-1 pt-2">
          <h3 className="truncate font-heading text-heading-xs text-black-950">
            {name}
          </h3>
          <p className="text-body-s text-shuttle-gray-700">{headline}</p>
        </div>
      </div>
      <span className="flex h-8 items-center self-start rounded-3xl bg-shuttle-gray-50 px-3 text-label-xs text-shuttle-gray-700">
        {specialty}
      </span>
      <p className="line-clamp-3 text-body-s text-shuttle-gray-700">{bio[0]}</p>
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-shuttle-gray-200 pt-5">
        <dl className="flex gap-6">
          <Stat value={courses.length} label={labels.products} />
          <Stat value={followers} label={labels.followers} />
        </dl>
        <span className="rounded-3xl bg-electric-lime-400 px-4 py-2.5 text-label-s text-shuttle-gray-950">
          {labels.action}
        </span>
      </div>
    </article>
  )
}
