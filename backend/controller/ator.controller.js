import atorService from '../service/ator.service.js';

const findAll = async (request, response) => {
    try {
        const atores = await atorService.findAll();
        response.json(atores);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno ao buscar atores' });
    }
};

const create = async (request, response) => {
    try {
        const dadosDoAtor = request.body;
        const atorCriado = await atorService.create(dadosDoAtor);
        response.status(201).json(atorCriado);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno ao criar ator' });
    }
};

export default { findAll, create }
