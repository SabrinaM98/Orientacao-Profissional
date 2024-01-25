import React from 'react'
import './Login.css'
import { useState } from 'react';
import Admin from '../admin/Admin';
import axios from "axios";

function Login  ()  {
  //Variavel de autenticaão iniciada como false para cair na tela de login
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isTeste, setTeste] = useState(false);
  
  // Aqui pegamos as informações dos campos de login
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };


  // Funão para validar o login
  const handleLogin = async () => {
    setAuthenticated(true);
    // try{
    //   const resultado = await axios.get("http://localhost:3001/api/usuarios")
    //   const usuarios = resultado.data;

    //   const usuarioExiste = usuarios.some(
    //     (usu) => usu.nome === nome && usu.senha === senha
    //   );

    //   if(usuarioExiste){
    //     alert("Usuário autenticado!")
    //     console.log("Usuário autenticado!")
        
    //     setAuthenticated(true);
    //   }else{
    //     alert("Usuário não autenticado!")
    //     console.log("Usuário não autenticado!")
    //   }


    // } catch (error){
    //   console.error("Error ao obter o usuário:", error);
    // }    
  };

  // let  signinBtn = document.querySelector('.signinBtn');
  // let  signupBtn = document.querySelector('.signupBtn');
  // let  body = document.querySelector('bodyLogin');

  // let ativarBtn = function (){
  //   setTeste(false);
  // }
  // let registrarBtn = function (){
    
  //   setTeste(true);
  //   console.log(isTeste);
  // }

  return !isAuthenticated ? (
      <div className='flex-colum'>
      <div className='bodyAdmin'>
        <input placeholder='Nome' value={nome} onChange={handleNomeChange} className='caixa-de-texto'></input>
        <input placeholder='Senha' value={senha} onChange={handleSenhaChange} className='caixa-de-texto'></input>

        <button onClick={handleLogin}>Login</button>
        <button className='botose'>Cadastrar</button>
      </div>
    </div>
      
        ) : (
          <Admin />
        );
}

export default Login