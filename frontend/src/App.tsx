import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ListarFilmes } from './pages/ListarFilmes';
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
      </Route>
    </Routes>
  );
}

export default App
