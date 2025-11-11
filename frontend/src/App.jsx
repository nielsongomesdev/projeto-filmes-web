import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import ListarAtores from './pages/Atores/ListarAtores'
import NovoAtor from './pages/Atores/NovoAtor'
import EditarAtor from './pages/Atores/EditarAtor'

import ListarFilmes from './pages/Filmes/ListarFilmes'
import NovoFilme from './pages/Filmes/NovoFilme'
import EditarFilme from './pages/Filmes/EditarFilme'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/atores" element={<ListarAtores />} />
          <Route path="/atores/novo" element={<NovoAtor />} />
          <Route path="/atores/:id/editar" element={<EditarAtor />} />

          <Route path="/filmes" element={<ListarFilmes />} />
          <Route path="/filmes/novo" element={<NovoFilme />} />
          <Route path="/filmes/:id/editar" element={<EditarFilme />} />
        </Routes>
      </main>
      <footer className="text-center text-xs text-gray-500 py-6">
        Projeto Filmes — Fullstack (React + Express)
      </footer>
    </div>
  )
}
