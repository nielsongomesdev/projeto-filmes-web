import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import FormFilme from '../../components/FormFilme'

export default function EditarFilme() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [filme, setFilme] = useState(null)
  const [atores, setAtores] = useState([])

  useEffect(() => {
    api.get(`/filmes/${id}`).then(res => setFilme(res.data))
    api.get('/atores').then(res => setAtores(res.data))
  }, [id])

  const onSubmit = async (data) => {
    await api.put(`/filmes/${id}`, data)
    navigate('/filmes')
  }

  if (!filme) return <div className="p-6">Carregando...</div>

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="title">Editar Filme</h1>
      <FormFilme onSubmit={onSubmit} defaultValues={filme} atores={atores} />
    </div>
  )
}
