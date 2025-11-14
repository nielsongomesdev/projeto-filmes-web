import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    nome: string;
};

export function CadastrarAtor() {
    const navigate = useNavigate();

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            await axios.post('http://localhost:3000/api/atores', data);
            
            alert('Ator cadastrado com sucesso!');
            
            navigate('/'); 

        } catch (error) {
            console.error('Erro ao cadastrar ator:', error);
            alert('Falha ao cadastrar o ator.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Cadastrar Novo Ator</h1>

            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow"
            >
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome do Ator</label>
                    <input 
                        type="text" 
                        id="nome"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:shadow-outline"
                        {...register('nome', { 
                            required: 'O nome é obrigatório',
                            minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres' }
                        })}
                    />
                    {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                </div>

                <div className="text-right">
                    <button 
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cadastrar Ator
                    </button>
                </div>
            </form>
        </div>
    );
}
