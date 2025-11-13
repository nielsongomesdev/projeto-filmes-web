import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Filme {
    id: number;
    titulo: string;
    genero: string;
    faixaEtaria: number;
}

export function ListarFilmes() {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/filmes')
            .then(response => {
                setFilmes(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar filmes:", error);
            });
    }, []);

    const handleDelete = async (idDoFilme: number) => {
        try {
            await axios.delete(`http://localhost:3000/api/filmes/${idDoFilme}`);
            setFilmes(filmes.filter(filme => filme.id !== idDoFilme));
            alert('Filme removido com sucesso!');
        } catch (error) {
            console.error('Erro ao remover filme:', error);
            alert('Falha ao remover o filme.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Catálogo de Filmes</h1>

            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                    </thead>
                    <tbody className="text-gray-700">
                        {filmes.map((filme) => (
                            <tr key={filme.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-4 px-6">{filme.titulo}</td>
                                <td className="py-4 px-6">{filme.genero}</td>
                                <td className="py-4 px-6">{filme.faixaEtaria}</td>
                                <td className="py-4 px-6">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(filme.id)}
                                    >
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
