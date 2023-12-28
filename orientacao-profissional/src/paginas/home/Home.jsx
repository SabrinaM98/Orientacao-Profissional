import React from 'react'
import './Home.css'
import Menu from '../../componentes/menu/Menu'
import Header from '../../componentes/Header/Header'
import Carrossel from '../../componentes/carrossel/Carrossel'

const Home = () => {
  return (
    <div className='flex'>
        <Menu/>
        <Header/>
        <div className='container_home'>
            <div className='card'>
                <span>Explorar Carreiras</span>
                <p>Gostaria informações detalhadas sobre as profissões que existem no mercado?
                    busque aqui por uma palavra chave para acessar informações que você procura!
                </p>
                <input placeholder='Pesquisa avançada'></input>
            </div>
            <div className='card'>
                <span>Desenvolvimento de carreiras</span>
                <p>
                    Já sabe o que quer para si, ou gostaria de informações sobre Vagas, Estágio, Cursos Profisisonalizantes?
                    pesquise aqui!
                </p>
                <input placeholder='Pesquise a Sua vaga'></input>
            </div>
            <div className='card'>
                <span>Preciso de mais ajuda</span>
                <p>
                    Gostaria de um atendimento mais personalizado?
                    fale com um profissional!
                </p>
                <button>Ir p/ página</button>
            </div>
        </div>
    <Carrossel/>
    </div>
  )
}

export default Home