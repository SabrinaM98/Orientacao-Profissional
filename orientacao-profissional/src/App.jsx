import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import { Redirect } from "react-router";

import './App.css'
import Home from './paginas/home/Home'
import Profissoes from "./paginas/profissoes/Profissoes";
import Login from "./paginas/login/Login";
import SobreNos from "./paginas/sobrenos/SobreNos";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profissoes" element={<Profissoes />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/sobreNos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
