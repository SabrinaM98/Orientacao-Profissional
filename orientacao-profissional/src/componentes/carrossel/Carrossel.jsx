import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Carrossel.css';
import img_medico from '../../assets/imagens_profissoes/ilustracao.jpg';
import axios from 'axios';
import Left from '../../../public/left-arrow.png'
import Right from '../../../public/right-arrow.png' 

const Carrossel = () => {
  const [cardData, setCardData] = useState([]);
  const carrosselRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards_profissoes`);
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
    <div id='processes' className='section_processes'>
      <span className='title'>Sugestões de Carreiras</span>
      <div className='carrossel'>
        <a onClick={voltar}><img className='iconCarrossel' src={Left}/></a>
        <div ref={carrosselRef} className='group_cards_pro'>
          {cardData.map((data) => (
            <React.Fragment key={data.id}>
              <Card {...data} />
            </React.Fragment>
          ))}
        </div>
        <a onClick={proximo}><img className='iconCarrossel' src={Right}/></a>
      </div>
    </div>
  </div>
  );
};

export default Carrossel;


// const cardData = [
    //     {
    //       id: 1,
    //       titulo: "Medicina",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 2,
    //       titulo: "Engenharia",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 3,
    //       titulo: "Tecnologia da Informação (TI)",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 4,
    //       titulo: "Direito",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 5,
    //       titulo: "Marketing Digital",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 6,
    //       titulo: "Engenharia",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 7,
    //       titulo: "Tecnologia da Informação (TI)",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 8,
    //       titulo: "Direito",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     },
    //     {
    //       id: 9,
    //       titulo: "Marketing Digital",
    //       subtitulo: "Texto descritivo",
    //       imagem_profissao: img_medico
    //     }
    // ];