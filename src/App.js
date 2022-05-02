import './App.css';

import Cabecalho from './Cabecalho';
import Menu from './Menu';
import Rodape from './Rodape';
import Tabela from './Tabela';

function App() {
  return (
    <div className="App">
      <main>
      <Cabecalho />
      <Menu />
      <Tabela />
      <Rodape />
      </main>
    </div>
  );
}

export default App;