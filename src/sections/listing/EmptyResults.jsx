import Button from '@/components/ui/Button'

export default function EmptyResults({ copy, onReset }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-shuttle-gray-200 px-6 py-16 text-center">
      <p className="font-heading text-heading-xs text-shuttle-gray-950">
        {copy.title}
      </p>
      <p className="max-w-120 text-body-m text-shuttle-gray-700">
        {copy.description}
      </p>
      {copy.action && <Button onClick={onReset}>{copy.action}</Button>}
    </div>
  )
}
