import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './paginas/home/Home'
import Profissoes from "./paginas/profissoes/Profissoes";

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profissoes" element={<Profissoes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
