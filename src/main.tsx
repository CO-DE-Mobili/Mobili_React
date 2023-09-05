import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header/>
      <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
