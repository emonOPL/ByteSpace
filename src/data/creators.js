import creatorPurepearl from '@/assets/images/creator-purepearl.webp'
import { courses } from '@/data/courses'

export const creatorCopy = {
  title: (creator) => `${creator.name} | ByteSpace`,
  badge: 'Creator',
  stats: { products: 'Products', followers: 'Followers' },
  follow: { idle: 'Follow', active: 'Following' },
  coursesHeading: (creator) => `Courses by ${creator.name}`,
  pagination: { perPage: 18, featuredPages: 0 },
}

export const creators = [
  {
    id: 'purepearl-studio',
    name: 'PurePearl Studio',
    author: 'purepearl studio',
    headline: 'Passionate UI/UX, Web designer',
    avatar: creatorPurepearl,
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      'Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
    ],
    followers: 12,
  },
]

export function getCreator(slug) {
  const creator = creators.find((item) => item.id === slug)
  if (!creator) return null
  return {
    ...creator,
    courses: courses.filter((course) => course.author === creator.author),
  }
}
