import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


//paginas

import Perfil_parceiro from './pages/perfil_parceiro';

import Editar_perfil_parceiro from './pages/editar_perfilParceiro';


import PerfilAdm_Gerenciamnto from './pages/PerfilAdm_Gerenciamento';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propaganda_PerfilParceiro from './pages/PerfilAdm_Gerenciamento';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/perfil/adm/gerenciamento' element={<PerfilAdm_Gerenciamnto />} />
    <Route path='propaganda/perfilparceiro' element={<Perfil_parceiro/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
