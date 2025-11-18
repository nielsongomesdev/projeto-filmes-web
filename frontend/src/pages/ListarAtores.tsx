import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '../components/Modal';
import { FaTrash } from 'react-icons/fa';

interface Ator {
    id: number;
    nome: string;
}

export function ListarAtores() {
    const [atores, setAtores] = useState<Ator[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [atorParaDeletar, setAtorParaDeletar] = useState<Ator | null>(null);

    useEffect(() => {
        axios.get('https://api-filmes-n5af.onrender.com/api/atores')
            .then(response => {
                setAtores(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar atores:", error);
            });
    }, []);

    const confirmarDelete = async () => {
        if (!atorParaDeletar) return;

        try {
            await axios.delete(`https://api-filmes-n5af.onrender.com/api/atores/${atorParaDeletar.id}`);
            setAtores(atores.filter(ator => ator.id !== atorParaDeletar.id));
            alert('Ator removido com sucesso!');
        } catch (error) {
            console.error('Erro ao remover ator:', error);
            alert('Falha ao remover o ator. (Ele pode estar sendo usado por um filme)');
        } finally {
            setIsModalOpen(false);
            setAtorParaDeletar(null);
        }
    };

    const handleAbrirModal = (ator: Ator) => {
        setAtorParaDeletar(ator);
        setIsModalOpen(true);
    };

    const handleFecharModal = () => {
        setIsModalOpen(false);
        setAtorParaDeletar(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Lista de Atores</h1>

            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white table-auto responsive-table">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-6 text-center uppercase font-semibold text-sm w-16">ID</th>
                            <th className="py-3 px-6 text-left uppercase font-semibold text-sm">Nome</th>
                            <th className="py-3 px-6 text-center uppercase font-semibold text-sm w-24">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {atores.map((ator) => (
                            <tr key={ator.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-4 px-6 whitespace-nowrap text-center align-middle" data-label="ID">{ator.id}</td>
                                <td className="py-4 px-6 break-words max-w-xs align-middle" data-label="Nome">{ator.nome}</td>
                                <td className="py-4 px-6 text-center align-middle" data-label="Ações">
                                    <button
                                        onClick={() => handleAbrirModal(ator)}
                                        aria-label={`Remover ${ator.nome}`}
                                        className="btn-icon inline-flex items-center justify-center"
                                    >
                                        <FaTrash size={18} className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleFecharModal}
                onConfirm={confirmarDelete}
                title="Confirmar Exclusão"
            >
                <p>Tem certeza que deseja remover o ator?</p>
                <p className="font-bold mt-2">{atorParaDeletar?.nome}</p>
            </Modal>

        </div>
    );
}
