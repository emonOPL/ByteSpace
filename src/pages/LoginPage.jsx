import AuthLayout from '@/components/layout/AuthLayout'
import { authShowcase, login, socialProviders } from '@/data/auth'
import AuthFooter from '@/sections/auth/AuthFooter'
import AuthHeading from '@/sections/auth/AuthHeading'
import AuthShowcase from '@/sections/auth/AuthShowcase'
import LoginForm from '@/sections/auth/LoginForm'
import SocialLogin from '@/sections/auth/SocialLogin'

export default function LoginPage() {
  return (
    <AuthLayout intro={login.intro} aside={<AuthShowcase {...authShowcase} />}>
      <title>{login.title}</title>
      <div className="flex flex-col gap-10">
        <AuthHeading eyebrow={login.eyebrow} title={login.heading} />
        <LoginForm />
      </div>
      <SocialLogin divider={login.divider} providers={socialProviders} />
      <AuthFooter {...login.footer} className="text-black-400" />
    </AuthLayout>
  )
}
