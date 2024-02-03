import React, { useRef} from 'react';
import axios  from 'axios';

const Cadastro_noticias = () => {
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // function aqui 

    }
  return (
    <div className="content">
        <form className="form-container" ref={ref} onSubmit={handleSubmit}>
        <div className="form-row">
            <span className='tituloCadastro'>Cadastro Noticias</span>
        </div>
        <div className="form-row">
            <label>Titulo:</label>
            <input className='inputDados' type="text" name='nome_profissao' />
        </div>
        <div className="form-row">
            <label>Descrição:</label>
            <input className='inputDados' type="text" name='descricao_curta' />
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

export default Cadastro_noticias