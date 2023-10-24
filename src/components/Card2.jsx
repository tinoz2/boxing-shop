import Button from '../tools/Button.jsx'
import './card2.css'
import { Link } from 'react-router-dom'
import imgHelmet from '../img/helmet.svg'
import eliminar from '../img/delete.svg'

const Card2 = () => {
    return (
        <>
            <div className='container-link-to-home'>
                <Link to='/'><Button classB='primary-button' title='Return to home'></Button></Link>
            </div>
            <div className='container-cart'>
                <div>
                    <img className='img-cart' src={imgHelmet} alt='image helmet boxing' />
                </div>
                <div className='container-infos-cart'>
                    <div className='container-info-cart'>
                        <p className='p-cart'>Name:</p>
                        <p className='p-cart'>Amount:</p>
                        <p className='p-cart'>Price:</p>
                    </div>
                    <div className='container-info-cart'>
                        <small className='small-cart'>Helmet</small>
                        <small className='small-cart'>1</small>
                        <small className='small-cart'>150$</small>
                    </div>
                </div>
                <div>
                    <button className='button-delete'><img className='img-delete' src={eliminar} alt="" /></button>
                </div>
            </div>
            <div className='container-cart container-cart-2'>
                <div>
                    <Button classB='primary-button' title='Empty'/>
                </div>
                <div className='container-total'>
                    <p className='p-cart'>Total:</p>
                    <small className='small-cart'>250$</small>
                </div>
                <div>
                    <Button classB='primary-button' title='Buy Now'/>
                </div>
            </div>
        </>
    );
}

export default Card2;
