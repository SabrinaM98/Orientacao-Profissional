import React, { useRef} from 'react';
import axios  from 'axios';

const Cadastro_conhecimento = () => {
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

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


  return (
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
  )
}

export default Cadastro_conhecimento