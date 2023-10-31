import { createContext, useReducer } from "react"

export const ReduxContext = createContext(null)

const initialState = []

export const ReducerProvider = ({ children }) => {

    const buyReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] ADD TO CART':
                const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
                if (existingItemIndex !== -1) {
                    state[existingItemIndex].qty += action.payload.qty;
                } else {
                    state = [...state, action.payload]
                }
                return state
            case '[CART] ERASE TO CART':
                return state.filter(buy => buy.id !== action.payload);
            case '[CART] EMPTY CART':
                return initialState
            default:
                return state;
        }
    }

    const [listBuy, dispatch] = useReducer(buyReducer, initialState)

    const addToCart = (buy) => {
        const action = {
            type: '[CART] ADD TO CART',
            payload: buy
        }
        dispatch(action)
    }
    const eraseToCart = (id) => {
        const action = {
            type: '[CART] ERASE TO CART',
            payload: id
        }
        dispatch(action)
    }
    const emptyCart = (buy) => {
        const action = {
            type: '[CART] EMPTY CART',
            payload: buy
        }
        dispatch(action)
    }

    return (
        <ReduxContext.Provider value={{ listBuy, eraseToCart, addToCart, emptyCart }}>
            {children}
        </ReduxContext.Provider>
    )
}