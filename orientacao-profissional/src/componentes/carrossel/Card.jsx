import React from "react";

const Card = ({ id, titulo, subtitulo, }) => {
    const cardStyle = {
        backgroundColor: '',   
    };

    return (
        <div className="card_processes" style={cardStyle}>
      <div className='header_card'>
        <div className='tag_id'>0{id}</div>
      </div>
      <div className='infors'>
        <span className='title'>{titulo}</span>
        <span className='subtitle'>{subtitulo}</span>
      </div>
      <div className='footer_card'>
        <div className='item_footer'></div>
      </div>
    </div>
    )
}

export default Card