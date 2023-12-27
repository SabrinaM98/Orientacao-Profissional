import React from 'react'
import './Card_profissoes.css'
const Card_profissoes = ({dados}) => {
  debugger
  console.log('dados obj:', dados);
  return (
    <div className='card_profissoes'>
      {Object.keys(dados).map((chave, index) => (
        <div key={index} className='card'>
          {/* <h2>{chave}</h2> */}
          {dados[chave].map((item) => (
            <div key={item.id} className='card_item'>
              <h3>{item.titulo}</h3>
              <p>{item.subtitulo}</p>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Card_profissoes