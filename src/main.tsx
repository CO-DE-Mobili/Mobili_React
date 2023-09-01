import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import Contato from "./pages/Contato/";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
