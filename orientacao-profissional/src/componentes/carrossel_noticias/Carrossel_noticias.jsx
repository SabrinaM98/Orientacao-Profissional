import React, { useState, useRef, useEffect } from 'react';
import './Carrossel_noticias.css';
import axios from 'axios';
import Left from '../../../public/left-arrow.png'
import Right from '../../../public/right-arrow.png' 
import Card_noticias from './Card_noticias';

const Carrossel_noticias = () => {
  const [cardData, setCardData] = useState([]);
  const carrosselRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/noticias`);
      setCardData(response.data);
      debugger
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // O segundo argumento [] garante que o useEffect só é executado uma vez 

  const voltar = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft -= 300;
    }
  };

  const proximo = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft += 300;
    }
  };

  return (
    <div>
    <div id='processes' className='section_processes_noticia'>
      <span className='title'>Notícias</span>
      <div className='carrossel'>
        <a onClick={voltar}><img className='iconCarrossel' src={Left}/></a>
        <div ref={carrosselRef} className='group_cards_pro'>
          {cardData.map((data) => (
            <React.Fragment key={data.id}>
              <Card_noticias {...data}/>
            </React.Fragment>
          ))}
        </div>
        <a onClick={proximo}><img className='iconCarrossel' src={Right}/></a>
      </div>
    </div>
  </div>
  );
};

export default Carrossel_noticias;

