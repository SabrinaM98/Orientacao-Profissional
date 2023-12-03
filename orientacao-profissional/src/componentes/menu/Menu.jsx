import React from 'react'
import './Menu.css'
import logo from '../../../public/vite.svg'

const Menu = () => {
  return (
    <div className='containerMenu'>
        <img src={logo}/>
        <span>Nome do site</span>
    </div>
  )
}

export default Menu