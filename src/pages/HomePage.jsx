import PageMeta from '@/components/layout/PageMeta'
import PortraitShadow from '@/components/ui/PortraitShadow'
import { homeMeta } from '@/data/home'
import CategoriesSection from '@/sections/home/CategoriesSection'
import CoursesSection from '@/sections/home/CoursesSection'
import CtaSection from '@/sections/home/CtaSection'
import HeroSection from '@/sections/home/HeroSection'
import PartnersSection from '@/sections/home/PartnersSection'
import PlatformSection from '@/sections/home/PlatformSection'
import TestimonialsSection from '@/sections/home/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <PageMeta title={homeMeta.title} description={homeMeta.description} />
      <PortraitShadow />
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <CategoriesSection />
      <PlatformSection />
      <CtaSection />
      <TestimonialsSection />
    </>
  )
}
