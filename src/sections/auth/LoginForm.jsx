import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import { login } from '@/data/auth'
import { useAuthForm } from '@/hooks/useAuthForm'
import { loginSchema } from '@/lib/validation'

export default function LoginForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(loginSchema)
  const { fields, submit } = login

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        id="login-email"
        type="email"
        autoComplete="email"
        label={fields.email.label}
        placeholder={fields.email.placeholder}
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        id="login-password"
        type="password"
        autoComplete="current-password"
        label={fields.password.label}
        placeholder={fields.password.placeholder}
        error={errors.password?.message}
        {...register('password')}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="self-end disabled:opacity-70"
      >
        {isSubmitting ? submit.pending : submit.label}
      </Button>
    </form>
  )
}
