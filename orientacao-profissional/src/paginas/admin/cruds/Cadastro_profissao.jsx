import React, { useRef} from 'react';
import axios  from 'axios';

const Cadastro_profissao = () => {
    const ref = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

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
  return (
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
  )
}

export default Cadastro_profissao