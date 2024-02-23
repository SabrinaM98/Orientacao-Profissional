import React from 'react'
import './SobreNos.css'
// import imageQuemsomos from '../../componentes/img/quemSomos.jpg'
import Menu from '../../componentes/menu/Menu'
import Footer from '../../componentes/footer/Footer'


const SobreNos = () => {
  return (
    <div>
      <Menu showHome={true} showCarreira={false} showNoticias={false} showConcursos={false} showSobreNos={false} backgroundColor='var(--primary)'/>
      <div className='container-sobreNos'>
        <div className='colum'>
          <h1 className='titulo'>Sobre nos</h1>
          <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat sint vel porro neque minima</p>
          <hr className='linha'></hr>
        </div>
          <div className='imgProf'>
            <div className='imag'></div>
            {/* <img className='imag' src={imageQuemsomos}/> */}
          </div>
        <div className='padd'>
        <h2 className='titulo2'>Dolore Amet Consequat</h2>
          <p className='descricao2'>Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!</p>
          <h2 className='titulo2'>Sed Magna Ormare</h2>
          <p className='descricao2'>Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          Quia, provident ad. Doloremque totam ab veritatis nobis 
          quidem in amet debitis maxime reprehenderit quam, ducimus tempora
          maiores nemo nihil quo corporis!</p> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SobreNos