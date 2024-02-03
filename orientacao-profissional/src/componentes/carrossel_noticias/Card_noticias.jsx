import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Card_noticias = ({ id, nome_profissao, descricao_curta}) => {

    return (
      <Link to={`/`} style={{ textDecoration: 'none' , color: 'black'}}>
        <div className="cardProf_noticia">
          <div className="card-text">
            <h3 className='title_pro'>{nome_profissao}</h3>
            <p className='subtitle'>{descricao_curta}</p>
          </div>
          <div className="bottom">
          </div>
        </div>
    </Link>
    )
}

export default Card_noticias;