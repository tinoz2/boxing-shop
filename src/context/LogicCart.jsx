import { createContext, useContext } from "react"
import { ReduxContext } from "./ReducerContext"
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

export const LogicCartContext = createContext(null)

export const LogicCartProvider = ({ children }) => {

    const { listBuy, emptyCart } = useContext(ReduxContext)

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
            print()
            setTimeout(() => {
                emptyCart();
            }, 400)
        }
    }

    return (
        <LogicCartContext.Provider value={{ buyNowPrint, emptyCart2, totalCalculator }}>
            {children}
        </LogicCartContext.Provider>
    )
}
export default LogicCartProvider