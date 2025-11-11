import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export default function ListarAtores() {
  const [atores, setAtores] = useState([])

  const carregar = async () => {
    const res = await api.get('/atores')
    setAtores(res.data)
  }

  useEffect(() => { carregar() }, [])

  const deletar = async (id) => {
    if (confirm('Tem certeza que deseja deletar este ator?')) {
      await api.delete(`/atores/${id}`)
      setAtores(prev => prev.filter(a => a.id !== id))
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="title">Atores</h1>
        <Link className="btn btn-primary" to="/atores/novo">Novo Ator</Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4 w-40">Ações</th>
            </tr>
          </thead>
          <tbody>
            {atores.map(a => (
              <tr key={a.id} className="border-t">
                <td className="py-2 px-4">{a.nome}</td>
                <td className="py-2 px-4 space-x-2">
                  <Link className="btn btn-outline" to={`/atores/${a.id}/editar`}>Editar</Link>
                  <button className="btn btn-danger" onClick={() => deletar(a.id)}>Excluir</button>
                </td>
              </tr>
            ))}
            {atores.length === 0 && (
              <tr><td className="py-3 px-4 text-gray-600" colSpan="2">Nenhum ator encontrado.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
