import React, { useRef} from 'react';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro_profissao = () => {
    const notifySuccess = () => toast.success('Profissão cadastrada com sucesso!', {
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
    
    const ref = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nome_profissao: e.target.nome_profissao.value,
            descricao_curta: e.target.descricao_curta.value,
            descricao_longa: e.target.descricao_longa.value,
        }
        
        if(formData.nome_profissao == ""){
            notifyError();
        }else{
            if(formData.descricao_curta == ""){
                notifyError();
            }else{
                if(formData.descricao_longa == ""){
                    notifyError();
                }else{
                    await axios.post("http://localhost:3001/cadastro_profissoes", formData).then((response) => {
                            notifySuccess();
                            e.target.nome_profissao.value = ""
                            e.target.descricao_curta.value = ""
                            e.target.descricao_longa.value = ""
                            console.log(response)
                            }).catch(error => { 
                            alert("ERRO!")
                            console.log(error)
                    })
                }
            }
        } 
        
    }
  return (
    <div className="content">
        <form className="form-container" ref={ref} onSubmit={handleSubmit}>
        <div className="form-row">
            <span className='tituloCadastro'>Cadastro de profissão</span>
        </div>
        <div className="form-row">
            <label>Nome profissão*:</label>
            <input className='inputDados' type="text" name='nome_profissao' />
        </div>
        <div className="form-row">
            <label>Descrição curta*:</label>
            <input className='inputDados' type="text" name='descricao_curta' />
        </div>
        <div className="form-row">
            <label>Descrição longa*:</label>
            <textarea type="text" rows="4" name='descricao_longa'></textarea>
        </div>
        <div className="form-row">
            <label>Imagem "formato em png" *:</label>
            <input type="file" name="imagem" className="inputImg" multiple/>
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

export default Cadastro_profissao