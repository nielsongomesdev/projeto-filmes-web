import atorService from '../service/ator.service.js';

const validarDadosAtor = (request, response, next) => {
    const { nome } = request.body;

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return response.status(400).json({
            message: "Dados inválidos. O campo 'nome' é obrigatório e deve ser uma string não vazia."
        });
    }

    next();
};

const validarIdAtor = async (request, response, next) => {
    const { id } = request.params;

    const idNum = Number(id);
    if (!Number.isInteger(idNum) || idNum <= 0) {
        return response.status(400).json({ message: 'Id do ator inválido.' });
    }

    try {
        const ator = await atorService.findById(idNum);
        if (!ator) {
            return response.status(404).json({ message: 'Ator não encontrado.' });
        }
       
        request.ator = ator;
        next();
    } catch (error) {
        console.error('Erro ao validar id do ator:', error.message);
        next(error);
    }
};

export default { validarDadosAtor, validarIdAtor };
