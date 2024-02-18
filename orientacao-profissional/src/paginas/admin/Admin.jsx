import React, { useState } from 'react';
import './Admin.css';

// import Cadastro_profissao from './cruds/cadastro_profissao';
import Cadastro_conhecimento from './cruds/Cadastro_conhecimento';
import Vinculo_profissoes from './cruds/Vinculo_profissoes';
// import Cadastro_noticias from './cruds/Cadastro_noticias';


const Admin = () => {

  const [selectedOption, setSelectedOption] = useState('0');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app-container">

      {/* MENU */}

      <div className="menu-container">
        <div
          className={`menu-option ${selectedOption === '0' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('0')}
        >
          Home
        </div>
        <div
          className={`menu-option ${selectedOption === '1' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('1')}
        >
          Cadastro de profissões
        </div>
        <div
          className={`menu-option ${selectedOption === '2' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('2')}
        >
          Cadastro de conhecimentos
        </div>
        <div
          className={`menu-option ${selectedOption === '3' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('3')}
        >
          Vinculo profissão x Skill
        </div>
        <div
          className={`menu-option ${selectedOption === '4' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('4')}
        >
          Cadastro de Notícias
        </div>
      </div>
      {/* FIM MENU */}

      {/* FORM OPCAO 1 */}
      <div className="content-container">
      {selectedOption === '0' && (

        <div>Tela principal admin</div>

        )}
        {selectedOption === '1' && (

            <Cadastro_profissao/>
          
        )}
        {/* FIM FORM OPCAO 1 */}

        {selectedOption === '2' && (
            <Cadastro_conhecimento />
        )}

        {selectedOption === '3' && (
           <Vinculo_profissoes />
        )}

        {selectedOption === '4' && (
          <Cadastro_noticias />
        )}
      </div>
    </div>
  )
}

export default Admin