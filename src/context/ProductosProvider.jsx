import { createContext } from "react"

export const CartContext = createContext(null)

export const ProductosProvider = ({children}) => {

    const products = [
        {
            id: 1,
            titleProduct : 'BOX HELMET',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 35.4,
            imgProduct: 'https://www.svgrepo.com/show/193647/boxing-boxer.svg',
            altProduct: 'Helmet box',
            qty: 1
        }
        ,
        {
            id: 2,
            titleProduct : 'BOX GLOVES',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 43.2,
            imgProduct: 'https://www.svgrepo.com/show/530356/boxing.svg',
            altProduct: 'Box gloves',
            qty: 1
        }
        ,
        {
            id: 3,
            titleProduct : 'PUNCHING BAG',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 50.2,
            imgProduct: 'https://www.svgrepo.com/show/277581/boxing-sports-and-competition.svg',
            altProduct: 'Punching bag',
            qty: 1
        }
        ,
        {
            id: 4,
            titleProduct : 'KETTLEBELL AND DUMBBELL',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 70.1,
            imgProduct: 'https://www.svgrepo.com/show/277575/weightlifting-gym.svg',
            altProduct: 'ketbell and dumbbell',
            qty: 1
        }
        ,
        {
            id: 5,
            titleProduct : 'GLOVES AND PUNCHING BOX',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 73.2,
            imgProduct: 'https://www.svgrepo.com/show/281639/boxing-fight.svg',
            altProduct: 'gloves and punching box',
            qty: 1
        }
        ,
        {
            id: 6,
            titleProduct : 'PROFESSIONAL BOXING RING',
            descriptionProduct: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus explicabo velit modi libero.',
            priceProduct: 112.9,
            imgProduct: 'https://www.svgrepo.com/show/277579/boxing-ring-boxer.svg',
            altProduct: 'boxing ring',
            qty: 1
        }
    ]
    return (
        <CartContext.Provider value={{products}}>
            {children}
        </CartContext.Provider>
    )
}
export default ProductosProvider