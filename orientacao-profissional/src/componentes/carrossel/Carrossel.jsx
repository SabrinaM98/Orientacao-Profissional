import React, { useState } from 'react';
import Card from './Card'
import './Carrossel.css'
import img_medico from '../../assets/imagens_profissoes/ilustracao.jpg'

const Carrossel = () => {
    const cardData = [
        {
          id: 1,
          titulo: "Carreira A",
          subtitulo: "Texto descritivo",
          imagem_profissao: img_medico
        },
        {
          id: 2,
          titulo: "Carreira B",
          subtitulo: "Texto descritivo",
          imagem_profissao: img_medico
        },
        {
          id: 3,
          titulo: "Carreira C",
          subtitulo: "Texto descritivo",
          imagem_profissao: img_medico
        },
        {
          id: 4,
          titulo: "Carreira D",
          subtitulo: "Texto descritivo",
          imagem_profissao: img_medico
        },
        {
          id: 5,
          titulo: "Carreira E",
          subtitulo: "Texto descritivo",
          imagem_profissao: img_medico
        }
      ];
    
      const itemsPerPage = 3;
      const [startIndex, setStartIndex] = useState(0);
    
      const voltar = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
      };
    
      const proximo = () => {
        setStartIndex((prevIndex) => Math.min(cardData.length - itemsPerPage, prevIndex + itemsPerPage));
      };
    
      return (
        <div>
          <div id='processes' className='section_processes'>
            <span className='title'>Sugestões de Carreiras</span>
            <div className='group_cards_pro'>
              <button onClick={voltar}>&lt;</button>
              {cardData.slice(startIndex, startIndex + itemsPerPage).map((data) => (
                <React.Fragment key={data.id}>
                  <Card {...data} />
                </React.Fragment>
              ))}
              <button onClick={proximo}>&gt;</button>
            </div>
          </div>
        </div>
      );
}

export default Carrossel