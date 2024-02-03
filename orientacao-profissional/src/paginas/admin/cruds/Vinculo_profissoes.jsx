import React, { useRef} from 'react';
import axios  from 'axios';

const Vinculo_profissoes = () => {
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // function aqui 

    }
  return (
        <div className="content">
            <form className="form-container" ref={ref} onSubmit={handleSubmit}>
              <div className="form-row">
                <span className='tituloCadastro'>Profissão x Skill</span>
              </div>
              <div className="form-row">
                <label>ID profissão:</label>
                <select name="tipo" className='inputDados'>
                <option value="" selected>Selecione...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-row">
                <label>ID skill:</label>
                <select name="tipo" className='inputDados'>
                <option value="" selected>Selecione...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div> 
              <div className="form-buttons">
                <button type='submit' className='btn'>Salvar</button>
                <button type="button" className='btn'>Cancelar</button>
              </div>
            </form>
          </div>
  )
}

export default Vinculo_profissoes