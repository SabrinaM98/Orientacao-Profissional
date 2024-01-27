import React, { useRef, useState } from 'react';
import './Admin.css';
import axios  from 'axios';

const Admin = () => {
  const ref = useRef();
  const [selectedOption, setSelectedOption] = useState('0');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    if(selectedOption == '0'){
      console.log('crud 1')
      const formData = {
        nome_profissao: e.target.nome_profissao.value,
        descricao_curta: e.target.descricao_curta.value,
        descricao_longa: e.target.descricao_longa.value,
      }
      await axios.post("http://localhost:3001/cadastro_profissoes", formData).then((response) => {
              alert("Profissão cadastrada com sucesso!")
              e.target.nome_profissao.value = ""
              e.target.descricao_curta.value = ""
              e.target.descricao_longa.value = ""
              console.log(response)
            }).catch(error => { 
              alert("ERRO!")
              console.log(error)
            }) 
    }

    if(selectedOption == '1'){
      console.log('crud 2')
      const formData = {
        nome: e.target.nome.value,
        tipo: e.target.tipo.value,
      }
      await axios.post("http://localhost:3001/cadastro_info_especifica", formData).then((response) => {
              alert("Informação cadastrada com sucesso!")
              e.target.nome.value = ""
              e.target.tipo.value = ""
              console.log(response)
            }).catch(error => { 
              alert("ERRO!")
              console.log(error)
            }) 
    }


    // await...
  }

  return (
    <div className="app-container">

      {/* MENU */}

      <div className="menu-container">
        <div
          className={`menu-option ${selectedOption === '0' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('0')}
        >
          Cadastro de profissões
        </div>
        <div
          className={`menu-option ${selectedOption === '1' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('1')}
        >
          Cadastro de conhecimentos
        </div>
      </div>
      {/* FIM MENU */}

      {/* FORM OPCAO 1 */}
      <div className="content-container">
        {selectedOption === '0' && (
          <div className="content">
            <form className="form-container" ref={ref} onSubmit={handleSubmit}>
              <div className="form-row">
                <span className='tituloCadastro'>Cadastro de profissão</span>
              </div>
              <div className="form-row">
                <label>Nome profissão:</label>
                <input className='inputDados' type="text" name='nome_profissao' />
              </div>
              <div className="form-row">
                <label>Descrição curta:</label>
                <input className='inputDados' type="text" name='descricao_curta' />
              </div>
              <div className="form-row">
                <label>Descrição longa:</label>
                <textarea type="text" rows="4" name='descricao_longa'></textarea>
              </div>
              <div className="form-row">
                <label>Imagem "formato em png":</label>
                <input type="file" name="imagem" className="inputImg" multiple/>
              </div>
              
              <div className="form-buttons">
                <button type='submit' className='btn'>Salvar</button>
                <button type="button" className='btn'>Cancelar</button>
              </div>
            </form>
          </div>
        )}
        {/* FIM FORM OPCAO 1 */}

        {selectedOption === '1' && (
          <div className="content">
            <form className="form-container" ref={ref} onSubmit={handleSubmit}>
              <div className="form-row">
                <span className='tituloCadastro'>Cadastro conhecimentos/skills</span>
              </div>
              <div className="form-row">
                <label>Nome skill:</label>
                <input className='inputDados' type="text" name='nome' />
              </div>
              <div className="form-row">
                <label>Tipo da skill:</label>
                <select name="tipo" className='inputDados'>
                <option value="" selected>Selecione...</option>
                  <option value="1">Soft Skill</option>
                  <option value="2">Hard Skill</option>
                  <option value="3">Conhecimentos</option>
                </select>
              </div> 
              <div className="form-buttons">
                <button type='submit' className='btn'>Salvar</button>
                <button type="button" className='btn'>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin