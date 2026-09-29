import AuthLayout from '@/components/layout/AuthLayout'
import { authShowcase, login, socialProviders } from '@/data/auth'
import { loginSchema } from '@/lib/validation'
import AuthFooter from '@/sections/auth/AuthFooter'
import AuthForm from '@/sections/auth/AuthForm'
import AuthHeading from '@/sections/auth/AuthHeading'
import AuthShowcase from '@/sections/auth/AuthShowcase'
import SocialLogin from '@/sections/auth/SocialLogin'

export default function LoginPage() {
  return (
    <AuthLayout intro={login.intro} aside={<AuthShowcase {...authShowcase} />}>
      <title>{login.title}</title>
      <div className="flex flex-col gap-10">
        <AuthHeading eyebrow={login.eyebrow} title={login.heading} />
        <AuthForm
          id="login"
          schema={loginSchema}
          fields={login.fields}
          submit={login.submit}
        />
      </div>
      <SocialLogin divider={login.divider} providers={socialProviders} />
      <AuthFooter {...login.footer} className="text-black-400" />
    </AuthLayout>
  )
}
