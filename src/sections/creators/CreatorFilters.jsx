import Dropdown from '@/components/ui/Dropdown'
import PillButton from '@/components/ui/PillButton'
import TabButton from '@/components/ui/TabButton'
import { creatorListing } from '@/data/creators'

export default function CreatorFilters({ filters, onChange }) {
  const { tabs, sort } = creatorListing
  const selected = sort.options.find((option) => option.value === filters.sort)

  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div
        role="group"
        aria-label={tabs.label}
        className="-mx-4 flex scroll-px-4 scrollbar-none gap-3 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {tabs.items.map((tab) => (
          <TabButton
            key={tab.label}
            className="shrink-0 whitespace-nowrap"
            active={filters.specialty === tab.value}
            onClick={() => onChange('specialty', tab.value)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      <Dropdown
        label={sort.label}
        value={filters.sort}
        options={sort.options}
        onChange={(value) => onChange('sort', value)}
        align="end"
        className="self-end lg:self-start"
        trigger={(props) => (
          <PillButton icon={sort.icon} {...props}>
            {(selected ?? sort.options[0]).label}
          </PillButton>
        )}
      />
    </div>
  )
}
