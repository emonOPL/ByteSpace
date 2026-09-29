import { useState } from 'react'
import Button from '@/components/ui/Button'
import { creatorCopy } from '@/data/creators'

function Stat({ value, label }) {
  return (
    <li className="flex h-11.5 items-center gap-2 rounded-3xl bg-white px-6 text-label-l">
      <span className="text-persian-blue-800">{value}</span>
      <span className="text-shuttle-gray-950">{label}</span>
    </li>
  )
}

export default function CreatorHero({ creator }) {
  const [following, setFollowing] = useState(false)
  const { badge, stats, follow } = creatorCopy

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <img
          src={creator.avatar}
          alt=""
          width="96"
          height="96"
          className="size-24 shrink-0 rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-start gap-2">
            <h1 className="font-heading text-heading-s text-shuttle-gray-50">
              {creator.name}
            </h1>
            <span className="rounded-3xl bg-electric-lime-400 px-6 py-2 text-label-m text-shuttle-gray-950">
              {badge}
            </span>
          </div>
          <p className="text-body-l text-shuttle-gray-50">{creator.headline}</p>
        </div>
      </div>
      <div className="text-body-l text-shuttle-gray-50">
        {creator.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-4">
          <Stat value={creator.courses.length} label={stats.products} />
          <Stat
            value={creator.followers + (following ? 1 : 0)}
            label={stats.followers}
          />
        </ul>
        <Button
          aria-pressed={following}
          onClick={() => setFollowing((value) => !value)}
        >
          {following ? follow.active : follow.idle}
        </Button>
      </div>
    </div>
  )
}
