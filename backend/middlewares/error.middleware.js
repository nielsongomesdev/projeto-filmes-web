const errorHandler = (error, request, response, next) => {
    console.error("ERRO DETECTADO:", error.message);

    return response.status(500).json({
        message: "Ocorreu um erro interno no servidor."
    });
};

export default { errorHandler };
