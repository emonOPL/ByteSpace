import CheckList from '@/components/ui/CheckList'
import PanelSection from '@/sections/course/PanelSection'

export default function AboutPanel({ about }) {
  return (
    <div className="flex flex-col gap-6">
      <PanelSection title={about.descriptionTitle}>
        <div className="flex flex-col gap-6.5 text-body-m text-shuttle-gray-700">
          {about.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </PanelSection>
      <PanelSection title={about.sneakPeekTitle}>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4.75">
          {about.sneakPeek.map((image) => (
            <li key={image}>
              <img
                src={image}
                alt=""
                loading="lazy"
                className="aspect-[167/125] w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </ul>
      </PanelSection>
      <PanelSection title={about.keyPointsTitle}>
        <CheckList
          items={about.keyPoints}
          className="gap-3"
          itemClassName="text-body-m text-shuttle-gray-700"
        />
      </PanelSection>
    </div>
  )
}
