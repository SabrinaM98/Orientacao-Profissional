import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Card_noticias = ({ id, titulo, descricao}) => {

    return (
      <Link to={`/`} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="cardProf_noticia">
          <div className="card-text">
            <h3 className='title_pro'>{titulo}</h3>
            <p className='subtitle'>{descricao}</p>
          </div>
          <div className="bottom">
          </div>
        </div>
    </Link>
    )
}

export default Card_noticias;