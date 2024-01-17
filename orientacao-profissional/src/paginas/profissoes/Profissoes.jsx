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
  const [ dadosSkills, setDadosSkills] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/infos_profissao?id=${idURL}`);
      debugger
      setDadosHeader(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response2 = await axios.get(`http://localhost:3001/api/skills_profissao?id=${idURL}`);
      debugger
      setDadosSkills(response2.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);
  
  let dadosCardAgrupado = Object.groupBy(dadosSkills, ({tipo}) => tipo); 
  
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
          <span className='titulo_profissao'>{dadosHeader.length > 0 && dadosHeader[0].nome_profissao}</span>
          <span>
              {dadosHeader.length > 0 && dadosHeader[0].descricao_longa}
              <br/>
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
        
        <Card_profissoes dados = {dadosCardAgrupado}/>

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


