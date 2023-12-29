import React from 'react'
import './Hero_section.css'
import img_hero from './img_hero.png'

const Hero_section = () => {
  return (
    <div className='hero_section'>
        <img src={img_hero} className='img_hero'/>
        <div className='hero_container'>
            <div className='hero_conteudo'>
                <span className='conteudo_titulo'>Explorar Carreiras</span>
                <span>texto copy de descrição</span>
            </div>
            <div>
                <input className='input_hero' placeholder='Digite suas paixões, interesses, habilidades ou profissão que deseja encontrar'></input>
                <div className='opcoes_busca'>
                    <a>Opção de busca 1</a>
                    <a>Opção de busca 2</a>
                    <a>Opção de busca 3</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero_section