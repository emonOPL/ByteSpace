import facebook from '@/assets/icons/facebook.svg'
import google from '@/assets/icons/google.svg'
import { courses, hero } from '@/data/home'

export const authShowcase = {
  courses: [courses[1], courses[2]],
  students: hero.students,
}

export const socialProviders = [
  { name: 'Facebook', label: 'Continue with Facebook', icon: facebook },
  { name: 'Google', label: 'Continue with Google', icon: google },
]

export const login = {
  title: 'Sign In | ByteSpace',
  intro: {
    title: 'Sign in with ease',
    description:
      'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.',
  },
  eyebrow: 'Sign In',
  heading: 'Welcome Back',
  fields: {
    email: { label: 'Email', placeholder: 'designer@example.com' },
    password: { label: 'Password', placeholder: '********' },
  },
  submit: { label: 'Sign In', pending: 'Signing In...' },
  divider: 'or',
  footer: {
    text: 'New user?',
    link: { label: 'Create an account', to: '/signup' },
  },
}

export const signup = {
  title: 'Create an Account | ByteSpace',
  intro: {
    title: 'Sign up and come in',
    description:
      'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost',
  },
  eyebrow: 'Create an Account',
  heading: 'Welcome to ByteSpace',
  fields: {
    name: { label: 'Full Name', placeholder: 'Jamie Davis' },
    email: { label: 'Email', placeholder: 'designer@example.com' },
    password: { label: 'Password', placeholder: '********' },
  },
  submit: { label: 'Continue', pending: 'Creating Account...' },
  footer: {
    text: 'Already have an account?',
    link: { label: 'Login', to: '/login' },
  },
}
