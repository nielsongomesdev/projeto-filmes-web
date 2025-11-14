import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ListarFilmes } from './pages/ListarFilmes';
import { ListarAtores } from './pages/ListarAtores';
import { CadastrarFilme } from './pages/CadastrarFilme';
import { AlterarFilme } from './pages/AlterarFilme';
import { CadastrarAtor } from './pages/CadastrarAtor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListarFilmes />} />
        <Route path="/inserir" element={<CadastrarFilme />} />
        <Route path="/alterar/:id" element={<AlterarFilme />} />
        <Route path="/inserir-ator" element={<CadastrarAtor />} />
        <Route path="/atores" element={<ListarAtores />} />
      </Route>
    </Routes>
  );
}

export default App
