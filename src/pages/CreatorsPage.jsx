import { Link } from 'react-router'
import CreatorCard from '@/components/cards/CreatorCard'
import PageMeta from '@/components/layout/PageMeta'
import Container from '@/components/ui/Container'
import { creatorListing, creators } from '@/data/creators'
import { useCreatorFilters } from '@/hooks/useCreatorFilters'
import { cn } from '@/lib/cn'
import { focusRing } from '@/lib/focus'
import CreatorFilters from '@/sections/creators/CreatorFilters'
import CtaSection from '@/sections/home/CtaSection'
import EmptyResults from '@/sections/listing/EmptyResults'
import ListingHero from '@/sections/listing/ListingHero'

export default function CreatorsPage() {
  const { filters, items, setFilter, reset } = useCreatorFilters(creators)

  return (
    <>
      <PageMeta
        title={creatorListing.title}
        description={creatorListing.description}
      />
      <ListingHero
        id="creators-search"
        heading={creatorListing.heading}
        search={creatorListing.search}
        scope={creatorListing.scope}
        query={filters.q}
        onQueryChange={(value) => setFilter('q', value, { replace: true })}
      />
      <section className="pt-18 pb-18 lg:pb-30">
        <Container>
          <CreatorFilters filters={filters} onChange={setFilter} />
          <h2 className="sr-only">{creatorListing.resultsHeading}</h2>
          <p aria-live="polite" className="sr-only">
            {creatorListing.results(items.length)}
          </p>
          <div className="mt-12">
            {items.length > 0 ? (
              <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((creator) => (
                  <li key={creator.id}>
                    <Link
                      to={`/creators/${creator.id}`}
                      className={cn('block h-full rounded-3xl', focusRing)}
                    >
                      <CreatorCard
                        creator={creator}
                        labels={creatorListing.card}
                        className="h-full"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyResults copy={creatorListing.empty} onReset={reset} />
            )}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  )
}
