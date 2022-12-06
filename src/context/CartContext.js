import { createContext, useState } from "react";

const CartContext = createContext({})

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export {CartContext, CartProvider}