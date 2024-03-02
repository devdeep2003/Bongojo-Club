import React from 'react'
import ReactDOM from 'react-dom/client'
import Front from './Front.jsx'
import { BrowserRouter } from 'react-router-dom';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Front/> 
    </BrowserRouter>
  </React.StrictMode>,
)
