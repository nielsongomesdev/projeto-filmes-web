import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export default function ListarFilmes() {
  const [filmes, setFilmes] = useState([])

  const carregar = async () => {
    const res = await api.get('/filmes')
    setFilmes(res.data)
  }

  useEffect(() => { carregar() }, [])

  const deletar = async (id) => {
    if (confirm('Tem certeza que deseja deletar este filme?')) {
      await api.delete(`/filmes/${id}`)
      setFilmes(prev => prev.filter(f => f.id !== id))
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="title">Filmes</h1>
        <Link className="btn btn-primary" to="/filmes/novo">Novo Filme</Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-2 px-4">Título</th>
              <th className="py-2 px-4">Gênero</th>
              <th className="py-2 px-4">Ano</th>
              <th className="py-2 px-4 w-40">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map(f => (
              <tr key={f.id} className="border-t">
                <td className="py-2 px-4">{f.titulo}</td>
                <td className="py-2 px-4">{f.genero}</td>
                <td className="py-2 px-4">{f.ano}</td>
                <td className="py-2 px-4 space-x-2">
                  <Link className="btn btn-outline" to={`/filmes/${f.id}/editar`}>Editar</Link>
                  <button className="btn btn-danger" onClick={() => deletar(f.id)}>Excluir</button>
                </td>
              </tr>
            ))}
            {filmes.length === 0 && (
              <tr><td className="py-3 px-4 text-gray-600" colSpan="4">Nenhum filme encontrado.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
