import filmeService from '../service/filme.service.js';

const encaminharErro = (error, response, next, tipo) => {
    console.error(`Erro no ${tipo}:`, error.message);
    next(error);
};

const findAll = async (request, response, next) => {
    try {
        const filmes = await filmeService.findAll();
        response.json(filmes);
    } catch (error) {
        encaminharErro(error, response, next, 'findAll');
    }
};

const create = async (request, response, next) => {
    try {
        const dadosDoFilme = request.body;
        const novoFilme = await filmeService.create(dadosDoFilme);
        response.status(201).json(novoFilme);
    } catch (error) {
        encaminharErro(error, response, next, 'create');
    }
};

const remove = async (request, response, next) => {
    try {
        const id = Number(request.params.id);
        await filmeService.remove(id);
        response.status(204).send();
    } catch (error) {
        encaminharErro(error, response, next, 'remove');
    }
};

const update = async (request, response, next) => {
    try {
        const id = Number(request.params.id);
        const dadosDoFilme = request.body;
        const filmeAtualizado = await filmeService.update(id, dadosDoFilme);
        response.json(filmeAtualizado);
    } catch (error) {
        encaminharErro(error, response, next, 'update');
    }
};

const findById = async (request, response, next) => {
    try {
        const id = Number(request.params.id);
        const filme = await filmeService.findById(id);

        if (filme) {
            response.json(filme);
        } else {
            response.status(404).json({ message: 'Filme não encontrado.' });
        }
    } catch (error) {
        encaminharErro(error, response, next, 'findById');
    }
};

export default { findAll, create, remove, update, findById }
