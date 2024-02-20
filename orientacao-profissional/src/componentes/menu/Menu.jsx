import React from 'react'
import './Menu.css'
import logo from '../../../public/vite.svg'

const Menu = ({ showHome, showCarreira, showNoticias, showConcursos , backgroundColor}) => {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div>
      <div className='containerMenu' style={{ backgroundColor: backgroundColor }}>
        {/* <img src={logo}/>
        <span>Orientação Profissional</span> */}
        <nav className='navMenu'>
            {showHome && <a href="/">Home</a>}
            {showCarreira && <a href="#sugestoes" onClick={() => scrollToSection("sugestoes")}>Sugestões de Carreira</a>}
            {showNoticias && <a href="#noticias" onClick={() => scrollToSection("noticias")}>Notícias</a>}
            {showConcursos && <a href="#concursos" onClick={() => scrollToSection("concursos")}>Concursos Abertos</a>}
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