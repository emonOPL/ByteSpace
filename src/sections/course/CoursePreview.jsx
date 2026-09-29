import playIcon from '@/assets/icons/play.svg'
import { cn } from '@/lib/cn'

export default function CoursePreview({ image, label, className }) {
  return (
    <figure
      className={cn(
        'relative aspect-[725/479] overflow-hidden rounded-3xl bg-media',
        className,
      )}
    >
      <img src={image} alt={label} className="size-full object-cover" />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex size-18 -translate-1/2 items-center justify-center rounded-3xl border border-black-700 bg-shuttle-gray-900/24 backdrop-blur-[2.5rem] sm:size-26"
      >
        <img src={playIcon} alt="" className="size-12 sm:size-auto" />
      </span>
    </figure>
  )
}
