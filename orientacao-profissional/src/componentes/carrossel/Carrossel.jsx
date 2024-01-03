import React, { useState , useRef} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'
import './Carrossel.css'
import img_medico from '../../assets/imagens_profissoes/ilustracao.jpg'
import axios from 'axios';

const Carrossel = () => {
  const cardData = [];

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cards_profissoes`);
      
      const cardData = response.data;

      // console.log("nosso array aqui:", cardData)

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };
  fetchData();

    
    
      // const itemsPerPage = 20;
      // const [startIndex, setStartIndex] = useState(0);
      const carrosselRef = useRef(null);
      const voltar = () => {
        if(carrosselRef.current){
          carrosselRef.current.scrollLeft -= 300;
        }
      };
    
      const proximo = () => {
        debugger;
        if(carrosselRef.current){
          carrosselRef.current.scrollLeft += 300;
        }
      };
    
      return (
        <div>
          <div id='processes' className='section_processes'>
            <span className='title'>Sugestões de Carreiras</span>
            <div className='carrossel'>
              <button onClick={voltar}>&lt;</button>
                <div ref={carrosselRef} className='group_cards_pro'>

                  {cardData.map((data) => (
                    <React.Fragment key={data.id}>
                      <Card {...data} />
                    </React.Fragment>
                  ))}
                  
                </div>
              <button onClick={proximo}>&gt;</button>
            </div>
          </div>
        </div>
      );
}

export default Carrossel


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