import express from 'express';
import cors from 'cors';
import filmeRoutes from './rotas/filme.routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});
