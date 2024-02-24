import React, { useRef, useState , useEffect } from 'react';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './table.css'

const Cadastro_profissao = () => {
    const [profissoes, setProfissoes] = useState([]);

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
            descricao_curso: e.target.descricao_curso.value,
            duracao: e.target.duracao.value,
            ambiente: e.target.ambiente.value,
            rotina: e.target.rotina.value,
            atividades: e.target.atividades.value,
            link_video: "https://www.youtube.com/embed/" + e.target.link.value.slice(32,50),
            imagem: e.target.imagem.value.slice(12,100),
        }
        
        if(formData.nome_profissao == "" || formData.descricao_curta == "" || formData.descricao_longa == "" || formData.ambiente == "" || formData.rotina == "" || formData.atividades == "" || formData.link == "" || formData.imagem == ""){
            notifyError();
            
        }else{

            await axios.post("http://localhost:3001/cadastro_profissoes", formData).then((response) => {
                    notifySuccess();
                    e.target.nome_profissao.value = ""
                    e.target.descricao_curta.value = ""
                    e.target.descricao_longa.value = ""
                    e.target.descricao_curso.value = ""
                    e.target.duracao.value = ""
                    e.target.ambiente.value = ""
                    e.target.rotina.value = ""
                    e.target.atividades.value = ""
                    e.target.link.value = ""
                    e.target.imagem.value = ""
                    console.log(response)
                    }).catch(error => { 
                    alert("ERRO!")
                    console.log(error)
            })
 
        } 
    }

    const fetchData = async () => {
        debugger;
        try {
          const response = await axios.get(`http://localhost:3001/cards_profissoes`);
          setProfissoes(response.data);

          debugger
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div className="content">
            <span>Profissões cadastradas</span>
            <table >
                <thead>
                    <tr className="thead">
                        <td>Nome profissão</td>
                        <td>Descrição curta</td>
                    </tr>
                </thead>
                <tbody>
                    {profissoes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nome_profissao}</td>
                            <td>{item.descricao_curta}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 


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
            <label>Descrição do Curso*:</label>
            <textarea type="text" rows="4" name='descricao_curso'></textarea>
        </div>
        <div className="form-row">
            <label>Duração do curso*:</label>
            <input className='inputDados' type="text" name='duracao' />
        </div>
        <div className="form-row">
            <label>Descrição do ambiente de trabalho*:</label>
            <textarea type="text" rows="4" name='ambiente'></textarea>
        </div>
        <div className="form-row">
            <label>Descrição da rotina de trabalho*:</label>
            <textarea type="text" rows="4" name='rotina'></textarea>
        </div>
        <div className="form-row">
            <label>Descrição das atividades do dia a dia da profissão*:</label>
            <textarea type="text" rows="4" name='atividades'></textarea>
        </div>
        <div className="form-row">
            <label>Link de vídeo do youtube*:</label>
            <input className='inputDados' type="text" name='link' />
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