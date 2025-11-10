import atorService from '../service/ator.service.js';

const encaminharErro = (error, response, next, tipo) => {
    console.error(`Erro no ${tipo}:`, error.message);
    next(error);
};

const findAll = async (request, response, next) => {
    try {
        const atores = await atorService.findAll();
        response.json(atores);
    } catch (error) {
        encaminharErro(error, response, next, 'ator.findAll');
    }
};

const create = async (request, response, next) => {
    try {
        const dadosDoAtor = request.body;
        const atorCriado = await atorService.create(dadosDoAtor);
        response.status(201).json(atorCriado);
    } catch (error) {
        encaminharErro(error, response, next, 'ator.create');
    }
};

const findById = async (request, response, next) => {
    try {
        response.json(request.ator);
    } catch (error) {
        encaminharErro(error, response, next, 'ator.findById');
    }
};

const update = async (request, response, next) => {
    try {
        const id = Number(request.params.id);
        const dadosDoAtor = request.body;
        const atorAtualizado = await atorService.update(id, dadosDoAtor);
        response.json(atorAtualizado);
    } catch (error) {
        encaminharErro(error, response, next, 'ator.update');
    }
};

const remove = async (request, response, next) => {
    try {
        const id = Number(request.params.id);
        await atorService.remove(id);
        response.status(204).send();
    } catch (error) {
        encaminharErro(error, response, next, 'ator.remove');
    }
};

export default { findAll, create, findById, update, remove };
