import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Ator {
    id: number;
    nome: string;
}

type FormInputs = {
    titulo: string;
    genero: string;
    faixaEtaria: number;
    atores: string[];
};

export function AlterarFilme() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [listaDeAtores, setListaDeAtores] = useState<Ator[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormInputs>();

    useEffect(() => {
        const buscarAtores = axios.get('http://localhost:3000/api/atores');
        const buscarFilme = axios.get(`http://localhost:3000/api/filmes/${id}`);

        Promise.all([buscarAtores, buscarFilme])
            .then(([responseAtores, responseFilme]) => {
                setListaDeAtores(responseAtores.data);

                const filme = responseFilme.data;
                
                const atorIds = filme.atores.map((ator: Ator) => ator.id.toString());

                reset({
                    titulo: filme.titulo,
                    genero: filme.genero,
                    faixaEtaria: filme.faixaEtaria,
                    atores: atorIds
                });
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                alert('Dados não encontrados.');
                navigate('/');
            });
    }, [id, reset, navigate]);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            const dadosFormatados = {
                titulo: data.titulo,
                genero: data.genero,
                faixaEtaria: Number(data.faixaEtaria),
                atores: {
                    set: data.atores.map(idString => ({ id: Number(idString) }))
                }
            };

            await axios.put(`http://localhost:3000/api/filmes/${id}`, dadosFormatados);
            
            alert('Filme atualizado com sucesso!');
            navigate('/');

        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
            alert('Falha ao atualizar o filme.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Alterar Filme</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow"
            >
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-gray-700 font-bold mb-2">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        className="shadow appearance-none border rounded w-full ..."
                        {...register('titulo', { required: 'O título é obrigatório' })}
                    />
                    {errors.titulo && <p className="text-red-500 text-xs mt-1">{errors.titulo.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="genero" className="block text-gray-700 font-bold mb-2">Gênero</label>
                    <input
                        type="text"
                        id="genero"
                        className="shadow appearance-none border rounded w-full ..."
                        {...register('genero', { required: 'O gênero é obrigatório' })}
                    />
                    {errors.genero && <p className="text-red-500 text-xs mt-1">{errors.genero.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="faixaEtaria" className="block text-gray-700 font-bold mb-2">Faixa Etária</label>
                    <input
                        type="number"
                        id="faixaEtaria"
                        className="shadow appearance-none border rounded w-full ..."
                        {...register('faixaEtaria', {
                            required: 'A faixa etária é obrigatória',
                            min: { value: 0, message: 'Idade não pode ser negativa' }
                        })}
                    />
                    {errors.faixaEtaria && <p className="text-red-500 text-xs mt-1">{errors.faixaEtaria.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Atores</label>
                    <div className="grid grid-cols-2 gap-2 p-4 border rounded max-h-40 overflow-y-auto">
                        {listaDeAtores.map((ator) => (
                            <label key={ator.id} className="flex items-center space-x-2">
                                <input 
                                    type="checkbox"
                                    value={ator.id}
                                    {...register('atores')}
                                />
                                <span>{ator.nome}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ..."
                    >
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}
