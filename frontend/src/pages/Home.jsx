import { useEffect, useState } from 'react'
import { api } from '../services/api'
import Card from '../components/Card'

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    api.get('/filmes').then(res => setFilmes(res.data)).catch(() => setFilmes([]))
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="title">🎬 Catálogo de Filmes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filmes.map(f => (
          <Card key={f.id} title={f.titulo} footer={<span className="text-xs text-gray-500">{f.genero} • {f.ano}</span>}>
            {f.sinopse || 'Sem sinopse'}
          </Card>
        ))}
        {filmes.length === 0 && <p className="text-gray-600">Nenhum filme encontrado.</p>}
      </div>
    </div>
  )
}
