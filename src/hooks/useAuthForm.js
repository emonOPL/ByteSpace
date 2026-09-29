import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export function useAuthForm(schema, redirectTo = '/') {
  const navigate = useNavigate()
  const form = useForm({ resolver: zodResolver(schema) })

  const onSubmit = form.handleSubmit(async () => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    navigate(redirectTo)
  })

  return { ...form, onSubmit }
}
