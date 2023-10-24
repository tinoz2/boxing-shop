import '../components/shopping.css'
import Card from '../tools/Card.jsx'
import imgCard from '../img/helmet.svg'

const Shopping = () => {
    return (
        <>
            <div id='container-shop2' className='container-shop'>
                <h2 className='h2-shopping'>Our products<span className='span'>.</span></h2>
                <div className='container-cards'>
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                    <Card titleProduct='BOX HELMET' descriptionProduct='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.' priceProduct='35.4 $' imgProduct={imgCard} altProduct='Helmet Box' nameProduct='Add to cart' />
                </div>
            </div>
        </>
    )
}

export default Shopping