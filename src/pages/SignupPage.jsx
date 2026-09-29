import AuthLayout from '@/components/layout/AuthLayout'
import { authShowcase, signup } from '@/data/auth'
import AuthFooter from '@/sections/auth/AuthFooter'
import AuthHeading from '@/sections/auth/AuthHeading'
import AuthShowcase from '@/sections/auth/AuthShowcase'
import SignupForm from '@/sections/auth/SignupForm'

export default function SignupPage() {
  return (
    <AuthLayout
      intro={signup.intro}
      aside={
        <AuthShowcase
          {...authShowcase}
          reviewsClassName="text-shuttle-gray-800"
        />
      }
      cardClassName="xl:pb-12.75"
    >
      <title>{signup.title}</title>
      <div className="flex flex-col gap-10">
        <AuthHeading eyebrow={signup.eyebrow} title={signup.heading} />
        <SignupForm />
      </div>
      <AuthFooter {...signup.footer} className="text-shuttle-gray-700" />
    </AuthLayout>
  )
}
