import React from 'react';
import './Login.css';
import { useState } from 'react';
import Admin from '../admin/Admin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/FireBaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Login() {
  // Aqui pegamos as informações dos campos de login
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  // Variaveis da função de login
  const [ signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword(auth);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  function handleSignIn() {
    signInWithEmailAndPassword(nome, senha);
  }

  return (
    <>
      {!user && (
      <div className='flex-colum'>
        <div className='bodyAdmin'>
          <span>Admin Guia Profissões</span>

              <input placeholder='Usuário' value={nome} onChange={handleNomeChange} className='caixa-de-texto' />
              <input placeholder='Senha' type='password' value={senha} onChange={handleSenhaChange} className='caixa-de-texto' />
              <div className='btns'>
                <button onClick={handleSignIn}>Login</button>
                {loading && <Box sx={{ display: 'flex' }}> <CircularProgress/> </Box>}
                {error && <p>Ocorreu um erro durante o login. Tente novamente.</p>}
              </div>
        </div>
      </div>
      )}
      {user && <Admin />}
      </>
  );

}

export default Login;