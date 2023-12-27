import React from 'react'
import './Card_profissoes.css'
const Card_profissoes = ({dados}) => {
  debugger
  console.log(dados);
  return (
    // <div>Card_profissoes</div>
    <div className='card_profissoes'>
        <p>{dados}</p>
        {/* <p>{subtitulo}</p>
        <p>{texto}</p> */}
    </div>
  )
}

export default Card_profissoes