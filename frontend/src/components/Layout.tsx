import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <header className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="text-2xl font-bold">
                    <Link to="/">Logo</Link>
                </div>

                <nav className="flex gap-4">
                    <Link to="/" className="hover:text-blue-500">Listar</Link>
                    <Link to="/inserir" className="hover:text-blue-500">Inserir</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
