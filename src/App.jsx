import React from 'react'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogicProvider from './context/NavbarContext.jsx'
import ProductosProvider from './context/ProductosProvider.jsx'
import { ReducerProvider } from './context/ReducerContext.jsx'
import LogicCartProvider from './context/LogicCart.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <LogicProvider>
                <ReducerProvider>
                    <LogicCartProvider>
                        <ProductosProvider>
                            <Routes>
                                <Route path='/' element={<ComponentsContainer />} />
                                <Route path='/cart' element={<Card2 />} />
                            </Routes>
                        </ProductosProvider>
                    </LogicCartProvider>
                </ReducerProvider>
            </LogicProvider>
        </BrowserRouter >
    )
}

export default App