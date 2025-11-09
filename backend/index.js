import express from 'express';
import cors from 'cors';
import filmeRoutes from './rotas/filme.routes.js';
import prisma from './lib/prisma.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);

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
