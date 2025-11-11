import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import FormAtor from '../../components/FormAtor'

export default function NovoAtor() {
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await api.post('/atores', data)
    navigate('/atores')
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="title">Novo Ator</h1>
      <FormAtor onSubmit={onSubmit} />
    </div>
  )
}
