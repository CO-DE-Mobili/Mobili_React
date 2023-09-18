import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes  } from "react-router-dom";

//Pages
import Contato from "./pages/Contato/";
import CadastroUsuario from './pages/Cadastro/Usuario'
import UsuarioEtapa2 from './pages/Cadastro/UsuarioEtapa2'
import RedefinirSenha from "./pages/RedefinirSenha";
import Privacidade from "./pages/Privacidade";
import QuemSomos from './pages/QuemSomos';
import Login from './pages/Login'
import Home from "./pages/Home";
import Suporte from './pages/Suporte'

import Perfil_parceiro from './pages/Perfil_Parceiro';
import Editar_perfil_parceiro from './pages/PerfilParceiro_Editar';
import Propaganda_PerfilParceiro from './pages/Propaganda_PerfilParceiro';
import Gerenciar_perfil_parceiro from './pages/PerfilParceiro_Gerenciar'
import CadastroEmpresa from './pages/CadastroEmpresa'

//componentes

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes> {/*Indica uma lista de rotas*/}
				<Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}

				{/* Cadastro Usuario */}
				<Route path="/cadastro/usuario" element={<CadastroUsuario/>}/>
				<Route path="/cadastro/usuario/etapa2"element={<UsuarioEtapa2/>}/>
				<Route path="/redefinir/senha"element={<RedefinirSenha/>}/>
				<Route path='/suporte'element={<Suporte/>}/>
				<Route path='/login' element={<Login />} />

				{/* Cadastro Empresa */}
				<Route path='/cadastro/empresa' element={<CadastroEmpresa/>}/>

				{/* Gerais */}
				<Route path='/quem_somos' element={<QuemSomos/>}/>
				<Route path='/privacidade' element={<Privacidade/>}/>
				{/* <Route path='/contato' element={<Contato />} /> */}

				{/* Perfil */}
				<Route path='/perfil_parceiro/gerenciamento' element={<Gerenciar_perfil_parceiro />} />
				<Route path='/perfil_parceiro/propaganda' element={<Propaganda_PerfilParceiro/>}/>
				<Route path='/perfil_parceiro/editar' element={<Editar_perfil_parceiro/>}/>
				<Route path='/perfil_parceiro/' element={<Perfil_parceiro/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
