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
    avatars: [],
    count: '2K+',
  },
}

export const partners = {
  label: 'Our partners',
  logos: [],
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

const courseDefaults = {
  author: 'purepearl studio',
  meta: ['17 Lessons', '2 hours 16 mins', '59 Comments'],
  level: 'Beginner',
  learners: '26+',
  learnerAvatars: [],
  price: '$25',
  billing: '/lifetime',
  rating: '4.5',
}

export const courses = [
  { id: 'learn-figma-from-basic', title: 'Learn Figma from Basic' },
  { id: 'build-digital-asset', title: 'Build Digital Asset' },
  {
    id: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    strongRating: true,
  },
  {
    id: 'balancing-productivity-and-self-care',
    title: 'Balancing Productivity and Self-Care',
  },
  { id: 'mastering-money-management', title: 'Mastering Money Management' },
  { id: 'from-idea-to-startup-success', title: 'From Idea to Startup Success' },
].map((course) => ({ ...courseDefaults, ...course }))

export const categoriesIntro = {
  title: 'Explore Diverse Learning Paths at Bytespace',
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
}

export const categories = [
  'Design',
  'Development',
  'IT & Software',
  'Business',
  'Marketing',
  'Photography',
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
  course: courses[0],
  progress: hero.progress,
}

export const creator = {
  title: 'Create & Manage Courses Easily.',
  brand: 'ByteSpace',
  description:
    'supports individuals or entities in the creation, publication, and administration of educational courses.',
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
    compactName: true,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]
