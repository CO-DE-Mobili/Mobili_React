import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import PerfilParceiro from "./pages/Perfil";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
	<Routes>
		<Route path='/perfil/parceiro' element={<PerfilParceiro/>}/>
	</Routes>
	</BrowserRouter>
  </React.StrictMode>,
)
