import React from 'react'
import './Login.css'
import { useState } from 'react';
import Admin from '../admin/Admin';
import axios from "axios";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/FireBaseConfig';

function Login  ()  {
  //Variavel de autenticaão iniciada como false para cair na tela de login
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isTeste, setTeste] = useState(false);

  // Aqui pegamos as informações dos campos de login
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  //Variaveis da funçao de login
  const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
  
  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  function handleSingnIn() {
    signInWithEmailAndPassword(nome, senha);

    if (loading) {
      return <p>Carregando...</p>
    }
  }

  return !error ? (
      <div className='flex-colum'>
      <div className='bodyAdmin'>
        <span>Admin Guia Profissões</span>
        <input placeholder='Usuario' value={nome} onChange={handleNomeChange} className='caixa-de-texto'></input>
        <input placeholder='Senha' type='password' value={senha} onChange={handleSenhaChange} className='caixa-de-texto'></input>
        <div className='btns'>
          <button onClick={handleSingnIn}>Login</button>
        </div>
      </div>
    </div>

        ) : (
          <Admin />
        );
}

export default Login