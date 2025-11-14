import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal } from '../components/Modal';

interface Ator {
  id: number;
  nome: string;
}

interface Filme {
  id: number;
  titulo: string;
  genero: string;
  faixaEtaria: number;
  atores: Ator[];
}

export function ListarFilmes() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filmeParaDeletar, setFilmeParaDeletar] = useState<Filme | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/filmes')
      .then(response => {
        setFilmes(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar filmes:", error);
      });
  }, []);

  const confirmarDelete = async () => {
    if (!filmeParaDeletar) return;

    try {
      await axios.delete(`http://localhost:3000/api/filmes/${filmeParaDeletar.id}`);
      setFilmes(filmes.filter(filme => filme.id !== filmeParaDeletar.id));
      alert('Filme removido com sucesso!');
    } catch (error) {
      console.error('Erro ao remover filme:', error);
      alert('Falha ao remover o filme.');
    } finally {
      setIsModalOpen(false);
      setFilmeParaDeletar(null);
    }
  };

  const handleAbrirModal = (filme: Filme) => {
    setFilmeParaDeletar(filme);
    setIsModalOpen(true);
  };

  const handleFecharModal = () => {
    setIsModalOpen(false);
    setFilmeParaDeletar(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Filmes</h1>

      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Título</th>
              <th className="py-3 px-6 text-left">Gênero</th>
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
                <td className="py-4 px-6">
                  {filme.atores.map(ator => ator.nome).join(', ')}
                </td>
                <td className="py-4 px-6">{filme.faixaEtaria}</td>
                <td className="py-4 px-6 flex gap-4 items-center"> 
                  <Link 
                    to={`/alterar/${filme.id}`}
                    aria-label={`Alterar ${filme.titulo}`}
                  >
                    <FaEdit size={20} className="text-blue-500 hover:text-blue-700" />
                  </Link>
                  <button 
                    className=""
                    onClick={() => handleAbrirModal(filme)}
                    aria-label={`Remover ${filme.titulo}`}
                  >
                    <FaTrash size={20} className="text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleFecharModal}
        onConfirm={confirmarDelete}
        title="Confirmar Exclusão"
      >
        <p>Tem certeza que deseja remover o filme?</p>
        <p className="font-bold mt-2">{filmeParaDeletar?.titulo}</p>
      </Modal>

    </div>
  );
}
