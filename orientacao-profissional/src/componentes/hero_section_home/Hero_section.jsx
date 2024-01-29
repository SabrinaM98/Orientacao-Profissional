import React, { useState } from 'react';
import './Hero_section.css'
import hero_secion_img from './hero-secion-img.png'
import Search from '../filtro_pesquisa/Search';

const Hero_section = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

  return (
    <div className='hero_section'>
        <div className='containerIMG'>
            <img src={hero_secion_img} className='img_hero'/>
        </div>
        
        <div className='hero_container'>
            <div className='hero_conteudo'>
                <span className='conteudo_titulo'>Explorar Carreiras</span>
                <span>texto copy de descrição</span>
            </div>
            <div>
                <Search search={search} setSearch={setSearch} setResults={setResults} />
                {search.length > 0 && (
                    <div className='resultado_pesquisa'>
                    {results.length > 0 ? (
                        results.map((result) => (
                        <span key={result.id}>{result.nome_profissao}</span>
                        ))
                    ) : (
                        <span>Nenhum resultado encontrado.</span>
                    )}
                    </div>
                )}

                {/* <input className='input_hero' placeholder='Digite suas paixões, interesses, habilidades ou profissão que deseja encontrar'></input> */}
                {search.length == 0 ? (
                <div className='opcoes_busca'>
                    <a>Medicina</a>
                    <a>Engenharia</a>
                    <a>Tecnologia da Informação (TI)</a>
                </div>
                ):(
                    <span></span>
                )}
            </div>
        </div>
    </div>
  )
}

export default Hero_section