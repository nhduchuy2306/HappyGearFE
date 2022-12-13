import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const LocalCart = window.localStorage.getItem("localCart")

    const [cart, setCart] = useState(
       (LocalCart === null || LocalCart === undefined) ? [{}] : JSON.parse(LocalCart)
    )

    return <CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider }