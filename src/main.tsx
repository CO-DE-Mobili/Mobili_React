import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


//paginas

import Perfil_parceiro from './pages/perfil_parceiro';

import Editar_perfil_parceiro from './pages/editar_perfilParceiro';


import Gerenciar_perfil_parceiro from './pages/gerenciar_perfilParceiro';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propaganda_PerfilParceiro from './pages/Propaganda_PerfilParceiro';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Gerenciar_perfil_parceiro />} />
    <Route path='propaganda/perfilparceiro' element={<Propaganda_PerfilParceiro/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
