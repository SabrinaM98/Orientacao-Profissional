import React from 'react'
import './Profissoes.css'
import Menu from '../../componentes/menu/Menu'
import Card_profissoes from '../../componentes/Card_profissoes/Card_profissoes'
import { Filtros_profissoes } from '../../componentes/filtros_profissoes/Filtros_profissoes'

const Profissoes = () => {
  const dadosHeader = [
    {
      id: 1,
      nome_profissao: "Engenharia Elétrica"
    }
  ];
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
  console.log(aux)
  // let res = Object.entries(aux);
  // console.log(res)
  // res.map((value, index) => (
  //   console.log(index, value)
  // ))
  
  debugger;
  
  return (
    <div className='flex'>
      <Menu/>
      <div className='header'>
      {dadosHeader[0].nome_profissao}
      </div>
      <section style={{marginTop: 20}}>
        {dadosSecao1[0].titulo}
      </section>
      <div style={{ borderTop: "1px solid rgb(128, 128, 128) ", marginLeft: 20, marginRight: 20 , marginTop: 20}}></div>
      <section>
        <Card_profissoes dados = {aux}/>
        {/* <div className='container'>
          {res.map((value, index) =>(
            <React.Fragment key = {index}>
              <Card_profissoes {...value}/>
            </React.Fragment>
          ))}
        </div> */}
      </section>
      <div style={{ borderTop: "1px solid rgb(128, 128, 128) ", marginLeft: 20, marginRight: 20 , marginTop: 20}}></div>
      <section>
        <React.Fragment>
          <Filtros_profissoes/>
        </React.Fragment>
      </section>
    </div>
  )
}

export default Profissoes





{/* {res.map((item) =>(  ANTIGO DO HYGOR Q NAO VAI SERVIR MAIS PQ O ARRAY MUDOU
            <React.Fragment key = {res.key}>
              <Card_profissoes {...item}/>
            </React.Fragment>
          ))} */}


