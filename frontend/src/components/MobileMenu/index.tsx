import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
}

export function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        className="sm:hidden btn-icon text-gray-600 focus:ring-2 focus:ring-primary"
      >
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {menuOpen && (
        <div className="sm:hidden absolute top-full right-0 mt-2 bg-white rounded-md p-3 shadow-md w-44 z-40">
          <nav className="flex flex-col gap-1">
            <Link to="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-slate-50">Listar Filmes</Link>
            <Link to="/inserir" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-slate-50">Inserir Filme</Link>
            <Link to="/atores" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-slate-50">Listar Atores</Link>
            <Link to="/inserir-ator" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded text-gray-700 hover:bg-slate-50">Inserir Ator</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
