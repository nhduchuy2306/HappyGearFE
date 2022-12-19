import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const LocalCart = JSON.parse(window.localStorage.getItem("localCart")) || []

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(LocalCart)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        window.localStorage.setItem("localCart", JSON.stringify(cart))
        let tempTotal = 0;
        cart.forEach((item)=>{
            tempTotal += (Number(item.price) * Number(item.quantity))
        })
        setTotal(tempTotal)
    },[cart])

    return <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider }