import React from "react";

const Card = ({ id, titulo, subtitulo, imagem_profissao }) => {
    const cardStyle = {
        backgroundColor: '',   
    };

    return (
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
    )
}

export default Card;