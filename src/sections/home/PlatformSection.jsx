import Container from '@/components/ui/Container'
import Glow from '@/components/ui/Glow'
import CreatorSection from '@/sections/home/CreatorSection'
import GrowthSection from '@/sections/home/GrowthSection'

export default function PlatformSection() {
  return (
    <div className="relative overflow-hidden bg-surface py-30">
      <div className="absolute inset-y-0 left-1/2 w-360 -translate-x-1/2">
        <Glow className="top-197 left-180.5 size-284.25 text-persian-blue-800/24" />
        <Glow className="-top-116.5 -left-38 size-284.25 text-electric-lime-500/40" />
        <Glow className="top-45.75 -left-127 size-284.25 text-persian-blue-800/16" />
        <Glow className="-top-114.5 left-202.75 size-284.25 text-persian-blue-800/8" />
        <Glow className="top-236.5 -left-71.75 size-168 text-electric-lime-500/60" />
      </div>
      <Container className="relative flex flex-col gap-18">
        <GrowthSection />
        <CreatorSection />
      </Container>
    </div>
  )
}
