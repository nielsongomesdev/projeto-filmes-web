import filmeService from '../service/filme.service.js';

const validarDadosFilme = (request, response, next) => {
    const { titulo, faixaEtaria, genero } = request.body;

    if (!titulo || !faixaEtaria || !genero) {
        return response.status(400).json({ 
            message: "Dados inválidos. Os campos 'titulo', 'faixaEtaria' e 'genero' são obrigatórios." 
        });
    }

    next();
};

const validarIdFilme = async (request, response, next) => {
    const { id } = request.params;

    const idNum = Number(id);
    if (!Number.isInteger(idNum) || idNum <= 0) {
        return response.status(400).json({ message: 'Id do filme inválido.' });
    }

    try {
        const filme = await filmeService.findById(idNum);
        if (!filme) {
            return response.status(404).json({ message: 'Filme não encontrado.' });
        }
        
        request.filme = filme;
        next();
    } catch (error) {
        console.error('Erro ao validar id do filme:', error.message);
        next(error);
    }
};

export default { validarDadosFilme, validarIdFilme };
