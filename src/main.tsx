import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import CadastroUsuario from './pages/Cadastro/Usuario'
import UsuarioEtapa2 from './pages/Cadastro/UsuarioEtapa2'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/usuario/etapa1" element={<CadastroUsuario/>}/>
        <Route path="/usuario/etapa2"element={<UsuarioEtapa2/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
