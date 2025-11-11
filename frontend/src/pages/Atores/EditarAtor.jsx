import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import FormAtor from '../../components/FormAtor'

export default function EditarAtor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ator, setAtor] = useState(null)

  useEffect(() => {
    api.get(`/atores/${id}`).then(res => setAtor(res.data))
  }, [id])

  const onSubmit = async (data) => {
    await api.put(`/atores/${id}`, data)
    navigate('/atores')
  }

  if (!ator) return <div className="p-6">Carregando...</div>

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="title">Editar Ator</h1>
      <FormAtor onSubmit={onSubmit} defaultValues={ator} />
    </div>
  )
}
