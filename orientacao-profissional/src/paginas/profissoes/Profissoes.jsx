import React, { useState, useRef, useEffect } from 'react';
import './Profissoes.css'
import Menu from '../../componentes/menu/Menu'
import Card_profissoes from '../../componentes/Card_profissoes/Card_profissoes'
// import { Filtros_profissoes } from '../../componentes/filtros_profissoes/Filtros_profissoes'
import Footer from '../../componentes/footer/Footer'
import axios  from 'axios';

import { useLocation } from 'react-router-dom';

const Profissoes = () => {
  
  const location = useLocation();
  const idURL = new URLSearchParams(location.search).get('id');

  console.log("location:", location);


  const [ dadosHeader, setDadosHeader] = useState([]);

  const fetchData = async () => {
    try {
      let id = idURL;
      const response = await axios.get(`http://localhost:3001/api/infos_profissao?id=${id}`);
      debugger
      setDadosHeader(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  debugger
  console.log(dadosHeader)
  const dadosSecao1 = [
    {
      id: 1,
      titulo: "Em uma visão ampla, Engenharia Elétrica é a área que lida com o estudo e a aplicação de eletricidade, eletrônica e eletromagnetismo. Assim, entre suas subáreas estão energia, eletrônica, sistemas de controle, telecomunicações e processamento de sinais. A subárea de energia ocupa-se da geração, da transmissão, da distribuição e do uso eficiente da energia elétrica. O foco da engenharia de controle é fazer com que sistemas dinâmicos se comportem ou funcionem de uma forma desejada: suas aplicações incluem a automação industrial e predial, a robótica, os sistemas de controle de aeronaves e os sistemas de piloto automático de veículos. A eletrônica trata do projeto e construção de circuitos eletrônicos, incluindo os circuitos integrados, que são a base dos equipamentos eletrônicos, por exemplo, computadores, aparelhos de áudio e vídeo, equipamentos biomédicos e aparelhos de comunicação. O engenheiro de telecomunicações planeja, projeta, instala e opera sistemas, instalações e equipamentos de telecomunicação com e sem fio, incluindo comunicação óptica e via satélite, algumas das principais aplicações são: telefonia fixa e celular, transmissão de dados, radiodifusão (rádio e TV), radar e sistemas de posicionamento e navegação. A área de processamento de sinais ocupa-se da análise e da manipulação de áudio (voz e música), imagens e vídeos, a fim de melhorar a qualidade dos sinais, extrair informações deles e de compactá-los."
    }
  ];
  const dadosSecao2 = [
    {
      id: 1,
      nome_profissao: "Engenharia Elétrica",
      titulo: "Soft",
      subtitulo: "basic skills",
      texto: "ser boa pinta; não ser psicopata"
    },
    {
      id: 2,
      nome_profissao: "Engenharia Elétrica",
      titulo: "Soft",
      subtitulo: "resolucao de problemas",
      texto: "ser bom em resolver problemas "
    },
    {
      id: 3,
      nome_profissao: "Engenharia Elétrica",
      titulo: "Hard",
      subtitulo: "basic skills",
      texto: "excel;word"
    },
    {
      id: 4,
      nome_profissao: "Engenharia Elétrica",
      titulo: "Hard",
      subtitulo: "resolucao de problemas",
      texto: "resolver problemas com excel"
    }
  ];
  
  let aux = Object.groupBy(dadosSecao2, ({titulo}) => titulo); 
  
  // let res = Object.entries(aux);
  // console.log(res)
  // res.map((value, index) => (
  //   console.log(index, value)
  // ))
  
  debugger;
  
  return (
    <div className='flex'>
      <Menu/>
      {/* <p>ID recebido: {id}</p> */}
      <div className='container_profissao'>
        <div className='container_conteudo_profissoes'>
          <span className='titulo_profissao'>{dadosSecao2[0].nome_profissao}</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis lacus ut urna viverra faucibus. Nulla pellentesque nunc lobortis suscipit vestibulum. Cras elementum libero eu suscipit tempor. Nullam id justo nibh. Vivamus neque nisl, tempor in justo at, venenatis sollicitudin purus. Nam at pellentesque quam. Sed ipsum ligula, aliquam id eros facilisis, laoreet maximus orci.
              <br />
              <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis lacus ut urna viverra faucibus. Nulla pellentesque nunc lobortis suscipit vestibulum. Cras elementum libero eu suscipit tempor. Nullam id justo nibh. Vivamus neque nisl, tempor in justo at, venenatis sollicitudin purus. Nam at pellentesque quam. Sed ipsum ligula, aliquam id eros facilisis, laoreet maximus orci.
          </span>
        </div>
        <div className='container_conteudo_profissoes'>
          <span className='titulo_profissao'>Visão Geral da Profissão</span>
          <div>
            <span className='sub_titulo_visao'>Faltando:</span>
            <ul>
              <li>Como é o ambiente de trabalho</li>
              <li>Rotina do trabalho</li>
              <li>Retorno/Plano de carreira</li>
              <li>Atividades do dia a dia</li>
              <li>Depoimentos de pessoas inseridas no mercado</li>
            </ul>
          </div>
        </div>
        <div className='container_conhecimentos'>
          <span>Conhecimentos Necessários</span>
          <ul>
              <li>Conhecimento A</li>
              <li>Conhecimento B</li>
              <li>Conhecimento C</li>
            </ul>          
        </div>
        
        <Card_profissoes dados = {aux}/>

        {/* se for usar o filtro, colocar aqui; */}

      </div>
      <Footer />

      {/* <div style={{ borderTop: "1px solid rgb(128, 128, 128) ", marginLeft: 20, marginRight: 20 , marginTop: 20}}></div>
       */}
      {/* <section>
        <React.Fragment>
          <Filtros_profissoes/>
        </React.Fragment>
      </section> */}
    </div>
  )
}

export default Profissoes





{/* {res.map((item) =>(  ANTIGO DO HYGOR Q NAO VAI SERVIR MAIS PQ O ARRAY MUDOU
            <React.Fragment key = {res.key}>
              <Card_profissoes {...item}/>
            </React.Fragment>
          ))} */}


