import React, { useState } from 'react';
import './Hero_section.css'
import hero_secion_img from './hero-secion-img.png'
import Search from '../filtro_pesquisa/Search';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';

const Hero_section = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

  return (
    <div className='hero_section'>
        <Menu/>
        
        <div className='hero_container'>
            <div className='box_conteudo'>
                <div className='hero_conteudo'>
                    <div className='conteudo_titulo'>Explore <span>carreiras</span>, descubra <span>paixões</span> e alcance o <span>sucesso!</span></div>
                    <span></span>
                </div>
                <div>
                    <Search search={search} setSearch={setSearch} setResults={setResults} />
                    {search.length > 0 && (
                        <div className='resultado_pesquisa'>
                        {results.length > 0 ? (
                            results.map((result) => (
                            // <span key={result.id}>{result.nome_profissao}</span>
                            <Link className='resultSearch' to={`/profissoes?id=${result.id}`} style={{ textDecoration: 'none' , color: 'black', padding: '8px'}}>{result.nome_profissao}</Link>
                            ))
                        ) : (
                            <span>Nenhum resultado encontrado.</span>
                        )}
                        </div>
                    )}

                    {/* <input className='input_hero' placeholder='Digite suas paixões, interesses, habilidades ou profissão que deseja encontrar'></input> */}
                    {search.length == 0 ? (
                    <div className='opcoes_busca'>
                        <Link to={`/profissoes?id=${1}`} style={{ textDecoration: 'none' , color: '#023E8A', cursor: 'pointer'}}>Medicina</Link>
                        <Link to={`/profissoes?id=${2}`} style={{ textDecoration: 'none' , color: '#023E8A', cursor: 'pointer'}}>Engenharia</Link>
                        <Link to={`/profissoes?id=${3}`} style={{ textDecoration: 'none' , color: '#023E8A', cursor: 'pointer'}}>Tecnologia da Informação (TI)</Link>
                    </div>
                    ):(
                        <span></span>
                    )}
                </div>
            </div>

        </div>
        {/* <div className='containerIMG'> */}
            {/* <img src={hero_secion_img} className='img_hero'/> */}
        {/* </div> */}
    </div>
  )
}

export default Hero_section