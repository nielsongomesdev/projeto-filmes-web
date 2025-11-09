import prisma from '../lib/prisma.js';

const findAll = async () => {
    return await prisma.filme.findMany();
};
const create = async (dadosDoFilme) => {
    return await prisma.filme.create({
        data: dadosDoFilme,
    });
};
const remove = async (id) => {
    return await prisma.filme.delete({
        where: { id },
    });
};
const update = async (id, dadosDoFilme) => {
    return await prisma.filme.update({
        where: { id },
        data: dadosDoFilme,
    });
};

const findById = async (id) => {
    const filme = await prisma.filme.findUnique({
        where: {
            id: id,
        },
    });
    
    return filme;
};

export default { findAll, create, remove, update, findById }