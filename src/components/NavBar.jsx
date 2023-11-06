import './navbar.css'
import Button from '../tools/Button'
import icon from '../img/icon.svg'
import Social2 from './Social2.jsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import '../main.css'
import { ReduxContext } from '../context/ReducerContext'

const NavBar = ({ showNavbar, hideNavbar }) => {

    const { listBuy } = useContext(ReduxContext)
    const totalQty = listBuy.reduce((total, product) => total + product.qty, 0)

    return (
        <>
            <aside className='disabled'>
                <nav>
                    <div className='disabled2'>
                        <button className='button-open-close' onClick={hideNavbar}><svg className="svg-icon" viewBox="0 0 20 20">
                            <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg></button>
                    </div>
                    <div>
                        <img className='icon-boxing' src={icon} alt="icon boxing" />
                    </div>
                    <div className='container-buttons-nav'>
                        <Link to='/'><Button classB='primary-button button-nav' title='Home' /></Link>
                        <Link to='/'><Button classB='primary-button button-nav' title='Shop' /></Link>
                        <Link to='/cart' ><Button classB='primary-button button-nav' title={`Cart(${totalQty})`} /></Link>
                    </div>
                    <div>
                        <Social2 />
                    </div>
                </nav>
            </aside>
            < div id='container-buttons1' className='container-buttons1' >
                <button className='button-open-close' onClick={showNavbar}><svg className="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
                </svg></button>
            </div >
        </>
    )
}

export default NavBar