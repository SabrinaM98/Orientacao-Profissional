import React from 'react'
import './Home.css'
import Menu from '../../componentes/menu/Menu'
import Carrossel from '../../componentes/carrossel/Carrossel'
import Hero_section from '../../componentes/hero_section_home/Hero_section'
import Footer from '../../componentes/footer/Footer'
import Carrossel_noticias from '../../componentes/carrossel_noticias/Carrossel_noticias'


const Home = () => {
  return (
    <div className='flex'>
        {/* <Menu/> */}
        <Hero_section />
        <Carrossel/>
        <Carrossel_noticias/>
        <Footer />
    </div>
  )
}

export default Home