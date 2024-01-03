import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ id, nome_profissao, descricao_curta, imagem_profissao }) => {
    const cardStyle = {
        backgroundColor: '',   
    };

    return (
      <Link to="/profissoes" style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="card_pro_home" style={cardStyle}>
          <div className='header_card'>
            {/* <img src={imagem_profissao} className='img_pro'/> */}
          </div>
          <div className='infors'>
            <span className='title_pro'>{nome_profissao}</span>
            <span className='subtitle'>{descricao_curta}</span>
          </div>
          <div className='footer_card'>
            <div className='item_footer'></div>
          </div>
        </div>
    </Link>
    )
}

export default Card;