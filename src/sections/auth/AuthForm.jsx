import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import { useAuthForm } from '@/hooks/useAuthForm'

export default function AuthForm({ id, schema, fields, submit }) {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useAuthForm(schema)

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      {fields.map(({ name, ...field }) => (
        <TextField
          key={name}
          id={`${id}-${name}`}
          error={errors[name]?.message}
          {...field}
          {...register(name)}
        />
      ))}
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
