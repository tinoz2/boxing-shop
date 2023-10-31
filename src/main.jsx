import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogicProvider from './context/NavbarContext.jsx'
import ProductosProvider from './context/ProductosProvider.jsx'
import { ReducerProvider } from './context/ReducerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LogicProvider>
      <ReducerProvider>
        <ProductosProvider>
          <Routes>
            <Route path='/' element={<ComponentsContainer />} />
            <Route path='/cart' element={<Card2 />} />
          </Routes>
        </ProductosProvider>
      </ReducerProvider>
    </LogicProvider>
  </BrowserRouter>
)