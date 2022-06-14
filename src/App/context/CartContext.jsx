import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext)
}

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
  }
  const restoreCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return(
      cart.some((el) => id === el.id)
    )
  }

  const totalPrice = () => {
    return cart.reduce((acc, el) => acc += (el.price * el.quantity), 0)
  }

  const totalQuantity = () => {
    return cart.reduce((acc, el) => acc += el.quantity, 0)
  }

  const removeItem = (id) => {
    setCart( cart.filter((el) => el.id !== id) )
  }

  return (
    <CartContext.Provider value={
    { cart,
      addItem,
      isInCart,
      restoreCart,
      totalPrice,
      totalQuantity,
      removeItem }
    }>
      {children}
    </CartContext.Provider>
  )
}