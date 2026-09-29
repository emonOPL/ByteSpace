import categoryIcon from '@/assets/icons/category.svg'
import filterIcon from '@/assets/icons/filter.svg'
import levelIcon from '@/assets/icons/level.svg'
import sortIcon from '@/assets/icons/sort.svg'
import { categories, levels } from '@/data/courses'

const toOptions = (items) => items.map((item) => ({ value: item, label: item }))

export const courseListing = {
  title: 'Courses | ByteSpace',
  heading: 'Find Your Next Course',
  search: { label: 'Search courses', placeholder: 'Search' },
  scope: 'courses',
  reset: {
    label: 'Filter',
    description: 'Clear all filters',
    icon: filterIcon,
  },
  level: {
    label: 'Level',
    icon: levelIcon,
    options: [{ value: '', label: 'All levels' }, ...toOptions(levels)],
  },
  category: {
    label: 'Category',
    icon: categoryIcon,
    options: [{ value: '', label: 'All categories' }, ...toOptions(categories)],
  },
  sort: {
    label: 'Sort by',
    icon: sortIcon,
    options: [
      { value: '', label: 'Most relevant' },
      { value: 'price-asc', label: 'Price: Low to High' },
      { value: 'price-desc', label: 'Price: High to Low' },
      { value: 'rating', label: 'Highest rated' },
    ],
  },
  tabs: {
    label: 'Course categories',
    items: [
      { value: '', label: 'Featured' },
      ...toOptions([
        'Music',
        'Drawing & Painting',
        'Marketing',
        'Animation',
        'Social Media',
        'UI/UX Design',
        'Creative Marketing',
        'Cooking',
      ]),
    ],
  },
  pagination: {
    label: 'Pagination',
    previous: 'Previous page',
    next: 'Next page',
    page: 'Page',
    perPage: 18,
    featuredPages: 5,
  },
  resultsHeading: 'All courses',
  results: (count) => `${count} ${count === 1 ? 'course' : 'courses'} found`,
  empty: {
    title: 'No courses found',
    description: 'Try a different search or clear the filters.',
    action: 'Clear filters',
  },
}
