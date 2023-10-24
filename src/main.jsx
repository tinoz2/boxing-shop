import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComponentsContainer />} />
      <Route path='/cart' element={<Card2 />} />
    </Routes>
  </BrowserRouter>
)