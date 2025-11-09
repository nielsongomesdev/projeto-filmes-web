const validarDadosFilme = (request, response, next) => {
    const { titulo, faixaEtaria, genero } = request.body;

    if (!titulo || !faixaEtaria || !genero) {
        return response.status(400).json({ 
            message: "Dados inválidos. Os campos 'titulo', 'faixaEtaria' e 'genero' são obrigatórios." 
        });
    }

    next();
};

export default { validarDadosFilme };
