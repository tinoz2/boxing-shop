import { createContext } from "react"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const CartContext = createContext(null)

export const ProductosProvider = ({ children }) => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "products")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
    }, [])

    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    )
}
export default ProductosProvider