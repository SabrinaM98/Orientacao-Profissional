import React, { useRef, useState, useEffect } from 'react';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vinculo_profissoes = () => {
    const [select1Data, setSelect1Data] = useState([]);
    const [select2Data, setSelect2Data] = useState([]);
    const ref = useRef();

    const notifySuccess = () => 
    
    toast.success('Informação vinculada com sucesso!', {
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

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cards_profissoes`);
        setSelect1Data(response.data);
        debugger
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/skills`);
        setSelect2Data(response.data);
        debugger
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
      fetchData2();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
          idprofissao: e.target.profissao.value,
          idskill: e.target.skill.value,
        }

        if(formData.idprofissao == "" || formData.idskill == ""){
            notifyError();
        }else{
          await axios.post("http://localhost:3001/vinculo_skill_profissao", formData).then((response) => {
                    notifySuccess();
                    e.target.profissao.value = ""
                    e.target.skill.value = ""
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
                <span className='tituloCadastro'>Profissão x Skill</span>
              </div>
              <div className="form-row">
                <label>Profissão*:</label>
                <select name="profissao" className='inputDados'>
                <option value="" selected>Selecione...</option>
                  {select1Data.map((data) => (
                    <option value={data.id}>{data.nome_profissao}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <label>Skill/Afinidade/Plano de Carreira*:</label>
                <select name="skill" className='inputDados'>
                <option value="" selected>Selecione...</option>
                  {select2Data.map((data) => (
                    <option value={data.id}>{data.skill}</option>
                  ))}
                </select>
              </div> 
              <div className="form-buttons">
                <button type='submit' className='btn'>Salvar</button>
                <button type="button" className='btn'>Cancelar</button>
                <ToastContainer
                        position="top-right"
                        autoClose={3000}
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
                        autoClose={3000}
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

export default Vinculo_profissoes