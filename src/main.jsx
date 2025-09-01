import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Auth from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      {/* <Route path='/login' element={<Auth/>}/> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
