import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogicProvider from './context/NavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LogicProvider>
      <Routes>
        <Route path='/' element={<ComponentsContainer />} />
        <Route path='/cart' element={<Card2 />} />
      </Routes>
    </LogicProvider>
  </BrowserRouter>
)