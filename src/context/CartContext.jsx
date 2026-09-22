import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(item, quantity) {
    if (quantity <= 0) {
      return
    }

    setCart((previousCart) => {
      const existingItem = previousCart.find((product) => product.id === item.id)

      if (existingItem) {
        return previousCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      }

      return [...previousCart, { ...item, quantity }]
    })
  }

  function removeItem(itemId) {
    setCart((previousCart) => previousCart.filter((item) => item.id !== itemId))
  }

  function clear() {
    setCart([])
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id)
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
