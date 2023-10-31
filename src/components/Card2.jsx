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
const MySwal = withReactContent(Swal)

const Card2 = () => {
    const notify = () => toast.error("Product removed");
    const { listBuy, emptyCart, eraseToCart } = useContext(ReduxContext)

    const totalCalculator = () => {
        return listBuy.reduce((total, item) => {
            const price = parseFloat(item.price);
            const qty = parseInt(item.qty);
            return total + price * qty;
        }, 0).toFixed(2);
    }

    const emptyCart2 = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            background: 'var(--back)',
            color: 'var(--white)',
            showCancelButton: true,
            confirmButtonColor: 'var(--gray)',
            cancelButtonColor: 'var(--red)',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire(
                    'Deleted!',
                    'Your products have been deleted.',
                    'success',
                    emptyCart()
                )
            }
        })
    }

    const buyNowPrint = () => {
        if (listBuy.length > 0) {
            emptyCart()
            print()
        }
    }

    return (
        <>
            <div className='container-link-to-home'>
                <Link to='/'><Button classB='primary-button' title='Return to home'></Button></Link>
            </div>
            {listBuy.map(item => (
                <div key={item.id} className='container-cart'>
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
                            <small className='small-cart'> {/*<span>-</span>*/} {item.qty} {/*<span>+</span>*/}</small>
                            <small className='small-cart'>{item.price}</small>
                        </div>
                    </div>
                    <div>
                        <button className='button-toast' onClick={notify}><button onClick={() => eraseToCart(item.id)} className='button-delete'><img className='img-delete' src={eliminar} alt="button erase" /></button></button>
                    </div>
                </div>
            ))}
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
                        <Button classB='primary-button' title='Buy Now' addToCart={buyNowPrint} />
                    </div>
                </div> :
                <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>There is nothing in the cart.</p>
            }
            <ToastContainer position="top-right" autoClose={500} theme='dark' hideProgressBar={false} />
        </>
    );
}

export default Card2;
