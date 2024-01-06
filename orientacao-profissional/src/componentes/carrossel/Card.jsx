import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
// import trem from '../../assets/imagens_profissoes/GAeVZkabYAAZcQj.png'

const Card = ({ id, nome_profissao, descricao_curta, imagem }) => {
  debugger
  const [imgImportDinamico, setImagem] = useState(null);

  useEffect(() => {
    const importaImagem = async () => {
      try {
        const moduloImagem = await import(`../../assets/imagens_profissoes/${imagem}.png`);
        setImagem(moduloImagem.default);
      } catch (error) {
        console.error('Erro ao importar imagem:', error);
      }
    };

    importaImagem();
  }, [imagem]);
  
  const cardStyle = {
      backgroundColor: '',   
  };

    return (
      // <Link to={{ pathname: "/profissoes", search: "teste2" , hash: 'teste', state: [{id: 1}] }} style={{ textDecoration: 'none' , color: 'black'}}>
      <Link to={`/profissoes?id=${id}`} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="cardProf">
          <div className="card-image">
          <img src={imgImportDinamico} className='img_pro' alt='Profissão' />
            {/* <img src={trem} className='img_pro' /> */}
          </div>
          <div className="card-text">
            <h3 className='title_pro'>{nome_profissao}</h3>
            <p className='subtitle'>{descricao_curta}</p>
          </div>
          <div className="card-stats">
            <div className="stat border">
              <div className="value">1000</div>
              <div className="type">vagas por ano</div>
            </div>
            <div className="stat">
              <div className="value">10</div>
              <div className="type">faculdades</div>
            </div>
          </div>
        </div>
    </Link>
    )
}

export default Card;


        {/* <div className="card_pro_home" style={cardStyle}>
          <div className='header_card'>
            <img src={imagem2} className='img_pro'/>
          </div>
          <div className='infors'>
            <span className='title_pro'>{nome_profissao}</span>
            <span className='subtitle'>{descricao_curta}</span>
          </div>
          <div className='footer_card'>
            <div className='item_footer'></div>
          </div>
        </div> */}