import prisma from '../lib/prisma.js';

const findAll = async () => {
    return await prisma.ator.findMany();
};
const create = async (dadosDoAtor) => {
    return await prisma.ator.create({ data: dadosDoAtor });
};

const findById = async (id) => {
    return await prisma.ator.findUnique({ where: { id: id } });
};
const update = async (id, dadosDoAtor) => {
    return await prisma.ator.update({ where: { id: id }, data: dadosDoAtor });
};
const remove = async (id) => {
    return await prisma.ator.delete({ where: { id: id } });
};

export default { findAll, create, findById, update, remove };
