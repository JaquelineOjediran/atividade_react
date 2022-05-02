function Noticia(props){
    return(
        <>
        <div className="materia_esq">
            <img className="image" src={props.imagem} />
        </div>
        <div className="materia_dir">
            <h5 className="linha1">{props.linha1}</h5>
            <h3 className="linha2">{props.titulo}</h3>
            <h4 className="linha3">{props.subtitulo}</h4>
            <h6 className="linha4">{props.linha2}</h6>
        </div>
        
        </>
    )
}

export default Noticia;