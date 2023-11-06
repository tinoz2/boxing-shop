import Home from './components/Home.jsx'
import Shop2 from './components/Shop2.jsx'
import Shopping from './components/Shopping.jsx'
import ContainerLogicNavbar from './logic/ContainerLogicNavbar.jsx'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ComponentsContainer = () => {
    return (
        <div className='container-wrapper'>
            <ContainerLogicNavbar />
            <div className='container-components'>
                <Home />
                <Shop2 />
                <Shopping />
                <ToastContainer position="top-right" autoClose={100} theme='dark' />
            </div>
        </div>
    )
}

export default ComponentsContainer