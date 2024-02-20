import React, { useRef} from 'react';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro_noticias = () => {

    const notifySuccess = () => 
    
    toast.success('Notícia cadastrada com sucesso!', {
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
            titulo: e.target.titulo.value,
            descricao: e.target.descricao.value
        }
        
        if(formData.titulo == ""){
            notifyError();
        }else{
            if(formData.descricao == ""){
                notifyError();
            }else{
                    await axios.post("http://localhost:3001/cadastro_noticia", formData).then((response) => {
                            notifySuccess();
                            e.target.titulo.value = ""
                            e.target.descricao.value = ""
                            console.log(response)
                            }).catch(error => { 
                            alert("ERRO!")
                            console.log(error)
                    })
            }
        }
    }
  return (
    <div className="content">
        <form className="form-container" ref={ref} onSubmit={handleSubmit}>
        <div className="form-row">
            <span className='tituloCadastro'>Cadastro Noticias</span>
        </div>
        <div className="form-row">
            <label>Título*:</label>
            <input className='inputDados' type="text" name='titulo' />
        </div>
        <div className="form-row">
            <label>Descrição*:</label>
            <input className='inputDados' type="text" name='descricao' />
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

export default Cadastro_noticias