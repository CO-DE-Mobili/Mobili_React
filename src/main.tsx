import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
// import PerfilParceiro from "./pages/Perfil";
import Privacidade from "./pages/Privacidade";
import QuemSomos from './pages/QuemSomos';

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
	<Routes>
		{/* <Route path='/perfil/parceiro' element={<PerfilParceiro/>}/> */}
		<Route path='/quem_somos' element={<QuemSomos/>}/>
		<Route path='/privacidade' element={<Privacidade/>}/>
	</Routes>
	</BrowserRouter>
  </React.StrictMode>,
)
