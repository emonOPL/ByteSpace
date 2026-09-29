import certificateIcon from '@/assets/icons/certificate.svg'
import consultationIcon from '@/assets/icons/consultation.svg'
import levelIcon from '@/assets/icons/level-blue.svg'
import resourcesIcon from '@/assets/icons/resources.svg'
import starIcon from '@/assets/icons/star-rounded-blue.svg'
import studentsIcon from '@/assets/icons/students.svg'
import videoIcon from '@/assets/icons/video.svg'
import avatar1 from '@/assets/images/avatar-1.webp'
import avatar11 from '@/assets/images/avatar-11.webp'
import coursePreview from '@/assets/images/course-preview.webp'
import creatorPurepearl from '@/assets/images/creator-purepearl.webp'
import reviewer1 from '@/assets/images/reviewer-1.webp'
import reviewer2 from '@/assets/images/reviewer-2.webp'
import sneakPeek1 from '@/assets/images/sneak-peek-1.webp'
import sneakPeek2 from '@/assets/images/sneak-peek-2.webp'
import sneakPeek3 from '@/assets/images/sneak-peek-3.webp'
import sneakPeek4 from '@/assets/images/sneak-peek-4.webp'
import { courses } from '@/data/courses'

export const courseDetailsCopy = {
  title: (course) => `${course.title} | ByteSpace`,
  share: { label: 'Share', copied: 'Link copied' },
  preview: 'Course preview',
  tabs: {
    label: 'Course information',
    items: [
      { id: 'about', label: 'About' },
      { id: 'lessons', label: 'Lessons' },
      { id: 'reviews', label: 'Reviews' },
    ],
  },
}

const template = {
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  rating: '4.8 (172 reviews)',
  students: '199 Students',
  sidebar: {
    lessonsTitle: '112 Lessons (24 hours)',
    lessons: [
      {
        number: '01',
        title: 'Introduction to Digital Assets',
        duration: '12 mins',
      },
      {
        number: '02',
        title: 'Design Principles for Impacts',
        duration: '21 mins',
      },
      {
        number: '03',
        title: 'Advanced Techniques in Digital Creation',
        duration: '16 mins',
      },
    ],
    more: '99 more videos',
    note: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
    enroll: { label: 'Enroll Now', to: '/signup' },
    includesTitle: 'This course include',
    includes: [
      { label: 'Learning Resources', icon: resourcesIcon },
      { label: 'Quality Lesson Videos', icon: videoIcon },
      { label: 'Certificate of Completion', icon: certificateIcon },
      { label: 'Private Consultation', icon: consultationIcon },
    ],
    creator: {
      name: 'PurePearl Studio',
      role: 'Professional Creator',
      avatar: creatorPurepearl,
      note: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
      profile: { label: 'See Full Profile', to: '/creators/purepearl-studio' },
    },
  },
  about: {
    descriptionTitle: 'Description',
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeekTitle: 'Sneak Peak',
    sneakPeek: [sneakPeek1, sneakPeek2, sneakPeek3, sneakPeek4],
    keyPointsTitle: 'Key Points',
    keyPoints: [
      'Foundational Concepts',
      'Design Principles Mastery',
      'Advanced Techniques in Digital Creation',
      'Project Showcase and Critique',
      'Optimizing for Various Platforms',
      'Digital Asset Management Best Practices',
      'Monetization Strategies',
      'Capstone Project: Building Your Portfolio',
    ],
  },
  lessons: {
    title: 'Explore the Modules',
    description:
      'Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.',
    listTitle: 'Lesson List',
    modules: [
      {
        title: 'Module 1: Introduction to Digital Assets',
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: 'Module 2: Design Principles for Impact',
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: 'Module 4: User-Centric Design Strategies',
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: 'Module 5: Interactive Media and Engagement',
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: 'Module 6: Project Showcase and Critique',
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: 'Module 7: Optimizing Digital Assets for Various Platforms',
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    contentTitle: 'Lesson Content',
    content:
      'Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.',
    progressTitle: 'Lesson Progress Tracking',
    progressDescription:
      'Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.',
    progress: { label: 'Learning Progress', value: 55, fill: 56 },
  },
  reviews: {
    title: 'What Learners Are Saying',
    description:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    summary: {
      label: 'Ratings',
      value: '4.7',
      breakdown: [
        { stars: 5, count: '720', percent: 92.28 },
        { stars: 4, count: '120', percent: 36.49 },
        { stars: 3, count: '21', percent: 9.48 },
        { stars: 2, count: '12', percent: 3.51 },
        { stars: 1, count: '16', percent: 5.26 },
      ],
    },
    listTitle: 'Individual Reviews:',
    filters: {
      label: 'Filter reviews by rating',
      all: 'All rating',
      stars: (count) => `${count} star${count === 1 ? '' : 's'}`,
    },
    starsLabel: (count) => `Rated ${count} out of 5`,
    empty: 'No reviews with this rating yet.',
    items: [
      {
        name: 'PurePearl Studio',
        role: 'UI/UX Designer',
        avatar: reviewer1,
        date: 'a year ago',
        rating: 5,
        text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        name: 'Albert Flores',
        role: 'UI/UX Designer',
        avatar: reviewer2,
        date: 'a year ago',
        rating: 5,
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: 'Cody Fisher',
        role: 'UI/UX Designer',
        avatar: avatar11,
        date: 'a year ago',
        rating: 5,
        text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
      },
      {
        name: 'Brooklyn Simmons',
        role: 'UI/UX Designer',
        avatar: avatar1,
        date: 'a year ago',
        rating: 5,
        text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
      },
    ],
  },
}

const overrides = {
  'build-digital-asset': {
    title: 'Build Digital Asset: A Comprehensive Guide',
    preview: coursePreview,
  },
}

export function getCourseDetails(slug) {
  const course = courses.find((item) => item.id === slug)
  if (!course) return null
  const override = overrides[slug] ?? {}

  return {
    ...template,
    course,
    title: override.title ?? course.title,
    preview: override.preview ?? course.image,
    meta: [
      { label: course.level, icon: levelIcon },
      { label: template.rating, icon: starIcon },
      { label: template.students, icon: studentsIcon },
    ],
  }
}
