import React, { useState, useEffect } from 'react';
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
        axios.get('http://localhost:3000/api/atores')
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
            await axios.delete(`http://localhost:3000/api/atores/${atorParaDeletar.id}`);
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
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nome</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {atores.map((ator) => (
                            <tr key={ator.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-4 px-6">{ator.id}</td>
                                <td className="py-4 px-6">{ator.nome}</td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => handleAbrirModal(ator)}
                                        aria-label={`Remover ${ator.nome}`}
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
                <p>Tem certeza que deseja remover o ator?</p>
                <p className="font-bold mt-2">{atorParaDeletar?.nome}</p>
            </Modal>

        </div>
    );
}
