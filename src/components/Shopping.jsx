import { useContext } from 'react'
import '../components/shopping.css'
import Card from '../tools/Card.jsx'
import { CartContext } from '../context/ProductosProvider.jsx'
import Loader from '../tools/Loader.jsx'

const Shopping = () => {

    const { products } = useContext(CartContext)
    return (
        <>
            <div id='container-shop2' className='container-shop'>
                <h2 className='h2-shopping'>Our products<span className='span'>.</span></h2>
                    {
                        products.length <= 0 ? <Loader /> :
                            <div className='container-cards'>
                                {
                                    products.map((products) => {
                                        return (
                                            <Card
                                                key={products.id}
                                                id={products.id}
                                                titleProduct={products.titleProduct}
                                                descriptionProduct={products.descriptionProduct}
                                                priceProduct={products.priceProduct + ' $'}
                                                imgProduct={products.imgProduct}
                                                altProduct={products.altProduct}
                                                qty={products.qty}
                                                nameProduct='Add to cart'
                                            />
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
        </>
    )
}

export default Shopping;