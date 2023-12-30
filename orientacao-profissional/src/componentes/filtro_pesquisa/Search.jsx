import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ search, setSearch , setResults}) => {

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/api/profissoes?search=${search}`);
            setResults(response.data); 
          
            console.log(response.data)
        } catch (error) {
            // console.error('Erro ao buscar dados:', error);
            setResults([]);
          }
        };
    
        // Chama a função de busca apenas se o comprimento da pesquisa for maior que 2 caracteres
        if (search.length > 2) {
          fetchData();
        }else{
            setResults([]);
        }
      }, [search, setResults]);

    return (
      <div className="search">
          {/* <h2>Pesquisar:</h2> */}
          <input className='input_hero' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."/>
      </div>
    )
  }
  
  export default Search