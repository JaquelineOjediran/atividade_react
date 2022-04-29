import './App.css';
import imagem1 from "./Fitness.png";
import imagem2 from "./Pilates.png";
import imagem3 from "./Skipping.png";
import imagem4 from "./Workout.png";
import imagem5 from "./lupa.png";
import imagem6 from "./escudo.png";
import imagem7 from "./menu-aberto.png";
import imagem8 from "./premiere.png";
import imagem9 from "./athlete.jpg";
import imagem10 from "./dirt-bike.jpg";
import imagem11 from "./beach-volleyball.jpg";


function App() {
  return (
    <div className="App">
      <main>
      <header className="cabecalho">
        <div className="nav_esq">
          <a href="https://www.globo.com/" className="g1">globo.com</a>
          <a href="https://g1.globo.com/" className="g2">g1</a>
          <a href="https://ge.globo.com/" className="g3">ge</a>
          <a href="https://gshow.globo.com/" className="g4">gshow</a>
          <a href="https://globoplay.globo.com/" className="g5">globoplay</a>
        </div>
        <div className="nav_dir">
          ASSINE JÁ <a href="#">ENTRAR {'>'}</a>
        </div>
      </header>
      <div className="menu">
        <div className="menu_esq">
         <img src={imagem7} />MENU 
         <img src={imagem6} />TIMES
        </div>
        <div className="menu_cen">
          ge
        </div>
        <div className="menu_dir">
        <img src={imagem5} /> BUSCAR
        </div>
      </div>
      <div className="navbar">
      <div className="navnav_esq"><img src={imagem8} />Bora de Brasileirão por um preço que dá jogo! Assine a partir de R$29,90/mês.</div>
        <div className="navnav_dir">Assine</div>
      </div>
      <section className="conteudo">
        <div className="bloco">
          <div className="bloco1">
            <img src={imagem11} />
          </div>
          <div className="bloco2">
            <div className="materia1">
              <img src={imagem9} />
            </div>
            <div className="materia2">
              <img src={imagem10} />
            </div>
          </div>
        </div>
      </section>
      <section className="galeria">
        <div className="fotos">
          <img src={imagem1} />
        </div>
        <div className="fotos">
          <img src={imagem2} />
        </div>
        <div className="fotos">
          <img src={imagem3} />
        </div>
        <div className="fotos">
          <img src={imagem4} />
        </div>
      </section>
      <footer className="rodape">
        Rodapé
      </footer>
      </main>

    </div>
  );
}

export default App;
