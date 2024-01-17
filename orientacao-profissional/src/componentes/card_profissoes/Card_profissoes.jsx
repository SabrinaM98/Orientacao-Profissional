import React from 'react'
import './Card_profissoes.css'
const Card_profissoes = ({dados}) => {
  debugger
  console.log('dados obj:', dados);
  return (
    <div className='card_profissoes'>
      {Object.keys(dados).map((chave, index) => (
        <div key={index} className='card_conteudo_pro'>
          <h2>{chave == 1 ? 'Soft' : 'Hard'} Skills</h2>
          {dados[chave].map((item) => (
            <div key={item.id} className='card_item'>
              {/* <h3>{item.titulo}</h3> */}
              {/* <span className='sub_titulo'>{item.subtitulo}</span> */}
              <li>{item.skill}</li>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Card_profissoes