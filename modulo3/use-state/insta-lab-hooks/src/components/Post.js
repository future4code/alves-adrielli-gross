import perfil1 from '../img/gata1.png'
import post1 from '../img/gata2.png'
import styled from 'styled-components';
import { useState } from 'react';


const StylePerfil = styled.div`
  img {
    border-radius: 50%;
    width: 5%;
  }

`

function Post(props) {
  const [curtida, setCurtida] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [numeroComentario, setNumeroComentario] = useState(0)
  const [comentario, setComentario] = useState([])
  
  

  // Passo7
  const onClickCurtida = () => {
    alert("Curtida")
  };

  // Passo7
  const onClickComentario = () => {
    alert("Comentario")
  };

  // Passo7
  const onChangeComentario = (event) => {
    setComentando(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
  };

  {/* Passo6 */}
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={""}
      />
      {/* Passo4 */}
      <button >Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <StylePerfil>
        <figure>
          {/* Passo3 */}
          <img src={perfil1} alt={'Imagem do usuario'} />
          <span>Ravena Maria</span>
        </figure>
      </StylePerfil>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={post1} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: 0</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;