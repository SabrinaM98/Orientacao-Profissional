import React from 'react'
import './Home.css'
import Menu from '../../componentes/menu/Menu'
import Carrossel from '../../componentes/carrossel/Carrossel'
import Hero_section from '../../componentes/hero_section_home/Hero_section'
import Footer from '../../componentes/footer/Footer'

const Home = () => {
  return (
    <div className='flex'>
        <Menu/>
        <Hero_section />
        <Carrossel/>
        <Footer />
    </div>
  )
}

export default Home