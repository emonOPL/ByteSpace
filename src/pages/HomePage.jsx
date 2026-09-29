import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PortraitShadow from '@/components/ui/PortraitShadow'
import CategoriesSection from '@/sections/home/CategoriesSection'
import CoursesSection from '@/sections/home/CoursesSection'
import CtaSection from '@/sections/home/CtaSection'
import HeroSection from '@/sections/home/HeroSection'
import PartnersSection from '@/sections/home/PartnersSection'
import PlatformSection from '@/sections/home/PlatformSection'
import TestimonialsSection from '@/sections/home/TestimonialsSection'

export default function HomePage() {
  return (
    <div className="relative">
      <PortraitShadow />
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <CategoriesSection />
        <PlatformSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
