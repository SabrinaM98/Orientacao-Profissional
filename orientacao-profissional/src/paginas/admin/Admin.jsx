import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState('opcao1');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app-container">

      {/* MENU */}

      <div className="menu-container">
        <div
          className={`menu-option ${selectedOption === 'opcao1' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('opcao1')}
        >
          Opção 1
        </div>
        <div
          className={`menu-option ${selectedOption === 'opcao2' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('opcao2')}
        >
          Opção 2
        </div>
      </div>
      {/* FIM MENU */}

      {/* FORM OPCAO 1 */}
      <div className="content-container">
        {selectedOption === 'opcao1' && (
          <div className="content">
            <form className="form-container">
              <div className="form-row">
                <label htmlFor="input1">Campo 1:</label>
                <input type="text" id="input1" />
              </div>
              <div className="form-row">
                <label htmlFor="input2">Campo 2:</label>
                <input type="text" id="input2" />
              </div>
              <div className="form-row">
                <label htmlFor="input3">Campo 3:</label>
                <input type="text" id="input3" />
              </div>
              <div className="form-row">
                <label htmlFor="input4">Campo 4:</label>
                <input type="text" id="input4" />
              </div>
              <div className="form-row">
                <label htmlFor="input5">Campo 5:</label>
                <input type="text" id="input5" />
              </div>
              <div className="form-buttons">
                <button type="button">Salvar</button>
                <button type="button">Cancelar</button>
              </div>
            </form>
          </div>
        )}
        {/* FIM FORM OPCAO 1 */}

        {selectedOption === 'opcao2' && (
          <div className="content">
            <p>Conteúdo da Opção 2</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin