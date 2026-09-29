import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import { signup } from '@/data/auth'
import { useAuthForm } from '@/hooks/useAuthForm'
import { signupSchema } from '@/lib/validation'

export default function SignupForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(signupSchema)
  const { fields, submit } = signup

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        id="signup-name"
        autoComplete="name"
        label={fields.name.label}
        placeholder={fields.name.placeholder}
        error={errors.name?.message}
        {...register('name')}
      />
      <TextField
        id="signup-email"
        type="email"
        autoComplete="email"
        label={fields.email.label}
        placeholder={fields.email.placeholder}
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        id="signup-password"
        type="password"
        autoComplete="new-password"
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
