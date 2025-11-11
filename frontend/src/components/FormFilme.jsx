import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  titulo: z.string().min(2, 'O título é obrigatório'),
  genero: z.string().min(2, 'O gênero é obrigatório'),
  faixaEtaria: z.coerce.number().int().min(10, 'A faixa etária é obrigatória')
  // ,
  // ano: z
  //   .union([z.coerce.number().int().min(1888, 'Ano inválido'), z.literal('').transform(() => undefined)])
  //   .optional(),
  // atorId: z.string().optional()
})

export default function FormFilme({ onSubmit, defaultValues, atores = [] }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {
      titulo: '', genero: '', faixaEtaria: ''
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block font-semibold mb-1">Título</label>
        <input {...register('titulo')} className="w-full border rounded-lg p-2 focus:outline-none focus:ring" />
        {errors.titulo && <p className="text-red-600 text-sm mt-1">{errors.titulo.message}</p>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Gênero</label>
        <input {...register('genero')} className="w-full border rounded-lg p-2 focus:outline-none focus:ring" />
        {errors.genero && <p className="text-red-600 text-sm mt-1">{errors.genero.message}</p>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Faixa etária</label>
        <select {...register('faixaEtaria')} className="w-full border rounded-lg p-2">
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>
        {errors.faixaEtaria && <p className="text-red-600 text-sm mt-1">{errors.faixaEtaria.message}</p>}
      </div>
      {/* <div>
        <label className="block font-semibold mb-1">Ano (opcional)</label>
        <input type="number" placeholder="ex.: 1999" {...register('ano')} className="w-full border rounded-lg p-2 focus:outline-none focus:ring" />
        {errors.ano && <p className="text-red-600 text-sm mt-1">{errors.ano.message}</p>}
      </div>
      <div>
        <label className="block font-semibold mb-1">Ator principal (opcional)</label>
        <select {...register('atorId')} className="w-full border rounded-lg p-2">
          <option value="">Selecione</option>
          {atores.map((a) => <option key={a.id} value={a.id}>{a.nome}</option>)}
        </select>
      </div> */}
      <button className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  )
}
