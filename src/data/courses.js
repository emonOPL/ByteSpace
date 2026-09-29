import avatar2 from '@/assets/images/avatar-2.webp'
import avatar8 from '@/assets/images/avatar-8.webp'
import avatar9 from '@/assets/images/avatar-9.webp'
import avatar10 from '@/assets/images/avatar-10.webp'
import courseBalancingProductivity from '@/assets/images/course-balancing-productivity-and-self-care.webp'
import courseBuildDigitalAsset from '@/assets/images/course-build-digital-asset.webp'
import courseIdeaToStartup from '@/assets/images/course-from-idea-to-startup-success.webp'
import courseLearnFigma from '@/assets/images/course-learn-figma-from-basic.webp'
import courseMoneyManagement from '@/assets/images/course-mastering-money-management.webp'
import coursePowerOfBigData from '@/assets/images/course-the-power-of-big-data.webp'

const courseDefaults = {
  authorPrefix: 'by',
  author: 'purepearl studio',
  meta: ['17 Lessons', '2 hours 16 mins', '59 Comments'],
  level: 'Beginner',
  learners: '26+',
  learnerAvatars: [avatar2, avatar8, avatar9, avatar10].map((src) => ({ src })),
  price: '$25',
  priceValue: 25,
  billing: '/lifetime',
  ratingLabel: 'Rating',
  rating: '4.5',
  ratingValue: 4.5,
}

export const courses = [
  {
    id: 'learn-figma-from-basic',
    category: 'UI/UX Design',
    title: 'Learn Figma from Basic',
    image: courseLearnFigma,
  },
  {
    id: 'build-digital-asset',
    category: 'Graphic Design',
    title: 'Build Digital Asset',
    image: courseBuildDigitalAsset,
  },
  {
    id: 'the-power-of-big-data',
    category: 'Data Science',
    title: 'the Power of Big Data',
    image: coursePowerOfBigData,
    strongRating: true,
  },
  {
    id: 'balancing-productivity-and-self-care',
    category: 'Productivity',
    title: 'Balancing Productivity and Self-Care',
    image: courseBalancingProductivity,
  },
  {
    id: 'mastering-money-management',
    category: 'Freelance & Entrepreneurship',
    title: 'Mastering Money Management',
    image: courseMoneyManagement,
  },
  {
    id: 'from-idea-to-startup-success',
    category: 'Freelance & Entrepreneurship',
    title: 'From Idea to Startup Success',
    image: courseIdeaToStartup,
  },
].map((course) => ({ ...courseDefaults, ...course }))

export const categories = [
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

export const levels = ['Beginner', 'Intermediate', 'Advanced']
