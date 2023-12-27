import React from 'react'
import Card from './Card'

const Carrossel = () => {
    const cardData = [
        {
            id: 1,
            titulo: "titulo teste 1",
            subtitulo: "Subititulo teste 1"
        },
        {
            id: 2,
            titulo: "titulo teste 2",
            subtitulo: "Subititulo teste 2"
        },
        {
            id: 3,
            titulo: "titulo teste 3",
            subtitulo: "Subititulo teste 3"
        },
        {
            id: 4,
            titulo: "titulo teste 4",
            subtitulo: "Subititulo teste 4"
        },
        {
            id: 5,
            titulo: "titulo teste 5",
            subtitulo: "Subititulo teste 5"
        }
    ]
  return (
    <div>
        <div id='processes' className='section_processes'>
        <span className='title'>Nosso Processo de Inovação</span>
        <div className='group_cards_pro'>
            {cardData.map((data) => (
                <React.Fragment key={data.id}>
                    <Card {...data} />
                </React.Fragment>
            ))}        
        </div>
    </div>
    </div>
  )
}

export default Carrossel