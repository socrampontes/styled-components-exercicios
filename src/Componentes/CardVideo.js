import { CardDeVideo } from "../slyle";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardDeVideo className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </CardDeVideo>
  );
}

export default CardVideo;
