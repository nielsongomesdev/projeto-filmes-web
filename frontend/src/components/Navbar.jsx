import { NavLink } from 'react-router-dom'

const linkBase = 'px-3 py-2 rounded-lg hover:bg-gray-100'
const active = ({ isActive }) => (isActive ? 'bg-gray-200 ' + linkBase : linkBase)

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="font-bold text-lg">🎬 Filmes&Atores</div>
        <div className="flex gap-2">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/filmes" className={active}>Filmes</NavLink>
          <NavLink to="/atores" className={active}>Atores</NavLink>
        </div>
      </div>
    </nav>
  )
}
