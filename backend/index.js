import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let filmes = [
    {
        id: 1,
        titulo: 'Dead Pool',
        ator: 'Ryan Reynolds',
        faixaEtaria: 16,
        genero: 'Ação/Aventura/Comédia'
    }
];

app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});

app.post('/api/filmes', (req, res) => {
    const { titulo, ator, faixaEtaria, genero } = req.body;

    if (!titulo || !ator || !faixaEtaria || !genero) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    const id = filmes.length ? filmes[filmes.length - 1].id + 1 : 1;
    const novoFilme = { id, titulo, ator, faixaEtaria, genero };

    filmes.push(novoFilme);

    res.status(201).json(novoFilme);
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});
