import './index.css'
import Footer from './components/Footer'



import React from 'react'
import ReactDOM from 'react-dom/client'


//pages


//componentes
import Home from "./pages/Home";

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
           
				<Routes>{/*Indica uma lista de rotas*/}
					<Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
				</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
