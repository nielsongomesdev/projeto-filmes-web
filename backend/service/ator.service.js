import prisma from '../lib/prisma.js';

const findAll = async () => {
    const atores = await prisma.ator.findMany();
    return atores;
};

const create = async (dadosDoAtor) => {
    const ator = await prisma.ator.create({
        data: dadosDoAtor,
    });
    return ator;
};

export default { findAll, create }