import express from 'express';
import cors from 'cors';
import prisma from './lib/prisma.js';

import filmeRoutes from './rotas/filme.routes.js';
import atorRoutes from './rotas/ator.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);
app.use('/api', atorRoutes);
app.use(errorMiddleware.errorHandler);

const server = app.listen(port, () => { 
    console.log(`Backend rodando em http://localhost:${port}`);
});

process.on('SIGTERM', () => {
    console.log('Servidor recebendo sinal para desligar (SIGTERM)...');
    
    server.close(async () => {
        console.log('Servidor Express desligado.');
        await prisma.$disconnect();
        console.log('Conexão com o Prisma desligada.');
        process.exit(0);
    });
});
