import React from 'react'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogicProvider from './context/NavbarContext.jsx'
import ProductosProvider from './context/ProductosProvider.jsx'
import { ReducerProvider } from './context/ReducerContext.jsx'

const App = () => {
    return (
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
}

export default App