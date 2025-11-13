// frontend/src/pages/ListarFilmes.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// --- 1. DEFINA A "FORMA" DO ATOR ---
// Precisamos ensinar ao TypeScript como é um Ator
interface Ator {
  id: number;
  nome: string;
}

// --- 2. ATUALIZE A "FORMA" DO FILME ---
interface Filme {
  id: number;
  titulo: string;
  genero: string;
  faixaEtaria: number;
  atores: Ator[]; // O filme agora tem uma LISTA de Atores
}

export function ListarFilmes() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  
  // O useEffect e o handleDelete continuam iguais...
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
  // ...até aqui

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Filmes</h1>

      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Título</th>
              <th className="py-3 px-6 text-left">Gênero</th>
              {/* --- 3. ADICIONE A COLUNA DE ATORES --- */}
              <th className="py-3 px-6 text-left">Atores</th>
              <th className="py-3 px-6 text-left">Faixa Etária</th>
              <th className="py-3 px-6 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filmes.map((filme) => (
              <tr key={filme.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-6">{filme.titulo}</td>
                <td className="py-4 px-6">{filme.genero}</td>
                
                {/* --- 4. ADICIONE A CÉLULA DE ATORES --- */}
                <td className="py-4 px-6">
                  {/* Pega a lista de atores, extrai só o nome,
                      e junta todos com uma vírgula (ex: "Tom Hanks, Chris Pratt") */}
                  {filme.atores.map(ator => ator.nome).join(', ')}
                </td>
                
                <td className="py-4 px-6">{filme.faixaEtaria}</td>
                <td className="py-4 px-6 flex gap-4"> 
                  <Link 
                    to={`/alterar/${filme.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Alterar
                  </Link>
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