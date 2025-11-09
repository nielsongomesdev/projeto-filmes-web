import filmeService from '../service/filme.service.js';

const findAll = async (request, response) => {
    try {
        const filmes = await filmeService.findAll();
        response.json(filmes);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno do servidor (findAll)' });
    }
};

const create = async (request, response) => {
    try {
        const dadosDoFilme = request.body;
        const novoFilme = await filmeService.create(dadosDoFilme);
        response.status(201).json(novoFilme);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno do servidor (create)' });
    }
};

const remove = async (request, response) => {
    try {
        const id = Number(request.params.id);
        await filmeService.remove(id);
        response.status(204).send();
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno do servidor (remove)' });
    }
};

const update = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const dadosDoFilme = request.body;
        const filmeAtualizado = await filmeService.update(id, dadosDoFilme);
        response.json(filmeAtualizado);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno do servidor (update)' });
    }
};

const findById = async (request, response) => {
    try {
        const id = Number(request.params.id);
        const filme = await filmeService.findById(id);
        if (filme) {
            response.json(filme);
        } else {
            response.status(404).json({ message: 'Filme não encontrado' });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno do servidor (findById)' });
    }
};

export default { findAll, create, remove, update, findById }