import { Link, Outlet } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';

export function Layout() {
    return (
        <div className="min-h-screen max-w-4xl mx-auto p-6 bg-slate-50">
            <header className="flex justify-between items-center bg-white rounded-2xl p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-3">
                    <Link to="/" aria-label="Home" className="flex items-center gap-2">
                        <FaFilm className="text-3xl text-primary transition-transform hover:scale-105" />
                        <span className="text-lg font-semibold text-gray-700">Filmes</span>
                    </Link>
                </div>

                <nav className="flex gap-2 items-center">
                    <Link to="/" className="nav-link">Listar Filmes</Link>
                    <Link to="/inserir" className="nav-link">Inserir Filme</Link>
                    <span className="text-gray-300 px-2">|</span>
                    <Link to="/atores" className="nav-link">Listar Atores</Link>
                    <Link to="/inserir-ator" className="nav-link">Inserir Ator</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
