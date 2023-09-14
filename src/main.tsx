import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


//paginas

import Perfil_parceiro from './pages/Perfil_Parceiro';

import Editar_perfil_parceiro from './pages/PerfilParceiro_Editar';


import Gerenciar_perfil_parceiro from './pages/PerfilParceiro_Gerenciar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propaganda_PerfilParceiro from './pages/Propaganda_PerfilParceiro';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/perfil_parceiro/gerenciamento' element={<Gerenciar_perfil_parceiro />} />
        <Route path='/perfil_parceiro/propaganda' element={<Propaganda_PerfilParceiro/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
