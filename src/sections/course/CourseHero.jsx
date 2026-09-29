import { useEffect, useRef, useState } from 'react'
import shareIcon from '@/assets/icons/share.svg'
import Button from '@/components/ui/Button'
import InfoChip from '@/components/ui/InfoChip'
import { courseDetailsCopy } from '@/data/courseDetails'

export default function CourseHero({ details }) {
  const { title, subtitle, course, meta } = details
  const { share } = courseDetailsCopy
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {})
      return
    }
    await navigator.clipboard?.writeText(url)
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-shuttle-gray-50">
          <h1 className="font-heading text-heading-s">{title}</h1>
          <p className="font-heading text-heading-xs">{subtitle}</p>
        </div>
        <p className="text-label-l text-persian-blue-50">
          {course.authorPrefix}{' '}
          <span className="text-electric-lime-400">{course.author}</span>
        </p>
        <ul className="flex flex-wrap gap-4">
          {meta.map((item) => (
            <li key={item.label}>
              <InfoChip icon={item.icon}>{item.label}</InfoChip>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={handleShare}
        className="shrink-0 self-start py-2 text-label-m/6"
      >
        <img src={shareIcon} alt="" />
        <span aria-live="polite">{copied ? share.copied : share.label}</span>
      </Button>
    </div>
  )
}
