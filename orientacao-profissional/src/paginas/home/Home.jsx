import React from 'react'
import './Home.css'
import Menu from '../../componentes/menu/Menu'

const Home = () => {
  return (
    <div className='flex'>
        <Menu/>
        <div className='container'>
            <div className='card'>
                <span>Explorar Carreiras</span>
                <input placeholder='Pesquisa avançada'></input>
            </div>
            <div className='card'>
                <span>Desenvolvimento de carreiras</span>
                <input></input>
            </div>
            <div className='card'>
                <span>Preciso de mais ajuda</span>
                <button>Ir p/ página</button>
            </div>
        </div>
    

    </div>
  )
}

export default Home