import React, { useRef} from 'react';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro_conhecimento = () => {
    const ref = useRef();

    const notifySuccess = () => 
    
    toast.success('Afinidade/Skill cadastrada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const notifyError = () => 
    
    toast.error('Preencher todos os campos!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

          console.log('crud 2')
          const formData = {
            nome: e.target.nome.value,
            tipo: e.target.tipo.value,
          }

          if(formData.nome == "" || formData.tipo == ""){
              notifyError();
          }else{
            await axios.post("http://localhost:3001/cadastro_info_especifica", formData).then((response) => {
                      notifySuccess();
                      e.target.nome.value = ""
                      e.target.tipo.value = ""
                      console.log(response)
                    }).catch(error => { 
                      alert("ERRO!")
                      console.log(error)
                    }) 
          }
        }


  return (
    <div className="content">
    <form className="form-container" ref={ref} onSubmit={handleSubmit}>
      <div className="form-row">
        <span className='tituloCadastro'>Cadastro afinidades/skills/plano de carreira</span>
      </div>
      <div className="form-row">
        <label>Nome*:</label>
        <input className='inputDados' type="text" name='nome' />
      </div>
      <div className="form-row">
        <label>Tipo*:</label>
        <select name="tipo" className='inputDados'>
        <option value="" selected>Selecione...</option>
          <option value="1">Soft Skill</option>
          <option value="2">Hard Skill</option>
          <option value="3">Afinidade Específica</option>
          <option value="4">Retorno/Plano de Carreira</option>
        </select>
      </div> 
      <div className="form-buttons">
        <button type='submit' className='btn'>Salvar</button>
        <button type="button" className='btn'>Cancelar</button>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        <ToastContainer />
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        <ToastContainer />
      </div>
    </form>
  </div>
  )
}

export default Cadastro_conhecimento