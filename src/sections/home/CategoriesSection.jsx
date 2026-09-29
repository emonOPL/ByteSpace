import CategoryCard from '@/components/cards/CategoryCard'
import Container from '@/components/ui/Container'
import { categories, categoriesIntro } from '@/data/home'

export default function CategoriesSection() {
  return (
    <section className="pt-18 pb-30">
      <Container>
        <h2 className="mx-auto max-w-198 text-center font-heading text-heading-s text-vulcan-950">
          {categoriesIntro.title}
        </h2>
        <p className="mx-auto mt-4 max-w-229.25 text-center text-body-l text-shuttle-gray-400">
          {categoriesIntro.description}
        </p>
        <ul className="mt-17 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-10 xl:-mx-px xl:grid-cols-[repeat(6,10.4375rem)]">
          {categories.map((category) => (
            <li key={category.label}>
              <CategoryCard label={category.label} icon={category.icon} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
