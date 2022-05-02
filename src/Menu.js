
import Noticia from "./Noticia";

function Menu(){
    return(
<div className="centralizar">
      <section className="conteudo">
        <Noticia imagem='academia.jpg' linha1="brasileirão série a" titulo="Favoritismo: Galo, Inter e São Paulo têm maior potencial de vitória; " subtitulo="A partir desta rodada, apresentamos a média de idade dos times em cada rodada para você comparar" linha2="Há 55 minutos - Em espião estático" />
      </section>
      <section className="conteudo">
        <Noticia imagem='bailarina.jpg' linha1="nova rivalidade" titulo="Gabigol x Luizão: quem é melhor no duelo de goleadores campeões pelo Flamengo?" subtitulo="Em resenha que teve início com o iminente recorde de Gabi na Libertadores, dupla trocou cutucadas" linha2="Há 4 horas - Em flamengo" />
      </section>
      <section className="conteudo">
        <Noticia imagem='golf.jpg' linha1="apoio, embalo e atenção" titulo="Veja como o Palmeiras se prepara para evitar nova surpresa na Copa do Brasil" subtitulo="Palmeiras x Juazeirense: veja onde assistir e as escalações" linha2="Há 47 minutos - Em palmeiras" />
      </section>
      <section className="conteudo">
        <Noticia imagem='neve.jpg' linha1="atlético-mg" titulo="Tottenham, Atlético de Madrid e Turquia: Hulk conta bastidores antes de dizer sim ao Galo" subtitulo="Goiás x Atlético-MG: veja onde assistir e as escalações
Luan enfrenta o Atlético-MG pela primeira vez em 10 anos" linha2="Há 4 horas - Em atlético-mg" />
      </section>
    </div>
    )
}

export default Menu;