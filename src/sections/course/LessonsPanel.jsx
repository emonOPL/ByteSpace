import videoLarge from '@/assets/icons/video-large.svg'
import ProgressCard from '@/components/cards/ProgressCard'
import PanelSection from '@/sections/course/PanelSection'

export default function LessonsPanel({ lessons }) {
  return (
    <div className="flex flex-col gap-6">
      <PanelSection title={lessons.title} description={lessons.description} />
      <PanelSection title={lessons.listTitle}>
        <ol className="flex flex-col gap-6">
          {lessons.modules.map((module) => (
            <li key={module.title} className="flex items-center gap-3.25">
              <span className="flex size-18 shrink-0 items-center justify-center rounded-3xl bg-electric-lime-400">
                <img src={videoLarge} alt="" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-label-m text-shuttle-gray-950">
                  {module.title}
                </h3>
                <p className="text-body-m text-shuttle-gray-700">
                  {module.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PanelSection>
      <PanelSection
        title={lessons.contentTitle}
        description={lessons.content}
      />
      <PanelSection
        title={lessons.progressTitle}
        description={lessons.progressDescription}
      >
        <ProgressCard
          {...lessons.progress}
          className="border border-shuttle-gray-200 p-3.75"
          valueClassName="text-heading-s"
          barClassName="bg-shuttle-gray-100"
        />
      </PanelSection>
    </div>
  )
}
