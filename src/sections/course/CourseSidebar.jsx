import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import PillButton from '@/components/ui/PillButton'
import { cn } from '@/lib/cn'

export default function CourseSidebar({ details, className }) {
  const { course, sidebar } = details
  const { creator } = sidebar

  return (
    <aside
      className={cn(
        'flex flex-col gap-6 rounded-3xl border border-shuttle-gray-200 bg-white p-6 sm:p-9.75',
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs text-shuttle-gray-950">
          {sidebar.lessonsTitle}
        </h2>
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {sidebar.lessons.map((lesson) => (
              <li
                key={lesson.number}
                className="flex items-start justify-between gap-4"
              >
                <span className="flex gap-2 text-label-m text-shuttle-gray-950">
                  <span className="w-6 shrink-0">{lesson.number}</span>
                  <span className="max-w-48.5">{lesson.title}</span>
                </span>
                <span className="shrink-0 text-body-m text-persian-blue-800">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-body-m text-shuttle-gray-700">{sidebar.more}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-body-m text-shuttle-gray-700">{sidebar.note}</p>
        <p className="flex items-end">
          <span className="font-heading text-heading-s/9.5 text-persian-blue-800">
            {course.price}
          </span>
          <span className="text-body-m text-shuttle-gray-700">
            {course.billing}
          </span>
        </p>
        <Button as={Link} to={sidebar.enroll.to} className="w-full">
          {sidebar.enroll.label}
        </Button>
      </div>
      <h2 className="font-heading text-heading-xs text-shuttle-gray-950">
        {sidebar.includesTitle}
      </h2>
      <ul className="flex flex-col gap-3">
        {sidebar.includes.map((item) => (
          <li
            key={item.label}
            className="flex gap-2 text-body-m text-shuttle-gray-700"
          >
            <img src={item.icon} alt="" className="shrink-0" />
            {item.label}
          </li>
        ))}
      </ul>
      <hr className="-mb-px border-black-200" />
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <img
            src={creator.avatar}
            alt=""
            className="size-13 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-label-l text-shuttle-gray-950">{creator.name}</p>
            <p className="text-body-m text-shuttle-gray-700">{creator.role}</p>
          </div>
        </div>
        <p className="text-body-m text-shuttle-gray-700">{creator.note}</p>
        <PillButton
          as={Link}
          to={creator.profile.to}
          className="h-auto self-start py-1.75"
        >
          {creator.profile.label}
        </PillButton>
      </div>
    </aside>
  )
}
