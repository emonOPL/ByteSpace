import sortIcon from '@/assets/icons/sort.svg'
import avatar1 from '@/assets/images/avatar-1.webp'
import avatar3 from '@/assets/images/avatar-3.webp'
import avatar4 from '@/assets/images/avatar-4.webp'
import avatar5 from '@/assets/images/avatar-5.webp'
import avatar6 from '@/assets/images/avatar-6.webp'
import avatar7 from '@/assets/images/avatar-7.webp'
import avatar8 from '@/assets/images/avatar-8.webp'
import avatar10 from '@/assets/images/avatar-10.webp'
import avatar12 from '@/assets/images/avatar-12.webp'
import creatorPurepearl from '@/assets/images/creator-purepearl.webp'
import { courses } from '@/data/courses'

export const creatorCopy = {
  title: (creator) => `${creator.name} | ByteSpace`,
  description: (creator) =>
    `${creator.name}, ${creator.headline}. ${creator.bio[0]}`,
  badge: 'Creator',
  stats: { products: 'Products', followers: 'Followers' },
  follow: { idle: 'Follow', active: 'Following' },
  coursesHeading: (creator) => `Courses by ${creator.name}`,
  noCourses: (creator) => ({
    title: 'No courses yet',
    description: `${creator.name} hasn’t published any courses yet. Follow to get notified when they do.`,
  }),
  pagination: { perPage: 18, featuredPages: 0 },
}

export const creators = [
  {
    id: 'purepearl-studio',
    name: 'PurePearl Studio',
    author: 'purepearl studio',
    headline: 'Passionate UI/UX, Web designer',
    specialty: 'UI/UX Design',
    avatar: creatorPurepearl,
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      'Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
    ],
    followers: 12,
  },
  {
    id: 'alex-b',
    name: 'Alex B.',
    headline: 'Inspired creator and product designer',
    specialty: 'UI/UX Design',
    avatar: avatar12,
    bio: [
      'I design digital products and teach the craft behind them. My courses focus on practical workflows you can use in real projects from day one.',
      'Every lesson comes from work I have shipped, so you learn the decisions, not just the tools.',
    ],
    followers: 48,
  },
  {
    id: 'nova-graphics',
    name: 'Nova Graphics',
    headline: 'Brand identity and graphic designer',
    specialty: 'Graphic Design',
    avatar: avatar1,
    bio: [
      'Nova Graphics helps creators build brands that people remember, from the first sketch to a complete identity system.',
      'Learn how to plan logos, pick type and colour, and present your work with confidence.',
    ],
    followers: 36,
  },
  {
    id: 'mindful-hours',
    name: 'Mindful Hours',
    headline: 'Productivity coach and writer',
    specialty: 'Productivity',
    avatar: avatar3,
    bio: [
      'Mindful Hours is about doing meaningful work without burning out. Simple systems, calm routines and honest habits.',
      'Find a rhythm that fits your life and keeps you moving forward every week.',
    ],
    followers: 24,
  },
  {
    id: 'launchpad-academy',
    name: 'Launchpad Academy',
    headline: 'Startup founder and business mentor',
    specialty: 'Freelance & Entrepreneurship',
    avatar: avatar4,
    bio: [
      'Launchpad Academy guides new founders and freelancers from the first idea to the first paying customer.',
      'Learn how to validate ideas, price your work and grow a business that lasts.',
    ],
    followers: 21,
  },
  {
    id: 'frame-by-frame',
    name: 'Frame by Frame',
    headline: 'Motion designer and animator',
    specialty: 'Animation',
    avatar: avatar5,
    bio: [
      'Frame by Frame brings ideas to life through motion. We teach animation principles that work in any tool.',
      'From simple loops to full explainer videos, learn to make every frame count.',
    ],
    followers: 18,
  },
  {
    id: 'social-spark',
    name: 'Social Spark',
    headline: 'Social media strategist',
    specialty: 'Social Media',
    avatar: avatar6,
    bio: [
      'Social Spark helps brands and creators grow real audiences with content that people actually want to share.',
      'Plan, create and measure your content with a strategy that fits your goals.',
    ],
    followers: 16,
  },
  {
    id: 'lens-and-light',
    name: 'Lens & Light',
    headline: 'Photographer and visual storyteller',
    specialty: 'Photography',
    avatar: avatar7,
    bio: [
      'Lens & Light is all about seeing the world differently. Learn composition, lighting and editing step by step.',
      'Whether you shoot on a phone or a camera, you will take photos you are proud of.',
    ],
    followers: 14,
  },
  {
    id: 'canvas-corner',
    name: 'Canvas Corner',
    headline: 'Illustrator and painting teacher',
    specialty: 'Drawing & Painting',
    avatar: avatar8,
    bio: [
      'Canvas Corner is a friendly place to learn drawing and painting, whatever your starting level.',
      'Build your skills with guided exercises and grow your own creative style.',
    ],
    followers: 11,
  },
  {
    id: 'soundwave-studio',
    name: 'Soundwave Studio',
    headline: 'Music producer and sound designer',
    specialty: 'Music',
    avatar: avatar10,
    bio: [
      'Soundwave Studio teaches music production from the first beat to the final mix.',
      'Learn the theory, the tools and the habits that help you finish tracks you love.',
    ],
    followers: 9,
  },
].map((creator) => ({
  ...creator,
  courses: courses.filter((course) => course.author === creator.author),
}))

export const creatorListing = {
  title: 'Creators | ByteSpace',
  description:
    'Meet the ByteSpace creators. Explore their specialties, follow their work and discover the courses they teach.',
  heading: 'Meet Our Creators',
  search: { label: 'Search creators', placeholder: 'Search' },
  scope: 'creators',
  tabs: {
    label: 'Creator specialties',
    items: [
      { value: '', label: 'All' },
      ...[...new Set(creators.map((creator) => creator.specialty))].map(
        (specialty) => ({ value: specialty, label: specialty }),
      ),
    ],
  },
  sort: {
    label: 'Sort by',
    icon: sortIcon,
    options: [
      { value: '', label: 'Most popular' },
      { value: 'followers', label: 'Most followers' },
      { value: 'name', label: 'Name: A to Z' },
    ],
  },
  card: {
    products: 'Products',
    followers: 'Followers',
    action: 'View Profile',
  },
  resultsHeading: 'All creators',
  results: (count) => `${count} ${count === 1 ? 'creator' : 'creators'} found`,
  empty: {
    title: 'No creators found',
    description: 'Try a different search or clear the filters.',
    action: 'Clear filters',
  },
}

export function getCreator(slug) {
  return creators.find((creator) => creator.id === slug) ?? null
}
