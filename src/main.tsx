import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages
import CadastroUsuario from './pages/Cadastro/Usuario'
import UsuarioEtapa2 from './pages/Cadastro/UsuarioEtapa2'
import RedefinirSenha from "./pages/RedefinirSenha";
import Privacidade from "./pages/Privacidade";
import QuemSomos from './pages/QuemSomos';
import Login from './pages/Login'
import Home from "./pages/Home";
import Suporte from './pages/Suporte'

//componentes

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes> {/*Indica uma lista de rotas*/}
				{/* Cadastro */}
				<Route path="/cadastro/usuario" element={<CadastroUsuario/>}/>
				<Route path="/cadastro/usuario/etapa2"element={<UsuarioEtapa2/>}/>
				<Route path="/redefinir/senha"element={<RedefinirSenha/>}/>
				<Route path='/suporte'element={<Suporte/>}/>

				<Route path='/quem_somos' element={<QuemSomos/>}/>
				<Route path='/privacidade' element={<Privacidade/>}/>

				<Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
