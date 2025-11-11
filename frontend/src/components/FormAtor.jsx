import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  nome: z.string().min(2, 'O nome é obrigatório'),
})

export default function FormAtor({ onSubmit, defaultValues }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || { nome: '' }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block font-semibold mb-1">Nome</label>
        <input {...register('nome')} className="w-full border rounded-lg p-2 focus:outline-none focus:ring" />
        {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>}
      </div>
      <button className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  )
}
