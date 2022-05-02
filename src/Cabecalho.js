function cabecalho(){
    return(
        <>
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
       <img src='menu-aberto.png' />MENU 
       <img src='escudo.png' />TIMES
      </div>
      <div className="menu_cen">
        ge
      </div>
      <div className="menu_dir">
      <img src='lupa.png' /> BUSCAR
      </div>
    </div>
    <div className="navbar">
    <div className="navnav_esq"><img src='premiere.png'/>Bora de Brasileirão por um preço que dá jogo! Assine a partir de R$29,90/mês.</div>
      <div className="navnav_dir">Assine</div>
    </div>
    </>
    )
}

export default cabecalho;