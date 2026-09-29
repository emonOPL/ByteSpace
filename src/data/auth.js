import facebook from '@/assets/icons/facebook.svg'
import google from '@/assets/icons/google.svg'
import { courses } from '@/data/courses'
import { hero } from '@/data/home'

export const authShowcase = {
  courses: [courses[1], courses[2]],
  students: hero.students,
}

const emailField = {
  name: 'email',
  type: 'email',
  autoComplete: 'email',
  label: 'Email',
  placeholder: 'designer@example.com',
}

const passwordField = {
  name: 'password',
  type: 'password',
  label: 'Password',
  placeholder: '********',
}

export const socialProviders = [
  { name: 'Facebook', label: 'Continue with Facebook', icon: facebook },
  { name: 'Google', label: 'Continue with Google', icon: google },
]

export const login = {
  title: 'Sign In | ByteSpace',
  description:
    'Sign in to your ByteSpace account to continue learning and managing your courses.',
  intro: {
    title: 'Sign in with ease',
    description:
      'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.',
  },
  eyebrow: 'Sign In',
  heading: 'Welcome Back',
  fields: [emailField, { ...passwordField, autoComplete: 'current-password' }],
  submit: { label: 'Sign In', pending: 'Signing In...' },
  divider: 'or',
  footer: {
    text: 'New user?',
    link: { label: 'Create an account', to: '/signup' },
  },
}

export const signup = {
  title: 'Create an Account | ByteSpace',
  description:
    'Create a free ByteSpace account to join courses from creators around the world.',
  intro: {
    title: 'Sign up and come in',
    description:
      'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost',
  },
  eyebrow: 'Create an Account',
  heading: 'Welcome to ByteSpace',
  fields: [
    {
      name: 'name',
      autoComplete: 'name',
      label: 'Full Name',
      placeholder: 'Jamie Davis',
    },
    emailField,
    { ...passwordField, autoComplete: 'new-password' },
  ],
  submit: { label: 'Continue', pending: 'Creating Account...' },
  footer: {
    text: 'Already have an account?',
    link: { label: 'Login', to: '/login' },
  },
}
