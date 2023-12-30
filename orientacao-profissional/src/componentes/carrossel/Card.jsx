import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, subtitulo, imagem_profissao }) => {
    const cardStyle = {
        backgroundColor: '',   
    };

    return (
      <Link to="/profissoes" style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="card_pro_home" style={cardStyle}>
          <div className='header_card'>
            <img src={imagem_profissao} className='img_pro'/>
          </div>
          <div className='infors'>
            <span className='title_pro'>{titulo}</span>
            <span className='subtitle'>{subtitulo}</span>
          </div>
          <div className='footer_card'>
            <div className='item_footer'></div>
          </div>
        </div>
    </Link>
    )
}

export default Card;