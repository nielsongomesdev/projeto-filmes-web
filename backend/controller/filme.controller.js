import filmeService from '../service/filme.service.js';

const findAll = (request, response) => {
    const filmes = filmeService.findAll();
    response.json(filmes);
};

export default { findAll }