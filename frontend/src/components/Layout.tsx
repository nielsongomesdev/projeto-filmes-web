import { Link, Outlet } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen max-w-4xl mx-auto p-6 bg-slate-50 relative">
            <header className="bg-white rounded-2xl p-4 mb-6 shadow-sm relative">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" aria-label="Home" className="flex items-center gap-2">
                            <FaFilm className="text-3xl text-primary transition-transform hover:scale-105" />
                            <span className="text-lg font-semibold text-gray-700">Filmes</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                        <nav className="hidden sm:flex gap-2 items-center">
                            <Link to="/" className="text-sm text-gray-700 hover:text-primary px-2">Listar Filmes</Link>
                            <Link to="/inserir" className="text-sm text-gray-700 hover:text-primary px-2">Inserir Filme</Link>
                            <span className="text-gray-300 px-2">|</span>
                            <Link to="/atores" className="text-sm text-gray-700 hover:text-primary px-2">Listar Atores</Link>
                            <Link to="/inserir-ator" className="text-sm text-gray-700 hover:text-primary px-2">Inserir Ator</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
