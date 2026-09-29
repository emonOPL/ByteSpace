import Dropdown from '@/components/ui/Dropdown'
import PillButton from '@/components/ui/PillButton'
import TabButton from '@/components/ui/TabButton'
import { courseListing } from '@/data/courseListing'

export default function CourseFilters({
  filters,
  onChange,
  onReset,
  showTabs = true,
}) {
  const { reset, level, category, sort, tabs } = courseListing

  const renderDropdown = (key, config, { align, showValue } = {}) => {
    const selected = config.options.find(
      (option) => option.value === filters[key],
    )

    return (
      <Dropdown
        label={config.label}
        value={filters[key]}
        options={config.options}
        onChange={(value) => onChange(key, value)}
        align={align}
        trigger={(props) => (
          <PillButton icon={config.icon} {...props}>
            {showValue || filters[key] ? selected.label : config.label}
          </PillButton>
        )}
      />
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4 xl:-ml-px">
        <div className="flex flex-wrap items-center gap-4">
          <PillButton
            icon={reset.icon}
            aria-label={`${reset.label}: ${reset.description}`}
            onClick={onReset}
          >
            {reset.label}
          </PillButton>
          {renderDropdown('level', level)}
          {renderDropdown('category', category)}
        </div>
        {renderDropdown('sort', sort, { align: 'end', showValue: true })}
      </div>
      {showTabs && (
        <div
          role="group"
          aria-label={tabs.label}
          className="flex flex-wrap gap-3 xl:flex-nowrap xl:justify-between xl:gap-0"
        >
          {tabs.items.map((tab) => (
            <TabButton
              key={tab.label}
              active={filters.category === tab.value}
              onClick={() => onChange('category', tab.value)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      )}
    </div>
  )
}
