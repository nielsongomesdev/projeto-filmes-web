import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import FormFilme from '../../components/FormFilme'

export default function NovoFilme() {
  const navigate = useNavigate()
  const [atores, setAtores] = useState([])

  useEffect(() => { api.get('/atores').then(res => setAtores(res.data)).catch(() => setAtores([])) }, [])

  const onSubmit = async (data) => {
    await api.post('/filmes', data)
    navigate('/filmes')
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="title">Novo Filme</h1>
      <FormFilme onSubmit={onSubmit} atores={atores} />
    </div>
  )
}
