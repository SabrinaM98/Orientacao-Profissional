import React, { useState, useRef, useEffect } from 'react';
import './Profissoes.css'
import Menu from '../../componentes/menu/Menu'
import Card_profissoes from '../../componentes/Card_profissoes/Card_profissoes'
// import { Filtros_profissoes } from '../../componentes/filtros_profissoes/Filtros_profissoes'
import Footer from '../../componentes/footer/Footer'
import axios  from 'axios';
import { useLocation } from 'react-router-dom';
import { Skeletons } from '../../componentes/Skeletons/Skeleton';

const Profissoes = () => {
  
  const location = useLocation();
  const idURL = new URLSearchParams(location.search).get('id');
  const [ dadosHeader, setDadosHeader] = useState([]);
  const [ dadosSkills, setDadosSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      await axios.post("http://localhost:3001/infos_profissao", {
              "id_profissao": idURL,
            }).then((response) => {
              //console.log(response)
              setDadosHeader(response.data)
            }).catch(error => { 
              console.log(error)
            }) 
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      await axios.post("http://localhost:3001/skills_profissao", {
                "id_profissao": idURL,
            }).then((response2) => {
              //console.log(response2)
              setDadosSkills(response2.data)
            }).catch(error => { 
              console.log(error)
            }) 
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchData();
      fetchData2();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  let dadosCardAgrupado = Object.groupBy(dadosSkills, ({tipo}) => tipo); 
  let dadosConhecimentos = Object.assign({}, dadosCardAgrupado["4"])
  delete dadosCardAgrupado["4"]
  
  debugger;
  
  return (
      <div>
        {loading ? (<Skeletons/>) : 
          (
            <div >
              <Menu showHome={true} showCarreira={false} showNoticias={false} showConcursos={false} showSobreNos={true} backgroundColor='var(--primary)'/>
              <div className='container_profissao'>
                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>{dadosHeader.length > 0 && dadosHeader[0].nome_profissao}</span>
                  <span>
                      {dadosHeader.length > 0 && dadosHeader[0].descricao_longa}
                      <br/>
                  </span>
                </div>
                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>Curso de {dadosHeader.length > 0 && dadosHeader[0].nome_profissao}</span>
                  <span>
                      {dadosHeader.length > 0 && dadosHeader[0].descricao_curso}
                      <br/>
                  </span>
                  <span><b>Tempo de Conclusão</b>: Bacharelado - {dadosHeader.length > 0 && dadosHeader[0].tempo_conclusao}</span>
                </div>
                <div className='container_conhecimentos'>
                  <span>Retorno/Plano de Carreira</span>
                  <ul>
                    {Object.keys(dadosConhecimentos).map((chave, index) => (
                      <div key={index}>
                        <li>{dadosConhecimentos[chave].skill}</li>
                      </div>
                    ))}
                  </ul>          
                </div>
          
                <Card_profissoes dados = {dadosCardAgrupado}/>
                
                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>Como é o ambiente de trabalho</span>
                  <span>
                      {dadosHeader.length > 0 && dadosHeader[0].ambiente_trabalho}
                      <br/>
                  </span>
                </div>

                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>Rotina de Trabalho</span>
                  <span>
                      {dadosHeader.length > 0 && dadosHeader[0].rotina_trabalho}
                      <br/>
                  </span>
                </div>

                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>Atividades do dia a dia</span>
                  <span>
                      {dadosHeader.length > 0 && dadosHeader[0].atividades}
                      <br/>
                  </span>
                </div>

                <div className='container_conteudo_profissoes'>
                  <span className='titulo_profissao'>Vídeo de Apoio</span>
                      <iframe width="829" height="466" src={dadosHeader.length > 0 && dadosHeader[0].link_video}></iframe>
                </div>
                
              </div>
              <Footer />
            </div>
          )
        }
    </div>
  )
}

export default Profissoes





{/* {res.map((item) =>(  ANTIGO DO HYGOR Q NAO VAI SERVIR MAIS PQ O ARRAY MUDOU
            <React.Fragment key = {res.key}>
              <Card_profissoes {...item}/>
            </React.Fragment>
          ))} */}


