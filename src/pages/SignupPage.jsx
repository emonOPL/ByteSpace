import AuthLayout from '@/components/layout/AuthLayout'
import PageMeta from '@/components/layout/PageMeta'
import { authShowcase, signup } from '@/data/auth'
import { signupSchema } from '@/lib/validation'
import AuthFooter from '@/sections/auth/AuthFooter'
import AuthForm from '@/sections/auth/AuthForm'
import AuthHeading from '@/sections/auth/AuthHeading'
import AuthShowcase from '@/sections/auth/AuthShowcase'

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
      <PageMeta title={signup.title} description={signup.description} />
      <div className="flex flex-col gap-10">
        <AuthHeading eyebrow={signup.eyebrow} title={signup.heading} />
        <AuthForm
          id="signup"
          schema={signupSchema}
          fields={signup.fields}
          submit={signup.submit}
        />
      </div>
      <AuthFooter {...signup.footer} className="text-shuttle-gray-700" />
    </AuthLayout>
  )
}
