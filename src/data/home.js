import categoryBusiness from '@/assets/icons/category-business.svg'
import categoryDesign from '@/assets/icons/category-design.svg'
import categoryDevelopment from '@/assets/icons/category-development.svg'
import categoryItSoftware from '@/assets/icons/category-it-software.svg'
import categoryMarketing from '@/assets/icons/category-marketing.svg'
import categoryPhotography from '@/assets/icons/category-photography.svg'
import partner1 from '@/assets/icons/partner-1.svg'
import partner2 from '@/assets/icons/partner-2.svg'
import partner3 from '@/assets/icons/partner-3.svg'
import partner4 from '@/assets/icons/partner-4.svg'
import partner5 from '@/assets/icons/partner-5.svg'
import avatar1 from '@/assets/images/avatar-1.webp'
import avatar2 from '@/assets/images/avatar-2.webp'
import avatar3 from '@/assets/images/avatar-3.webp'
import avatar4 from '@/assets/images/avatar-4.webp'
import avatar5 from '@/assets/images/avatar-5.webp'
import avatar6 from '@/assets/images/avatar-6.webp'
import avatar7 from '@/assets/images/avatar-7.webp'
import avatar9 from '@/assets/images/avatar-9.webp'
import avatar11 from '@/assets/images/avatar-11.webp'
import avatar12 from '@/assets/images/avatar-12.webp'
import { courses } from '@/data/courses'
import creatorStudent from '@/assets/images/creator-student.webp'
import heroStudent from '@/assets/images/hero-student.webp'

export const hero = {
  title: 'Get Access to Hundreds Courses Available',
  description:
    'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
  search: {
    label: 'Search courses',
    placeholder: 'Course, topic, creator',
    button: 'Search',
    action: '/courses',
  },
  image: heroStudent,
  highlight: {
    title: 'UI/UX Design',
    meta: ['200 Courses', '1000+ Students'],
  },
  progress: {
    label: 'Learning Progress',
    value: 55,
    fill: 56,
  },
  students: {
    title: 'Happy Students',
    rating: '4.5',
    reviews: '(240)',
    avatars: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
    ].map((src) => ({ src })),
    count: '2K+',
  },
}

export const partners = {
  label: 'Our partners',
  logos: [partner1, partner2, partner3, partner4, partner5].map((src) => ({
    name: 'Logoipsum',
    src,
  })),
}

export const coursesIntro = {
  title: 'Discover Your Passion, Build Your Skills',
  description:
    'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.',
}

export const courseTabs = {
  label: 'Course categories',
  rows: [
    [
      'Featured',
      'Music',
      'Drawing & Painting',
      'Marketing',
      'Animation',
      'Social Media',
      'UI/UX Design',
      'Creative Marketing',
    ],
    [
      'Digital Illustration',
      'Film & Video',
      'Crafts',
      'Freelance & Entrepreneurship',
      'Graphic Design',
      'Photography',
    ],
    ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
  ],
  more: { label: '+ More', to: '/courses' },
}

export const categoriesIntro = {
  title: 'Explore Diverse Learning Paths at Bytespace',
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
}

export const categories = [
  { label: 'Design', icon: categoryDesign },
  { label: 'Development', icon: categoryDevelopment },
  { label: 'IT & Software', icon: categoryItSoftware },
  { label: 'Business', icon: categoryBusiness },
  { label: 'Marketing', icon: categoryMarketing },
  { label: 'Photography', icon: categoryPhotography },
]

export const growth = {
  title: 'Your Path to Professional Growth Starts Here!',
  description:
    'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.',
  stats: [
    { value: '12K', label: 'Students' },
    { value: '70+', label: 'Courses' },
    { value: '16', label: 'Creators' },
  ],
  image: heroStudent,
  course: courses[0],
  progress: hero.progress,
}

export const creator = {
  title: 'Create & Manage Courses Easily.',
  brand: 'ByteSpace',
  description:
    'supports individuals or entities in the creation, publication, and administration of educational courses.',
  image: creatorStudent,
  features: [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ],
  revenue: {
    title: 'Total Revenue',
    period: 'July 1-28',
    amount: '$120.29',
    change: '+12$',
    progress: 56,
  },
  yearToDate: {
    title: 'Year to Date',
    period: '2023',
    amount: '$1,200.38',
    change: '+12$',
  },
  students: hero.students,
}

export const cta = {
  title: 'Unlock Your Potential as a Creator with ByteSpace',
  description:
    'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.',
  button: { label: 'Join as Creator', to: '/signup' },
}

export const testimonialsIntro = {
  title: 'Discover What Our Community Is Saying',
  description:
    'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.',
}

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: avatar9,
    compactName: true,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: avatar11,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: avatar12,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]
