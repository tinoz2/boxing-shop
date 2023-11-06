import Button from '../tools/Button.jsx'
import './card2.css'
import { Link } from 'react-router-dom'
import eliminar from '../img/delete.svg'
import { useContext } from 'react'
import { ReduxContext } from '../context/ReducerContext.jsx'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../tools/Loader.jsx'
import { LogicCartContext } from '../context/LogicCart.jsx'
const MySwal = withReactContent(Swal)

const Card2 = () => {
    const notify = () => toast.error("Product removed");
    const { listBuy, eraseToCart, } = useContext(ReduxContext)
    const { totalCalculator, emptyCart2} = useContext(LogicCartContext)

    return (
        <>
            <div className='container-link-to-home'>
                <Link to='/'><Button classB='primary-button' title='Return to home'></Button></Link>
            </div>
            {
                listBuy.length <= 0 ? <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>There is nothing in the cart.</p> :
                    listBuy.map(item => (
                        <div key={item.id} className='container-cart container-cart-hover'>
                            <div>
                                <img className='img-cart' src={item.img} alt='image helmet boxing' />
                            </div>
                            <div className='container-infos-cart'>
                                <div className='container-info-cart'>
                                    <p className='p-cart'>Name:</p>
                                    <p className='p-cart'>Amount:</p>
                                    <p className='p-cart'>Price:</p>
                                </div>
                                <div className='container-info-cart'>
                                    <small className='small-cart'>{item.title}</small>
                                    <small className='small-cart'>{item.qty}</small>
                                    <small className='small-cart'>{item.price}</small>
                                </div>
                            </div>
                            <div>
                                <button className='button-toast' onClick={notify}><button onClick={() => eraseToCart(item.id)} className='button-delete'><img className='img-delete' src={eliminar} alt="button erase" /></button></button>
                            </div>
                        </div>
                    ))
            }
            {listBuy.length >= 1 ?
                <div className='container-cart container-cart-2'>
                    <div>
                        <Button classB='primary-button' title='Empty' addToCart={emptyCart2} />
                    </div>
                    <div className='container-total'>
                        <p className='p-cart'>Total:</p>
                        <small className='small-cart'>$ {totalCalculator()}</small>
                    </div>
                    <div>
                        <Link to="/form">
                            <Button classB='primary-button' title='Buy Now' />
                        </Link>
                    </div>
                </div> :
                <Loader />
            }
            <ToastContainer position="top-right" autoClose={100} theme='dark' hideProgressBar={false} />
        </>
    );
}

export default Card2;
