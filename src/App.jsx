import React from 'react'
import ComponentsContainer from './ComponentsContainer.jsx'
import Card2 from './components/Card2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductosProvider from './context/ProductosProvider.jsx'
import { ReducerProvider } from './context/ReducerContext.jsx'
import LogicCartProvider from './context/LogicCart.jsx'
import ContainerLogicForm from './logic/ContainerLogicForm.jsx'

const App = () => {
    return (
        <BrowserRouter>
                <ReducerProvider>
                    <LogicCartProvider>
                        <ProductosProvider>
                            <Routes>
                                <Route path='/' element={<ComponentsContainer />} />
                                <Route path='/cart' element={<Card2 />} />
                                <Route path='/form' element={<ContainerLogicForm/>} />
                            </Routes>
                        </ProductosProvider>
                    </LogicCartProvider>
                </ReducerProvider>
        </BrowserRouter >
    )
}

export default App