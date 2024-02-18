import React from 'react'
import './Menu.css'
import logo from '../../../public/vite.svg'

const Menu = () => {
  return (
    <div>
      <div className='containerMenu'>
        {/* <img src={logo}/>
        <span>Orientação Profissional</span> */}
        <nav className='navMenu'>
            {/* <a href="/">Home</a> */}
            <a href="/">Sugestões de Carreira</a>
            <a href="/">Notícias</a>
            <a href="/">Concursos Abertos</a>
            <a href="/">Sobre</a>

            {/* <a href="#Objetivos">Buscar</a>
            <a href="#comoSomos">Desenvolvimento</a> */}
            {/* <a href="#duvidas">Login</a>           */}
        </nav>
      </div>
    </div>
  )
}

export default Menu